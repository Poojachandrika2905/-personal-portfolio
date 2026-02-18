import React from "react";
import { motion } from "framer-motion";

const skills = [
  "Java",
  "Python",
  "C",
  "React.js",
  "Node.js",
  "Express.js",
  "Flask",
  "MongoDB",
  "MySQL",
  "JavaScript",
  "HTML",
  "CSS",
  "Git",
  "Machine Learning",
  "Data Structures",
];

function Skills() {
  return (
    <section id="skills" style={{ background: "#f8fafc" }}>

      <h2 style={{
  textAlign:"center",
  position:"relative"
}}>
  Technical Skills

  <div style={{
    width:"60px",
    height:"4px",
    background:"#2563eb",
    margin:"10px auto",
    borderRadius:"2px"
  }}></div>

</h2>


      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
        gap: "20px",
        marginTop: "30px"
      }}>

        {skills.map((skill, index) => (

          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "10px",
              textAlign: "center",
              boxShadow: "0 5px 15px rgba(0,0,0,0.05)"
            }}
          >

            
            {skill}
          </motion.div>

        ))}

        

      </div>

    </section>
  );
  
}

export default Skills;
