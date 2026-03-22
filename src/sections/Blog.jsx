import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { blogs } from '../data/blogs';

const Blog = ({ setView }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white pt-24 pb-20 px-4 md:px-12 lg:px-24 flex flex-col items-center">
      <div className="max-w-4xl w-full">
        <button 
          onClick={() => setView('home')}
          className="group flex items-center space-x-2 text-gray-400 hover:text-white transition-colors mb-12"
        >
          <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          <span>Back to Home</span>
        </button>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Blog</h1>
        <p className="text-gray-400 mb-12 text-lg">Thoughts on software engineering, problem solving, and life.</p>

        <div className="space-y-8">
          {blogs.map((blog) => (
            <article key={blog.id} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors duration-300 group cursor-pointer">
              <p className="text-cyan-500 text-sm font-medium mb-3">{blog.date}</p>
              <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{blog.title}</h2>
              <p className="text-gray-400 leading-relaxed">{blog.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

Blog.propTypes = {
  setView: PropTypes.func.isRequired,
};

export default Blog;