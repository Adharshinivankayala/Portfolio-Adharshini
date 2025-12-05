import { motion } from 'motion/react';
import { Mail, Phone, Linkedin, Github, Download, ArrowDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import { ProfileImage } from "./figma/ImageWithFallback";  // ✅ Correct import path

export function Hero() {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Hi, I'm Adharshini";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, index + 1));
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Adharshini_Fullstack_Resume.pdf";
    link.download = "Adharshini_Fullstack_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const socialLinks = [
    { icon: Mail, label: 'Email', value: 'vankayalaadharshini2006@example.com', href: 'mailto:vankayalaadharshini2006@example.com' },
    { icon: Phone, label: 'Phone', value: '6305624025', href: 'tel:6305624025' },
    { icon: Linkedin, label: 'LinkedIn', value: 'https://www.linkedin.com/in/vankayala-adharshini-080443292/', href: 'https://www.linkedin.com/in/vankayala-adharshini-080443292/' },
    { icon: Github, label: 'GitHub', value: 'https://github.com/Adharshinivankayala', href: 'https://github.com/Adharshinivankayala' },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">

          {/* ---------------------------------------
              👇 UPDATED AVATAR WITH REAL IMAGE
          ---------------------------------------- */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="mb-8"
          >
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1 overflow-hidden">
              <div className="w-full h-full rounded-full bg-slate-900 overflow-hidden">
                <ProfileImage />
              </div>
            </div>
          </motion.div>

          {/* Typing Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent min-h-[4rem]"
          >
            {displayText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            >
              |
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-300 mb-12"
          >
            Full Stack Developer | Creative Problem Solver | Tech Enthusiast
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 max-w-2xl mx-auto"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.05, x: 5 }}
                className="flex items-center gap-3 bg-slate-800/50 backdrop-blur-sm p-4 rounded-lg border border-slate-700 hover:border-blue-500 transition-all"
              >
                <link.icon className="text-blue-400" size={24} />
                <div className="text-left">
                  <div className="text-sm text-slate-400">{link.label}</div>
                  <div className="text-slate-200">{link.value}</div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Download Resume */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownloadResume}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition-all"
          >
            <Download size={24} />
            Download Resume
          </motion.button>

          {/* Down Arrow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-16"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown className="mx-auto text-slate-400" size={32} />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
