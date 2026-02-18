import React from "react";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section
  id="home"
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "100px 10%",
    background: "linear-gradient(to right, #f8fafc, #eef2ff)"

    
  }}
  
>


      {/* Left Side */}
      <div style={{ maxWidth: "600px" }}>

        <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>
          Hi, I'm Pooja Chandrika
        </h1>

        <TypeAnimation
  sequence={[
    "Full Stack Developer",
    2000,
    "AI Enthusiast",
    2000
  ]}
  wrapper="h2"
  speed={50}
  repeat={Infinity}
  style={{ color: "#5080e7" }}
/>


        <p style={{ marginBottom: "30px" }}>
          I build scalable web applications using React, Node.js,
          and Machine Learning. Passionate about creating impactful
          software solutions and AI-driven systems.
        </p>

        {/* Buttons */}
        <div style={{ display: "flex", gap: "15px" }}>

          <a href="/resume.pdf" download>
            <button>Download Resume</button>
          </a>

          <a href="https://github.com/Poojachandrika2905" target="_blank" rel="noreferrer">
            <button style={{ background: "#0f172a" }}>
              GitHub
            </button>
          </a>

          <a href="https://www.linkedin.com/in/pooja-chandrika-padabakkala-a37520288/" target="_blank" rel="noreferrer">
            <button style={{ background: "#0ea5e9" }}>
              LinkedIn
            </button>
          </a>

        </div>

      </div>

      {/* Right Side (Profile Image) */}
      <div>

        <img
          src={require("../assets/image.png")}
          alt="profile"
          style={{
  width: "260px",
  borderRadius: "50%",
  boxShadow: "0 0 40px rgba(37, 99, 235, 0.2)"
}}

        />

      </div>

    </section>
  );
}

export default Hero;
