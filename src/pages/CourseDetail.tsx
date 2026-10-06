import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Sparkles, CheckCircle2, ChevronRight, BookOpen, Key, Briefcase } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { language } = useLanguage();

  const courseData: Record<string, any> = {
    computer: {
      title: language === 'bn' ? 'কম্পিউটার অপারেশন' : 'Computer Operation',
      level: language === 'bn' ? 'লেভেল ৩' : 'Level 3',
      subtitle: language === 'bn' ? 'ডিজিটাল এবং অফিস কাজের একটি ব্যবহারিক পথ।' : 'A practical pathway into digital and office work.',
      unlocks: language === 'bn' ? 'অফিস সহকারী পদ, বেসিক ফ্রিল্যান্স ডেটা এন্ট্রি।' : 'Office Assistant roles, basic freelance data entry, administrative eligibility.',
      explore: language === 'bn' ? [
        'কম্পিউটার মৌলিক ধারণা',
        'অফিস প্রোডাক্টিভিটি',
        'ডিজিটাল যোগাযোগ',
        'ডেটা হ্যান্ডলিং',
        'কর্মক্ষেত্রের কাজ'
      ] : [
        'Computer fundamentals',
        'Office productivity',
        'Digital communication',
        'Data handling',
        'Workplace tasks'
      ],
      directions: language === 'bn' ? [
        'অফিস সহকারী',
        'প্রশাসনিক সহায়তা',
        'এসএমই ডিজিটাল সাপোর্ট'
      ] : [
        'Office assistant',
        'Administrative support',
        'SME digital support'
      ]
    },
    caregiving: {
      title: language === 'bn' ? 'বিশেষায়িত যত্ন (Care Giving)' : 'Specialized Care Giving',
      level: language === 'bn' ? 'লেভেল ৩' : 'Level 3',
      subtitle: language === 'bn' ? 'রোগী ও বয়স্কদের সেবার জন্য পেশাদার প্রশিক্ষণ।' : 'Professional training for domestic and institutional elderly and patient care.',
      unlocks: language === 'bn' ? 'হেলথকেয়ার সহকারী, বয়স্কদের সেবা, বিদেশে নার্সিং সাপোর্ট।' : 'Healthcare assistant roles, domestic care work, overseas care migration pathways.',
      explore: language === 'bn' ? [
        'রোগীর স্বাস্থ্যবিধি এবং গতিশীলতা',
        'বেসিক হেলথ মনিটরিং (ভাইটালস)',
        'ওষুধ প্রশাসনের প্রোটোকল',
        'জরুরী প্রাথমিক প্রতিক্রিয়া',
        'যোগাযোগ এবং সহানুভূতি'
      ] : [
        'Patient hygiene & mobility',
        'Basic health monitoring (vitals)',
        'Medication administration protocols',
        'Emergency first response',
        'Communication & empathy'
      ],
      directions: language === 'bn' ? [
        'হাসপাতাল কেয়ার অ্যাসিস্ট্যান্ট',
        'ইন-হোম বয়স্ক পরিচর্যাকারী',
        'বিদেশে নার্সিং সাপোর্ট'
      ] : [
        'Hospital care assistant',
        'In-home elderly caregiver',
        'Overseas nursing support'
      ]
    },
    electrical: {
      title: language === 'bn' ? 'ইলেকট্রিক্যাল ইনস্টলেশন' : 'Electrical Installation',
      level: language === 'bn' ? 'লেভেল ২' : 'Level 2',
      subtitle: language === 'bn' ? 'নির্মাণ কাজের জন্য ব্যবহারিক বৈদ্যুতিক রক্ষণাবেক্ষণ দক্ষতা।' : 'Explore practical electrical installation and maintenance skills for construction.',
      unlocks: language === 'bn' ? 'শিক্ষানবিশ ইলেকট্রিশিয়ান, রক্ষণাবেক্ষণ সহকারী।' : 'Apprentice electrician, maintenance helper, SME contractor eligibility.',
      explore: language === 'bn' ? [
        'নিরাপত্তা পদ্ধতি',
        'ওয়্যারিং ফান্ডামেন্টালস',
        'রক্ষণাবেক্ষণের বেসিক',
        'সরঞ্জাম ব্যবহার',
        'সমস্যা সমাধান (ট্রাবলশুটিং)'
      ] : [
        'Safety procedures',
        'Wiring fundamentals',
        'Maintenance basics',
        'Tool usage',
        'Troubleshooting'
      ],
      directions: language === 'bn' ? [
        'ইলেকট্রিক্যাল হেল্পার',
        'রক্ষণাবেক্ষণ সহকারী',
        'এসএমই নির্মাণ সহায়তা'
      ] : [
        'Electrical helper',
        'Maintenance assistant',
        'SME construction support'
      ]
    }
  };

  const course = id ? courseData[id] : null;

  if (!course) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-bold mb-4">{language === 'bn' ? 'কোর্স পাওয়া যায়নি' : 'Course not found'}</h2>
        <Link to="/courses" className="text-brand-green font-medium flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> {language === 'bn' ? 'কোর্সগুলোতে ফিরে যান' : 'Back to courses'}
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Hero Section */}
      <div className="bg-white border-b border-gray-200 pt-8 pb-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/courses" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gray-500 hover:text-brand-green mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> {language === 'bn' ? 'সব কোর্স' : 'All Courses'}
          </Link>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-2 py-1 bg-gray-100 border border-gray-200 text-gray-700 font-bold tracking-widest uppercase text-xs rounded mb-4">
                {course.level}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{course.title}</h1>
              <p className="text-lg text-gray-600 mb-6 font-medium">{course.subtitle}</p>
              
              <div className="bg-brand-green-light/30 border border-brand-green/30 p-4 rounded-lg mb-8">
                <div className="flex items-center gap-2 mb-2 text-brand-green-dark">
                  <Key className="w-4 h-4" />
                  <span className="text-sm font-bold uppercase tracking-wider">{language === 'bn' ? 'এটি যা আনলক করে' : 'What this unlocks'}</span>
                </div>
                <p className="text-gray-800 font-medium">{course.unlocks}</p>
              </div>
              
              <button 
                onClick={() => document.dispatchEvent(new CustomEvent('open-ai-chat'))}
                className="w-full sm:w-auto bg-brand-green text-white px-6 py-3 rounded text-sm font-bold hover:bg-brand-green-dark transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <Sparkles className="w-4 h-4" />
                {language === 'bn' ? 'প্রয়োজনীয়তা সম্পর্কে এআইকে জিজ্ঞাসা করুন' : 'Ask AI about prerequisites'}
              </button>
            </div>
            
            <div className="h-64 bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center text-gray-500 overflow-hidden shadow-inner font-bold text-sm">
              [IMAGE: {course.title}]
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gray-100 border border-gray-200 rounded flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-gray-700" />
                </div>
                <h3 className="text-xl font-bold">{language === 'bn' ? 'আপনি যা শিখবেন:' : 'You\'ll explore:'}</h3>
              </div>
              
              <ul className="space-y-4">
                {course.explore.map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gray-100 border border-gray-200 rounded flex items-center justify-center">
                  <Briefcase className="w-4 h-4 text-gray-700" />
                </div>
                <h3 className="text-xl font-bold">{language === 'bn' ? 'সম্ভাব্য দিকনির্দেশনা:' : 'Possible directions:'}</h3>
              </div>
              
              <ul className="space-y-3">
                {course.directions.map((item: string, index: number) => (
                  <li key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded border border-gray-200">
                    <span className="font-semibold text-gray-800">{item}</span>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-bold mb-8">{language === 'bn' ? 'স্ট্যান্ডার্ড ট্রেনিং রোডম্যাপ (৬০০ ঘন্টা)' : 'Standard Training Roadmap (600 hours)'}</h3>
            
            <div className="relative">
              {/* Vertical line for desktop */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 transform -translate-x-1/2"></div>
              
              <div className="space-y-8">
                {/* Phase 1 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                    <div className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-[10px] uppercase font-bold tracking-widest rounded mb-2">{language === 'bn' ? 'সপ্তাহ ১-৩' : 'Weeks 1–3'}</div>
                    <h4 className="text-lg font-bold text-gray-900">{language === 'bn' ? 'ডায়াগনস্টিক ও ব্রিজিং' : 'Diagnostic & Bridging'}</h4>
                    <p className="mt-1 text-gray-600 text-sm font-medium">{language === 'bn' ? 'সহায়তার প্রয়োজনীয়তা নির্ধারণের জন্য ইংরেজি যোগাযোগ, সংখ্যাজ্ঞান এবং ডিজিটাল ডায়াগনস্টিক।' : 'English communication, numeracy, and digital diagnostics to determine support needs.'}</p>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-brand-green border-2 border-white shadow-sm hidden md:block z-10"></div>
                  <div className="md:w-1/2 md:pl-12"></div>
                </div>
                
                {/* Phase 2 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-brand-green border-2 border-white shadow-sm hidden md:block z-10"></div>
                  <div className="md:w-1/2 md:pl-12 mb-4 md:mb-0 text-center md:text-left">
                    <div className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-[10px] uppercase font-bold tracking-widest rounded mb-2">{language === 'bn' ? 'সপ্তাহ ৪-৮' : 'Weeks 4–8'}</div>
                    <h4 className="text-lg font-bold text-gray-900">{language === 'bn' ? 'পেশাগত অনুশীলন' : 'Occupational Practice'}</h4>
                    <p className="mt-1 text-gray-600 text-sm font-medium">{language === 'bn' ? 'প্রযোজ্য সমস্ত যোগ্যতার ইউনিটগুলি কভার করে কোর ব্যবহারিক প্রশিক্ষণ।' : 'Core practical training covering all applicable competency units.'}</p>
                  </div>
                </div>
                
                {/* Phase 3 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                    <div className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-[10px] uppercase font-bold tracking-widest rounded mb-2">{language === 'bn' ? 'সপ্তাহ ৯-১০' : 'Weeks 9–10'}</div>
                    <h4 className="text-lg font-bold text-gray-900">{language === 'bn' ? 'কাজের প্রস্তুতি' : 'Work Readiness'}</h4>
                    <p className="mt-1 text-gray-600 text-sm font-medium">{language === 'bn' ? 'কর্মক্ষেত্রের নিরাপত্তা, যোগাযোগ, অ্যাপ্লিকেশন এবং আর্থিক সক্ষমতা।' : 'Workplace safety, communication, applications, and financial capability.'}</p>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-brand-green border-2 border-white shadow-sm hidden md:block z-10"></div>
                  <div className="md:w-1/2 md:pl-12"></div>
                </div>
                
                {/* Phase 4 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-gray-300 border-2 border-white shadow-sm hidden md:block z-10"></div>
                  <div className="md:w-1/2 md:pl-12 mb-4 md:mb-0 text-center md:text-left">
                    <div className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-[10px] uppercase font-bold tracking-widest rounded mb-2">{language === 'bn' ? 'সপ্তাহ ১১-১২' : 'Weeks 11–12'}</div>
                    <h4 className="text-lg font-bold text-gray-900">{language === 'bn' ? 'ট্রানজিশন পাথওয়ে' : 'Transition Pathway'}</h4>
                    <p className="mt-1 text-gray-600 text-sm font-medium">{language === 'bn' ? 'গার্হস্থ্য চাকরি নিয়োগ, এন্টারপ্রাইজ মার্কেট টেস্টিং, বা যাচাইকৃত মাইগ্রেশন প্রস্তুতি।' : 'Domestic job placement, enterprise market testing, or verified migration prep.'}</p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
