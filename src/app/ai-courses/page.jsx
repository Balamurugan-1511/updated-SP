'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CourseCard from '@/components/CourseCard';
const aiCourses = [{
  title: 'AI Fundamentals & Python for AI',
  category: 'Beginner',
  description: 'Master the foundations of AI, machine learning concepts, and Python programming for AI applications. Perfect for beginners.',
  duration: '6 Weeks',
  level: 'Beginner',
  href: '/ai-courses/ai-fundamentals',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ebdb97ca-1773606740630.png",
  alt: 'AI neural network visualization with glowing blue nodes representing artificial intelligence fundamentals course'
}, {
  title: 'Machine Learning Engineering',
  category: 'Intermediate',
  description: 'Build and deploy production-ready ML models using scikit-learn, TensorFlow, and cloud platforms like AWS and GCP.',
  duration: '8 Weeks',
  level: 'Intermediate',
  href: '/ai-courses/machine-learning',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1cc797aca-1765185889583.png",
  alt: 'Data scientist working on machine learning model with code displayed on multiple computer screens'
}, {
  title: 'Deep Learning & Neural Networks',
  category: 'Advanced',
  description: 'Dive deep into CNNs, RNNs, transformers, and build cutting-edge deep learning applications for vision and language.',
  duration: '10 Weeks',
  level: 'Advanced',
  href: '/ai-courses/deep-learning',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_163878b56-1768642141040.png",
  alt: 'Abstract visualization of deep neural network layers with interconnected nodes and data flow'
}, {
  title: 'Generative AI & Large Language Models',
  category: 'Intermediate',
  description: 'Master GPT, LLaMA, prompt engineering, RAG pipelines, and build production-ready GenAI applications.',
  duration: '8 Weeks',
  level: 'Intermediate',
  href: '/ai-courses/generative-ai',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f090595a-1777551070346.png",
  alt: 'Futuristic AI interface showing generative AI text and image creation with glowing digital elements'
}, {
  title: 'AI for Business Leaders',
  category: 'All Levels',
  description: 'Understand AI strategy, ROI measurement, ethics, and how to lead successful AI transformation in your organisation.',
  duration: '4 Weeks',
  level: 'All Levels',
  href: '/ai-courses/ai-for-business',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_19590d041-1775067796964.png",
  alt: 'Business executives in a modern boardroom discussing AI strategy and digital transformation roadmap'
}, {
  title: 'NLP & Conversational AI',
  category: 'Intermediate',
  description: 'Build intelligent chatbots, voice assistants, and NLP pipelines using state-of-the-art transformer models.',
  duration: '8 Weeks',
  level: 'Intermediate',
  href: '/ai-courses/nlp',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_12e2085ad-1780083345455.png",
  alt: 'Conversational AI chatbot interface on a smartphone screen with natural language processing visualization'
}];
const categoryColors = {
  'Beginner': 'bg-green-500',
  'Intermediate': 'bg-accentBlue',
  'Advanced': 'bg-violet',
  'All Levels': 'bg-navy'
};
export default function AICoursesPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const filteredCourses = activeFilter === 'All' ? aiCourses : aiCourses.filter(course => course.level === activeFilter);
  return <div className="font-body text-bodyText">
      <Header />

      {/* Page Header */}
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-heading font-bold text-white text-4xl lg:text-5xl mb-4">AI Courses in Pune</h1>
          <p className="font-body text-blue-200 text-lg max-w-2xl mx-auto">
            Industry-aligned AI courses designed to fast-track your career in Pune\'s booming tech sector.
          </p>
          <div className="flex items-center justify-center gap-2 mt-5 font-body text-sm text-blue-300">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">AI Courses</span>
          </div>
        </div>
      </section>

      {/* Course Filter Bar */}
      <section className="bg-white border-b border-gray-100 py-5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-body font-semibold text-navy text-sm">Filter by Level:</span>
            {['All', 'Beginner', 'Intermediate', 'Advanced', 'All Levels'].map(filter => <button key={filter} type="button" onClick={() => setActiveFilter(filter)} className={`px-4 py-2 rounded-full text-sm font-body font-medium transition-colors ${filter === activeFilter ? 'bg-accentBlue text-white' : 'bg-gray-100 text-bodyText hover:bg-accentBlue hover:text-white'}`}>
                {filter}
              </button>)}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {filteredCourses.length > 0 ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {filteredCourses.map((course, i) => <CourseCard key={course.href} {...course} index={i} />)}
            </div> : <p className="text-center font-body text-bodyText text-base py-10">No courses found for this level yet — check back soon or explore all courses above.</p>}
        </div>
      </section>

      {/* Why AI Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-semibold text-navy text-3xl lg:text-4xl mb-3">
              Why Learn <span className="text-accentBlue">AI in Pune</span>?
            </h2>
            <div className="w-20 h-1 bg-yellow-400 rounded mx-auto mb-4" />
            <p className="font-body text-bodyText text-base max-w-2xl mx-auto">
              Pune is India\'s AI hub. The demand for AI talent is growing at 35% annually.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {[{
            stat: '₹12L+',
            label: 'Average AI Engineer Salary',
            desc: 'AI professionals in Pune command premium salaries well above the national average.',
            icon: '💰'
          }, {
            stat: '35%',
            label: 'Annual Job Growth',
            desc: 'AI and ML roles are among the fastest-growing job categories in Pune\'s tech sector.',
            icon: '📈'
          }, {
            stat: '500+',
            label: 'Companies Hiring AI Talent',
            desc: 'From MNCs to startups, Pune\'s ecosystem is hungry for skilled AI professionals.',
            icon: '🏢'
          }].map(item => <div key={item.label} className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-card transition-shadow duration-200">
                <div className="text-4xl mb-4">{item.icon}</div>
                <div className="font-heading font-bold text-accentBlue text-3xl mb-2">{item.stat}</div>
                <div className="font-heading font-semibold text-navy text-base mb-3">{item.label}</div>
                <p className="font-body text-bodyText text-sm leading-relaxed">{item.desc}</p>
              </div>)}
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
              <h2 className="font-heading font-bold text-white text-3xl lg:text-4xl mb-4">Not Sure Which Course to Choose?</h2>
              <p className="font-body text-blue-100 text-base mb-8 max-w-xl mx-auto">
                Our career counsellors will help you find the perfect AI course based on your background and goals.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-navy font-body font-semibold px-8 py-4 rounded hover:bg-blue-50 transition-colors duration-200">
                Get Free Counselling
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
}
