import React, { useState } from 'react';
import { Sparkles, CheckCircle2, Circle, ArrowRight, TrendingUp, FileText, User } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const MyJourney = () => {
  const [activeTab, setActiveTab] = useState<'pathway' | 'skills' | 'cv'>('pathway');
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{language === 'bn' ? 'আমার ক্যারিয়ার যাত্রা' : 'My Career Journey'}</h1>
            <p className="text-gray-600">{language === 'bn' ? 'আপনার অগ্রগতি ট্র্যাক করুন এবং আপনার ব্যক্তিগতকৃত এআই অন্তর্দৃষ্টি অন্বেষণ করুন।' : 'Track your progress and explore your personalized AI insights.'}</p>
          </div>
          
          {/* Fictional Profile Banner */}
          <div className="bg-white px-4 py-3 rounded-xl shadow-sm border border-brand-green-light flex items-center gap-4">
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-gray-500" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">{language === 'bn' ? 'ডেমো প্রোফাইল' : 'Demo Profile'}</p>
              <p className="font-semibold text-gray-900">{language === 'bn' ? 'আয়েশা রহমান' : 'Ayesha Rahman'}</p>
            </div>
          </div>
        </div>

        {/* Custom Tabs */}
        <div className="flex space-x-2 mb-8 bg-white p-1.5 rounded-2xl shadow-sm border border-gray-100 inline-flex w-full overflow-x-auto scrollbar-hide">
          <button 
            onClick={() => setActiveTab('pathway')}
            className={`px-6 py-2.5 rounded-xl font-medium text-sm whitespace-nowrap transition-colors flex items-center gap-2 ${activeTab === 'pathway' ? 'bg-brand-charcoal text-white shadow-sm' : 'text-gray-600 hover:bg-gray-50'}`}
          >
            <TrendingUp className="w-4 h-4" /> {language === 'bn' ? 'পাথওয়ে ম্যাপ' : 'Pathway Map'}
          </button>
          <button 
            onClick={() => setActiveTab('skills')}
            className={`px-6 py-2.5 rounded-xl font-medium text-sm whitespace-nowrap transition-colors flex items-center gap-2 ${activeTab === 'skills' ? 'bg-brand-charcoal text-white shadow-sm' : 'text-gray-600 hover:bg-gray-50'}`}
          >
            <Sparkles className="w-4 h-4" /> {language === 'bn' ? 'দক্ষতার স্ন্যাপশট' : 'Skills Snapshot'}
          </button>
          <button 
            onClick={() => setActiveTab('cv')}
            className={`px-6 py-2.5 rounded-xl font-medium text-sm whitespace-nowrap transition-colors flex items-center gap-2 ${activeTab === 'cv' ? 'bg-brand-charcoal text-white shadow-sm' : 'text-gray-600 hover:bg-gray-50'}`}
          >
            <FileText className="w-4 h-4" /> {language === 'bn' ? 'সিভি বিল্ডার (ডেমো)' : 'CV Builder Demo'}
          </button>
        </div>

        {activeTab === 'pathway' && (
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
            <div className="max-w-2xl mx-auto space-y-8">
              
              <div className="flex gap-6">
                <div className="flex flex-col items-center mt-1">
                  <CheckCircle2 className="w-8 h-8 text-brand-green" />
                  <div className="w-0.5 h-full bg-brand-green mt-2 rounded-full"></div>
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-bold text-gray-900">{language === 'bn' ? 'নিজেকে জানুন' : 'Discover yourself'}</h3>
                  <p className="text-gray-600 mt-1">{language === 'bn' ? 'এআই ক্যারিয়ার ম্যাচ সম্পন্ন হয়েছে' : 'Completed AI career match'}</p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="flex flex-col items-center mt-1">
                  <CheckCircle2 className="w-8 h-8 text-brand-green" />
                  <div className="w-0.5 h-full bg-brand-green mt-2 rounded-full"></div>
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-bold text-gray-900">{language === 'bn' ? 'দক্ষতার স্ন্যাপশট' : 'Skills Snapshot'}</h3>
                  <p className="text-gray-600 mt-1">{language === 'bn' ? 'বেসিক ডায়াগনস্টিক রেকর্ড করা হয়েছে' : 'Basic diagnostics recorded'}</p>
                  <button onClick={() => setActiveTab('skills')} className="mt-3 text-sm font-semibold text-brand-green hover:underline">{language === 'bn' ? 'ফলাফল দেখুন' : 'View results'}</button>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="flex flex-col items-center mt-1">
                  <div className="w-8 h-8 rounded-full border-4 border-brand-green bg-white shadow-sm z-10 flex items-center justify-center">
                    <div className="w-2.5 h-2.5 bg-brand-green rounded-full"></div>
                  </div>
                  <div className="w-0.5 h-full bg-gray-200 mt-2 rounded-full"></div>
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-bold text-gray-900">{language === 'bn' ? 'প্রশিক্ষণ অন্বেষণ করুন' : 'Explore Training'}</h3>
                  <p className="text-gray-600 mt-1">{language === 'bn' ? 'আপনি বর্তমানে কোর্সের বিকল্পগুলো দেখছেন।' : 'You are currently looking at course options.'}</p>
                  
                  <div className="bg-brand-green-light rounded-2xl p-5 mt-4 border border-brand-green/20">
                    <div className="flex items-start gap-3">
                      <Sparkles className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-brand-green-dark text-sm mb-1">{language === 'bn' ? 'এআই সুপারিশ' : 'AI Recommendation'}</p>
                        <p className="text-gray-700 text-sm mb-3">{language === 'bn' ? 'অফিস কাজে আপনার আগ্রহের ওপর ভিত্তি করে, কম্পিউটার অপারেশনস কোর্সটি দেখুন।' : 'Based on your interest in office work, explore the Computer Operations course.'}</p>
                        <a href="/courses/computer" className="inline-flex items-center gap-1 text-sm font-bold bg-white text-brand-green px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                          {language === 'bn' ? 'কোর্স দেখুন' : 'View Course'} <ArrowRight className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-6 opacity-60">
                <div className="flex flex-col items-center mt-1">
                  <Circle className="w-8 h-8 text-gray-300" />
                  <div className="w-0.5 h-full bg-gray-200 mt-2 rounded-full hidden"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{language === 'bn' ? 'কাজের জন্য প্রস্তুতি নিন' : 'Prepare for Work'}</h3>
                  <p className="text-gray-600 mt-1">{language === 'bn' ? 'আপনার সিভি তৈরি করুন এবং ইন্টারভিউ প্র্যাকটিস করুন' : 'Build your CV and practice interviews'}</p>
                </div>
              </div>
              
            </div>
          </div>
        )}

        {activeTab === 'skills' && (
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">{language === 'bn' ? 'এআই দক্ষতার স্ন্যাপশট' : 'AI Skills Snapshot'}</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                {[
                  { name: language === 'bn' ? 'ডিজিটাল দক্ষতা' : 'Digital Skills', score: 76, color: 'bg-blue-500' },
                  { name: language === 'bn' ? 'ইংরেজি' : 'English', score: 68, color: 'bg-indigo-500' },
                  { name: language === 'bn' ? 'সংখ্যাজ্ঞান (Numeracy)' : 'Numeracy', score: 72, color: 'bg-teal-500' },
                  { name: language === 'bn' ? 'কাজের প্রস্তুতি' : 'Work Readiness', score: 81, color: 'bg-brand-green' }
                ].map(skill => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-end mb-2">
                      <span className="font-semibold text-gray-700">{skill.name}</span>
                      <span className="text-sm font-bold text-gray-900">{skill.score}%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                      <div className={`h-3 rounded-full ${skill.color}`} style={{ width: `${skill.score}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-brand-off-white p-6 rounded-3xl border border-gray-100 h-fit">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-5 h-5 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">{language === 'bn' ? 'এআই ইনসাইট' : 'AI Insight'}</h3>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {language === 'bn' 
                    ? '"আপনার সবচেয়ে শক্তিশালী জায়গা হলো কাজের প্রস্তুতি। ডিজিটাল প্রোডাক্টিভিটি দক্ষতা উন্নত করলে আপনি অফিস-ভিত্তিক কাজে আরও আত্মবিশ্বাসী হতে পারবেন। আপনার ইংরেজি বেশ ভালো, তবে কর্মক্ষেত্রের যোগাযোগের প্র্যাকটিস করলে আরও সাহায্য হবে।"' 
                    : '"Your strongest area is workplace readiness. Improving digital productivity skills could make you more confident in office-based roles. Your English is solid but practicing workplace communication will help."'}
                </p>
                <button 
                  onClick={() => document.dispatchEvent(new CustomEvent('open-ai-chat'))}
                  className="w-full bg-white border border-gray-300 font-semibold text-gray-700 py-3 rounded-xl hover:border-brand-green hover:text-brand-green transition-colors"
                >
                  {language === 'bn' ? 'কীভাবে উন্নতি করবেন তা জিজ্ঞাসা করুন' : 'Ask how to improve'}
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'cv' && (
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 text-center min-h-[400px] flex flex-col items-center justify-center">
            <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mb-6">
              <FileText className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{language === 'bn' ? 'ইন্টারেক্টিভ সিভি বিল্ডার' : 'Interactive CV Builder'}</h2>
            <p className="text-gray-600 max-w-md mb-8">
              {language === 'bn' 
                ? 'আপনার কাঙ্ক্ষিত চাকরির জন্য মানানসই পেশাদার সারসংক্ষেপ এবং দক্ষতার তালিকা স্বয়ংক্রিয়ভাবে তৈরি করতে আমাদের এআই কোপাইলটের সাথে চ্যাট করুন।'
                : 'Chat with our AI Copilot to automatically generate a professional summary and skills list tailored for your target job.'}
            </p>
            <button 
              onClick={() => document.dispatchEvent(new CustomEvent('open-ai-chat'))}
              className="bg-brand-charcoal text-white font-bold px-8 py-3 rounded-xl hover:bg-gray-800 transition-colors shadow-sm"
            >
              {language === 'bn' ? 'এআই দিয়ে সিভি তৈরি শুরু করুন' : 'Start building with AI'}
            </button>
            <p className="mt-4 text-xs text-gray-400">{language === 'bn' ? 'সবকিছু শুধুমাত্র এই ডেমোতে বিদ্যমান। আপনার ডেটা সংরক্ষণ করা হয় না।' : 'Everything exists only in this demo. Your data is not saved.'}</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default MyJourney;
