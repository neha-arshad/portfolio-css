"use client";
import React from "react";
import { useState, useTransition } from "react";
import Button from "./Button";

const data = [
  {
    title: "SKILLS",
    id: "SKILLS",
    content: (
      <ul className="list">
        <li>✨ Ability to Delegate Responsibilitie</li>
        <li>✨ Excellent Communictaion</li>
        <li>🧠 Html</li>
        <li>🧠 CSS</li>
        <li>🧠 JavaScript</li>
        <li>🧠 TypeSript</li>
        <li>🧠 React</li>
        <li>🧠 Node.js</li>
        <li>🧠 Tailwind.css</li>
      </ul>
    ),
  },
  {
    title: "EDUCATION",
    id: "EDUCATION",
    content: (
      <ul className="list">
        <li>Matriculation in Science</li>
        <li>Intermediate in Science group</li>
        <li>Master in Arts</li>
        <li>
          Certified cloud Applied Generative AI Engineer (Gen Eng) In process
        </li>
      </ul>
    ),
  },
  {
    title: "EXPERIENCE",
    id: "EXPERIENCE",
    content: (
      <ul className="list">
        <li>
          Designed and developed a personal portfolio to showcase my projects,
          skills, and resume using HTML, CSS, and JavaScript.
        </li>
        <li>
          Developed a responsive web application using Node.js and TypeScript.
        </li>
      </ul>
    ),
  },
];

const Aboutsection = () => {
  const [tab, setTab] = useState("SKILLS");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: any) => {
    startTransition(() => {
      setTab((prevTab) => (prevTab === id ? "" : id));
    });
  };
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <img src="/Images/its_all_about_me-.jpg" className="about-image" />

        <div className="about-content">
          <h2 className="about-title">
            ABOUT ME
          </h2>
          <p className="about-description">
            I'm a frontent web deveploper with a passion for creating
            interactive and responsive web applictaions. I have experience with
            JavaScript, react, nodejs, html, CSS. I'm a quick learner and i m
            always looking to expend my knowledge and skill set. I'm excited to
            work with others to create amazing applictaions.
          </p>
          <div className="button-container">
            <Button
              selectTab={() => handleTabChange("SKILLS")}
              active={tab === "SKILLS"}
            >
              SKILLS
            </Button>

            <Button
              selectTab={() => handleTabChange("EDUCATION")}
              active={tab === "EDUCATION"}
            >
              EDUCATION
            </Button>

            <Button
              selectTab={() => handleTabChange("EXPERIENCE")}
              active={tab === "EXPERIENCE"}
            >
              EXPERIENCE
            </Button>
          </div>
          <div className="tab-content">{data.find((t) => t.id === tab)?.content}</div>
        </div>
      </div>
    </section>
  );
};

export default Aboutsection;
