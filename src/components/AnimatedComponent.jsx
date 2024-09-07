import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AnimatedComponent = () => {
  // Create a reference for the component
  const ref = useRef(null);

  // Use the useInView hook to detect when the component enters the viewport
  const isInView = useInView(ref, { once: true }); // once: true triggers animation only once

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }} // Initial state before entering the viewport
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }} // Animate when in view
      transition={{ duration: 0.6 }} // Adjust transition timing
      className="p-6 bg-blue-500 rounded-lg text-white"
    >
      <h2 className="text-xl font-bold">Hello, I'm an animated component!</h2>
      <p>Watch me fade in as I enter the viewport.</p>
    </motion.div>
  );
};

export default AnimatedComponent;
