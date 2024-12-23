"use client";
import { motion } from "framer-motion";
import React from "react";

export default function AnimatedSection(props) {
  return <motion.div {...props}>{props.children}</motion.div>;
}
