import React from "react";

function Contact() {
  return (
    <section id="contact" style={{ background: "white" }}>

      <h2 style={{ textAlign: "center" }}>
        Contact Me
      </h2>

      <p style={{
        textAlign: "center",
        maxWidth: "600px",
        margin: "10px auto",
        color: "#475569"
      }}>
        I'm open to internships and full-time opportunities.
        Feel free to contact me through email or LinkedIn.
      </p>

      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        marginTop: "30px"
      }}>

        {/* Email Button */}
        <a href="mailto:pooja.chandrika2004@gmail.com">

          <button style={{
            padding: "12px 25px",
            background: "#2563eb",
            borderRadius: "8px",
            border: "none",
            color: "white",
            cursor: "pointer"
          }}>
            Email Me
          </button>

        </a>

        {/* LinkedIn Button */}
        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noreferrer"
        >

          <button style={{
            padding: "12px 25px",
            background: "#0ea5e9",
            borderRadius: "8px",
            border: "none",
            color: "white",
            cursor: "pointer"
          }}>
            LinkedIn
          </button>

        </a>

      </div>

    </section>
  );
}

export default Contact;
