import { motion } from "framer-motion";

function DrawingLine({ className = "border-accent absolute top-0" }) {
  return (
    <motion.hr
      initial={{ width: 0 }}
      whileInView={{ width: "100%" }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
      className={className}
    />
  );
}

export default DrawingLine;




// import { motion } from "framer-motion";

// const variants = {
//   hidden: { width: 0, opacity: 0 },
//   drawing: { width: "100%", opacity: 1 },
//   completed: { width: "100%", opacity: 0 },
// };

// function DrawingLine() {
//   return (
//     <motion.hr
//       initial="hidden"
//       animate="drawing"
//       transition={{ duration: 1, ease: "easeOut" }}
//       variants={variants}
//       onAnimationComplete={() => {
//         // After drawing is complete, transition to completed state
//         document.querySelector("hr").style.opacity = 0;
//       }}
//       className="border-accent"
//     />
//   );
// }

// export default DrawingLine;
