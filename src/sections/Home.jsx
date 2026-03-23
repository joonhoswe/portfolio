import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cmu from '../assets/cmu.jpeg';
import { blogs } from '../data/blogs';

const Home = forwardRef((props, ref) => {
  const { setView } = props;

  return (
    <div ref={ref} className="text-white flex flex-col items-center relative w-full bg-[#0a0a0a] pt-20 pb-12">
      
      {/* Hero Section */}
      <div className="w-full max-w-4xl px-4 flex flex-col items-start z-10 mb-24">
        <h2 className="text-5xl md:text-7xl font-mono font-bold tracking-tight mb-6 animate-fade-up animate-duration-1000">
          Jonathan Oh
        </h2>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed mb-8 animate-fade-up animate-duration-1000 animate-delay-300">
          Hi! I&apos;m currently a student at Carnegie Mellon University. 
          I love learning about and building scalable systems, cooking, and lifting. Right now, I&apos;m training for my first half-marathon!
        </p>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 animate-fade-up animate-duration-1000 animate-delay-500">
          <div className="flex items-center space-x-4 text-gray-400">
            <img src={cmu} className='h-8 w-8 rounded-md object-cover' alt='CMU logo'/>
            <p className="text-sm font-medium tracking-wide">
              B.S. Information Systems & Computer Science
            </p>
          </div>
        </div>
      </div>

      {/* Recent Blog Posts Section */}
      <div className="w-full max-w-4xl px-4 z-10 animate-fade-up animate-duration-1000 animate-delay-700">
        <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
          <h3 className="text-2xl font-bold">Recent Writing</h3>
          <button 
            onClick={() => setView('blog')}
            className="text-sm text-gray-400 hover:text-white transition-colors flex items-center space-x-1 group"
          >
            <span>Read all</span>
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>

        <div className="flex flex-col space-y-6">
          {blogs.slice(0, 2).map((blog) => (
            <div 
              key={blog.id} 
              onClick={() => setView(`blog-${blog.id}`)}
              className="group cursor-pointer"
            >
              <p className="text-cyan-500 text-sm font-medium mb-2">{blog.date}</p>
              <h4 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{blog.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">{blog.summary}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Subtle background glow for modern feel */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -z-10"></div>
    </div>
  );
});

Home.displayName = 'Home';

Home.propTypes = {
  setView: PropTypes.func.isRequired,
};

export default Home;
