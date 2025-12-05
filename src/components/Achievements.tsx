import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Trophy, Award, Star, Target, Zap, Code, Users, Rocket, Medal, Crown } from 'lucide-react';

const achievements = [
  {
    id: 1,
    icon: Medal,
    title: 'Finalist – Buildathon Competition',
    description: 'Selected among the top 700 teams out of 80,000+ participants in a national-level Buildathon.',
    date: '2024',
    color: 'from-amber-400 to-yellow-500',
  },
  {
    id: 2,
    icon: Trophy,
    title: 'Participant – Smart India Hackathon (SIH)',
    description: 'Participated in the Smart India Hackathon demonstrating strong problem-solving skills.',
    date: '2024',
    color: 'from-blue-400 to-cyan-500',
  },
  {
    id: 3,
    icon: Code,
    title: 'Participant – StackHack 72-Hour Hackathon',
    description: 'Built an automatic timetable generator during an intense 72-hour StackHack hackathon.',
    date: '2023',
    color: 'from-purple-400 to-pink-500',
  },
  {
    id: 4,
    icon: Medal,
    title: 'AWS Project Completion Certificate',
    description: 'Completed AWS project implementation using S3, EC2, and RDS services.',
    date: '2024',
    color: 'from-green-400 to-emerald-500',
  },
  {
    id: 5,
    icon: Code,
    title: 'MCP Project Completion Certificate',
    description: 'Developed an AI agent for one-to-one communication that works on keypad phones.',
    date: '2024',
    color: 'from-indigo-400 to-blue-500',
  },
  {
    id: 6,
    icon: Award,
    title: 'NPTEL Elite Certificate – HR Analytics',
    description: 'Earned an Elite certificate for successfully completing the NPTEL HR Analytics course.',
    date: '2024',
    color: 'from-red-400 to-amber-500',
  },
  {
    id: 7,
    icon: Star,
    title: 'UI/UX Project Certificate',
    description: 'Designed Spotify web UI pages using Figma as part of a UI/UX practical project.',
    date: '2024',
    color: 'from-pink-400 to-violet-500',
  },
];

export function Achievements() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen py-20 bg-slate-900/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-center bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Achievements
          </h2>
          <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto">
            Milestones and recognition earned throughout my journey
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative group"
                >
                  {/* Hover glow background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${achievement.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl rounded-2xl`}
                  />

                  <div className="relative bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-slate-600 transition-all">
                    <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${achievement.color} flex items-center justify-center mb-4`}>
                      <Icon className="text-white" size={28} />
                    </div>

                    <div className="text-sm text-slate-500 mb-2">{achievement.date}</div>
                    <h3 className="text-lg mb-2 text-slate-50">{achievement.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {achievement.description}
                    </p>

                    <motion.div
                      className={`absolute top-4 right-4 w-2 h-2 rounded-full bg-gradient-to-r ${achievement.color}`}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
