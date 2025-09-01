import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "./Header";
import FooterSection from "./FooterSection";
import TextGradient from "./mini/TextGradient";
import Button from "./mini/Button";
import { FaArrowLeft, FaCalendarAlt, FaClock, FaUser, FaTag, FaShare, FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

// Mock blog data - replace with your actual backend API call
const mockBlogPosts = {
  1: {
    id: 1,
    title: "The Hidden Costs of Broken Systems",
    content: `
# The Hidden Costs of Broken Systems

Running a business with inefficient systems is like driving with the handbrake on – you're moving forward, but at what cost? The hidden expenses of broken workflows, manual processes, and disconnected tools can silently drain your resources and stunt your growth.

## The Real Impact on Your Bottom Line

When we talk about broken systems, we're not just referring to obvious failures. Often, the most damaging issues are the subtle inefficiencies that compound over time:

### 1. Time Hemorrhaging
Every manual task that could be automated represents lost opportunity. Consider Sarah, a marketing director who spends 3 hours weekly compiling reports from different platforms. That's 156 hours annually – nearly a month of full-time work that could be spent on strategy and growth.

### 2. Error Multiplication
Manual processes don't just waste time; they introduce human error. A single data entry mistake can cascade through your entire operation, leading to:
- Incorrect customer communications
- Faulty financial reporting  
- Missed opportunities
- Damaged client relationships

### 3. Team Frustration and Turnover
Nothing burns out talented employees faster than being bogged down by inefficient processes. When your team spends more time fighting systems than adding value, you're setting yourself up for:
- Decreased productivity
- Higher turnover rates
- Increased recruitment costs
- Lost institutional knowledge

## Identifying Your Pain Points

Before you can fix broken systems, you need to identify them. Here are the warning signs to watch for:

**Process Red Flags:**
- Tasks that require multiple apps or platforms
- Regular "workarounds" that bypass standard procedures
- Frequent errors or rework
- Information silos between departments
- Manual data entry between systems

**Team Indicators:**
- Complaints about "busy work"
- Difficulty accessing needed information
- Inconsistent outputs from similar processes
- High stress during routine operations

## The Cost of Inaction

Delaying system improvements isn't just maintaining the status quo – it's actively choosing inefficiency. As your business grows, broken systems become exponentially more expensive:

- **Scale Amplifies Problems**: A 10% inefficiency with 5 employees becomes a 50% loss with 50 employees
- **Opportunity Cost**: Time spent on manual tasks is time not spent on revenue-generating activities  
- **Competitive Disadvantage**: Companies with efficient systems move faster and serve customers better

## Building Better Systems

The good news? Most system improvements don't require massive overhauls. Start with these principles:

### 1. Map Your Current State
Document how work actually flows through your organization – not how it's supposed to work, but how it really works. This reveals the gaps between intention and reality.

### 2. Identify Quick Wins
Look for processes that can be improved with minimal investment. Often, simple automation or better tool integration can yield immediate results.

### 3. Think Integration, Not Addition
Before adding new tools, consider how they'll connect with your existing systems. The goal is to reduce complexity, not increase it.

### 4. Measure and Iterate
Track the impact of improvements. What gets measured gets managed, and continuous refinement is key to long-term success.

## Taking Action

Fixing broken systems isn't a one-time project – it's an ongoing commitment to operational excellence. Start small, measure results, and build momentum through early wins.

The question isn't whether you can afford to fix your systems. It's whether you can afford not to.

*Ready to identify and fix the broken systems holding your business back? Let's start with a free assessment of your current operations.*
    `,
    excerpt: "Discover how inefficient workflows and outdated processes are silently draining your business resources and what you can do about it.",
    author: "Forward Velocity Team",
    publishDate: "2024-03-15",
    readTime: "5 min read",
    category: "Operations",
    imageUrl: "/api/placeholder/1200/600",
    tags: ["efficiency", "automation", "business-ops", "productivity", "systems"],
    relatedPosts: [2, 3, 4]
  },
  2: {
    id: 2,
    title: "Scaling Smart: Tech Solutions for Growing Businesses",
    content: `
# Scaling Smart: Tech Solutions for Growing Businesses

Growth is exciting, but it can also be overwhelming. The systems and processes that worked when you were a small team might crumble under the weight of expansion. Here's how to scale smart with the right technology choices.

## The Scaling Challenge

Many businesses hit a wall around 10-50 employees. What worked with a handful of people becomes chaos with dozens. The key is anticipating these challenges and building scalable solutions before you need them.

### Common Scaling Pain Points

**Communication Breakdown**: As teams grow, information gets lost in translation
**Process Inconsistency**: Different people doing the same job in different ways
**Data Fragmentation**: Information scattered across multiple systems
**Quality Control**: Maintaining standards becomes increasingly difficult

## Technology as an Enabler

The right technology doesn't just solve current problems – it enables future growth. Here's how to choose solutions that scale with your business.

*[Content continues with detailed sections on technology selection, implementation strategies, and case studies]*
    `,
    excerpt: "Learn how to implement scalable technology solutions that grow with your business without breaking the bank.",
    author: "Sarah Johnson",
    publishDate: "2024-03-10",
    readTime: "7 min read",
    category: "Technology",
    imageUrl: "/api/placeholder/1200/600",
    tags: ["scaling", "technology", "growth", "systems"],
    relatedPosts: [1, 3, 5]
  }
  // Add more mock posts as needed
};

const BlogDetailPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogPost = async () => {
      setLoading(true);
      setError(null);
      
      try {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Replace this with your actual API call:
        // const response = await fetch(`/api/blogs/${id}`);
        // const data = await response.json();
        
        const blogPost = mockBlogPosts[id];
        if (!blogPost) {
          setError("Blog post not found");
          return;
        }
        
        setPost(blogPost);
        
        // Fetch related posts
        if (blogPost.relatedPosts) {
          const related = blogPost.relatedPosts
            .map(relatedId => mockBlogPosts[relatedId])
            .filter(Boolean);
          setRelatedPosts(related);
        }
        
      } catch (err) {
        setError("Failed to load blog post");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPost();
  }, [id]);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const shareUrl = window.location.href;
  const shareTitle = post?.title || '';

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white">
        <Header />
        <div className="flex justify-center items-center py-20 pt-32">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-black text-white">
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-20 pt-32 text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-gray-text mb-8">The blog post you're looking for doesn't exist or has been moved.</p>
          <Link to="/blog">
            <Button>
              <FaArrowLeft className="mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Back to Blog */}
      <section className="pt-24 pb-8 px-4 md:px-16">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors duration-300 mb-6"
          >
            <FaArrowLeft className="mr-2" />
            Back to Blog
          </Link>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-4 md:px-16 mb-8">
        <div className="max-w-4xl mx-auto">
          <div className="aspect-video bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute top-6 left-6">
              <span className="bg-green-500 text-black px-4 py-2 rounded-full text-sm font-semibold">
                {post.category}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Header */}
      <section className="px-4 md:px-16 mb-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <TextGradient>{post.title}</TextGradient>
          </h1>
          
          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-6 text-gray-text mb-6">
            <div className="flex items-center gap-2">
              <FaUser className="text-green-400" />
              <span>By {post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="text-green-400" />
              <span>{formatDate(post.publishDate)}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaClock className="text-green-400" />
              <span>{post.readTime}</span>
            </div>
          </div>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag, index) => (
              <span 
                key={index}
                className="bg-white/10 text-white/70 px-3 py-1 rounded-full text-sm flex items-center gap-1"
              >
                <FaTag className="text-xs" />
                {tag}
              </span>
            ))}
          </div>

          {/* Share Buttons */}
          <div className="flex items-center gap-4 mb-8 pb-8 border-b border-white/10">
            <span className="text-gray-text flex items-center gap-2">
              <FaShare />
              Share:
            </span>
            <a
              href={shareLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-colors duration-300"
            >
              <FaFacebookF />
            </a>
            <a
              href={shareLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-400 hover:bg-blue-500 text-white p-2 rounded-full transition-colors duration-300"
            >
              <FaTwitter />
            </a>
            <a
              href={shareLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-800 hover:bg-blue-900 text-white p-2 rounded-full transition-colors duration-300"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="px-4 md:px-16 mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-invert prose-lg max-w-none">
            <div 
              className="text-gray-text leading-relaxed"
              style={{
                lineHeight: '1.8',
              }}
              dangerouslySetInnerHTML={{
                __html: post.content
                  .split('\n\n')
                  .map(paragraph => {
                    if (paragraph.startsWith('# ')) {
                      return `<h1 class="text-3xl font-bold text-white mb-6 mt-8">${paragraph.replace('# ', '')}</h1>`;
                    } else if (paragraph.startsWith('## ')) {
                      return `<h2 class="text-2xl font-semibold text-white mb-4 mt-8">${paragraph.replace('## ', '')}</h2>`;
                    } else if (paragraph.startsWith('### ')) {
                      return `<h3 class="text-xl font-semibold text-green-400 mb-3 mt-6">${paragraph.replace('### ', '')}</h3>`;
                    } else if (paragraph.startsWith('**') && paragraph.endsWith(':**')) {
                      return `<h4 class="text-lg font-semibold text-white mb-2 mt-4">${paragraph.replace(/\*\*/g, '')}</h4>`;
                    } else if (paragraph.startsWith('- ')) {
                      const items = paragraph.split('\n').map(item => 
                        item.startsWith('- ') ? `<li class="mb-1">${item.replace('- ', '')}</li>` : item
                      ).join('');
                      return `<ul class="list-disc list-inside space-y-1 mb-4 ml-4">${items}</ul>`;
                    } else if (paragraph.startsWith('*') && paragraph.endsWith('*')) {
                      return `<p class="italic text-green-400 text-center my-6 p-4 bg-green-500/10 rounded-lg border border-green-500/20">${paragraph.replace(/\*/g, '')}</p>`;
                    } else {
                      return `<p class="mb-4">${paragraph}</p>`;
                    }
                  })
                  .join('')
              }}
            />
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="px-4 md:px-16 mb-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              <TextGradient>Related Articles</TextGradient>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.id}`}
                  className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="aspect-video bg-gradient-to-br from-green-500/20 to-green-600/20 relative">
                    <div className="absolute top-4 left-4">
                      <span className="bg-green-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                        {relatedPost.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-white text-lg font-semibold mb-2 group-hover:text-green-400 transition-colors duration-300">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-text text-sm mb-4 leading-relaxed">
                      {relatedPost.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-text">
                      <span>{formatDate(relatedPost.publishDate)}</span>
                      <span>•</span>
                      <span>{relatedPost.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="px-4 md:px-16 mb-16">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-green-500/10 to-green-600/10 rounded-2xl p-8 border border-green-500/20">
          <h2 className="text-3xl font-bold mb-4">
            <TextGradient>Ready to Transform Your Business?</TextGradient>
          </h2>
          <p className="text-gray-text mb-6">
            Get actionable insights and strategies delivered to your inbox. Join our community 
            of business leaders who are scaling smart.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-green-500 text-black font-semibold px-8 py-3">
                Get Started
              </Button>
            </Link>
            <Link to="/blog">
              <Button className="bg-transparent border border-green-500 text-green-400 hover:bg-green-500 hover:text-black font-semibold px-8 py-3">
                Read More Articles
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default BlogDetailPage;
