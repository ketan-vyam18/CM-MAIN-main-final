import { useState } from "react";
import "./animate.css"; // Make sure animate.css is imported

function DropdownMenu() {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false); // Trigger fade-out animation
  };

  const handleAnimationEnd = () => {
    if (!isVisible) {
      console.log("Animation ended, element faded out!");
    }
  };

  return (
    <div>
      <div
        id="drop_list"
        className={`animate__animated ${isVisible ? "animate__fadeIn" : "animate__fadeOut"}`}
        onAnimationEnd={handleAnimationEnd}
      >
        <img 
          id="pop" 
          className="animate__animated animate__fadeInLeft" 
          src="./public/WhatsApp_Image_2025-02-28_at_21.50.10_86d30eac-removebg-preview 2.svg" 
          alt="Popup"
        />
        <button 
          id="cross" 
          className="animate__animated animate__fadeInRight"  
          onClick={handleClose}
        >
          ☰
        </button>
        <p id="items" className="animate__animated animate__fadeInDown" style={{ animationDelay: "0.3s" }}>Home</p>
        <p id="items" className="animate__animated animate__fadeInDown" style={{ animationDelay: "0.5s" }}>Infinitum</p>
        <p id="items" className="animate__animated animate__fadeInDown" style={{ animationDelay: "1s" }}>Events</p>
        <p id="items" className="animate__animated animate__fadeInDown" style={{ animationDelay: "1.2s" }}>Our Team</p>
        <p id="items" className="animate__animated animate__fadeInDown" style={{ animationDelay: "1.5s" }}>Gallery</p>
      </div>
    </div>
  );
}

export default DropdownMenu;
