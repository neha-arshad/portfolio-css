"use client";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const Herosection: any = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-text">
          <h1 className="hero-heading">
            <span className="gradient-text">
              HELLO! I'M{" "}
            </span>

            <br></br>

            <TypeAnimation
              sequence={["NEHA", 1000, "Frontend", 1000, "Web Developer", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <h1 className="welcome-text">
            Welcome to my portfolio!
          </h1>

          <p className="welcome-paragraph">
            Hello! I’m Neha, a passionate Frontend Web Developer with a knack
            for creating beautiful and functional user interfaces. I love
            transforming ideas into reality and am always eager to learn new
            technologies. Explore my projects below to see what I can do!
          </p>

          <div>
            <Link href={"#contact"}>
              <button className="hire-button">
                Hire Me
              </button>
            </Link>
          </div>
        </div>

        <div className="profile-container">
          <div className="profile-image">
            <img
              src="/Images/profrile-removebg-preview.png"
              alt="d.p"
              className="profile-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
