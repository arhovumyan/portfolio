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
//   }
//
// Section artwork lives in /public/images/sections. Swap any `image` for a
// photo of your own board/aircraft/etc. whenever you have one — the layout
// crops to a 16:9 frame.
//
// Sections with an empty `projects` array render a quiet placeholder card
// instead, so the layout never looks broken while things are in progress.

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
      ],
    },
    {
      id: "apps",
      title: "Apps",
      image: "/images/sections/apps.svg",
      blurb: "Mobile and desktop apps — first sketch through to shipping.",
      projects: [],
    },
    {
      id: "machine-learning",
      title: "Machine Learning",
      image: "/images/sections/machine-learning.svg",
      blurb: "Models, training pipelines, and everything that feeds them.",
      projects: [],
    },
    {
      id: "data-structures",
      title: "Data Structures & Algorithms",
      image: "/images/sections/data-structures.svg",
      blurb: "The fundamentals — implementations, solutions, and write-ups.",
      projects: [],
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
    {
      id: "circuits",
      title: "Circuits",
      image: "/images/sections/circuits.svg",
      blurb: "Schematics, PCB layouts, and bring-up on real boards.",
      projects: [],
    },
    {
      id: "embedded-firmware",
      title: "Embedded Systems & Firmware",
      image: "/images/sections/embedded-firmware.svg",
      blurb: "Bare-metal and RTOS work — drivers, protocols, and control loops.",
      projects: [],
    },
    {
      id: "aircrafts-ground-machines",
      title: "Aircrafts & Ground Machines",
      image: "/images/sections/aircrafts-ground-machines.svg",
      blurb: "Airframes, rovers, and the avionics that keep them pointed right.",
      projects: [],
    },
  ],
};

export const domains = [softwareDomain, hardwareDomain];

export const getDomain = (id) => domains.find((domain) => domain.id === id);
