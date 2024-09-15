import { motion } from "framer-motion";
import React from "react";

const Marquee = ({ item , direction }) => {
  return (
    <div className="flex w-full bg-zinc-500 overflow-hidden">
      <motion.div
        initial={{ x: direction === "left" ? "0" : '-100%' }}
        animate={{ x: direction === "left" ? "-100%" : '0' }}
        transition={{ ease: "linear", duration: 20, repeat: Infinity }}
        className="py-5 flex flex-shrink-0 items-center gap-20 pr-20"
      >
        {item.map((url, index) => (
          <img key={index} src={url} />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: direction === "left" ? "0" : '-100%' }}
        animate={{ x: direction === "left" ? "-100%" : '0' }}
        transition={{ ease: "linear", duration: 20, repeat: Infinity }}
        className="py-5 flex flex-shrink-0 items-center gap-20 pr-20"
      >
        {item.map((url, index) => (
          <img key={index} src={url} />
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
