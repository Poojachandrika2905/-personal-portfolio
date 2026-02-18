import React from "react";

function Navbar() {

  const linkStyle = {
  textDecoration: "none",
  color: "#0f172a",
  fontWeight: "500",
  cursor: "pointer",
  transition: "0.3s"
};


  return (

    <nav style={{
      position: "sticky",
      top: 0,
      background: "white",
      padding: "20px 10%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
      zIndex: 1000
    }}>

      <h2 style={{color:"#2563eb"}}>
        Pooja Chandrika
      </h2>

      <div style={{display:"flex", gap:"30px"}}>

        <a href="#home"
   style={linkStyle}
   onMouseOver={e => e.target.style.color="#2563eb"}
   onMouseOut={e => e.target.style.color="#0f172a"}
>
Home
</a>


        <a href="#Skills"
   style={linkStyle}
   onMouseOver={e => e.target.style.color="#2563eb"}
   onMouseOut={e => e.target.style.color="#0f172a"}
>
Skills
</a>


        <a href="#experience"
   style={linkStyle}
   onMouseOver={e => e.target.style.color="#2563eb"}
   onMouseOut={e => e.target.style.color="#0f172a"}
>
Experience
</a>


        <a href="#projects"
   style={linkStyle}
   onMouseOver={e => e.target.style.color="#2563eb"}
   onMouseOut={e => e.target.style.color="#0f172a"}
>
Projects
</a>


        <a href="#contact"
   style={linkStyle}
   onMouseOver={e => e.target.style.color="#2563eb"}
   onMouseOut={e => e.target.style.color="#0f172a"}
>
Contact
</a>


      </div>

    </nav>

  );
}

export default Navbar;
