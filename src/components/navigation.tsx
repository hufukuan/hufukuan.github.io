'use client';

import { useState, useEffect } from 'react';

const navItems = [
  { label: 'Education', id: 'education' },
  { label: 'Research', id: 'research' },
  { label: 'Publications', id: 'publications' },
  { label: 'Awards', id: 'awards' },
  { label: 'Service', id: 'service' },
  { label: 'Skills', id: 'skills' },
  { label: 'Blog', id: 'blog' },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('education');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => ({
        id: item.id,
        element: document.getElementById(item.id),
      }));

      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        if (!section.element) continue;
        const { offsetTop, offsetHeight } = section.element;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-950/95">
      <div className="mx-auto max-w-4xl px-6">
        <div className="flex gap-1 overflow-x-auto py-4 scrollbar-hide">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                activeSection === item.id
                  ? 'bg-blue-600 text-white shadow-md dark:bg-blue-500'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
