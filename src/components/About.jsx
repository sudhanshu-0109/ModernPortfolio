import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="px-5 lg:px-28 flex justify-between flex-col lg:flex-row" id="about">
      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
        viewport={{ once: true }}
      >
        <img src="/assets/about-me.svg" alt="About Me Illustration" />
      </motion.div>

      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="lg:text-4xl text-2xl mt-4 lg:mt-0">
          About <span className="font-extrabold">Me</span>
        </h2>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-5 lg:mt-10">
          I'm an Aspiring Software Engineer and B.Tech CSE student focused on Full-Stack Development and Backend Architecture. Skilled in Java, Python, React.js, Django REST Framework, and modern web technologies.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          I enjoy building end-to-end applications — from role-based healthcare platforms and office management systems to animation-rich frontend clones. My work emphasizes scalable backends, clean APIs, and thoughtful user experiences.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          I'm passionate about solving real-world problems, optimizing systems, and growing as a developer. Connect with me on LinkedIn, explore my projects on GitHub, or check out my LeetCode profile.
        </p>
      </motion.div>
    </div>
  );
}
