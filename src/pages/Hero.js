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

        <h1 style={{
          fontSize: "48px",
          marginBottom: "10px"
        }}>
          Hi, I'm Pooja Chandrika
        </h1>


        {/* Typing Animation */}
        <TypeAnimation
          sequence={[
            "Full Stack Developer",
            2000,
            "AI Enthusiast",
            2000,
          ]}
          wrapper="h2"
          speed={50}
          repeat={Infinity}
          style={{
            color: "#2563eb",
            marginBottom: "20px"
          }}
        />


        <p style={{
          marginBottom: "30px",
          lineHeight: "1.6"
        }}>
          I build scalable web applications using React, Node.js,
          and Machine Learning. Passionate about creating impactful
          software solutions and AI-driven systems.
        </p>


        {/* Buttons */}
        <div style={{
          display: "flex",
          gap: "15px"
        }}>

          {/* Resume */}
          <a
            href="/resume.pdf"
            download
          >
            <button style={{
              padding: "12px 25px",
              background: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer"
            }}>
              Download Resume
            </button>
          </a>


          {/* GitHub */}
          <a
            href="https://github.com/Poojachandrika2905"
            target="_blank"
            rel="noreferrer"
          >
            <button style={{
              padding: "12px 25px",
              background: "#0f172a",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer"
            }}>
              GitHub
            </button>
          </a>


          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/pooja-chandrika-padabakkala-a37520288/"
            target="_blank"
            rel="noreferrer"
          >
            <button style={{
              padding: "12px 25px",
              background: "#0ea5e9",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer"
            }}>
              LinkedIn
            </button>
          </a>

        </div>

      </div>


      {/* Right Side Image */}
      <div>

        <img
          src={require("../assets/image.png")}
          alt="Pooja Chandrika"
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
