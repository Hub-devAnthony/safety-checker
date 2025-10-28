import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

function Header () {
  const [isOpen, setIsOpen ] = useState(false)
  
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="flex items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold">MyWebsite</h1>

        {/* Hamburger Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded focus:outline-none text-black z-50" 
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-blue-600">Home</a>
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#services" className="hover:text-blue-600">Services</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </nav>
      </div>

      {/* Mobile Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white bg-opacity-95 backdrop-blur-md flex flex-col items-center justify-center space-y-8 text-xl font-medium z-40"
          >
            <a href="#home" onClick={() => setIsOpen(false)} className="hover:text-blue-600">
              Home
            </a>
            <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-blue-600">
              About
            </a>
            <a href="#services" onClick={() => setIsOpen(false)} className="hover:text-blue-600">
              Services
            </a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-blue-600">
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;