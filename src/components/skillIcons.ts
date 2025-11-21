// utils/skillIconMap.ts

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJs,
  faNodeJs,
  faGitAlt,
  faHtml5,
  faCss3Alt,
  faJava,
  faMicrosoft,
  type IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faCode,
  faServer,
  faMicrochip,
} from "@fortawesome/free-solid-svg-icons";

// Map skills to FontAwesome icons
export const skillIcons: { [key: string]: IconDefinition } = {
  "Visual Basic": faMicrosoft,
  "C++": faCode,
  Java: faJava,
  SQL: faDatabase,
  "C#": faMicrosoft,
  HTML: faHtml5,
  CSS: faCss3Alt,
  JavaScript: faJs,
  TypeScript: faJs, // TypeScript uses JS icon
  React: faReact,
  "Node.js": faNodeJs,
  Express: faServer,
  Prisma: faDatabase, // Using database icon for ORM/DB tools
  Supabase: faDatabase,
  Flutter: faCode, // Using a generic code icon
  Git: faGitAlt,
  UML: faCode, // Using a generic code icon for modeling
  "Image Processing": faMicrochip, // Using microchip for computation/processing
  Algorithms: faCode, // Generic code icon
  GNN: faMicrochip,
  "k-NN": faMicrochip,
  "80x86 Assembly": faMicrochip,
};

// Export the necessary types/components for use
export { FontAwesomeIcon, type IconDefinition, faCode };
