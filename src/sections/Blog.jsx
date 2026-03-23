import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { blogs } from '../data/blogs';

const Blog = ({ setView, view }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  // Check if a specific blog is selected
  const isSinglePost = view.startsWith('blog-');
  const blogId = isSinglePost ? parseInt(view.split('-')[1], 10) : null;
  const currentBlog = isSinglePost ? blogs.find(b => b.id === blogId) : null;

  if (isSinglePost && currentBlog) {
    return (
      <div className="bg-[#0a0a0a] min-h-screen text-white pt-24 pb-20 px-4 md:px-12 lg:px-24 flex flex-col items-center">
        <article className="max-w-3xl w-full animate-fade-up animate-duration-700">
          <button 
            onClick={() => setView('blog')}
            className="group flex items-center space-x-2 text-gray-400 hover:text-white transition-colors mb-12"
          >
            <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            <span>Back to all posts</span>
          </button>

          <header className="mb-12">
            <p className="text-cyan-500 font-medium mb-4 tracking-wide">{currentBlog.date}</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
              {currentBlog.title}
            </h1>
            <div className="h-px w-full bg-white/10 mt-8"></div>
          </header>

          {currentBlog.image && (
            <div className="mb-12 w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img 
                src={currentBlog.image} 
                alt={currentBlog.title} 
                className="w-full h-auto object-cover max-h-[600px]"
              />
            </div>
          )}

          <div className="max-w-none w-full">
            {Array.isArray(currentBlog.content) 
              ? currentBlog.content.map((block, index) => {
                  if (typeof block === 'string') {
                    return block.split(/\n\s*\n/).map((paragraph, pIndex) => (
                      <p key={`text-${index}-${pIndex}`} className="mb-8 text-lg md:text-xl font-light text-gray-300 leading-loose">
                        {paragraph.trim()}
                      </p>
                    ));
                  } else if (block.type === 'image') {
                    return (
                      <figure key={`img-${index}`} className="my-12 w-full">
                        <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-white/5">
                          <img 
                            src={block.src} 
                            alt={block.alt || 'Blog image'} 
                            className="w-full h-auto object-cover max-h-[700px] mx-auto" 
                          />
                        </div>
                        {block.caption && (
                          <figcaption className="mt-4 text-center text-sm text-gray-400 italic">
                            {block.caption}
                          </figcaption>
                        )}
                      </figure>
                    );
                  }
                  return null;
                })
              : currentBlog.content.split(/\n\s*\n/).map((paragraph, index) => (
                  <p key={index} className="mb-8 text-lg md:text-xl font-light text-gray-300 leading-loose">
                    {paragraph.trim()}
                  </p>
                ))
            }
          </div>
        </article>
      </div>
    );
  }

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white pt-24 pb-20 px-4 md:px-12 lg:px-24 flex flex-col items-center">
      <div className="max-w-4xl w-full animate-fade-up animate-duration-700">
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
            <article 
              key={blog.id} 
              onClick={() => setView(`blog-${blog.id}`)}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors duration-300 group cursor-pointer"
            >
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
  view: PropTypes.string.isRequired,
};

export default Blog;
