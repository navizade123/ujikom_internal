import React from "react";
import "./homepage.css";

export function HomePage() {
  return (
    <div>
      <div className="image-container">
        <img src="5.jpg" className="gambar" alt="A descriptive text" />
        <h1>About</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum quaerat ab a adipisci porro praesentium, enim nesciunt sequi eius eveniet officia, nostrum ex expedita ad rerum repudiandae, dolores pariatur molestiae.</p>
        <div className="image-container1">
        <img src="Logo4.png" className="gambar" alt="A descriptive text" />
        <img src="Logo5.png" className="gambar" alt="A descriptive text" />
        <img src="Logo6.png" className="gambar" alt="A descriptive text" />
        <img src="Logo7.png" className="gambar" alt="A descriptive text" />
        </div>
        </div>
        </div>
  );
}

export default HomePage;
