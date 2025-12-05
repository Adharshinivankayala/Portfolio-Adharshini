import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    id: 1,
    title: 'Rural education system without internet',
    description: 'Developed an offline-first Rural Education System designed for students in low-connectivity areas, enabling uninterrupted learning without internet access. The platform uses React, Node.js, and intelligent caching to deliver lessons, while AI-powered voice assistance through n8n workflows provides personalized, interactive learning experiences even on basic devices.',
    image: 'https://media.istockphoto.com/id/1324689337/photo/indian-village-government-school-girls-operating-laptop-computer-system-at-rural-area-in-india.jpg?s=612x612&w=0&k=20&c=yXYV73UwR6ZXOhcxv96TVNLH_A3AvL55qjaA3BRSDPY=',
    github: 'https://github.com/Adharshinivankayala/Digital-Learning-for-Rural-Students.git',
    demo: 'https://drive.google.com/file/d/1qCwXmZbViGY7cbcp0BAOAYl8eGyGgkcP/view?usp=sharing',
    tags: ['React', 'Node.js', 'supabase','n8n','ai-integration','Tailwind CSS','TensorFlow','face-api','Debugging Tools','SWC Compiler','Docker'],
  },
  {
    id: 2,
    title: 'Emergency Home Services',
    description: 'Emergency Home Services is a MERN-stack web platform that connects users with nearby technicians during urgent household breakdowns such as electrical issues, plumbing leaks, or appliance failures. The system allows users to quickly book a service, track technician arrival, and receive real-time updates. It includes secure login, role-based dashboards for customers and service providers, and a centralized request-management module. The backend handles automated assignment of the nearest available technician using location-based filtering, while the frontend provides a fast, mobile-responsive interface for emergency requests. This project focuses on reducing response time and improving accessibility to essential home repair services.',
    image: 'https://media.istockphoto.com/id/2159028481/photo/house-fire.jpg?s=612x612&w=0&k=20&c=mHMtIWAQSjplszmBCzRMSWbYlDgjbNHz3jthJz7Fe_g=',
    github: 'https://github.com/Adharshinivankayala/Emergency-Home-Services-frontend-.git',
    demo: 'https://emergency-home-services-website-8fk.vercel.app/',
    tags: ['React', 'Firebase', 'Tailwind CSS','Node.js','Express.js','supabase'],
  },
  {
    id: 3,
    title: 'Auto-Quiz-Generator',
    description: 'An intelligent web application that generates MCQ quizzes automatically by extracting content from any Wikipedia link provided by the user. The system analyzes the page using NLP techniques, identifies key facts, and creates questions with accurate options and answers. This helps learners quickly test their understanding of any topic without manual question creation.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREzl1kPUYqBbu8IGGIs7FursJaz_r3juwZkQ&s',
    github: 'https://github.com/Adharshinivankayala/ai-quiz-generator-app.git',
    demo: 'https://ai-quiz-generator-app-zt5v.vercel.app/',
    tags: ['React','Python','Django','AI Integration','NLP','Web Scraping','Machine Learning','AI-powered Quiz Generator','Wikipedia Data Extraction','Text Processing','Question Generation'],
  },
];

export function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen py-20 bg-slate-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-center bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500 transition-all group"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl mb-3">{project.title}</h3>
                  <p className="text-slate-400 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors"
                    >
                      <Github size={20} />
                      Code
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors"
                    >
                      <ExternalLink size={20} />
                      Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
