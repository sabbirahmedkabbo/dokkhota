import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Laptop, Zap, HeartPulse, Briefcase, Globe, HelpCircle, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Discover = () => {
  const [matchStep, setMatchStep] = useState(0);
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 py-12 border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{language === 'bn' ? 'এআই দিয়ে আপনার দিকনির্দেশনা খুঁজুন' : 'Find your direction with AI'}</h1>
          <p className="text-lg text-gray-600 font-medium">{language === 'bn' ? 'আপনার ব্যক্তিগত ক্যারিয়ার স্ন্যাপশট পেতে তিনটি দ্রুত প্রশ্নের উত্তর দিন।' : 'Answer three quick questions to generate your personalized career snapshot.'}</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="flex bg-gray-50 border-b border-gray-200 p-2">
            {[0, 1, 2, 3].map((step) => (
              <div key={step} className="flex-1 px-2">
                <div className={`h-1.5 rounded transition-colors duration-300 ${matchStep >= step ? 'bg-brand-green' : 'bg-gray-200'}`}></div>
              </div>
            ))}
          </div>

          <div className="p-8 md:p-14 min-h-[450px] flex flex-col justify-center">
            {matchStep === 0 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
                <h3 className="text-xl font-bold text-center mb-8">{language === 'bn' ? 'আপনি কোন বিষয়ে আগ্রহী?' : 'What are you interested in?'}</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    { icon: Laptop, label: language === 'bn' ? 'কম্পিউটার' : "Computers" },
                    { icon: Zap, label: language === 'bn' ? 'ইলেকট্রিক্যাল কাজ' : "Electrical work" },
                    { icon: HeartPulse, label: language === 'bn' ? 'কেয়ার গিভিং' : "Care Giving" },
                    { icon: Briefcase, label: language === 'bn' ? 'ব্যবসা' : "Business" },
                    { icon: Globe, label: language === 'bn' ? 'বিদেশে সুযোগ' : "Overseas options" },
                    { icon: HelpCircle, label: language === 'bn' ? 'আমি নিশ্চিত নই' : "I'm not sure" },
                  ].map(({ icon: Icon, label }) => (
                    <button 
                      key={label}
                      onClick={() => setMatchStep(1)}
                      className="flex flex-col items-center justify-center gap-3 p-6 rounded border border-gray-200 hover:border-brand-green hover:bg-gray-50 transition-colors group"
                    >
                      <Icon className="w-6 h-6 text-gray-400 group-hover:text-brand-green transition-colors" />
                      <span className="font-bold text-gray-700 text-sm">{label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {matchStep === 1 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
                <h3 className="text-xl font-bold text-center mb-8">{language === 'bn' ? 'আপনার অভিজ্ঞতা কেমন?' : 'What describes your experience?'}</h3>
                <div className="space-y-3 max-w-md mx-auto">
                  {(language === 'bn' ? ['নতুন (বিগিনার)', 'কিছু অভিজ্ঞতা আছে', 'অভিজ্ঞ'] : ['Beginner', 'Some experience', 'Experienced']).map((level) => (
                    <button 
                      key={level}
                      onClick={() => setMatchStep(2)}
                      className="w-full py-4 px-6 rounded border border-gray-200 hover:border-brand-green hover:bg-gray-50 transition-colors text-left font-bold text-gray-700 flex justify-between items-center group"
                    >
                      {level}
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-brand-green transition-colors" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {matchStep === 2 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
                <h3 className="text-xl font-bold text-center mb-8">{language === 'bn' ? 'আপনার কাছে কোনটি সবচেয়ে গুরুত্বপূর্ণ?' : 'What matters most to you?'}</h3>
                <div className="space-y-3 max-w-md mx-auto">
                  {(language === 'bn' ? [
                    'দ্রুত চাকরি পাওয়া', 
                    'একটি ব্যবহারিক দক্ষতা শেখা', 
                    'ব্যবসা শুরু করা',
                    'বিদেশে যাওয়ার সুযোগ খোঁজা',
                    'আমি এখনও সিদ্ধান্ত নিচ্ছি'
                  ] : [
                    'Find a job quickly', 
                    'Learn a practical skill', 
                    'Start a business',
                    'Explore overseas opportunities',
                    'I\'m still deciding'
                  ]).map((goal) => (
                    <button 
                      key={goal}
                      onClick={() => setMatchStep(3)}
                      className="w-full py-4 px-6 rounded border border-gray-200 hover:border-brand-green hover:bg-gray-50 transition-colors text-left font-bold text-gray-700 flex justify-between items-center group"
                    >
                      {goal}
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-brand-green transition-colors" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {matchStep === 3 && (
              <div className="animate-in fade-in zoom-in duration-300">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded bg-gray-100 border border-gray-200 mb-4">
                    <Sparkles className="w-6 h-6 text-brand-green" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{language === 'bn' ? 'আপনার ক্যারিয়ার স্ন্যাপশট' : 'Your Career Snapshot'}</h3>
                </div>

                <div className="bg-brand-charcoal rounded-lg p-8 md:p-10 text-white mb-6">
                  <div className="flex items-center justify-between mb-6">
                    <span className="uppercase tracking-widest text-[10px] font-bold text-gray-400 border border-gray-600 px-2 py-1 rounded">{language === 'bn' ? 'এআই ম্যাচ ফলাফল' : 'AI Match Result'}</span>
                    <div className="bg-brand-green text-white px-3 py-1 rounded text-xs font-bold">
                      {language === 'bn' ? '৮৮% মিল' : '88% Match'}
                    </div>
                  </div>
                  <h4 className="text-3xl font-bold mb-6">{language === 'bn' ? 'কম্পিউটার অপারেশনস' : 'Computer Operations'}</h4>
                  
                  <p className="font-bold tracking-wide mb-3 text-gray-400 uppercase text-xs">{language === 'bn' ? 'এটি কেন উপযুক্ত হতে পারে:' : 'Why this may fit:'}</p>
                  <ul className="space-y-2 mb-8">
                    <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-brand-green" /> <span className="font-medium text-sm">{language === 'bn' ? 'প্রযুক্তিতে আগ্রহ' : 'Interest in technology'}</span></li>
                    <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-brand-green" /> <span className="font-medium text-sm">{language === 'bn' ? 'ব্যবহারিক কাজের প্রতি পছন্দ' : 'Preference for practical work'}</span></li>
                    <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-brand-green" /> <span className="font-medium text-sm">{language === 'bn' ? 'অফিস কাজের জন্য শক্তিশালী সম্ভাবনা' : 'Strong potential for office roles'}</span></li>
                  </ul>
                  
                  <Link to="/courses/computer" className="inline-flex items-center gap-2 bg-white text-brand-charcoal px-6 py-3 rounded font-bold hover:bg-gray-100 transition-colors text-sm">
                    {language === 'bn' ? 'এই পথটি অন্বেষণ করুন' : 'Explore this Pathway'} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                
                <div className="text-center text-xs font-medium text-gray-500">
                  {language === 'bn' ? 'এটি এআই-দ্বারা তৈরি একটি অন্বেষণ, কোনো আনুষ্ঠানিক সিদ্ধান্ত নয়।' : 'This is an AI-generated exploration, not an official eligibility decision.'}
                  <button onClick={() => setMatchStep(0)} className="ml-2 text-brand-green font-bold hover:underline">{language === 'bn' ? 'আবার শুরু করুন' : 'Start over'}</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
