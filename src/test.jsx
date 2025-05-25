import { useState, useEffect, useRef } from "react";

const ServicesItem = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  // Intersection Observer to detect visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger animation
          observer.unobserve(ref.current); // Stop observing after first appearance
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect(); // Cleanup
  }, []);

  return (
    <div
      ref={ref}
      className={`services-item ${isVisible ? "show" : ""}`}
    >
      I appear when you scroll!
    </div>
  );
};

export default ServicesItem;
