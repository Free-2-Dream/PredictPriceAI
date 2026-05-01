"use client";
import React, { useState } from 'react';
import { Github, Linkedin, Mail, Moon, Sun, ExternalLink, Code, Database, Server, Layers } from 'lucide-react';



const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true);



  const NavBar = () => (
    <nav
      className={`fixed w-full top-0 z-50 ${darkMode ? "bg-gray-900/95 border-gray-800" : "bg-white/95 border-gray-200"
        } backdrop-blur-sm border-b`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo / Nom */}
          <a
            href="#home"
            className={`text-xl font-bold ${darkMode ? "text-white" : "text-gray-900"
              }`}
          >
            PreditAI
          </a>

          {/* Navigation */}
          <div className="flex items-center gap-8">
            <a
              href="#home"
              className={`${darkMode ? "text-gray-300" : "text-gray-600"
                } hover:text-blue-500 transition-colors`}
            >
              Accueil
            </a>

            <a
              href="#about"
              className={`${darkMode ? "text-gray-300" : "text-gray-600"
                } hover:text-blue-500 transition-colors`}
            >
              À propos
            </a>





            <a
              href="#contact"
              className={`${darkMode ? "text-gray-300" : "text-gray-600"
                } hover:text-blue-500 transition-colors`}
            >
              Contact
            </a>

            {/* Dark mode toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg ${darkMode
                ? "bg-gray-800 text-yellow-400"
                : "bg-gray-200 text-gray-700"
                } hover:scale-110 transition-transform`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );


  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <NavBar />

      <div className="pt-20">

      </div>

      PredictPriceAI
    </div>

  );
};

export default Portfolio;













