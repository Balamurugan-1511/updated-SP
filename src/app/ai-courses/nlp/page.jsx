import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
const curriculum = [{
  week: 'Week 1-2',
  title: 'NLP Foundations & Text Processing',
  topics: ['NLP pipeline: tokenisation, stemming, lemmatisation', 'Text representation: TF-IDF, word embeddings, Word2Vec, GloVe', 'Sentiment analysis and text classification', 'Named entity recognition (NER) and POS tagging', 'spaCy and NLTK for NLP tasks']
}, {
  week: 'Week 3-4',
  title: 'Transformer Models for NLP',
  topics: ['BERT architecture and pre-training objectives', 'Fine-tuning BERT for classification, NER, and QA', 'Sentence transformers and semantic search', 'Cross-lingual models for multilingual NLP', 'Hugging Face Transformers library mastery']
}, {
  week: 'Week 5-6',
  title: 'Conversational AI & Chatbot Development',
  topics: ['Dialogue systems architecture: task-oriented vs open-domain', 'Intent classification and entity extraction', 'Building chatbots with Rasa and Dialogflow', 'LLM-powered conversational agents with LangChain', 'Multi-turn conversation management and context tracking']
}, {
  week: 'Week 7-8',
  title: 'Voice AI & Production Deployment',
  topics: ['Speech recognition with Whisper and Google Speech API', 'Text-to-speech synthesis with ElevenLabs and Azure', 'Voice assistant development for Pune\'s multilingual context', 'Deploying NLP models as REST APIs', 'Monitoring and improving conversational AI in production']
}];
const tools = ['spaCy', 'NLTK', 'Hugging Face', 'BERT', 'Rasa', 'LangChain', 'Whisper', 'Dialogflow', 'FastAPI', 'Streamlit', 'Pinecone', 'Docker'];
export default function NLPPage() {
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
            <span className="text-white">NLP & Conversational AI</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-accentBlue text-white text-xs font-body font-medium px-4 py-1.5 rounded-full mb-4">Intermediate</span>
              <h1 className="font-heading font-bold text-white text-3xl lg:text-4xl leading-tight mb-5">
                NLP & Conversational AI
              </h1>
              <p className="font-body text-blue-200 text-base leading-relaxed mb-6">
                Build intelligent chatbots, voice assistants, and NLP pipelines. Master BERT, transformer models, and conversational AI frameworks to create systems that understand and generate human language.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                {[{
                icon: '⏱',
                label: '8 Weeks'
              }, {
                icon: '💬',
                label: 'Intermediate Level'
              }, {
                icon: '🎓',
                label: 'Certificate Included'
              }, {
                icon: '🌏',
                label: 'Multilingual Focus'
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
              <img src="https://img.rocket.new/generatedImages/rocket_gen_img_179e37808-1767170142529.png" alt="Conversational AI chatbot interface on a smartphone screen with natural language processing visualization and chat bubbles" className="w-full h-auto rounded-2xl shadow-2xl" />
              
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
                Natural Language Processing is at the heart of the AI revolution. From customer service chatbots to document analysis systems, NLP powers the most impactful AI applications in Pune\'s banking, healthcare, and government sectors.
              </p>
              <p className="font-body text-bodyText text-base leading-relaxed mb-8">
                This course has a special focus on Pune\'s multilingual context — you\'ll learn to build NLP systems that handle English, Mandarin, Malay, and Tamil, making your skills uniquely valuable in the local market.
              </p>

              <h3 className="font-heading font-semibold text-navy text-xl mb-4">What You Will Learn</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {['Master NLP fundamentals and text processing', 'Fine-tune BERT and transformer models', 'Build production chatbots with Rasa and LangChain', 'Implement semantic search with sentence transformers', 'Develop voice assistants with Whisper', 'Handle multilingual NLP for Pune context', 'Deploy NLP models as scalable APIs', 'Monitor and improve NLP systems in production']?.map(item => <div key={item} className="flex items-start gap-3">
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
                  label: 'Prerequisites',
                  value: 'Python Basics'
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
