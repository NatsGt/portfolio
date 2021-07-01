import { library } from "@fortawesome/fontawesome-svg-core";
import { faDatabase, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  fab,
  faHtml5,
  faCss3,
  faBootstrap,
  faJs,
  faNodeJs,
  faReact,
  faLinkedin,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
library.add(fab);

const data = {
  name: "Natalia Rodas",
  location: "Sydhavn, Copenhaguen, Denmark",
  briefDescription: "I’m a Front End Developer based in Copenhaguen, Denmark. I’m passionate about web development, technology, and coding. I have a slight obsession with logic and challenges. ",
  aboutMe:
    "I started my career in construction where I worked with wonderful people, lead amazing projects, and also worked independently, always looking forward to achieve goals. When I moved to Denmark in 2019, I switched my career to web developer where I started learning the fundamentals of programming with Java. Afterward, I studied HTML and CSS on online platforms such as Coursera, Udemy, and FreeCode Camp. I'm currently on my way to get my Full Stack Developer certification from Hack Your Future.",
  skillsDescription: "I started as a self-taught developer on several online platforms and trying to build some basic projects (cloning responsive websites). Afterward, I got into the Hack Your Future program where I'm currently studying for Full Stack Developer. Here I've acquired the knowledge to build other projects more complex with Javascript, NodeJs, React, MySql, KnexJs, and Git. I'm always looking for new projects that help me dig more into these technologies and I'm looking forward to new and challenges.",
  contactSummary: "Hey! you just met me, and this is crazy, so here's my contact, so write me... maybe?",
  contact: [
    {
      id: 1,
      name: "mail",
      icon: faEnvelope,
      value: "mailto:nataliarodas7858@gmail.com",
      description: "Write me at nataliarodas7858@gmail.com"
    },
    {
      id: 2,
      name: "linkeid",
      icon: faLinkedin,
      value: "https://www.linkedin.com/in/natalia-rodas-926523134/",
      description: "Read more about my professional track."
    },
    {
      id: 3,
      name: "github",
      icon: faGithub,
      value: "https://github.com/NatsGt",
      description: "See some of my projects"
    }
  ],
  skills: [
    {
      id: 1,
      name: "Html",
      icon: faHtml5
    },
    { name: "Css", icon: faCss3 },
    {
      id: 2,
      name: "Bootstrap",
      icon: faBootstrap
    },
    {
      id: 3,
      name: "Javascript (ES6)",
      icon: faJs
    },
    {
      id: 4,
      name: "NodeJs",
      icon: faNodeJs
    },
    {
      id: 5,
      name: "MySql",
      icon: faDatabase
    },
    {
      id: 6,
      name: "React",
      icon: faReact
    },
    {
      id: 7,
      name: "GitHub",
      icon: faGithub
    }
  ],
  projectsSummary: "These are some of the projects that I have been working on. Click on the card to see the code behind it or hover over it to see a giph showing how the website looks.",
  projects: [
    {
      id: 1,
      title: "Clone Website",
      description:
        "This project was based on pure HTML and CSS. It's a responsive website with diverse image positioning, buttons, a form, and other components that are styled without any library. The design and original template can be found here.",
      img:
        "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      code: "https://github.com/NatsGt/clone-travel-app",
      preview: "https://natsgt.github.io/clone-travel-app/"
    },
    {
      id: 2,
      title: "GitHub Search",
      description:
        "This is a pretty basic search website for GitHub users based on React. It fetches data from a GitHub API, passes it through components using React hooks, and handles errors that the API may throw.",
      img:
        "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      code: "https://github.com/NatsGt/hyf-homework/tree/master/react/week4",
      preview: "https://i.imgur.com/1A8ZJqI.gif"
    },
    {
      id: 3,
      title: "MealSharing App",
      description:
        "This project consists on the use of several tools, such as React, NodeJs, MySql, KnexJs, and Bootstrap. It's a project that uses CRUD concepts, fetching information from a database, and using React-Bootstrap for the styling.",
      img:
        "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      code: "https://github.com/NatsGt/meal-sharing",
      preview: "https://meal-sharing-natsgt.herokuapp.com/"
    }
  ]
};
export default data;

/*
https://www.freecodecamp.org/news/coding-projects-to-include-in-your-frontend-portfolio/
1. Clone:
https://nicepage.com/templates/preview/gluten-free-backery-12547?device=desktop
https://nicepage.com/t/23269/travel-app-template
2. CRUD project: todo list
3. API: weather?
//http://quotes.rest/qod.json?category=funny
4.
*/
