import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, BookOpen, Clock, Award, Key } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const CourseExplorer = () => {
  const { language, t } = useLanguage();

  const courses = [
    {
      id: 'computer',
      title: language === 'bn' ? 'কম্পিউটার অপারেশন' : 'Computer Operation',
      level: language === 'bn' ? 'লেভেল ৩' : 'Level 3',
      description: language === 'bn' ? 'প্রশাসনিক এবং ব্যবসায়িক পরিবেশের জন্য ব্যবহারিক ডিজিটাল দক্ষতা তৈরি করুন।' : 'Build practical digital and office skills for administrative and business environments.',
      unlocks: language === 'bn' ? 'অফিস সহকারী পদ, বেসিক ফ্রিল্যান্স ডেটা এন্ট্রি।' : 'Office Assistant roles, basic freelance data entry, administrative eligibility.',
      tags: language === 'bn' ? ['ডিজিটাল', 'অফিস', 'এসএমই'] : ['Digital', 'Office', 'SME'],
      imageLabel: language === 'bn' ? '💻 ডিজিটাল লার্নিং ল্যাব' : '💻 Digital Learning Lab'
    },
    {
      id: 'caregiving',
      title: language === 'bn' ? 'বিশেষায়িত যত্ন (Care Giving)' : 'Specialized Care Giving',
      level: language === 'bn' ? 'লেভেল ৩' : 'Level 3',
      description: language === 'bn' ? 'রোগী ও বয়স্কদের সেবার জন্য পেশাদার প্রশিক্ষণ।' : 'Professional training for domestic and institutional elderly and patient care.',
      unlocks: language === 'bn' ? 'হেলথকেয়ার সহকারী, বয়স্কদের সেবা, বিদেশে নার্সিং সাপোর্ট।' : 'Healthcare assistant roles, domestic care work, overseas care migration pathways.',
      tags: language === 'bn' ? ['স্বাস্থ্যসেবা', 'ডোমেস্টিক', 'বিদেশে সুযোগ'] : ['Healthcare', 'Domestic', 'Overseas'],
      imageLabel: language === 'bn' ? '🏥 কেয়ার ট্রেনিং সেন্টার' : '🏥 Care Training Center'
    },
    {
      id: 'electrical',
      title: language === 'bn' ? 'ইলেকট্রিক্যাল ইনস্টলেশন' : 'Electrical Installation',
      level: language === 'bn' ? 'লেভেল ২' : 'Level 2',
      description: language === 'bn' ? 'নির্মাণ কাজের জন্য ব্যবহারিক বৈদ্যুতিক রক্ষণাবেক্ষণ দক্ষতা।' : 'Explore practical electrical installation and maintenance skills for construction.',
      unlocks: language === 'bn' ? 'শিক্ষানবিশ ইলেকট্রিশিয়ান, রক্ষণাবেক্ষণ সহকারী।' : 'Apprentice electrician, maintenance helper, SME contractor eligibility.',
      tags: language === 'bn' ? ['কারিগরি', 'নির্মাণ', 'রক্ষণাবেক্ষণ'] : ['Technical', 'Construction', 'Maintenance'],
      imageLabel: language === 'bn' ? '⚡ ইলেকট্রিক্যাল ওয়ার্কশপ' : '⚡ Electrical Workshop'
    },
    {
      id: 'graphic',
      title: language === 'bn' ? 'গ্রাফিক ডিজাইন বেসিকস' : 'Graphic Design Basics',
      level: language === 'bn' ? 'লেভেল ৩' : 'Level 3',
      description: language === 'bn' ? 'ফ্রিল্যান্স এবং এজেন্সি কাজের জন্য মৌলিক ডিজাইন নীতি শিখুন।' : 'Learn fundamental design principles for freelance and agency work.',
      unlocks: language === 'bn' ? 'জুনিয়র ডিজাইনার, প্রিন্ট শপ সহকারী, অনলাইন ফ্রিল্যান্সিং।' : 'Junior designer, print shop assistant, basic online freelancing.',
      tags: language === 'bn' ? ['সৃজনশীল', 'ফ্রিল্যান্স', 'ডিজিটাল'] : ['Creative', 'Freelance', 'Digital'],
      imageLabel: language === 'bn' ? '🎨 ডিজাইন স্টুডিও' : '🎨 Design Studio'
    },
    {
      id: 'plumbing',
      title: language === 'bn' ? 'প্লাম্বিং ও পাইপ ফিটিং' : 'Plumbing & Pipe Fitting',
      level: language === 'bn' ? 'লেভেল ২' : 'Level 2',
      description: language === 'bn' ? 'আধুনিক প্লাম্বিং ইনস্টলেশন এবং মেরামতের ব্যবহারিক প্রশিক্ষণ।' : 'Practical training in modern plumbing installation and repair.',
      unlocks: language === 'bn' ? 'প্লাম্বিং সহকারী, নির্মাণ সাইট কর্মী, রক্ষণাবেক্ষণ কর্মী।' : 'Plumbing assistant, construction site worker, maintenance staff.',
      tags: language === 'bn' ? ['কারিগরি', 'নির্মাণ'] : ['Technical', 'Construction'],
      imageLabel: language === 'bn' ? '🔧 প্লাম্বিং ওয়ার্কশপ' : '🔧 Plumbing Workshop'
    },
    {
      id: 'retail',
      title: language === 'bn' ? 'রিটেইল সেলস ও ম্যানেজমেন্ট' : 'Retail Sales & Management',
      level: language === 'bn' ? 'লেভেল ২' : 'Level 2',
      description: language === 'bn' ? 'আধুনিক রিটেইলের জন্য গ্রাহক সেবা, ইনভেন্টরি এবং বিক্রয় দক্ষতা।' : 'Customer service, inventory, and sales skills for modern retail.',
      unlocks: language === 'bn' ? 'রিটেইল সহযোগী, শোরুম সহকারী, কাস্টমার সার্ভিস ডেস্ক।' : 'Retail associate, showroom assistant, customer service desk.',
      tags: language === 'bn' ? ['ব্যবসা', 'গ্রাহক সেবা'] : ['Business', 'Customer Service'],
      imageLabel: language === 'bn' ? '🏪 রিটেইল সিমুলেশন' : '🏪 Retail Simulation'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12 flex flex-col md:flex-row justify-between md:items-end gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('nav.courses')}</h1>
            <p className="text-lg text-gray-600 max-w-2xl font-medium">
              {language === 'bn' 
                ? 'বাস্তব কর্মক্ষেত্র এবং উদ্যোগের সুযোগের জন্য দক্ষতা তৈরি করতে ডিজাইন করা ব্যবহারিক প্রশিক্ষণ প্রোগ্রামগুলো আবিষ্কার করুন।'
                : 'Discover practical training programs designed to build skills for real-world employment and enterprise opportunities.'}
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm font-bold text-gray-500 uppercase tracking-wider bg-white px-4 py-2 rounded-lg border border-gray-200">
            <BookOpen className="w-4 h-4" /> {language === 'bn' ? '৬টি ডেমো কোর্স' : '6 Demo Courses'}
          </div>
        </div>

        {/* AI Comparison Tool Banner */}
        <div className="bg-brand-green-dark rounded-xl p-6 md:p-8 mb-12 shadow-md flex flex-col md:flex-row justify-between items-center gap-8 relative overflow-hidden">
          <div className="flex items-start gap-5 relative z-10">
            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center shrink-0 border border-white/20">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                {language === 'bn' ? 'কোর্স বেছে নিতে গাইডেন্স প্রয়োজন?' : 'Need guidance choosing a course?'}
              </h3>
              <p className="text-gray-300 font-medium max-w-xl text-sm">
                {language === 'bn' ? 'একাধিক কোর্স নির্বাচন করুন এবং আপনার আগ্রহের উপর ভিত্তি করে এআই কোপাইলটকে তুলনা করতে বলুন।' : 'Select multiple courses and ask the AI Copilot to compare them based on your background and target occupation.'}
              </p>
            </div>
          </div>
          <button 
            onClick={() => document.dispatchEvent(new CustomEvent('open-ai-chat'))}
            className="shrink-0 bg-white text-brand-green-dark font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors shadow-sm relative z-10"
          >
            {language === 'bn' ? 'এআই দিয়ে তুলনা করুন' : 'Ask AI to Compare'}
          </button>
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map(course => (
            <div key={course.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 flex flex-col">
              <div className="h-48 bg-gray-100 relative border-b border-gray-200 overflow-hidden group">
                <img src={`/${course.id}.jpg`} alt={course.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute top-3 right-3 bg-brand-charcoal text-white px-2 py-1 rounded text-[10px] font-bold shadow-sm uppercase tracking-wider z-10">
                  {course.level}
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col bg-white">
                <div className="flex flex-wrap gap-2 mb-3">
                  {course.tags.map(tag => (
                    <span key={tag} className="px-2 py-0.5 bg-gray-100 text-gray-700 text-[10px] uppercase font-bold tracking-wider rounded border border-gray-200">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-gray-600 text-sm mb-4 font-medium">{course.description}</p>
                
                <div className="bg-green-50/50 border border-green-100 p-3 rounded-lg mb-5 flex-1">
                  <div className="flex items-center gap-1.5 mb-1 text-green-800">
                    <Key className="w-3.5 h-3.5" />
                    <span className="text-xs font-bold uppercase tracking-wider">{language === 'bn' ? 'এটি যা আনলক করে' : 'Unlocks'}</span>
                  </div>
                  <p className="text-sm text-green-900 leading-snug font-medium">
                    {course.unlocks}
                  </p>
                </div>
                
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-5 pb-5 border-b border-gray-100 font-bold uppercase tracking-wide">
                  <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {language === 'bn' ? '~১৩ সপ্তাহ' : '~13 weeks'}</div>
                  <div className="flex items-center gap-1.5"><Award className="w-3.5 h-3.5" /> {language === 'bn' ? 'এনএসডিএ (NSDA)' : 'NSDA Acc.'}</div>
                </div>
                
                <Link 
                  to={`/courses/${course.id}`}
                  className="w-full bg-brand-green-light/50 border border-brand-green text-brand-green-dark font-bold py-2.5 rounded hover:bg-brand-green hover:text-white transition-colors flex items-center justify-center gap-2"
                >
                  {language === 'bn' ? 'বিস্তারিত দেখুন' : 'View Requirements'} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default CourseExplorer;
