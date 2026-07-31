 const navLinks = [
  // "Projects" (#work) and "Skills" (#skills) pointed at the showcase and tech
  // stack sections, which are gone — the projects live on the Software and
  // Hardware pages now.
  // { name: "Projects",   link: "#work" },
  { name: "Experience", link: "#experience" },
  // { name: "Skills",     link: "#skills" },
  // { name: "Connect",    link: "#contact" },
];

const words = [
  { text: "EVERYTHING", imgPath: "/images/ideas.svg" },
  { text: "ROBOTICS", imgPath: "/images/back.svg" },
  { text: "EMBEDDED", imgPath: "/images/front.svg" },
  { text: "AI/ML", imgPath: "/images/ai.svg" },
  { text: "WEB", imgPath: "/images/seo.svg" },
  { text: "DS/ALGORITHMS", imgPath: "/images/algo.svg" },
  { text: "DEVOPS", imgPath: "/images/devopss.svg" },
  { text: "ELECTRONICS", imgPath: "/images/smm.svg" },
  { text: "FIRMWARE", imgPath: "/images/research.svg" },
];


const counterItems = [
  { value: 5, suffix: "+", label: "Years of Experience" },
  { value: 200, suffix: "+", label: "Satisfied Clients" },
  { value: 148, suffix: "+", label: "Completed Projects" },
  { value: 95, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/linux.png",
  },
  {
    imgPath: "/images/logos/type.png",
  },
  {
    imgPath: "/images/logos/next.svg",
  },
  {
    imgPath: "/images/logos/aws.png",
  },
  {
    imgPath: "/images/logos/css.png",
  },
  {
    imgPath: "/images/logos/docker.png",
  },
  {
    imgPath: "/images/logos/figma.png",
  },
  {
    imgPath: "/images/logos/git.png",
  },
  {
    imgPath: "/images/logos/html.png",
  },
  {
    imgPath: "/images/logos/photoshop.png",
  },
  {
    imgPath: "/images/logos/python.png",
  },
  {
    imgPath: "/images/logos/node.png",
  },
  {
    imgPath: "/images/logos/react.png",
  },
  {
    imgPath: "/images/logos/three.png",
  },
  {
    imgPath: "/images/logos/js.png",
  },
  {
    imgPath: "/images/logos/java.png",
  },
  {
    imgPath: "/images/logos/sql.png",
  },
  {
    imgPath: "/images/logos/tailwind.png",
  },
  {
    imgPath: "/images/logos/word.png",
  },

];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/book.png",
    title: "Willingness to Learn",
    desc: "Always ready to learn new tools that are crucial for the business.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.png",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Node.js",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Three.js",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Git/GitHub",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

// Mirrors the four roles on Areg_Hovumyan_Resume.pdf, in the same order the
// resume lists them. `title` is the role, `creditor` carries the organisation
// and program, and `responsibilities` are the resume bullets.
const expCards = [
  {
    creditor: "L'SPACE — NASA's student acceleration program, Robotic Lunar Rover Mission (Remote)",
    missionTitle: "Moon Rover Mission",
    review:
      "A rover enters a permanently shadowed lunar crater to search for water ice and collect scientific data. It sends the information to a satellite, which relays it back to Earth.",
    imgPath: "/images/lspace/lspace_objective.png",
    logoPath: "/images/nasa_circle.png",
    affiliation: "Internship / Academy",
    title: "Electrical / Embedded Systems Member",
    date: "May 2026 - Present",
    responsibilities: [
      "Present the Communication and Data Handling to NASA engineers for a possible mission consideration on the moon.",
      "Manage to stay within the schedule, cost, and mass limitations (under 250M, 170Kg, no sunlight for 14 days and more).",
      "Implement Computer Vision on the rover to explore permanently shadowed craters on the moon.",
      "Design the whole rover's Communication and Data Handling (C&DH) architecture by calculating the best-fitting battery, figuring out the communication protocols, and choosing the flight software by studying NASA's previous missions.",
      "Establish (on concept) the communication between the Earth and the Moon, autonomous mission completion in case of redundancy, and learn F' to fit the mission under the mission needs.",
    ],
  },
  {
    creditor: "Autonomous Hexacopter (University Club) — Lockheed Martin sponsored project, Pomona, CA",
    missionTitle: "Drone Mapping and Delivery Mission",
    review:
      "A drone flies over an area, captures images, creates a map, and uses object detection to identify a tent and a person. It then drops a supply payload near the tent and delivers a water bottle to the person.",
    imgPath: "/images/astra/astra_objective.png",
    logoPath: "/images/lockheed_cirlce.png",
    affiliation: "Sponsored by Lockheed Martin",
    title: "Software Engineering Team Lead",
    date: "June 2025 - Present",
    responsibilities: [
      "Apply pair programming, test-first development, unit testing, create containers for a ROS2 environment with Docker for a team of 8 student-engineers to collaborate, and create CI/CD pipelines to ship features with fewer defects.",
      "Currently integrating the hexacopter into Anduril's Lattice via a ROS2 bridge node that fuses MAVLink flight state with onboard perception, georeferencing pixel detections to WGS-84 ground coordinates and publishing them as C2 entities on the flight control loop.",
      "Collaborate with the Electrical team to not overwhelm the processor with object detection and image capturing processes, and work with the Payload team to drop payloads mid-flight using servos.",
      "Present mapping and Computer vision improvement, image processing achievement, and correct GPU/CPU utilization to Lockheed Martin engineers during the Preliminary Design Review (PDR).",
      "Create ROS2 nodes that handle the whole mission, including object detection (0.99 mAP@0.5), area mapping, 4k image processing (under 0.7s each), and payload release over a target.",
    ],
  },
  {
    creditor: "Autonomous Ground Vehicle (University Club) — Northrop Grumman collaboration project, Pomona, CA",
    missionTitle: "Rover and Drone Rescue Mission",
    review:
      "A drone surveys the area and sends location and obstacle information to a ground rover. The rover uses this intelligence to find a water bottle, pick it up, and deliver it to a person.",
    imgPath: "/images/ng/ng_objective.png",
    logoPath: "/images/ng_circle.jpeg",
    affiliation: "Northrop Grumman collaboration project",
    title: "Embedded Systems Member",
    date: "February 2026 - June 2026",
    responsibilities: [
      "Present telemetry connection between a drone, rover, and a ground station workflow to Northrop Grumman engineers during a Preliminary Design Review (PDR).",
      "Implement Feature-driven development and the lean approach to release new code every week and meet all the requirements before any demonstrations or meetings.",
      "Run an authorized hardware review of a DS2431-class authenticator with a Bus Pirate v4 and logic analyzer, confirming a family-code mismatch and identifying clone silicon.",
      "Collaborate with the firmware team to develop bare-metal firmware for a pre-made microcontroller in C, directly manipulating registers (GPIO, timers, interrupts, etc.).",
    ],
  },
  {
    creditor: "Autonomous Vehicle Lab — University research lab, Pomona, CA",
    review: "Areg builds an interceptor drone and a closed-loop steering controller in the university's autonomous vehicle lab, with CI/CD pipelines and unit tests keeping the team's system reliable.",
    imgPath: "/images/avl/avl_objective.png",
    logoPath: "/images/avl.jpg",
    title: "Software Engineer",
    date: "April 2026 - Present",
    responsibilities: [
      "Create an interceptor drone, running object detection on a Jetson, establishing autonomous flight through a ready-made flight controller, and fitting under the budget of $2000.",
      "Build a closed-loop stepper controller (CL57T) on a microcontroller with CAN telemetry over a TJA1051 transceiver to control a steering wheel through a computer, controller, or a joystick.",
      "Engineer CI/CD pipeline in GitHub Actions for the team to catch regressions before merge, and create unit tests to improve system reliability.",
      "Resolve priority-inversion bug by introducing mutex priority inheritance, restoring deterministic timing.",
      "Utilize AI agents to interface an MPU IMU over I2C on a Nucleo to stream 9-DOF telemetry.",
    ],
  },
];

/* Earlier roles, kept for reference — these aren't on the current resume.
   Drop any of them back into expCards above to show them again.

  {
    creditor: 'Liner team',
    review: "As a team lead, Areg brought creativity, technical expertise, leadership, and guidance to the team. He significantly improved our backend performance.",
    imgPath: "/images/liner (1).png",
    logoPath: "/images/liner_logo.png",
    title: "Fullstack Developer",
    date: "March 2025 - September 2025",
    responsibilities: [
      "Developed custom websites for a diverse range of clients, including artists, medical professionals, engineers, and others.",
      "Increased overall business revenue by 200% through strategic project delivery and client acquisition. ",
      "Introduced new tools such as tailwindCSS, Three.js, GSAP, Express to the team.",
    ],
  },
  {
    creditor: "Schoolars Team",
    review: "Areg's contributions to Schoolars' web development have been really helpful. He approaches challenges with a problem-solving mindset and is always ready to face whatever new challenge or problem comes his way.",
    imgPath: "/images/schoolars.png",
    logoPath: "/images/schoolars_logo.png",
    title: "Backend Developer",
    date: "Nov 2023 - Mar 2025",
    responsibilities: [
      "Built responsive, SEO-friendly web applications using modern frameworks like React, Next.js, and Express.js.",
      "Led a team of 3 developers, managing task distribution, reviewing code, and ensuring project deadlines were met.",
      "Trained junior developers on modern front-end practices including Tailwind CSS, component-based architecture, and version control.",
    ],
  },
  {
    creditor: "Minas K.",
    review: "Areg built our website where customers could connect their crypto wallets and acquire their NFTs. He coded the smart contracts and worked directly with the artists to create 500 unique NFT characters. He deployed them on OpenSea and single-handedly led the team to success.",
    imgPath: "/images/cw.png",
    logoPath: "/images/crypto_warriors.png",
    title: "Full-Stack Developer, Smart Contract Developer",
    date: "Aug 2021 - Feb 2022",
    responsibilities: [
      "Designed custom ERC-20 and ERC-721 tokens, including minting, burning, and royalty logic, for NFT and DAO-based platforms.",
      "Audited smart contracts for vulnerabilities such as reentrancy, overflow/underflow, and front-running, ensuring secure DeFi protocol deployment.",
      "Integrated wallet functionality (MetaMask, WalletConnect) and managed user authentication using cryptographic signatures.",
    ],
  },
*/

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "First Last",
    mentions: "@testAddress",
    review:
      "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum..",
    imgPath: "/images/client1.png",
  },
  {
    name: "First Last",
    mentions: "@testAddress",
    review:
      "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum..",
    imgPath: "/images/client3.png",
  },
  {
    name: "First Last",
    mentions: "@testAddress",
    review:
      "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum..",
    imgPath: "/images/client2.png",
  },
  {
    name: "First Last",
    mentions: "@testAddress",
    review:
      "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum..",
    imgPath: "/images/client5.png",
  },
  {
    name: "First Last",
    mentions: "@testAddress",
    review:
      "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum..",
    imgPath: "/images/client4.png",
  },
  {
    name: "First Last",
    mentions: "@testAddress",
    review:
      "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum..",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "github",
    imgPath: "/images/github.png",
    url: "https://github.com/Arhovumyan"
  },
  /*{
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },*/
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url: "https://www.linkedin.com/in/areg-hovumyan/"
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};