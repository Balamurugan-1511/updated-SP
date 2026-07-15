import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
const curriculum = [{
  week: 'Week 1-2',
  title: 'Foundations of Generative AI & LLMs',
  topics: ['History and evolution of language models', 'Transformer architecture deep dive: attention, positional encoding', 'GPT family: GPT-3, GPT-4, GPT-4o architecture and capabilities', 'Open-source LLMs: LLaMA 3, Mistral, Gemma, Phi-3', 'Tokenisation, embeddings, and vector representations']
}, {
  week: 'Week 3-4',
  title: 'Prompt Engineering & LLM APIs',
  topics: ['Advanced prompt engineering techniques', 'Chain-of-thought, few-shot, and zero-shot prompting', 'OpenAI API, Anthropic Claude API, and Google Gemini API', 'Structured outputs and function calling', 'Cost optimisation and rate limiting strategies']
}, {
  week: 'Week 5-6',
  title: 'RAG Systems & Knowledge Bases',
  topics: ['Retrieval-Augmented Generation (RAG) architecture', 'Vector databases: Pinecone, Weaviate, ChromaDB', 'Document chunking, embedding, and retrieval strategies', 'Advanced RAG: HyDE, multi-query, reranking', 'Building enterprise knowledge bases']
}, {
  week: 'Week 7-8',
  title: 'Fine-tuning, Agents & Production GenAI',
  topics: ['Fine-tuning LLMs with LoRA and QLoRA', 'LangChain and LlamaIndex for LLM applications', 'Building autonomous AI agents with tool use', 'Evaluation frameworks: RAGAS, TruLens', 'Deploying GenAI apps to production with guardrails']
}];
const tools = ['OpenAI API', 'LangChain', 'LlamaIndex', 'Pinecone', 'ChromaDB', 'Hugging Face', 'LLaMA', 'Mistral', 'LoRA', 'RAGAS', 'FastAPI', 'Streamlit'];
export default function GenerativeAIPage() {
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
            <span className="text-white">Generative AI & LLMs</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-accentBlue text-white text-xs font-body font-medium px-4 py-1.5 rounded-full mb-4">Intermediate</span>
              <h1 className="font-heading font-bold text-white text-3xl lg:text-4xl leading-tight mb-5">
                Generative AI & Large Language Models
              </h1>
              <p className="font-body text-blue-200 text-base leading-relaxed mb-6">
                Master the technology powering ChatGPT, Claude, and Gemini. Learn prompt engineering, RAG systems, LLM fine-tuning, and build production-ready GenAI applications that solve real business problems.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                {[{
                icon: '⏱',
                label: '8 Weeks'
              }, {
                icon: '🤖',
                label: 'Intermediate Level'
              }, {
                icon: '🎓',
                label: 'Certificate Included'
              }, {
                icon: '🔑',
                label: 'API Credits Included'
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
              <img src="https://img.rocket.new/generatedImages/rocket_gen_img_14f24f844-1768587883889.png" alt="Futuristic generative AI interface showing text and image creation with glowing digital elements and neural patterns" className="w-full h-auto rounded-2xl shadow-2xl" />
              
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
                Generative AI is transforming every industry. This course gives you the skills to build, deploy, and manage production GenAI applications. You\'ll work with the latest LLMs including GPT-4o, Claude 3.5, LLaMA 3, and Mistral, and learn to build RAG systems, AI agents, and fine-tuned models.
              </p>
              <p className="font-body text-bodyText text-base leading-relaxed mb-8">
                Pune\'s financial, healthcare, and government sectors are rapidly adopting GenAI. This course prepares you to lead these initiatives with practical, production-grade skills.
              </p>

              <h3 className="font-heading font-semibold text-navy text-xl mb-4">What You Will Learn</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {['Master advanced prompt engineering techniques', 'Build RAG systems with vector databases', 'Fine-tune LLMs with LoRA and QLoRA', 'Create autonomous AI agents with LangChain', 'Work with OpenAI, Anthropic, and Google APIs', 'Deploy GenAI apps with safety guardrails', 'Evaluate LLM applications with RAGAS', 'Optimise costs and performance at scale']?.map(item => <div key={item} className="flex items-start gap-3">
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
                  <div className="font-heading font-bold text-navy text-3xl mb-1">₹55,000</div>
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
                  value: '8 Weeks'
                }, {
                  label: 'Level',
                  value: 'Intermediate'
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
                  label: 'API Credits',
                  value: 'Included'
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
      <Footer />
    </div>;
}
