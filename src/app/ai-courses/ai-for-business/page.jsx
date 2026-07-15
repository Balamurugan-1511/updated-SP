import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
const curriculum = [{
  week: 'Week 1',
  title: 'AI Landscape for Business Leaders',
  topics: ['What is AI, ML, and GenAI — demystified for executives', 'Current state of AI in Pune and across India', 'AI maturity models and organisational readiness', 'Key AI use cases across industries: finance, healthcare, retail', 'Understanding AI capabilities and limitations']
}, {
  week: 'Week 2',
  title: 'AI Strategy & Business Value',
  topics: ['Building an AI strategy aligned with business goals', 'Identifying and prioritising AI opportunities', 'AI ROI measurement frameworks', 'Build vs buy vs partner decisions', 'Creating an AI roadmap for your organisation']
}, {
  week: 'Week 3',
  title: 'Leading AI Teams & Projects',
  topics: ['AI team structures: data scientists, ML engineers, AI product managers', 'Managing AI projects: timelines, milestones, and KPIs', 'Data strategy and data governance', 'Vendor evaluation and AI procurement', 'Change management for AI adoption']
}, {
  week: 'Week 4',
  title: 'AI Ethics, Risk & Governance',
  topics: ['AI ethics frameworks and responsible AI principles', 'India\'s evolving AI governance landscape (NITI Aayog)', 'AI risk management and bias mitigation', 'Regulatory compliance: the DPDP Act and AI regulations', 'Building an AI governance committee']
}];
export default function AIForBusinessPage() {
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
            <span className="text-white">AI for Business</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-navy border border-white/30 text-white text-xs font-body font-medium px-4 py-1.5 rounded-full mb-4">All Levels</span>
              <h1 className="font-heading font-bold text-white text-3xl lg:text-4xl leading-tight mb-5">
                AI for Business Leaders
              </h1>
              <p className="font-body text-blue-200 text-base leading-relaxed mb-6">
                Designed for executives, managers, and business professionals. Understand AI strategy, ROI, ethics, and how to lead successful AI transformation without needing to write a single line of code.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                {[{
                icon: '⏱',
                label: '4 Weeks'
              }, {
                icon: '💼',
                label: 'All Levels'
              }, {
                icon: '🎓',
                label: 'Certificate Included'
              }, {
                icon: '📊',
                label: 'No Coding Required'
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
              <img src="https://img.rocket.new/generatedImages/rocket_gen_img_198ad9e76-1766563899922.png" alt="Business executives in a modern Pune boardroom discussing AI strategy and digital transformation roadmap" className="w-full h-auto rounded-2xl shadow-2xl" />
              
            </div>
          </div>
        </div>
      </section>
      {/* Course Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h2 className="font-heading font-semibold text-navy text-2xl mb-4">Course Overview</h2>
              <div className="w-16 h-1 bg-yellow-400 rounded mb-6" />
              <p className="font-body text-bodyText text-base leading-relaxed mb-4">
                The AI for Business Leaders course is specifically designed for non-technical professionals who need to understand, evaluate, and lead AI initiatives. No coding required — just strategic thinking and business acumen.
              </p>
              <p className="font-body text-bodyText text-base leading-relaxed mb-8">
                You\'ll learn how to identify AI opportunities in your organisation, build a compelling AI business case, manage AI teams, and navigate the ethical and regulatory landscape in Pune.
              </p>

              <h3 className="font-heading font-semibold text-navy text-xl mb-4">What You Will Learn</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {['Understand AI, ML, and GenAI without technical jargon', 'Build a compelling AI strategy for your organisation', 'Measure and communicate AI ROI to stakeholders', 'Lead and manage AI teams effectively', 'Navigate India\'s AI governance landscape', 'Identify and prioritise AI use cases', 'Manage AI risks and ethical considerations', 'Drive successful AI change management']?.map(item => <div key={item} className="flex items-start gap-3">
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
                      <span className="bg-navy text-white text-xs font-body font-semibold px-3 py-1 rounded-full">{module.week}</span>
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

              {/* Who is this for */}
              <div className="mt-10">
                <h3 className="font-heading font-semibold text-navy text-xl mb-4">Who Is This Course For?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[{
                  role: 'C-Suite Executives',
                  desc: 'CEOs, CTOs, CDOs looking to lead AI transformation'
                }, {
                  role: 'Senior Managers',
                  desc: 'Department heads planning AI adoption in their teams'
                }, {
                  role: 'Product Managers',
                  desc: 'PMs building AI-powered products and features'
                }, {
                  role: 'Consultants',
                  desc: 'Strategy consultants advising clients on AI initiatives'
                }, {
                  role: 'Entrepreneurs',
                  desc: 'Founders building AI-first startups in Pune'
                }, {
                  role: 'Government Officers',
                  desc: 'Public sector professionals driving digital transformation'
                }]?.map(item => <div key={item?.role} className="bg-gray-50 rounded-xl p-4">
                      <div className="font-heading font-semibold text-navy text-sm mb-1">{item?.role}</div>
                      <div className="font-body text-bodyText text-xs">{item?.desc}</div>
                    </div>)}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-gray-50 rounded-xl p-6 sticky top-24">
                <div className="text-center mb-6">
                  <div className="font-heading font-bold text-navy text-3xl mb-1">₹45,000</div>
                  <div className="font-body text-bodyText text-sm">Flexible EMI available</div>
                </div>
                <Link href="/contact" className="block w-full text-center bg-accentBlue text-white font-body font-semibold py-4 rounded hover:bg-navy transition-colors mb-3">
                  Enroll Now
                </Link>
                <Link href="/contact" className="block w-full text-center border-2 border-navy text-navy font-body font-semibold py-4 rounded hover:bg-navy hover:text-white transition-colors mb-6">
                  Corporate Enquiry
                </Link>
                <div className="space-y-4">
                  {[{
                  label: 'Duration',
                  value: '4 Weeks'
                }, {
                  label: 'Level',
                  value: 'All Levels'
                }, {
                  label: 'Format',
                  value: 'Online & In-Person'
                }, {
                  label: 'Batch Size',
                  value: 'Max 20 Students'
                }, {
                  label: 'Certificate',
                  value: 'Yes, Included'
                }, {
                  label: 'Prerequisites',
                  value: 'None'
                }, {
                  label: 'Next Batch',
                  value: 'Starting Soon'
                }]?.map(item => <div key={item?.label} className="flex items-center justify-between border-b border-gray-200 pb-3">
                      <span className="font-body text-bodyText text-sm">{item?.label}</span>
                      <span className="font-body font-semibold text-navy text-sm">{item?.value}</span>
                    </div>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>;
}
