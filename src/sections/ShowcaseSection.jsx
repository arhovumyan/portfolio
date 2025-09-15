import { useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

import ExpandableDescription from "../components/ExpandableDescription"

gsap.registerPlugin(ScrollTrigger)

const ShowcaseSection = () => {
    const sectionRef = useRef(null)
    const project1Ref = useRef(null)
    const project2Ref = useRef(null)
    const project3Ref = useRef(null)

    // Project descriptions data
    const interviewDescriptions = [
        "A comprehensive interview preparation application built with Next.js (v15+), TypeScript, Firebase, and modern web technologies for seamless full-stack development.",
        "Next.js (v15+) - Utilized as the primary React framework for building a modern, performant, and scalable web application with App Router, server components, server actions, and API routes for seamless full-stack development",
        "TypeScript - Employed for type safety and maintainability, enabling robust, self-documenting code and reducing runtime errors",
        "Tailwind CSS - Used for rapid, utility-first styling and responsive design, ensuring a consistent and modern UI/UX across all devices",
        "Firebase (Firestore & Authentication) - Integrated Firestore as a NoSQL cloud database for real-time data storage and retrieval with Firebase Authentication for secure user management",
        "Google Fonts (Mona Sans) - Incorporated custom typography for enhanced branding and visual appeal",
        "Sonner - Integrated for user notifications and toasts, improving feedback and interactivity",
        "Day.js - Utilized for efficient date and time formatting throughout the application",
        "Radix UI & Class Variance Authority (CVA) - Used for accessible, composable UI primitives and advanced class management for scalable component styling",
        "Custom React Components - Engineered reusable components (InterviewCard, Agent, AuthForm, DisplayTechIcons) to promote modularity and code reuse",
        "Modern JavaScript/ESNext - Embraced latest ECMAScript features for cleaner, more efficient, and future-proof code",
        "ESLint & Prettier - Enforced code quality and consistency through automated linting and formatting",
        "Git & GitHub - Employed for version control, collaborative development, and CI/CD integration",
        "Vercel - Deployed using a modern cloud platform for continuous deployment, scalability, and global performance"
    ]

    const websocketDescriptions = [
        "Real-time chat application with WebSocket integration using React 19, Node.js, and MongoDB for instant messaging capabilities.",
        "Architected full-stack real-time messaging platform using React 19, Node.js, Express.js with MongoDB database, enabling instant communication between users",
        "Implemented WebSocket-based real-time messaging using Socket.IO, reducing message delivery latency to <100ms with live online user status tracking",
        "Engineered secure JWT-based authentication system with bcrypt password hashing, implementing protected routes and session management",
        "Integrated cloud-based media storage using Cloudinary API for profile pictures and message images, reducing server storage requirements by 100%",
        "Developed responsive modern UI with TailwindCSS and DaisyUI, featuring multiple theme support and optimized mobile experience",
        "Implemented advanced state management using Zustand, reducing component re-renders by 40% and improving application performance",
        "Built RESTful API architecture with Express.js middleware for authentication, error handling, and CORS configuration",
        "Optimized database operations with MongoDB/Mongoose ODM, implementing efficient message querying and user management with proper indexing",
        "Enhanced user experience with real-time notifications using React Hot Toast, message status indicators, and automatic scroll-to-bottom functionality",
        "Deployed production-ready application with environment-based configuration, static file serving, and proper error handling",
        "Technical Stack: React 19, Vite, TailwindCSS, Socket.IO, Node.js, Express.js, MongoDB, JWT, Cloudinary",
        "Core Features: Real-time bidirectional messaging, user authentication, image sharing, online presence tracking, multi-theme UI support"
    ]

    const aiAssistantDescriptions = [
        "Advanced AI companion application with full-stack JavaScript/TypeScript development, modern authentication, and cloud infrastructure integration.",
        "Full-Stack JavaScript/TypeScript Development - Complete MERN stack with Express.js backend, React frontend, and shared TypeScript types across client/server",
        "Modern Authentication & Security - JWT tokens, Firebase Admin SDK integration, Google OAuth, bcrypt password hashing, middleware-based auth protection",
        "Cloud Infrastructure & DevOps - Cloudinary integration with automated folder structure, MongoDB database, environment configuration, Docker support",
        "Database Design & Management - MongoDB with Mongoose ODM, user management, character storage, chat persistence, data modeling",
        "Real-time Features - WebSocket integration for chat functionality, user session management, live updates",
        "RESTful API Design - Well-structured Express routes, controllers, middleware, error handling, request validation",
        "State Management & Data Fetching - React Query (TanStack Query) for server state, custom hooks, context providers, optimistic updates",
        "Modern React Patterns - Custom hooks, context API, component composition, TypeScript integration, form handling with React Hook Form",
        "Image Upload & Processing - Multer file handling, Cloudinary transformations, image validation, user-specific folder organization",
        "UI/UX Development - Radix UI components, Tailwind CSS, responsive design, modern component architecture",
        "File Upload & Storage - Buffer handling, image processing, CDN integration, file validation and security",
        "Environment Management - Environment variable configuration, development/production builds, secrets management",
        "Build Tools & Development Workflow - Vite bundling, TypeScript compilation, concurrent development servers, ESM modules",
        "Testing & Quality Assurance - Error handling, validation, debugging scripts, environment testing",
        "Code Organization - Modular architecture, shared utilities, service layer pattern, clean separation of concerns",
        "Social Features - User following, favorites system, creator profiles, content discovery",
        "Performance Optimization - Image optimization, lazy loading considerations, efficient database queries",
        "Migration Scripts - Database migration tools, user folder migration, data transformation scripts",
        "Monitoring & Debugging - Comprehensive logging, error tracking, Cloudinary validation scripts",
        "Documentation - Technical documentation, setup guides, API documentation"
    ]

    useGSAP(() => {
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current]
        projects.forEach((card, index) => {
            gsap.fromTo(
                card,
                {
                    opacity: 0,
                },
                {
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom-=100px'
                    }
                }
            )
        })
        gsap.fromTo(sectionRef.current,
            {
                opacity: 0
            },
            {
                opacity: 1,
                duration: 3.5,
            })
    },[])

  return (
      <section id="work" ref={sectionRef} className="app-showcase">
          <div className="w-full z-10 px-4 sm:px-6 lg:px-8">
              {/* Responsive grid layout */}
              <div className="showcase-grid">
                  
                  {/* Project 1 - Interview App */}
                  <div className="project-card" ref={project1Ref}>
                      <div className='project-image-wrapper'>
                          <img src='/images/interview.png' alt='Interview App' className="project-image"/>
                      </div>
                      <div className='project-content'>
                          <h3 className='project-title'>
                              Interview App
                          </h3>
                          <ExpandableDescription 
                              bulletPoints={interviewDescriptions} 
                              maxVisible={1}
                          />
                          <a href="https://interview-three-phi.vercel.app/" className="project-button">
                              Take a look
                          </a>      
                      </div>
                  </div>
                  
                  {/* Project 2 - WebSocket Chat */}
                  <div className='project-card' ref={project2Ref}>
                      <div className="project-image-wrapper"> 
                          <img src="/images/websockets.png" alt='WebSocket Chat' className="project-image"/>
                      </div>
                      <div className='project-content'>
                          <h3 className='project-title'>
                              Real-Time Chat Application
                          </h3>
                          <ExpandableDescription 
                              bulletPoints={websocketDescriptions} 
                              maxVisible={1}
                          />
                          <a href='https://chat-with-webhooks.onrender.com/login' className='project-button'>
                              Take a look
                          </a>
                      </div>
                  </div>
                  
                  {/* Project 3 - AI Assistant */}
                  <div className='project-card' ref={project3Ref}>
                      <div className="project-image-wrapper"> 
                          <img src="/images/aiCompanion.png" alt='AI Assistant' className="project-image"/>
                      </div>
                      <div className='project-content'>
                          <h3 className='project-title'>
                              AI Assistant
                          </h3>
                          <ExpandableDescription 
                              bulletPoints={aiAssistantDescriptions} 
                              maxVisible={1}
                          />
                          <div className="project-button-container">
                              <span className="project-status">**Biggest Project so far**</span>
                              <a href='https://medusa-vrfriendly.vercel.app/' className='project-button'>
                                  Take a look
                              </a>
                          </div>
                      </div>
                  </div>
              </div>
           </div>
      </section>
      
  )
}

export default ShowcaseSection
