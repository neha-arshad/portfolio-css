"use client";
import React, { useState } from "react";
import Projectcard from "./Projectcard";
import Projecttag from "./Projecttag";

const ProjectData = [
  {
    id: "1",
    title: "hackathon",
    description: "Project 1",
    image: "/Images/resume.jfif",
    tag: ["View"],
    gitUrl: "https://github.com/neha-arshad/milestone5.git",
    previewUrl: "https://resume-builder-milestone5-phi.vercel.app/",
  },

  {
    id: "2",
    title: "Online Ticket System",
    description: "Project 1",
    image: "/Images/ticket.webp",
    tag: ["View"],
    gitUrl:
      "https://github.com/neha-arshad/project-Online-ticket-system-flo.git",
    previewUrl:
      "https://github.com/neha-arshad/project-Online-ticket-system-flo.git",
  },
  {
    id: "3",
    title: "Typing Speed Tester",
    description: "Project 2",
    image: "/Images/typing-speed-tester.webp",
    tag: ["View"],
    gitUrl:
      "https://github.com/neha-arshad/project-typing-speed-tester-WPM-.git",
    previewUrl:
      "https://github.com/neha-arshad/project-typing-speed-tester-WPM-.git",
  },
  {
    id: "4",
    title: "OOP My Bank",
    description: "Project 3",
    image: "/Images/my-bank.jpg",
    tag: ["View"],
    gitUrl: "https://github.com/neha-arshad/project_oop_my_Bank.git",
    previewUrl: "https://github.com/neha-arshad/project_oop_my_Bank.git",
  },
  {
    id: "5",
    title: "Count Down Timer",
    description: "Project 4",
    image: "/Images/count-down.jpg",
    tag: ["View"],
    gitUrl: "https://github.com/neha-arshad/project_count_down_timer.git",
    previewUrl: "https://github.com/neha-arshad/project_count_down_timer.git",
  },
  {
    id: "6",
    title: "Currency Converter",
    description: "Project 5",
    image: "/Images/currency-converteer.jfif",
    tag: ["View"],
    gitUrl: "https://github.com/neha-arshad/project-currency-converter.git",
    previewUrl: "https://github.com/neha-arshad/project-currency-converter.git",
  },
  {
    id: "7",
    title: "Todo List",
    description: "Project 6",
    image: "/Images/todo-list.jfif",
    tag: ["View"],
    gitUrl: "https://github.com/neha-arshad/Project-todo-list.git",
    previewUrl: "https://github.com/neha-arshad/Project-todo-list.git",
  },
  {
    id: "8",
    title: "ATM",
    description: "Project 7",
    image: "/Images/ATM2.jfif",
    tag: ["View"],
    gitUrl: "https://github.com/neha-arshad/project_atm_cli.git",
    previewUrl: "https://github.com/neha-arshad/project_atm_cli.git",
  },
  {
    id: "9",
    title: "Number Guessing Game",
    description: "Project 8",
    image: "/Images/number-guessing.jfif",
    tag: ["View"],
    gitUrl: "https://github.com/neha-arshad/project-cli-word-counter.git",
    previewUrl: "https://github.com/neha-arshad/project-cli-word-counter.git",
  },
  {
    id: "10",
    title: "Quiz",
    description: "Project 9",
    image: "/Images/quiz.jpg",
    tag: ["View"],
    gitUrl: "https://github.com/neha-arshad/project-quiz-cli.git",
    previewUrl: "https://github.com/neha-arshad/project-quiz-cli.git",
  },
  {
    id: "11",
    title: "Word Counter",
    description: "Project 10",
    image: "/Images/word-counter.jpg",
    tag: ["View"],
    gitUrl: "https://github.com/neha-arshad/project-cli-word-counter.git",
    previewUrl: "https://github.com/neha-arshad/project-cli-word-counter.git",
  },
  {
    id: "12",
    title: "Personality CLI",
    description: "Project 11",
    image: "/Images/oop.jfif",
    tag: ["View"],
    gitUrl: "https://github.com/neha-arshad/oop-personality-cli.git",
    previewUrl: "https://github.com/neha-arshad/oop-personality-cli.git",
  },
  {
    id: "13",
    title: "Calculator",
    description: "Project 12",
    image: "/Images/calculator.png",
    tag: ["View"],
    gitUrl: "https://github.com/neha-arshad/calc-cli.git",
    previewUrl: "https://github.com/neha-arshad/calc-cli.git",
  },
];

const Projectsection = () => {
  const [tag, setTag] = useState("View");

  const handleTagChange = (newTag: unknown) => {
    setTag(newTag as string);
  };

  const filteredProjects = ProjectData.filter((project) => {
    return project.tag.includes(tag);
  });

  return (
    <div id="projects">
      <h1 className="project-heading">MY PROJECTS</h1>
      <div className="project-tag-container">
        <Projecttag
          name="View"
          onClick={handleTagChange}
          active={tag === "View"}
          isSelected={tag === "View"}
        />
        <Projecttag
          name="Hide"
          onClick={handleTagChange}
          active={tag === "Hide"}
          isSelected={tag === "Hide"}
        />
      </div>

      <div className="project-grid">
        {filteredProjects.map((Project) => (
          <Projectcard
            key={Project.id}
            title={Project.title}
            description={Project.description}
            imagesUrl={Project.image}
            tag={Project.tag}
            gitUrl={Project.gitUrl}
            previewUrl={Project.previewUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Projectsection;
