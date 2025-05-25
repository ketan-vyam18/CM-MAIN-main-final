import React, { useRef } from "react";
import { useInView } from "framer-motion";

// import { toggleMenu } from "./App.jsx";
interface Props {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number; // Optional delay prop for CSS
  
}

export const Reveal = ({ children, width = "fit-content", delay = 0 }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref); // Detects if element is in viewport

  return (
    <div
      ref={ref}
      className={isInView ? "post_an services-item animate__animated animate__fadeInDown" : ""}
      style={{
        width,
        visibility: isInView ? "visible" : "hidden",
        animationDelay: `${delay}s`, // Pass delay to CSS
        padding: 0
      }}
    >
      {children}
    </div>
  );
};


export const Animate_1 = ({ children, width = "fit-content", delay=0  }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref); // Detects if element is in viewport

  return (
    <div
      ref={ref}
      className={isInView ? "dive animate__animated animate__flipInX" : ""}
      style={{
        width,
        opacity: isInView ? 1 : 0, // Prevent distortion
        transition: `opacity 0.5s ease-in-out `,
        animationDelay:`${delay}s`
      }}
    >
      {children}
    </div>
  );
};
export const Animate_2 = ({ children, width = "fit-content", delay =0 }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div
      ref={ref}
      className={isInView ? "team animate__animated animate__fadeInLeft" : ""}
      style={{
        width,
        opacity: isInView ? 1 : 0, 
        transition: `opacity 0.5s ease-in-out `, // Apply delay
        animationDelay:`${delay}s`
      }}
    >
      {children}
    </div>
  );
};
export const Animate_3 = ({ children, width = "fit-content", delay =0 }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div
      ref={ref}
      className={isInView ? "counter wow animate__animated animate__fadeInRight" : ""}
      style={{
        width,
        opacity: isInView ? 1 : 0, 
        transition: `opacity 0.5s ease-in-out `, // Apply delay
        animationDelay:`${delay}s`
      }}
    >
      {children}
    </div>
  );
};
export const Animate_4 = ({ children, width = "fit-content", delay =0 }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div
      ref={ref}
      className={isInView ? "animate__animated animate__fadeInLeft" : ""}
      style={{
        width,
        opacity: isInView ? 1 : 0, 
        transition: `opacity 0.5s ease-in-out `, // Apply delay
        animationDelay:`${delay}s`
      }}
    >
      {children}
    </div>
  );
};
export const Animate_5 = ({ children, width = "fit-content", delay =0 }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div
      ref={ref}
      className={isInView ? "drop_list animate__animated animate__fadeIn" : ""}
      style={{
        width,
        opacity: isInView ? 1 : 0, 
        transition: `opacity 0.5s ease-in-out `, // Apply delay
        animationDelay:`${delay}s`
      }}
    >
      {children}
    </div>
  );
};
export const Animate_6 = ({ children, width = "fit-content", delay =0 }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div
      ref={ref}
      className={isInView ? "animate__animated animate__fadeInLeft" : ""}

      style={{
        width,
        opacity: isInView ? 1 : 0, 
        transition: `opacity 0.5s ease-in-out `, // Apply delay
        animationDelay:`${delay}s`
      }}
    >
      {children}
    </div>
  );
};
export const Animate_7 = ({ children, width = "fit-content", delay =0 }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div
      ref={ref}
      className={isInView ? "animate__animated animate__flipInX" : ""}

      style={{
        width,
        opacity: isInView ? 1 : 0, 
        transition: `opacity 0.5s ease-in-out `, // Apply delay
        animationDelay:`${delay}s`
      }}
    >
      {children}
    </div>
  );
};
export const Animate_8 = ({ children, width = "fit-content", delay =0 }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div
      ref={ref}
      className={isInView ? "animate__animated animate__fadeInLeft" : ""}
      
      style={{
        width,
        opacity: isInView ? 1 : 0, 
        transition: `opacity 0.5s ease-in-out `, // Apply delay
        animationDelay:`${delay}s`
      }}
    >
      {children}
    </div>
  );
};
export const Animate_9 = ({ children, width = "fit-content", delay =0 }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div
      ref={ref}
      className={isInView ? "animate__animated animate__fadeInRight " : ""}

      style={{
        width,
        
        opacity: isInView ? 1 : 0, 
        transition: `opacity 0.5s ease-in-out `, // Apply delay
        animationDelay:`${delay}s`
      }}
    >
      {children}
    </div>
  );
};
export const Animate_10 = ({ children, width = "fit-content", delay =0 }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div
      ref={ref}
      className={isInView ? "animate__animated animate__fadeInRight " : ""}
      
      style={{
        width,
        opacity: isInView ? 1 : 0, 
        transition: `opacity 0.5s ease-in-out `, // Apply delay
        animationDelay:`${delay}s`
      }}
    >
      {children}
    </div>
  );
};
export const Animate_11 = ({ children, width = "fit-content", delay =0 }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div
      ref={ref}
      className={isInView ? "animate__animated animate__fadeIn" : ""}
      
      style={{
        width,
        opacity: isInView ? 1 : 0, 
        transition: `opacity 0.5s ease-in-out `, // Apply delay
        animationDelay:`${delay}s`
      }}
    >
      {children}
    </div>
  );
};




// export const Animate_5 = ({ children, width = "fit-content", delay = 0 }: Props) => {
//   const ref = useRef(null);
//   const isInView = useInView(ref);
//   const { isOpen, toggle } = toggleMenu(); // Get state and toggle function

//   return (
//     <div
//       ref={ref}
//       className={isOpen ? "dropdown_open animate__animated animate__fadeIn" : "dropdown animate__animated animate__fadeOut"}
//       style={{
//         width,
//         transition: `opacity 0.5s ease-in-out`,
//         animationDelay: `${delay}s`,
//       }}
//     >
//       <button id="cross" onClick={toggle}>☰</button>  {/* Toggle Button */}
//       {children}
//     </div>
//   );
// };




