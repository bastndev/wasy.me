export const ALL: AllTechIndex[] = [
  // MARK: --- -- -- Index Flutter
  {
    id: "flutter",
    name: "pub.dev",
    link: "https://pub.dev/",
    img: "https://play-lh.googleusercontent.com/o6-o4rYNnFRE1HbsvQ-rEytxjTPX7sR1DVAJJWE-Sr_4u5Ju3rD_Vq8HbKUkltu6qoc",
    info: "Flutter, dart, tools, packages, plugins",
  },
  {
    id: "astro",
    name: "cuberto",
    link: "https://cuberto.com/",
    img: "https://i.ibb.co/9q7c66Y/Screenshot-from-2024-10-01-15-55-54.png",
    info: "design, UI, flutter",
  },
];

export interface AllTechIndex {
  id: string;
  name: string;
  img: string;
  link: string;
  info?: string;
}
