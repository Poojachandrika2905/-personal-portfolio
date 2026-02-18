import React from "react";
import Particles from "react-tsparticles";

function ParticlesBackground() {
  return (
    <Particles
      options={{
        fullScreen: { enable: false },
        particles: {
          number: {
            value: 40
          },
          size: {
            value: 3
          },
          move: {
            enable: true,
            speed: 1
          },
          opacity: {
            value: 0.2
          },
          color: {
            value: "#2563eb"
          },
          links: {
            enable: true,
            opacity: 0.2
          }
        }
      }}
    />
  );
}

export default ParticlesBackground;
