import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Next.js', level: 88 },
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Python', level: 85 },
      { name: 'supabase', level: 82 },
      { name: 'MongoDB', level: 88 },
    ],
    color: 'from-green-500 to-emerald-500',
  },
  {
    category: 'Tools & Others',
    skills: [
      { name: 'Git', level: 93 },
      { name: 'Docker', level: 80 },
      { name: 'AWS', level: 78 },
      { name: 'CI/CD', level: 85 },
    ],
    color: 'from-purple-500 to-pink-500',
  },
];

function SkillBar({ skill, inView, color }: { skill: { name: string; level: number }; inView: boolean; color: string }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setWidth(skill.level);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [inView, skill.level]);

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-slate-300">{skill.name}</span>
        <span className="text-slate-400">{skill.level}%</span>
      </div>
      <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
        <motion.div
          className={`h-full bg-gradient-to-r ${color} rounded-full`}
          initial={{ width: 0 }}
          animate={{ width: `${width}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}

export function Skills() {
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
            Skills & Expertise
          </h2>
          <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700"
              >
                <h3 className={`text-2xl mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.category}
                </h3>
                {category.skills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} inView={inView} color={category.color} />
                ))}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
