import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Laptop, Briefcase, ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Home = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const { t, language } = useLanguage();

  const faqs = language === 'bn' ? [
    { q: "দক্ষতা সেতু কী?", a: "দক্ষতা সেতু হলো একটি এআই-চালিত এমভিপি প্রোটোটাইপ যা বাংলাদেশের তরুণদের দক্ষতা, ক্যারিয়ারের পথ এবং প্রশিক্ষণের সুযোগ অন্বেষণ করতে সহায়তা করার জন্য ডিজাইন করা হয়েছে।" },
    { q: "এআই ক্যারিয়ার অ্যাসিস্ট্যান্ট কীভাবে কাজ করে?", a: "এআই অ্যাসিস্ট্যান্ট স্বাভাবিক কথোপকথনের মাধ্যমে আপনার আগ্রহ এবং অভিজ্ঞতা সম্পর্কে জানতে পারে, তারপর উপযুক্ত পথ, দক্ষতা এবং সম্ভাব্য প্রশিক্ষণ কোর্সের পরামর্শ দেয়।" },
    { q: "এই পরামর্শগুলো কি সরকারি সিদ্ধান্ত?", a: "না। এটি একটি ডেমো প্রোটোটাইপ। সমস্ত সুপারিশ, চাকরির ম্যাচ এবং কোর্সের ডেটা শুধু উদাহরণের জন্য।" },
    { q: "আমি কি অ্যাকাউন্ট ছাড়াই প্ল্যাটফর্মটি ব্যবহার করতে পারি?", a: "হ্যাঁ! সম্পূর্ণ অভিজ্ঞতা কোনো সাইন-আপ ছাড়াই অবিলম্বে আপনার ব্রাউজারে কাজ করে। আপনার ডেটা সংরক্ষণ করা হয় না।" }
  ] : [
    { q: "What is Dokkhota Shetu?", a: "Dokkhota Shetu is an AI-powered MVP prototype designed to help young people explore skills, career pathways, and training opportunities in Bangladesh." },
    { q: "How does the AI career assistant work?", a: "The AI assistant learns about your interests and experience through natural conversation, then suggests tailored pathways, skills to develop, and potential training courses." },
    { q: "Are the recommendations official decisions?", a: "No. This is a demonstration prototype. All recommendations, job matches, and course data are illustrative mockups, not official eligibility or live vacancies." },
    { q: "Can I use the platform without an account?", a: "Yes! The entire experience works immediately in your browser with no sign-up required. Your data is not saved." }
  ];

  const handleOpenChat = () => {
    document.dispatchEvent(new CustomEvent('open-ai-chat'));
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-50 pt-20 pb-24 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-gray-200 text-gray-600 text-xs font-bold uppercase tracking-wider mb-6 rounded">
                <Sparkles className="w-3 h-3 text-brand-green" /> {language === 'bn' ? 'ক্যারিয়ার ডিসকভারি প্ল্যাটফর্ম' : 'Career Discovery Platform'}
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-charcoal leading-[1.1] mb-6">
                {language === 'bn' ? (
                  <>দক্ষতা থেকে <br/><span className="text-brand-green">কাজের পথে</span></>
                ) : (
                  <>From Skills to <br/><span className="text-brand-green">Work</span></>
                )}
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg font-medium leading-relaxed">
                {t('home.hero.subtitle')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/courses"
                  className="bg-brand-charcoal text-white px-8 py-4 rounded font-bold text-center hover:bg-gray-800 transition-all shadow-sm"
                >
                  {t('home.hero.explore')}
                </Link>
                <button 
                  onClick={handleOpenChat}
                  className="bg-brand-green text-white px-8 py-4 rounded font-bold flex items-center justify-center gap-2 hover:bg-brand-green-dark transition-all shadow-sm group"
                >
                  <Sparkles className="w-4 h-4 text-white" />
                  {t('home.hero.askAI')}
                </button>
              </div>
            </div>

            {/* AI Assistant Card on Hero */}
            <div className="relative mt-8 md:mt-0">
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gray-100 border border-gray-200 rounded flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5 text-brand-green" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">AI Career Copilot</h3>
                    <p className="text-brand-green text-xs font-bold uppercase tracking-wider flex items-center gap-1 mt-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Online & ready
                    </p>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded p-4 mb-4 border border-gray-100">
                  <p className="text-gray-800 font-medium text-sm">
                    {language === 'bn' ? 'হ্যালো! আমি আপনার দক্ষতা সেতু এআই ক্যারিয়ার কোপাইলট।' : "Hello! I'm your Dokkhota Shetu AI Career Copilot."}
                  </p>
                  <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                    {language === 'bn' 
                      ? 'আপনি কী করতে পছন্দ করেন, কী পড়াশোনা করেছেন, বা কোন ধরণের কাজে আগ্রহী তা আমাকে জানান — আমি আপনাকে উপযুক্ত পথ খুঁজতে সাহায্য করব।' 
                      : "Tell me what you enjoy, what you've studied, or what kind of work you're interested in — I'll help you explore suitable pathways."}
                  </p>
                </div>
                
                <div className="space-y-2 mb-4">
                  <button onClick={handleOpenChat} className="block w-full text-left px-4 py-3 bg-white border border-gray-200 rounded text-sm font-medium text-gray-700 hover:border-brand-green hover:bg-gray-50 transition-colors">
                    {language === 'bn' ? '"আমি এসএসসি পাস করেছি। আমি কী করতে পারি?"' : '"I finished SSC. What can I do?"'}
                  </button>
                  <button onClick={handleOpenChat} className="block w-full text-left px-4 py-3 bg-white border border-gray-200 rounded text-sm font-medium text-gray-700 hover:border-brand-green hover:bg-gray-50 transition-colors">
                     {language === 'bn' ? '"আমি স্বাস্থ্যসেবা খাতে কাজ করতে চাই।"' : '"I want to work in healthcare."'}
                  </button>
                </div>
                
                <div className="relative cursor-pointer" onClick={handleOpenChat}>
                  <div className="bg-gray-50 flex items-center p-1 rounded border border-gray-200">
                    <div className="flex-1 px-3 text-sm text-gray-500 font-medium">
                      {language === 'bn' ? 'আমাকে কিছু জিজ্ঞাসা করুন...' : 'Ask me anything...'}
                    </div>
                    <div className="p-2 bg-brand-green text-white rounded">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Navigation Grid */}
      <section className="py-20 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/courses" className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 hover:border-brand-green transition-colors group flex flex-col items-start">
              <div className="w-12 h-12 bg-gray-100 border border-gray-200 rounded flex items-center justify-center mb-5">
                <Laptop className="w-5 h-5 text-gray-700 group-hover:text-brand-green transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">{t('nav.courses')}</h3>
              <p className="text-gray-600 font-medium text-sm leading-relaxed">
                {language === 'bn' ? 'আপনার দক্ষতা এবং আগ্রহের সাথে মিলে যায় এমন প্র্যাকটিক্যাল ট্রেনিং প্রোগ্রামগুলো দেখুন।' : 'Discover practical training programs matched to your skills and interests.'}
              </p>
            </Link>
            
            <Link to="/jobs" className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 hover:border-brand-green transition-colors group flex flex-col items-start">
              <div className="w-12 h-12 bg-gray-100 border border-gray-200 rounded flex items-center justify-center mb-5">
                <Briefcase className="w-5 h-5 text-gray-700 group-hover:text-brand-green transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">{t('nav.careers')}</h3>
              <p className="text-gray-600 font-medium text-sm leading-relaxed">
                {language === 'bn' ? 'চাকরিগুলো কেমন, কী কী দক্ষতা লাগে এবং আপনার সাথে কতটা মেলে তা যাচাই করুন।' : 'See what jobs look like, what skills they need, and how you match up.'}
              </p>
            </Link>
            
            <Link to="/journey" className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 hover:border-brand-green transition-colors group flex flex-col items-start">
              <div className="w-12 h-12 bg-gray-100 border border-gray-200 rounded flex items-center justify-center mb-5">
                <Sparkles className="w-5 h-5 text-gray-700 group-hover:text-brand-green transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">{t('nav.journey')}</h3>
              <p className="text-gray-600 font-medium text-sm leading-relaxed">
                {language === 'bn' ? 'আপনার অগ্রগতি দেখুন, সিভি তৈরি করুন এবং এআইয়ের সাথে ইন্টারভিউ প্র্যাকটিস করুন।' : 'Track your progress, build your CV, and practice for interviews with AI.'}
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Demo Success Stories */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{language === 'bn' ? 'ক্যারিয়ারের কিছু উদাহরণ' : 'Example Pathways'}</h2>
            <p className="text-gray-500 text-xs uppercase tracking-widest font-bold">{language === 'bn' ? 'নমুনা প্রোফাইল' : 'Illustrative demo profiles'}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="w-full h-40 bg-gray-100 rounded border border-gray-200 mb-6 flex items-center justify-center overflow-hidden">
                <img src="/ayesha.jpg" alt="Ayesha" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-1">{language === 'bn' ? 'আয়েশা' : 'Ayesha'}</h3>
              <p className="text-gray-500 font-bold mb-3 uppercase tracking-wider text-[10px]">
                {language === 'bn' ? '"অনিশ্চয়তা থেকে অফিস কাজের দক্ষতায়"' : '"From uncertainty to office skills"'}
              </p>
              <p className="text-gray-700 font-medium text-sm leading-relaxed">
                {language === 'bn' ? 'কম্পিউটার অপারেশনস কোর্স খুঁজে পেতে এআই কোপাইলট ব্যবহার করেছে। এখন সে প্রশাসনিক পদের জন্য ডিজিটাল দক্ষতা তৈরি করছে।' : 'Used the AI Copilot to discover a pathway into Computer Operations, building digital fluency for administrative roles.'}
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="w-full h-40 bg-gray-100 rounded border border-gray-200 mb-6 flex items-center justify-center overflow-hidden">
                <img src="/rahim.jpg" alt="Rahim" className="w-full h-full object-cover object-top" />
              </div>
              <h3 className="text-xl font-bold mb-1">{language === 'bn' ? 'রহিম' : 'Rahim'}</h3>
              <p className="text-gray-500 font-bold mb-3 uppercase tracking-wider text-[10px]">
                {language === 'bn' ? '"হাতে-কলমে কাজ থেকে ইলেকট্রিক্যালে"' : '"From hands-on interest to electrical work"'}
              </p>
              <p className="text-gray-700 font-medium text-sm leading-relaxed">
                {language === 'bn' ? 'ব্যবহারিক কাজের স্টাইলের কারণে সে উচ্চ ম্যাচ পেয়েছে। ইলেকট্রিক্যাল ইনস্টলেশন কোর্স খুঁজে পেয়েছে এবং কনস্ট্রাকশন প্রজেক্টের জন্য উপযুক্ত বলে মনে করেছে।' : 'Matched high for practical work style. Explored Electrical Installation and found a fit for SME construction projects.'}
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="w-full h-40 bg-gray-100 rounded border border-gray-200 mb-6 flex items-center justify-center overflow-hidden">
                <img src="/nusrat.jpg" alt="Nusrat" className="w-full h-full object-cover object-top" />
              </div>
              <h3 className="text-xl font-bold mb-1">{language === 'bn' ? 'নুসরাত' : 'Nusrat'}</h3>
              <p className="text-gray-500 font-bold mb-3 uppercase tracking-wider text-[10px]">
                {language === 'bn' ? '"কেয়ার গিভিংকে পেশা হিসেবে বেছে নেওয়া"' : '"Exploring care giving as a career"'}
              </p>
              <p className="text-gray-700 font-medium text-sm leading-relaxed">
                {language === 'bn' ? 'কোর্স এক্সপ্লোরারের মাধ্যমে স্পেশালাইজড কেয়ার গিভিং কোর্স খুঁজে পেয়েছে। এখন সে স্বাস্থ্যসেবায় কাজ করার প্রস্তুতি নিচ্ছে।' : 'Discovered Specialized Care Giving through the Course Explorer. Preparing for opportunities in healthcare support.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gray-50 border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">{language === 'bn' ? 'সাধারণ জিজ্ঞাসা (FAQ)' : 'Frequently Asked Questions'}</h2>
          </div>
          
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded shadow-sm border border-gray-200">
                <button 
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center font-bold text-gray-900 hover:bg-gray-50 transition-colors"
                >
                  {faq.q}
                  {activeFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                {activeFaq === index && (
                  <div className="px-6 pb-5 text-gray-600 font-medium text-sm leading-relaxed border-t border-gray-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="py-20 bg-brand-green-dark text-white text-center px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">{language === 'bn' ? 'আপনার পথ খুঁজে পেতে প্রস্তুত?' : 'Ready to find your path?'}</h2>
          <p className="text-gray-300 mb-8 font-medium">
            {language === 'bn' ? 'আপনার জন্য উপযুক্ত দক্ষতা এবং কোর্সগুলো খুঁজতে আমাদের এআই কোপাইলটের সাথে কথা বলুন।' : 'Start a conversation with our AI Copilot to explore skills and courses tailored for you.'}
          </p>
          <button 
            onClick={handleOpenChat}
            className="bg-white text-brand-charcoal px-8 py-3.5 rounded font-bold hover:bg-gray-100 transition-colors shadow-sm"
          >
            {language === 'bn' ? 'এআই কোপাইলটের সাথে কথা বলুন' : 'Talk to AI Copilot Now'}
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
