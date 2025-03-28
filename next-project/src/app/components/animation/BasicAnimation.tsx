"use client"


import { motion } from "framer-motion"

export default function BasicAnimation() {
  return (
    <motion.div
      initial={{ scale: 0.5}}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 1 }}
      className="w-32 h-32 bg-blue-500 rounded-lg"
    >
    </motion.div>
  )
}