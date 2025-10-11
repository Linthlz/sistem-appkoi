import React from "react";
import { motion } from "framer-motion";

const smoothVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98,
    filter: "blur(8px)",
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: [0.25, 0.1, 0.25, 1], // cubic-bezier ease-in-out
    },
  },
  exit: {
    opacity: 0,
    y: -15,
    scale: 0.98,
    filter: "blur(6px)",
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const AnimatedPage = ({ children }) => {
  return (
    <motion.div
      variants={smoothVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        willChange: "transform, opacity, filter",
        overflow: "hidden",
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
