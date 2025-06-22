import { useState } from 'react'

const ExpandableDescription = ({ bulletPoints, maxVisible = 6 }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  
  const shouldShowReadMore = bulletPoints.length > maxVisible
  const visiblePoints = isExpanded ? bulletPoints : bulletPoints.slice(0, maxVisible)
  
  const handleToggle = () => {
    setIsExpanded(!isExpanded)
  }
  
  return (
    <div className="expandable-description">
      <ul className="bullet-list" key={isExpanded ? 'expanded' : 'collapsed'}>
        {visiblePoints.map((point, index) => (
          <li 
            key={`${isExpanded ? 'expanded' : 'collapsed'}-${index}`} 
            className="bullet-item"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            {point}
          </li>
        ))}
      </ul>
      
      {shouldShowReadMore && (
        <button
          onClick={handleToggle}
          className=" mb-5 read-more-btn"
        >
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
      )}
    </div>
  )
}

export default ExpandableDescription 