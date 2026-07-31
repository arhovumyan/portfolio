# Generates the small copies the gallery grids load, so a card doesn't pull a
# 10 MB phone photo just to fill a 300px tile. The lightbox still opens the
# full-resolution original.
#
#   powershell -ExecutionPolicy Bypass -File scripts/make-thumbs.ps1
#
# Re-run it after dropping new photos into any public/images/<program> folder;
# existing thumbnails are simply overwritten.

param(
  [string[]] $Folders = @("lspace", "astra", "ng", "avl"),
  [int] $MaxWidth = 1400,
  [int] $Quality = 82
)

Add-Type -AssemblyName System.Drawing

$root = Join-Path $PSScriptRoot "..\public\images"
$jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() |
  Where-Object { $_.MimeType -eq 'image/jpeg' }

foreach ($folder in $Folders) {
  $dir = Join-Path $root $folder
  if (-not (Test-Path $dir)) { continue }

  $out = Join-Path $dir "thumbs"
  if (-not (Test-Path $out)) { New-Item -ItemType Directory $out | Out-Null }

  Get-ChildItem $dir -File |
    Where-Object { $_.Extension -match '^\.(jpg|jpeg|png)$' } |
    ForEach-Object {
      $img = [System.Drawing.Image]::FromFile($_.FullName)
      $ratio = [Math]::Min(1.0, $MaxWidth / $img.Width)
      $w = [int]($img.Width * $ratio)
      $h = [int]($img.Height * $ratio)

      $bmp = New-Object System.Drawing.Bitmap($w, $h)
      $g = [System.Drawing.Graphics]::FromImage($bmp)
      $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
      $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
      $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
      # JPEG has no alpha, so transparent PNGs land on black to match the page.
      $g.Clear([System.Drawing.Color]::Black)
      $g.DrawImage($img, 0, 0, $w, $h)

      $ep = New-Object System.Drawing.Imaging.EncoderParameters(1)
      $ep.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter(
        [System.Drawing.Imaging.Encoder]::Quality, $Quality)

      $dest = Join-Path $out ($_.BaseName + ".jpg")
      $bmp.Save($dest, $jpegCodec, $ep)

      $g.Dispose(); $bmp.Dispose(); $img.Dispose()
      "{0,-34} {1,5}x{2,-5} -> {3} KB" -f $_.Name, $w, $h, [int]((Get-Item $dest).Length / 1KB)
    }
}
