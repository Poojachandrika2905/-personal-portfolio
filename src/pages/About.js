import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" style={{ background: "#ffffff" }}>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >

        <h2>About Me</h2>

        <p style={{ maxWidth: "800px", marginTop: "20px" }}>
          I am an aspiring Full Stack Developer with strong foundations in
          Java, Data Structures, and Object-Oriented Programming.
          I specialize in building scalable web applications using React,
          Node.js, and modern backend technologies.

          I have hands-on experience developing healthcare and mentorship
          platforms, and I am passionate about integrating Artificial
          Intelligence into real-world applications to create impactful
          solutions.
        </p>

      </motion.div>

    </section>
  );
}

export default About;
