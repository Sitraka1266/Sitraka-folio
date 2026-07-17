export const projects = [
  {
    id: 1,
    title: "Zarao",
    description:
      "Zarao is a Malagasy freelance platform designed to showcase the skills of Malagasy developers.",
    imageSrc: "/project/zarao.svg",
    tech: ["php", "js"],
    hasDemo: true,
    demoUrl: "http://zarao.com/",
    sourceCode : 'https://github.com/Sitraka1266/Zarao.git',
    notOnline: true,
    noSourceCode: false,
    delay: "100",
  },
  {
    id: 2,
    title: "Dactylo YMCA",
    description:
    "This is a multiplayer typing game I developed, showcased at a YMCA open house, where players compete in real-time to improve speed and accuracy.",
    imageSrc: "/project/dactylo.png",
    tech: ["node", "socketio"],
    hasDemo: false,
    demoUrl: "https://dactylo-7nx0.onrender.com",
    sourceCode : "https://github.com/Sitraka1266/Dactylo.git",
    notOnline: false,
    noSourceCode: false,
    delay: "200",
  },
  {
    id: 3,
    title: "Tetris Arena",
    description:
    "Tetris Arena is a Tetris game I developed, where players can compete against each other, with a dashboard to track scores and rankings, enhancing the competitive experience.",
    imageSrc: "/project/tetris img.png",
    tech: ["expressjs", "react"],
    hasDemo: true,
    demoUrl: "https://tetris-react-lilac.vercel.app/",
    sourceCode : "",
    notOnline: false,
    noSourceCode: true,
    delay: "200",
  }
];

export default projects;
