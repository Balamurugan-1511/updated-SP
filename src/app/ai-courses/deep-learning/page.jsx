import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
const curriculum = [{
  week: 'Week 1-2',
  title: 'Neural Network Foundations',
  topics: ['Perceptrons, activation functions, and forward propagation', 'Backpropagation and gradient descent variants', 'Regularisation: dropout, batch normalisation, L1/L2', 'Optimisers: Adam, RMSprop, SGD with momentum', 'Building custom neural networks in PyTorch']
}, {
  week: 'Week 3-4',
  title: 'Convolutional Neural Networks (CNNs)',
  topics: ['CNN architecture: convolutions, pooling, feature maps', 'Image classification with ResNet, VGG, EfficientNet', 'Object detection: YOLO, Faster R-CNN, SSD', 'Image segmentation with U-Net', 'Transfer learning and fine-tuning for computer vision']
}, {
  week: 'Week 5-6',
  title: 'Recurrent Networks & Sequence Models',
  topics: ['RNNs, LSTMs, and GRUs for sequence data', 'Time series forecasting with deep learning', 'Attention mechanisms and self-attention', 'The Transformer architecture from scratch', 'BERT and GPT pre-training objectives']
}, {
  week: 'Week 7-8',
  title: 'Generative Models & Advanced Topics',
  topics: ['Variational Autoencoders (VAEs)', 'Generative Adversarial Networks (GANs)', 'Diffusion models and stable diffusion', 'Reinforcement learning fundamentals', 'Deploying deep learning models at scale']
}, {
  week: 'Week 9-10',
  title: 'Capstone Projects & Industry Applications',
  topics: ['End-to-end computer vision project', 'NLP project with transformer models', 'Model optimisation: quantisation and pruning', 'Edge AI deployment with TensorRT', 'Portfolio presentation and career guidance']
}];
const tools = ['PyTorch', 'TensorFlow', 'Keras', 'CUDA', 'Hugging Face', 'OpenCV', 'ONNX', 'TensorRT', 'Weights & Biases', 'Colab Pro', 'Docker'];
export default function DeepLearningPage() {
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
            <span className="text-white">Deep Learning</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-violet text-white text-xs font-body font-medium px-4 py-1.5 rounded-full mb-4">Advanced</span>
              <h1 className="font-heading font-bold text-white text-3xl lg:text-4xl leading-tight mb-5">
                Deep Learning & Neural Networks
              </h1>
              <p className="font-body text-blue-200 text-base leading-relaxed mb-6">
                Master the full spectrum of deep learning — from CNNs and RNNs to Transformers and Diffusion Models. Build cutting-edge AI systems used by the world\'s leading technology companies.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                {[{
                icon: '⏱',
                label: '10 Weeks'
              }, {
                icon: '📊',
                label: 'Advanced Level'
              }, {
                icon: '🎓',
                label: 'Certificate Included'
              }, {
                icon: '🖥️',
                label: 'GPU Labs Included'
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
              <img src="https://img.rocket.new/generatedImages/rocket_gen_img_1d2ff8a91-1764660695242.png" alt="Abstract visualization of deep neural network layers with interconnected nodes showing data flow through layers" className="w-full h-auto rounded-2xl shadow-2xl" />
              
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
                The Deep Learning & Neural Networks course is our most comprehensive AI program. You\'ll master the mathematical foundations and practical implementation of all major deep learning architectures — from classic CNNs to state-of-the-art Transformers and Diffusion Models.
              </p>
              <p className="font-body text-bodyText text-base leading-relaxed mb-8">
                You\'ll train models on real GPU hardware, work with large-scale datasets, and learn to deploy optimised models to production. This course prepares you for senior AI/ML engineer roles at Pune\'s top technology companies.
              </p>

              <h3 className="font-heading font-semibold text-navy text-xl mb-4">What You Will Learn</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {['Build CNNs for computer vision tasks', 'Implement RNNs, LSTMs for sequence modelling', 'Master the Transformer architecture', 'Fine-tune BERT, GPT, and vision transformers', 'Build and train GANs and VAEs', 'Understand diffusion models and stable diffusion', 'Optimise models with quantisation and pruning', 'Deploy models with TensorRT and ONNX']?.map(item => <div key={item} className="flex items-start gap-3">
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
                      <span className="bg-violet text-white text-xs font-body font-semibold px-3 py-1 rounded-full">{module.week}</span>
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
                  <div className="font-heading font-bold text-navy text-3xl mb-1">₹65,000</div>
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
                  value: '10 Weeks'
                }, {
                  label: 'Level',
                  value: 'Advanced'
                }, {
                  label: 'Format',
                  value: 'Online & In-Person'
                }, {
                  label: 'Batch Size',
                  value: 'Max 12 Students'
                }, {
                  label: 'Certificate',
                  value: 'Yes, Included'
                }, {
                  label: 'Prerequisites',
                  value: 'ML Fundamentals'
                }, {
                  label: 'GPU Access',
                  value: 'Included'
                }]?.map(item => <div key={item?.label} className="flex items-center justify-between border-b border-gray-200 pb-3">
                      <span className="font-body text-bodyText text-sm">{item?.label}</span>
                      <span className="font-body font-semibold text-navy text-sm">{item?.value}</span>
                    </div>)}
                </div>
                <div className="mt-6">
                  <h4 className="font-heading font-semibold text-navy text-sm mb-3">Tools You\'ll Use</h4>
                  <div className="flex flex-wrap gap-2">
                    {tools?.map(tool => <span key={tool} className="bg-violet/10 text-violet text-xs font-body font-medium px-3 py-1 rounded-full">{tool}</span>)}
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
