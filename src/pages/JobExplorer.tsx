import React, { useState } from 'react';
import { Briefcase, Building, Star, Search, Filter, Sparkles, MessageCircle, X } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const JobExplorer = () => {
  const [showInterviewModal, setShowInterviewModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState('');
  const { language, t } = useLanguage();

  const mockJobs = [
    {
      id: 1,
      title: language === 'bn' ? 'অফিস সহকারী' : 'Office Assistant',
      industry: language === 'bn' ? 'প্রশাসনিক সেবা' : 'Administrative Services',
      style: language === 'bn' ? 'অফিস' : 'Office',
      matchScore: 92,
      skills: language === 'bn' ? ['ডিজিটাল দক্ষতা', 'যোগাযোগ', 'সংগঠন'] : ['Digital fluency', 'Communication', 'Organization'],
      aiNote: language === 'bn' ? 'আপনার আগ্রহের সাথে এটি দারুণভাবে মিলে যায়। ভালো প্রারম্ভিক বেতন।' : 'Strong fit for your practical preference and interest in technology. Good starting salary.'
    },
    {
      id: 2,
      title: language === 'bn' ? 'এসএমই ডিজিটাল অ্যাসিস্ট্যান্ট' : 'SME Digital Assistant',
      industry: language === 'bn' ? 'ব্যবসায়িক কাজ' : 'Business Operations',
      style: language === 'bn' ? 'অফিস/রিমোট' : 'Office/Remote',
      matchScore: 87,
      skills: language === 'bn' ? ['বেসিক অ্যাকাউন্টিং', 'ডেটা এন্ট্রি', 'গ্রাহক সেবা'] : ['Basic accounting', 'Data entry', 'Customer service'],
      aiNote: language === 'bn' ? 'ভালো মিল রয়েছে, তবে আবেদন করার আগে গণিতে দক্ষতা বাড়ানো ভালো।' : 'Good alignment, though you may want to strengthen numeracy skills before applying.'
    },
    {
      id: 3,
      title: language === 'bn' ? 'ডেটা এন্ট্রি অপারেটর' : 'Data Entry Operator',
      industry: language === 'bn' ? 'আইটি সাপোর্ট' : 'IT Support',
      style: language === 'bn' ? 'অফিস' : 'Office',
      matchScore: 84,
      skills: language === 'bn' ? ['টাইপিং স্পিড', 'নির্ভুলতা', 'স্প্রেডশিট'] : ['Typing speed', 'Accuracy', 'Spreadsheets'],
      aiNote: language === 'bn' ? 'কম্পিউটারের প্রতি আপনার আগ্রহের সাথে মিলে যায়। একটি নির্ভরযোগ্য এন্ট্রি-লেভেল কাজ।' : 'Matches your interest in computers. A reliable entry-level pathway.'
    },
    {
      id: 4,
      title: language === 'bn' ? 'ডোমেস্টিক কেয়ার অ্যাসিস্ট্যান্ট' : 'Domestic Care Assistant',
      industry: language === 'bn' ? 'স্বাস্থ্যসেবা' : 'Healthcare',
      style: language === 'bn' ? 'রোগী-কেন্দ্রিক' : 'Patient-facing',
      matchScore: 65,
      skills: language === 'bn' ? ['রোগীর যত্ন', 'সহানুভূতি', 'স্বাস্থ্যবিধি'] : ['Patient care', 'Empathy', 'Hygiene protocols'],
      aiNote: language === 'bn' ? 'ভালো যোগাযোগের দক্ষতা এবং শারীরিক সক্ষমতা প্রয়োজন।' : 'Requires strong interpersonal skills and physical stamina. Consider taking the care giving bridging module.'
    },
    {
      id: 5,
      title: language === 'bn' ? 'ইলেকট্রিক্যাল হেল্পার' : 'Electrical Helper',
      industry: language === 'bn' ? 'নির্মাণ/রক্ষণাবেক্ষণ' : 'Construction/Maintenance',
      style: language === 'bn' ? 'হাতে-কলমে কাজ' : 'Hands-on',
      matchScore: 45,
      skills: language === 'bn' ? ['শারীরিক সক্ষমতা', 'নিরাপত্তা প্রটোকল', 'কারিগরি জ্ঞান'] : ['Physical stamina', 'Safety protocols', 'Technical basics'],
      aiNote: language === 'bn' ? 'আপনার বর্তমান আগ্রহের থেকে আলাদা, তবে স্থানীয়ভাবে এর বেশ চাহিদা রয়েছে।' : 'Different from your current stated interests, but highly practical and in-demand locally.'
    },
    {
      id: 6,
      title: language === 'bn' ? 'ছোট ব্যবসার মালিক (রিটেইল)' : 'Small Business Owner (Retail)',
      industry: language === 'bn' ? 'উদ্যোক্তা' : 'Entrepreneurship',
      style: language === 'bn' ? 'স্ব-নিযুক্ত' : 'Self-employed',
      matchScore: 78,
      skills: language === 'bn' ? ['বিক্রয়', 'ইনভেন্টরি', 'বেসিক ফাইন্যান্স'] : ['Sales', 'Inventory', 'Basic finance'],
      aiNote: language === 'bn' ? 'আপনি ব্যবসায় আগ্রহ দেখিয়েছেন! এন্টারপ্রাইজ প্রশিক্ষণ মডিউলটি অন্বেষণ করা ভালো হবে।' : 'You showed interest in business! Exploring the enterprise training module is recommended.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{t('nav.careers')}</h1>
              <span className="bg-gray-200 text-gray-700 text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">{language === 'bn' ? 'ডেমো ডেটা' : 'Demo Data'}</span>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl font-medium">
              {language === 'bn' ? 'বিভিন্ন পদের উদাহরণ দেখুন, আপনার দক্ষতার সাথে মিল যাচাই করুন এবং আমাদের এআই কোচের সাথে ইন্টারভিউ প্র্যাকটিস করুন।' : 'Explore example roles, see how your skills align, and practice interviews with our AI Coach.'}
            </p>
          </div>
          
          <div className="flex gap-3">
            <button className="flex items-center gap-2 bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded font-bold hover:bg-gray-50 transition-colors shadow-sm">
              <Filter className="w-4 h-4" /> {language === 'bn' ? 'ফিল্টার' : 'Filter'}
            </button>
            <div className="relative">
              <input 
                type="text" 
                placeholder={language === 'bn' ? 'খুঁজুন...' : 'Search demo roles...'} 
                className="pl-10 pr-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green font-medium text-sm"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>
          </div>
        </div>

        <div className="bg-brand-charcoal text-white rounded-lg p-8 mb-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <div className="bg-white/10 p-1.5 rounded border border-white/20">
                <Sparkles className="w-4 h-4 text-gray-300" />
              </div>
              <span className="font-bold text-xs uppercase tracking-wider text-gray-300">AI Interview Coach</span>
            </div>
            <h2 className="text-2xl font-bold mb-2 text-white">{language === 'bn' ? 'আপনার পরবর্তী কাজের জন্য প্রস্তুতি নিন' : 'Practice for your next role'}</h2>
            <p className="text-gray-400 max-w-xl text-sm font-medium">
              {language === 'bn' ? 'আমাদের এআই ইন্টারভিউ সিমুলেটর ব্যবহার করে দেখুন। একটি পদ বেছে নিন, উত্তর দিন এবং তাৎক্ষণিক ফিডব্যাক পান।' : 'Try our interactive AI interview simulator. Choose a role, answer questions naturally, and receive instant feedback on confidence and clarity.'}
            </p>
          </div>
          
          <button 
            onClick={() => setShowInterviewModal(true)}
            className="relative z-10 shrink-0 bg-white text-brand-charcoal font-bold px-6 py-3 rounded hover:bg-gray-100 transition-colors shadow-sm border border-transparent"
          >
            {language === 'bn' ? 'প্র্যাকটিস শুরু করুন' : 'Start Practice Session'}
          </button>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-gray-400" /> 
          {language === 'bn' ? 'এআই ম্যাচ করা সুযোগসমূহ' : 'AI Matched Opportunities'}
        </h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          {mockJobs.map(job => (
            <div key={job.id} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:border-gray-300 transition-colors relative flex flex-col">
              {job.matchScore >= 80 && (
                <div className="absolute top-0 right-0 bg-brand-green text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl shadow-sm flex items-center gap-1">
                  <Star className="w-3 h-3 fill-current" /> {language === 'bn' ? 'হাই ম্যাচ' : 'High Match'}
                </div>
              )}
              
              <div className="flex justify-between items-start mb-5 mt-2">
                <div>
                  <h4 className="text-lg font-bold text-gray-900">{job.title}</h4>
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 mt-1 font-bold uppercase tracking-wider">
                    <Building className="w-3.5 h-3.5" /> {job.industry}
                  </div>
                </div>
                <div className="text-right">
                  <div className={`text-2xl font-black tracking-tight ${job.matchScore >= 80 ? 'text-brand-green' : 'text-gray-500'}`}>
                    {job.matchScore}%
                  </div>
                  <div className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">{language === 'bn' ? 'এআই ম্যাচ' : 'AI Match'}</div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-5">
                <span className="px-2 py-1 bg-gray-100 border border-gray-200 text-gray-700 text-[10px] font-bold uppercase tracking-wider rounded">
                  {job.style}
                </span>
                {job.skills.map(skill => (
                  <span key={skill} className="px-2 py-1 bg-gray-50 text-gray-600 text-[10px] font-bold uppercase tracking-wider rounded border border-gray-200">
                    {skill}
                  </span>
                ))}
              </div>
              
              <div className="mt-auto bg-gray-50 p-4 rounded border border-gray-200 flex items-start gap-3">
                <Sparkles className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1">{language === 'bn' ? 'এআই ইনসাইট' : 'AI Insight'}</p>
                  <p className="text-sm font-medium text-gray-700 leading-snug">{job.aiNote}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interview Modal */}
      {showInterviewModal && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
              <div className="flex items-center gap-2 text-gray-800 font-bold text-sm">
                <MessageCircle className="w-4 h-4" />
                {language === 'bn' ? 'ইন্টারভিউ প্র্যাকটিস' : 'Practice Interview'}
              </div>
              <button 
                onClick={() => setShowInterviewModal(false)}
                className="p-1 hover:bg-gray-200 rounded transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            
            <div className="p-8 flex-1 overflow-y-auto">
              {!selectedJob ? (
                <div className="text-center animate-in fade-in zoom-in duration-300">
                  <div className="w-12 h-12 bg-gray-100 border border-gray-200 rounded flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-5 h-5 text-gray-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{language === 'bn' ? 'একটি প্র্যাকটিস দৃশ্যপট নির্বাচন করুন' : 'Select a practice scenario'}</h3>
                  <p className="text-gray-600 mb-8 font-medium text-sm">{language === 'bn' ? 'আপনি কোন পদের জন্য প্রস্তুতি নিতে চান?' : 'Which type of role would you like to prepare for?'}</p>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    {(language === 'bn' ? ['অফিস জব', 'কেয়ার গিভিং', 'ইলেকট্রিক্যাল কাজ', 'সাধারণ ইন্টারভিউ'] : ['Office / Admin Job', 'Care Giving Job', 'Electrical Job', 'General Interview']).map(role => (
                      <button
                        key={role}
                        onClick={() => setSelectedJob(role)}
                        className="py-4 px-6 border border-gray-200 bg-gray-50 rounded hover:border-gray-400 hover:bg-gray-100 font-bold text-gray-700 transition-colors text-sm"
                      >
                        {role}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="animate-in fade-in slide-in-from-right-8 duration-300 flex flex-col h-full">
                  <div className="bg-gray-50 p-5 rounded border border-gray-200 mb-6 relative">
                    <div className="absolute top-3 right-3 text-[10px] font-bold text-gray-400 uppercase tracking-wider">AI Interviewer</div>
                    <p className="text-xs font-bold text-gray-500 mb-2 flex items-center gap-1.5 uppercase tracking-wider">
                      <MessageCircle className="w-3.5 h-3.5" /> {selectedJob}
                    </p>
                    <p className="text-sm text-gray-900 font-bold leading-relaxed">
                      {language === 'bn' ? '"স্বাগতম! শুরু করার জন্য, আপনার সম্পর্কে কিছু বলুন এবং কেন আপনি এই কাজে আগ্রহী তা জানান।"' : '"Welcome! To start off, could you tell me a bit about yourself and why you are interested in this role? Focus on your practical skills."'}
                    </p>
                  </div>
                  
                  <textarea 
                    className="w-full h-32 border border-gray-300 rounded p-4 focus:ring-1 focus:ring-brand-green focus:border-brand-green resize-none text-gray-700 mb-6 font-medium text-sm"
                    placeholder={language === 'bn' ? 'এখানে আপনার উত্তর লিখুন...' : 'Type your answer here...'}
                  ></textarea>
                  
                  <div className="mt-auto flex justify-between items-center pt-4 border-t border-gray-100">
                    <button 
                      onClick={() => setSelectedJob('')}
                      className="text-gray-500 hover:text-gray-900 font-bold text-xs uppercase tracking-wider"
                    >
                      {language === 'bn' ? 'রোল পরিবর্তন করুন' : 'Change Role'}
                    </button>
                    <button 
                      onClick={() => {
                        alert(language === 'bn' ? "=== এআই ফিডব্যাক ===\n\n🎯 আত্মবিশ্বাস: ভালো\n🗣️ স্পষ্টতা: শক্তিশালী\n\n💡 পরামর্শ: আপনার দক্ষতার একটি বাস্তব উদাহরণ দেওয়ার চেষ্টা করুন।" : "=== AI Feedback Demo ===\n\n🎯 Confidence: Good\n🗣️ Clarity: Strong\n\n💡 Note: Try to give one concrete example of a time you used these skills in a practical setting.");
                      }}
                      className="bg-brand-charcoal text-white px-6 py-2.5 rounded font-bold hover:bg-gray-800 transition-colors text-sm shadow-sm"
                    >
                      {language === 'bn' ? 'উত্তর জমা দিন' : 'Submit Answer'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobExplorer;
