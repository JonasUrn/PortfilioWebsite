import {
  flutter,
  python,
  flask,
  bootstrap,
  reactjs,
  redux,
  tailwind,
  css,
  html,
  javascript,
  cs,
  net,
  uturex,
  dart,
  java,
  django
} from "./imports.js";

const languages = [
  {
    name: "Python",
    icon: python,
    config: "0px 0px 5px 5px rgb(252, 211, 75)",
  },
  {
    name: "HTML",
    icon: html,
    config: "0px 0px 5px 5px rgb(251, 127, 39)",
  },
  {
    name: "CSS",
    icon: css,
    config: "0px 0px 5px 5px rgb(16, 0, 244)",
  },
  {
    name: "JavaScript",
    icon: javascript,
    config: "0px 0px 5px 5px rgb(255, 217, 0)",
  },
  {
    name: "C#",
    icon: cs,
    config: "0px 0px 5px 5px rgb(163, 26, 149)",
  },
  {
    name: "Dart",
    icon: dart,
    config: "0px 0px 5px 5px rgb(16, 0, 244)",
  },
];

const technologies = [
  {
    name: "Flutter",
    icon: flutter,
    config: "0px 0px 5px 5px rgb(40, 140, 255)",
  },
  {
    name: "Flask",
    icon: flask,
    config: "0px 0px 5px 5px rgba(255, 255, 255, 0.7)",
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
    config: "0px 0px 5px 5px rgb(163, 26, 149)",
  },
  {
    name: "React JS",
    icon: reactjs,
    config: "0px 0px 5px 5px rgb(0, 110, 255)",
  },
  {
    name: "Redux",
    icon: redux,
    config: "0px 0px 5px 5px rgb(163, 26, 149)",
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    config: "0px 0px 5px 5px rgb(0, 110, 255)",
  },
  {
    name: ".NET",
    icon: net,
    config: "0px 0px 5px 5px rgb(163, 26, 149)",
  }
];

const learning = [
  {
    name: "Java",
    icon: java,
    config: "0px 0px 5px 5px rgb(251, 127, 39)",
  },
  {
    name: "Django",
    icon: django,
    config: "0px 0px 5px 5px rgb(0, 128, 0)",
  },
];

const webProjects = [
  {
    title: "Uturex",
    image: uturex,
    description:
      "A freelancing page for me and my friend. This website was created to show off our web-design and programming skills as well as advertise our brand.",
    key: "web1",
    color: "0px 0px 5px 5px rgb(208, 16, 246)",
    link: "https://www.uturex.com",
  },
];

export { technologies, learning, webProjects, languages };
