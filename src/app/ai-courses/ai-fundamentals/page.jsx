import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
const curriculum = [{
  week: 'Week 1-2',
  title: 'Introduction to AI & Python Foundations',
  topics: ['What is Artificial Intelligence? History and evolution', 'Types of AI: Narrow AI, General AI, and AGI', 'Python programming fundamentals for AI', 'NumPy, Pandas, and Matplotlib for data manipulation', 'Setting up your AI development environment']
}, {
  week: 'Week 3-4',
  title: 'Core Machine Learning Concepts',
  topics: ['Supervised vs unsupervised vs reinforcement learning', 'Linear regression and classification algorithms', 'Decision trees and random forests', 'Model evaluation metrics and validation techniques', 'Feature engineering and data preprocessing']
}, {
  week: 'Week 5',
  title: 'AI Applications & Tools',
  topics: ['Computer vision fundamentals with OpenCV', 'Natural language processing basics', 'Introduction to neural networks', 'AI APIs and pre-trained models', 'Ethical AI and responsible development']
}, {
  week: 'Week 6',
  title: 'Capstone Project & Career Prep',
  topics: ['End-to-end AI project development', 'Portfolio building and GitHub setup', 'AI career pathways in Pune', 'Interview preparation and resume review', 'Certification exam preparation']
}];
const tools = ['Python 3.11', 'Jupyter Notebook', 'NumPy', 'Pandas', 'Matplotlib', 'Scikit-learn', 'OpenCV', 'Hugging Face', 'Google Colab', 'VS Code'];
export default function AIFundamentalsPage() {
  return <div className="font-body text-bodyText">
      <Header />
      {/* Hero */}
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-4 font-body text-sm text-blue-300">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/ai-courses" className="hover:text-white transition-colors">AI Courses</Link>
            <span>/</span>
            <span className="text-white">AI Fundamentals</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-accentBlue text-white text-xs font-body font-medium px-4 py-1.5 rounded-full mb-4">Artificial Intelligence</span>
              <h1 className="font-heading font-bold text-white text-3xl lg:text-4xl leading-tight mb-5">
                AI Fundamentals & Python for AI
              </h1>
              <p className="font-body text-blue-200 text-base leading-relaxed mb-6">
                Master the foundations of Artificial Intelligence and Python programming. This beginner-friendly course gives you the essential skills to start your AI career in Pune\'s booming tech industry.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                {[{
                icon: '⏱',
                label: '6 Weeks'
              }, {
                icon: '📊',
                label: 'Beginner Level'
              }, {
                icon: '🎓',
                label: 'Certificate Included'
              }, {
                icon: '💻',
                label: 'Online & In-Person'
              }]?.map(item => <div key={item?.label} className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
                    <span>{item?.icon}</span>
                    <span className="font-body text-white text-sm">{item?.label}</span>
                  </div>)}
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 bg-accentBlue text-white font-body font-semibold px-7 py-4 rounded hover:bg-blue-700 transition-colors">
                  Enroll Now
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-2 border-2 border-white text-white font-body font-semibold px-7 py-4 rounded hover:bg-white/10 transition-colors">
                  Download Brochure
                </Link>
              </div>
            </div>
            <div>
              <img src="https://img.rocket.new/generatedImages/rocket_gen_img_15afdb008-1772093387845.png" alt="AI neural network visualization with glowing blue nodes representing artificial intelligence fundamentals learning" className="w-full h-auto rounded-2xl shadow-2xl" />
              
            </div>
          </div>
        </div>
      </section>
      {/* Course Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h2 className="font-heading font-semibold text-navy text-2xl mb-4">Course Overview</h2>
              <div className="w-16 h-1 bg-yellow-400 rounded mb-6" />
              <p className="font-body text-bodyText text-base leading-relaxed mb-4">
                The AI Fundamentals & Python for AI course is designed for complete beginners who want to enter the exciting world of Artificial Intelligence. You\'ll learn the core concepts of AI and machine learning while building practical Python programming skills.
              </p>
              <p className="font-body text-bodyText text-base leading-relaxed mb-4">
                By the end of this course, you\'ll have a solid understanding of how AI systems work, be able to write Python code for data analysis and basic ML models, and have a portfolio project to showcase to employers.
              </p>
              <p className="font-body text-bodyText text-base leading-relaxed mb-8">
                This course is Flexible EMI available, making it accessible to all Indian professionals looking to upskill in AI.
              </p>

              <h3 className="font-heading font-semibold text-navy text-xl mb-4">What You Will Learn</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {['Understand core AI and ML concepts', 'Write Python code for AI applications', 'Work with data using NumPy and Pandas', 'Build and evaluate ML models', 'Apply AI to real-world problems', 'Use popular AI tools and frameworks', 'Understand AI ethics and responsible use', 'Build a portfolio AI project']?.map(item => <div key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accentBlue mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-body text-bodyText text-sm">{item}</span>
                  </div>)}
              </div>

              <h3 className="font-heading font-semibold text-navy text-xl mb-4">Course Curriculum</h3>
              <div className="space-y-4">
                {curriculum?.map((module, i) => <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                    <div className="bg-gray-50 px-5 py-4 flex items-center gap-4">
                      <span className="bg-accentBlue text-white text-xs font-body font-semibold px-3 py-1 rounded-full">{module.week}</span>
                      <h4 className="font-heading font-semibold text-navy text-sm">{module.title}</h4>
                    </div>
                    <div className="px-5 py-4">
                      <ul className="space-y-2">
                        {module.topics?.map(topic => <li key={topic} className="flex items-start gap-2 font-body text-bodyText text-sm">
                            <svg className="w-4 h-4 text-accentBlue mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            {topic}
                          </li>)}
                      </ul>
                    </div>
                  </div>)}
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-gray-50 rounded-xl p-6 sticky top-24">
                <div className="text-center mb-6">
                  <div className="font-heading font-bold text-navy text-3xl mb-1">₹25,000</div>
                  <div className="font-body text-bodyText text-sm">Flexible EMI available</div>
                </div>
                <Link href="/contact" className="block w-full text-center bg-accentBlue text-white font-body font-semibold py-4 rounded hover:bg-navy transition-colors mb-3">
                  Enroll Now
                </Link>
                <Link href="/contact" className="block w-full text-center border-2 border-navy text-navy font-body font-semibold py-4 rounded hover:bg-navy hover:text-white transition-colors mb-6">
                  Free Counselling
                </Link>
                <div className="space-y-4">
                  {[{
                  label: 'Duration',
                  value: '6 Weeks'
                }, {
                  label: 'Level',
                  value: 'Beginner'
                }, {
                  label: 'Format',
                  value: 'Online & In-Person'
                }, {
                  label: 'Batch Size',
                  value: 'Max 15 Students'
                }, {
                  label: 'Certificate',
                  value: 'Yes, Included'
                }, {
                  label: 'Language',
                  value: 'English'
                }, {
                  label: 'Next Batch',
                  value: 'Starting Soon'
                }]?.map(item => <div key={item?.label} className="flex items-center justify-between border-b border-gray-200 pb-3">
                      <span className="font-body text-bodyText text-sm">{item?.label}</span>
                      <span className="font-body font-semibold text-navy text-sm">{item?.value}</span>
                    </div>)}
                </div>
                <div className="mt-6">
                  <h4 className="font-heading font-semibold text-navy text-sm mb-3">Tools You\'ll Use</h4>
                  <div className="flex flex-wrap gap-2">
                    {tools?.map(tool => <span key={tool} className="bg-accentBlue/10 text-accentBlue text-xs font-body font-medium px-3 py-1 rounded-full">{tool}</span>)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Prerequisites */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="font-heading font-semibold text-navy text-xl mb-4">Prerequisites</h3>
              <div className="w-16 h-1 bg-yellow-400 rounded mb-5" />
              <ul className="space-y-3">
                {['No prior programming experience required', 'Basic computer literacy (using a laptop/PC)', 'Curiosity and willingness to learn', 'A laptop with internet connection']?.map(item => <li key={item} className="flex items-start gap-3 font-body text-bodyText text-sm">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>)}
              </ul>
            </div>
            <div>
              <h3 className="font-heading font-semibold text-navy text-xl mb-4">Who Is This For?</h3>
              <div className="w-16 h-1 bg-yellow-400 rounded mb-5" />
              <ul className="space-y-3">
                {['Fresh graduates looking to enter AI field', 'Working professionals wanting to upskill', 'Career changers transitioning to tech', 'Business professionals curious about AI', 'Anyone who wants to understand AI fundamentals']?.map(item => <li key={item} className="flex items-start gap-3 font-body text-bodyText text-sm">
                    <svg className="w-5 h-5 text-accentBlue mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    {item}
                  </li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Other Courses */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="font-heading font-semibold text-navy text-2xl mb-8">Explore More AI Courses</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[{
            title: 'Machine Learning Engineering',
            href: '/ai-courses/machine-learning',
            level: 'Intermediate',
            duration: '8 Weeks'
          }, {
            title: 'Deep Learning & Neural Networks',
            href: '/ai-courses/deep-learning',
            level: 'Advanced',
            duration: '10 Weeks'
          }, {
            title: 'Generative AI & LLMs',
            href: '/ai-courses/generative-ai',
            level: 'Intermediate',
            duration: '8 Weeks'
          }]?.map(c => <Link key={c?.href} href={c?.href} className="block bg-gray-50 rounded-xl p-6 hover:shadow-card transition-shadow duration-200 group">
                <h4 className="font-heading font-semibold text-navy text-base mb-2 group-hover:text-accentBlue transition-colors">{c?.title}</h4>
                <div className="flex items-center gap-4 text-sm font-body text-bodyText">
                  <span>{c?.level}</span>
                  <span>•</span>
                  <span>{c?.duration}</span>
                </div>
              </Link>)}
          </div>
        </div>
      </section>
      <Footer />
    </div>;
}
