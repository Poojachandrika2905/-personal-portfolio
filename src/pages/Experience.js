import React from "react";

function Experience() {
  return (
    <section id="experience" style={{ background: "white" }}>

      <h2 style={{ textAlign: "center" }}>Experience</h2>

      <div style={{
        maxWidth: "800px",
        margin: "40px auto",
        padding: "30px",
        background: "#f8fafc",
        borderRadius: "12px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.05)"
      }}>

        <h3>Full Stack Developer Intern</h3>

        <p style={{ color: "#2563eb" }}>
          Talentfarm.ai | Jan 2025 – Jul 2025
        </p>

        <ul>

          <li>
            Developed responsive frontend components using React, HTML, CSS, JavaScript
          </li>

          <li>
            Worked with backend technologies including Java Servlets and SQL
          </li>

          <li>
            Integrated frontend and backend systems efficiently
          </li>

          <li>
            Used Git for version control and team collaboration
          </li>

        </ul>

      </div>

    </section>
  );
}

export default Experience;
