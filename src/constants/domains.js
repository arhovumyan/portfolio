// Data behind the two front-page buttons (Software / Hardware).
//
// Each domain gets its own page at #/software and #/hardware, built from the
// sections below. To add a project, drop an object into the matching
// `projects` array:
//
//   {
//     title: "Project name",
//     description: "One or two sentences about what it does.",
//     tags: ["React", "Node"],        // optional
//     image: "/images/project.png",   // optional, lives in /public/images
//     link: "https://...",            // optional, omit for no button
//     linkLabel: "Take a look",       // optional, defaults to "Take a look"
//     links: [{ label, href }],       // optional, use instead of `link` when a
//                                     // project needs more than one button
//     gallery: galleries.astra,       // optional photo/video strip on the card
//     banner: { href, image, ... },   // optional link preview for a live site
//   }
//
// Links open in a new tab, so a `href` pointing at a file in /public (a KiCad
// plot exported to PDF, say) opens the way the resume link does.
//
// Galleries are NOT hand-written — `galleries.<folder>` is generated from the
// contents of public/images/<folder> by scripts/generate-galleries.mjs. Drop a
// photo or a video into public/images/astra (or lspace, ng, avl, circuits) and
// it appears on the site by itself; order and captions come from that folder's
// gallery.json. Clicking an item opens the file in a new browser tab, so the
// full-size photo or clip is the browser's problem, not the page's.
//
// Section artwork lives in /public/images/sections. Swap any `image` for a
// photo of your own board/aircraft/etc. whenever you have one — the layout
// crops to a 16:9 frame.
//
// Sections with an empty `projects` array render a quiet placeholder card
// instead, so the layout never looks broken while things are in progress.

import { galleries } from "./galleries.generated.js";

const softwareDomain = {
  id: "software",
  label: "Software",
  // `short` sits under the front-page button, `tagline` above the page title.
  short: "Web, apps, ML, and algorithms",
  tagline: "Web, machine learning, and the algorithms underneath",
  icon: "/images/sections/software.svg",
  description:
    "Things I build with a keyboard — products people use, models that learn, and the data structures holding it all together.",
  sections: [
    {
      id: "web-development",
      title: "Web Development",
      image: "/images/sections/web-development.svg",
      blurb: "Full-stack products, end to end — auth, real-time data, deploys.",
      projects: [
        {
          title: "AI Assistant",
          description:
            "MERN companion app with Google OAuth, Cloudinary media pipeline, React Query state, and real-time chat. The biggest one so far.",
          tags: ["React", "Express", "MongoDB", "TypeScript"],
          image: "/images/aiCompanion.png",
          link: "https://medusa-vrfriendly.vercel.app/",
        },
        {
          title: "Interview App",
          description:
            "Interview prep platform on Next.js 15 with server actions, Firestore, and Firebase auth for secure user sessions.",
          tags: ["Next.js", "TypeScript", "Firebase", "Tailwind"],
          image: "/images/interview.png",
          link: "https://interview-three-phi.vercel.app/",
        },
        {
          title: "Real-Time Chat Application",
          description:
            "Socket.IO messaging with sub-100ms delivery, JWT auth, online presence tracking, and image sharing through Cloudinary.",
          tags: ["React 19", "Socket.IO", "Node.js", "Zustand"],
          image: "/images/websockets.png",
          link: "https://chat-with-webhooks.onrender.com/login",
        },
        {
          title: "FishLens",
          description:
            "Point it at any public GitHub repo and it explains the codebase back to you — tree-sitter parses the files, Gemini writes the walkthrough at the experience level you pick, and the cross-file call graph renders as Mermaid diagrams, all wrapped in a Windows 95 skin.",
          tags: ["Next.js", "TypeScript", "tree-sitter", "Gemini"],
          links: [
            { label: "Live site", href: "https://glitchhackaton-production.up.railway.app/" },
            { label: "GitHub", href: "https://github.com/arhovumyan/fishlens" },
          ],
        },
        {
          title: "Crypto Trading Automation",
          description:
            "A TypeScript and Node system that trades crypto on a DEX without babysitting — a sniper execution path, copy and mirror trading off tracked wallets, and PostgreSQL-backed session monitoring, shipped in Docker.",
          tags: ["TypeScript", "Node.js", "PostgreSQL", "Docker"],
          link: "https://github.com/arhovumyan/crypto-stuff",
          linkLabel: "GitHub",
        },
      ],
    },
    // Apps, Machine Learning, and Data Structures & Algorithms used to be three
    // separate sections; they're one now, holding everything that was in them.
    {
      id: "software-ml-dsa",
      title: "Software, Machine Learning, DSA, etc.",
      image: "/images/sections/machine-learning.svg",
      blurb:
        "Apps, models and the pipelines feeding them, and the fundamentals underneath.",
      projects: [
        {
          title: "Image Classification & Object Detection",
          description:
            "A notebook-driven classifier and detector trained on a custom shapes-and-colors dataset, taken from labelling through training runs to a written-up set of results.",
          tags: ["Python", "Jupyter", "Computer Vision"],
          link: "https://github.com/arhovumyan/image-classification-and-object-detection",
          linkLabel: "GitHub",
        },
        {
          title: "Object Detection Pipeline",
          description:
            "A YOLO detection pipeline packaged as an installable Python module, using SAHI sliced inference so small targets still get picked up in large aerial frames.",
          tags: ["Python", "YOLO", "SAHI"],
          link: "https://github.com/arhovumyan/Object-detection-pipeline",
          linkLabel: "GitHub",
        },
        {
          title: "Image Processing Pipeline",
          description:
            "Drives SIYI gimbal cameras through their SDK behind an internal server, so the aircraft's vision stack can request captures and pull frames on demand mid-flight.",
          tags: ["SIYI SDK", "Camera control", "Vision"],
          link: "https://github.com/arhovumyan/Image-processing-pipeline",
          linkLabel: "GitHub",
        },
        {
          title: "DSA Practice",
          description:
            "Data structures and algorithms worked through one implementation at a time — matrix problems, string manipulation, and tree structures, kept as a running reference.",
          tags: ["Algorithms", "Data Structures"],
          link: "https://github.com/arhovumyan/DSA",
          linkLabel: "GitHub",
        },
      ],
    },
  ],
};

const hardwareDomain = {
  id: "hardware",
  label: "Hardware",
  short: "Circuits, firmware, and machines",
  tagline: "Circuits, firmware, and machines that move",
  icon: "/images/sections/hardware.svg",
  description:
    "Things I build with a soldering iron and an oscilloscope nearby — boards, the firmware on them, and the vehicles they end up inside.",
  sections: [
    // Hidden until there's work to put in it — uncomment to bring it back.
    // {
    //   id: "embedded-firmware",
    //   title: "Embedded Systems & Firmware",
    //   image: "/images/sections/embedded-firmware.svg",
    //   blurb: "Bare-metal and RTOS work — drivers, protocols, and control loops.",
    //   projects: [],
    // },
    {
      id: "aircrafts-ground-machines",
      title: "Aircrafts & Ground Machines",
      image: "/images/sections/aircrafts-ground-machines.svg",
      blurb: "Airframes, rovers, and the avionics that keep them pointed right.",
      // One card per program — L'SPACE, ASTRA, NGCP, and the AV Lab — each with
      // its own photo/video strip from /public/images/<program>.
      projects: [
        {
          title: "L'SPACE — Robotic Lunar Rover",
          description:
            "NASA's L'SPACE academy, designing a rover that drives into a permanently shadowed lunar crater to look for water ice. My side is the Communication and Data Handling architecture: the link budget back to a relay satellite, the flight software, and surviving 14+ days without sunlight.",
          tags: ["NASA L'SPACE", "C&DH", "F´", "Mission design"],
          gallery: galleries.lspace,
        },
        {
          title: "ASTRA — Autonomous Hexacopter",
          description:
            "Lockheed Martin sponsored hexacopter. I lead software: the ROS2 nodes that fly the mission end to end — area mapping, object detection at 0.99 mAP@0.5, 4K image processing, and a servo payload drop over the target.",
          tags: ["ROS2", "Computer Vision", "Jetson", "Lockheed Martin"],
          gallery: galleries.astra,
          // Link preview of the team site's landing page — the copy and hero
          // photo are the site's own, so the card shows what you're clicking
          // into before you click it.
          banner: {
            href: "https://broncoastra.us/",
            url: "broncoastra.us",
            image: "/images/astra/astra-site-hero.webp",
            eyebrow: "CAL POLY POMONA • ASTRA",
            title: "BUILD. FLY. INNOVATE.",
            description:
              "We are a student-led engineering team designing, building, and testing autonomous aerial systems.",
          },
        },
        {
          title: "NGCP — Autonomous Ground Vehicle",
          description:
            "Northrop Grumman Collaboration Project. A drone scouts the area and hands obstacle and location data to a ground rover, which drives out, picks up a water bottle, and delivers it to a person. I worked telemetry between drone, rover, and ground station, and bare-metal C on the vehicle's microcontroller.",
          tags: ["Northrop Grumman", "Telemetry", "Bare-metal C", "Rover"],
          gallery: galleries.ng,
        },
        {
          title: "Autonomous Vehicle Lab — CARL",
          description:
            "University research lab. Drive-by-wire on CARL: a closed-loop stepper controller (CL57T) on a microcontroller pushing CAN telemetry over a TJA1051 transceiver, so the steering can be driven from a computer, controller, or joystick — plus the ROS2 stack and CI around it.",
          tags: ["ROS2", "CAN bus", "STM32", "Drive-by-wire"],
          gallery: galleries.avl,
          links: [
            {
              label: "Drive-by-wire progress deck",
              href: "/images/avl/avl-drive-by-wire-progress.pptx",
            },
          ],
        },
      ],
    },
    {
      id: "circuits",
      title: "Circuits",
      image: "/images/sections/circuits.svg",
      blurb: "Schematics, PCB layouts, and bring-up on real boards.",
      projects: [
        {
          title: "STM32F103 Development Board",
          description:
            "Two-layer board around an STM32F103C8T6: USB Micro-B power and data, an AMS1117 3.3V rail, a 16 MHz crystal, boot-mode switch, and broken-out GPIO headers. Designed in KiCad — the plots below are exported straight from the schematic and the layout.",
          tags: ["KiCad", "STM32", "2-layer PCB", "USB"],
          image: "/images/circuits/stm32f103-board.png",
          gallery: galleries.circuits,
          links: [
            { label: "Schematic PDF", href: "/circuits/stm32f103-board-schematic.pdf" },
            { label: "PCB layout PDF", href: "/circuits/stm32f103-board-pcb.pdf" },
          ],
        },
      ],
    },
  ],
};

export const domains = [softwareDomain, hardwareDomain];

export const getDomain = (id) => domains.find((domain) => domain.id === id);
