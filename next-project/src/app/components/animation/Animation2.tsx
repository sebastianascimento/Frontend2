"use client"


import { motion } from "framer-motion"

export default function Animation2() {
  return (
    <motion.div
      whileHover={{ scale: 0.5}}
      whileTap={{ scale: 1 }}
      className="bg-green-500 text-white py-2 rounded-lg"
    >
    </motion.div>
  )
}