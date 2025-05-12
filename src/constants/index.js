 const navLinks = [
  { name: "Work",       link: "#work" },
  { name: "Experience", link: "#experience" },
  { name: "Skills",     link: "#skills" },
  { name: "Testimonials", link: "#testimonials" },
];

const words = [
  { text: "EVERYTHING", imgPath: "/images/ideas.svg" },
  { text: "BACKEND", imgPath: "/images/ideas.svg" },
  { text: "FRONTEND", imgPath: "/images/concepts.svg" },
  { text: "AI/ML", imgPath: "/images/designs.svg" },
  { text: "SEO", imgPath: "/images/code.svg" },
  { text: "DS/ALGORITHMS", imgPath: "/images/ideas.svg" },
  { text: "DEVOPS", imgPath: "/images/concepts.svg" },
  { text: "SMM", imgPath: "/images/designs.svg" },
  { text: "RESEARCH", imgPath: "/images/code.svg" },
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
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
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
    imgPath: "/images/logos/python.svg",
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
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "As a team lead, Areg's brought creativity and technical expertise to the team, leadership and guidance to the team. He significantly improved our backend performance.",
    imgPath: "/images/liner (1).png",
    logoPath: "/images/liner_logo.png",
    title: "CEO, Software Engineer",
    date: "March 2025 - Present",
    responsibilities: [
      "Built websites for various clients in Artists, Doctors, Engineers and many more.",
      "Upped the business revenue by 200%.",
      "Introduced new tools to the teach such as tailwindCSS, Three.js, GSAP, Express.",
    ],
  },
  {
    review: "Areg's contributions to Schoolars web development has been really helpful. He approaches challenges with a problem-solving mindset. He is always ready to face whatever the new challenge/problem is.Lorep ipsumLorep ipsumLorep ipsumLorep ipsumLorep ipsumLorep ipsumLorep ipsumLorep ipsumLorep ipsumLorep ipsumLorep ipsumLorep ipsumLorep ipsumLorep ipsumLorep ipsum",
    imgPath: "/images/schoolars.png",
    logoPath: "/images/schoolars_logo.png",
    title: "Backend Developer",
    date: "Nov 2023 - Mar 2025",
    responsibilities: [
      "Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum.",
      "Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum.",
      "Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum.",
    ],
  },
  {
    review: "Areg build the website, coded the smartcontracts and directly worked with the artists in order to create 500 unique NFT characters. Deployed them on openSea and and signlehandedly lead the team to success. He showed excellent leadership skills, as well as proved that he is a team player and is able to meat all the deadlines.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/crypto_warriors.png",
    title: "FullStack developer,  Smart contract developer",
    date: "Aug 2021 - Feb 2022",
    responsibilities: [
      "Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum.",
      "Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum.",
      "Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum.",
    ],
  },
];

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