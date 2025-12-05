import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen flex items-center justify-center py-20 bg-slate-900/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700"
          >
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
             Hi, I’m Adharshini who loves building things with code and constantly learning new technologies. I’m currently pursuing my education in computer science and actively working on improving my skills in web development and programming.

I have hands-on experience working with HTML, CSS, JavaScript, Bootstrap, React, Node.js, Express.js, MongoDB, Python, and SQL, and I enjoy turning ideas into real projects. I’ve built several applications including a Todos app, a speed typing test, a tourism website with database integration, a match-game using React, and a service platform website that connects people with local service providers. I also enjoy solving algorithmic problems and exploring data structures in languages like C and Python.

I’m passionate about creating user-friendly applications that solve real-world problems. I love learning new concepts, building projects, and continuously improving my skills through challenges and experimentation. Technologies excite me because they allow creativity and logic to come together to build something meaningful.

Outside of coding, I enjoy learning new ideas, exploring new tools, and working on projects that help me grow both personally and professionally. My goal is to become a strong full-stack developer and contribute to impactful software solutions.</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
