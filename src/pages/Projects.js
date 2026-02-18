import React from "react";

const projects = [

  {
    title: "Qurelio – AI Healthcare Triage System",

    description:
      "Developed an AI-powered healthcare web application that analyzes patient symptoms and prioritizes cases based on severity. The system helps improve response time and healthcare efficiency.",

    tech: "React.js, Node.js, Express.js, Flask, MongoDB, Python",
  },

  {
    title: "Mentor Mentee Management System",

    description:
      "Built a full-stack mentorship platform enabling students and mentors to connect, communicate, and manage sessions using secure authentication and dashboards.",

    tech: "React.js, JSP, Servlets, SQL, Apache Tomcat",
  }

];

function Projects() {
  return (
    <section id="projects" style={{ background: "#f8fafc" }}>

      <h2 style={{ textAlign: "center" }}>Projects</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "30px",
        marginTop: "40px"
      }}>

        {projects.map((project, index) => (

          <div key={index}
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "12px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
              transition: "0.3s"
            }}

            onMouseOver={e => e.currentTarget.style.transform="translateY(-8px)"}
            onMouseOut={e => e.currentTarget.style.transform="translateY(0px)"}
          >

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <p style={{
              color: "#2563eb",
              fontWeight: "bold"
            }}>
              {project.tech}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;
