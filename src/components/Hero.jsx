// src/components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => (
  <motion.section
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-center py-12"
  >
    <h2 className="text-3xl font-bold">Katika Mohammed Shanawaz</h2>
    <p className="mt-2 text-lg">Passionate Computer Science Student | Aspiring Developer</p>
  </motion.section>
);

export default Hero;
