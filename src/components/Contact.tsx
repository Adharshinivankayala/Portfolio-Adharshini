import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { Send, CheckCircle, Mail, User, MessageSquare } from 'lucide-react';
import { toast } from 'sonner';

export function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      
      // Store in localStorage as a simple frontend solution
      const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
      submissions.push({
        ...formData,
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem('contactSubmissions', JSON.stringify(submissions));

      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success('Message sent successfully! I\'ll get back to you soon.');

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen py-20 bg-slate-900/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-center bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-center text-slate-400 mb-12">
            Have a question or want to work together? Feel free to reach out!
          </p>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            onSubmit={handleSubmit}
            className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700"
          >
            <div className="mb-6">
              <label htmlFor="name" className="flex items-center gap-2 text-slate-300 mb-2">
                <User size={18} />
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="Your name"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="flex items-center gap-2 text-slate-300 mb-2">
                <Mail size={18} />
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="flex items-center gap-2 text-slate-300 mb-2">
                <MessageSquare size={18} />
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              whileHover={{ scale: isSubmitting || isSubmitted ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting || isSubmitted ? 1 : 0.98 }}
              className={`w-full py-4 rounded-lg flex items-center justify-center gap-3 transition-all ${
                isSubmitted
                  ? 'bg-green-600 hover:bg-green-500'
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg hover:shadow-blue-500/50'
              } ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                  Sending...
                </>
              ) : isSubmitted ? (
                <>
                  <CheckCircle size={20} />
                  Sent Successfully!
                </>
              ) : (
                <>
                  <Send size={20} />
                  Send Message
                </>
              )}
            </motion.button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-8 text-center text-slate-400 text-sm"
          >
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
