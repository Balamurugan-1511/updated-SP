import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CourseCard from '@/components/CourseCard';
const allCourses = [{
  title: 'AI Fundamentals & Python for AI',
  category: 'Artificial Intelligence',
  description: 'Master the foundations of AI, machine learning concepts, and Python programming. Perfect for beginners.',
  duration: '6 Weeks',
  level: 'Beginner',
  href: '/ai-courses/ai-fundamentals',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1909d437e-1765798153561.png",
  alt: 'AI neural network visualization with glowing blue nodes for AI fundamentals course'
}, {
  title: 'Machine Learning Engineering',
  category: 'Artificial Intelligence',
  description: 'Build and deploy production-ready ML models using scikit-learn, TensorFlow, and cloud platforms.',
  duration: '8 Weeks',
  level: 'Intermediate',
  href: '/ai-courses/machine-learning',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_15cfc0bbd-1766070002386.png",
  alt: 'Data scientist working on machine learning model with code on multiple screens'
}, {
  title: 'Deep Learning & Neural Networks',
  category: 'Artificial Intelligence',
  description: 'Dive deep into CNNs, RNNs, transformers, and build cutting-edge deep learning applications.',
  duration: '10 Weeks',
  level: 'Advanced',
  href: '/ai-courses/deep-learning',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_163878b56-1768642141040.png",
  alt: 'Abstract visualization of deep neural network layers with interconnected nodes'
}, {
  title: 'Generative AI & Large Language Models',
  category: 'Artificial Intelligence',
  description: 'Master GPT, LLaMA, prompt engineering, RAG pipelines, and build production GenAI applications.',
  duration: '8 Weeks',
  level: 'Intermediate',
  href: '/ai-courses/generative-ai',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1be44e331-1765233659453.png",
  alt: 'Futuristic AI interface showing generative AI text and image creation capabilities'
}, {
  title: 'AI for Business Leaders',
  category: 'Artificial Intelligence',
  description: 'Understand AI strategy, ROI, ethics, and how to lead AI transformation in your organisation.',
  duration: '4 Weeks',
  level: 'All Levels',
  href: '/ai-courses/ai-for-business',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1442ab53e-1769661044688.png",
  alt: 'Business executives in a boardroom discussing AI strategy and digital transformation'
}, {
  title: 'NLP & Conversational AI',
  category: 'Artificial Intelligence',
  description: 'Build intelligent chatbots, voice assistants, and NLP pipelines using state-of-the-art models.',
  duration: '8 Weeks',
  level: 'Intermediate',
  href: '/ai-courses/nlp',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f090595a-1777551070346.png",
  alt: 'Conversational AI chatbot interface on a smartphone screen with chat bubbles'
}];
export default function CoursesPage() {
  return <div className="font-body text-bodyText">
      <Header />
      {/* Page Header */}
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-heading font-bold text-white text-4xl lg:text-5xl mb-4">All Courses</h1>
          <p className="font-body text-blue-200 text-lg max-w-2xl mx-auto">
            Explore our full range of AI and technology courses designed for Pune\'s professionals.
          </p>
          <div className="flex items-center justify-center gap-2 mt-5 font-body text-sm text-blue-300">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Courses</span>
          </div>
        </div>
      </section>
      {/* Upcoming Schedule Banner */}
      <section className="bg-accentBlue py-5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="font-body text-white font-semibold text-sm">New batches starting February 2025 — Limited seats available!</span>
            </div>
            <Link href="/contact" className="bg-white text-accentBlue font-body font-semibold text-sm px-5 py-2 rounded hover:bg-blue-50 transition-colors flex-shrink-0">
              Reserve Your Seat
            </Link>
          </div>
        </div>
      </section>
      {/* Courses Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <h2 className="font-heading font-semibold text-navy text-2xl mb-2">AI Courses</h2>
            <div className="w-16 h-1 bg-yellow-400 rounded" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {allCourses?.map((course, i) => <CourseCard key={course?.href} {...course} index={i} />)}
          </div>
        </div>
      </section>
      {/* Flexible Fees Banner */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gray-50 rounded-2xl p-10 flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="font-heading font-semibold text-navy text-2xl mb-3">Flexible Fee Options</h3>
              <p className="font-body text-bodyText text-base leading-relaxed mb-4">
                All Skandaplus AI courses come with easy no-cost EMI and installment plans, so you can start learning without the fees getting in the way.
              </p>
              <p className="font-body text-bodyText text-sm">
                Custom invoicing and installment plans available for corporate training.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-accentBlue text-white font-body font-semibold px-7 py-4 rounded hover:bg-navy transition-colors">
                Check Eligibility
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-violet rounded-xl2 p-14 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(255,255,255,0.3) 40px, rgba(255,255,255,0.3) 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(255,255,255,0.3) 40px, rgba(255,255,255,0.3) 41px)'
          }} />
            <div className="relative z-10">
              <h2 className="font-heading font-bold text-white text-3xl lg:text-4xl mb-4">Not Sure Which Course Is Right for You?</h2>
              <p className="font-body text-blue-100 text-base mb-8 max-w-xl mx-auto">
                Book a free 30-minute career counselling session with our AI education experts.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-navy font-body font-semibold px-8 py-4 rounded hover:bg-blue-50 transition-colors">
                Book Free Counselling
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>;
}
