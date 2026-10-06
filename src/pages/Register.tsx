import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Register = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();
  const { language } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      navigate('/assessment');
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 text-center max-w-md w-full animate-in zoom-in duration-300">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold mb-2">{language === 'bn' ? 'নিবন্ধন সফল হয়েছে' : 'Registration Successful'}</h2>
          <p className="text-gray-600 mb-6 font-medium">{language === 'bn' ? 'দক্ষতা মূল্যায়নে রিডাইরেক্ট করা হচ্ছে...' : 'Redirecting to skills assessment...'}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{language === 'bn' ? 'নিবন্ধন' : 'Register'}</h2>
          <p className="text-gray-500 text-sm font-medium">{language === 'bn' ? 'এটি শুধুমাত্র প্রদর্শনের জন্য একটি মক নিবন্ধন ফর্ম।' : 'This is a mock registration form for demonstration purposes.'}</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">{language === 'bn' ? 'পুরো নাম' : 'Full Name'}</label>
            <input required type="text" className="w-full px-4 py-2.5 rounded border border-gray-300 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green" placeholder={language === 'bn' ? 'আয়েশা রহমান' : 'Ayesha Rahman'} />
          </div>
          
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">{language === 'bn' ? 'মোবাইল নম্বর' : 'Mobile Number'}</label>
            <input required type="tel" className="w-full px-4 py-2.5 rounded border border-gray-300 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green" placeholder="+880 1XX XXX XXXX" />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">{language === 'bn' ? 'জাতীয় পরিচয়পত্র (NID) / জন্ম নিবন্ধন' : 'National ID (NID) / Birth Registration'}</label>
            <input required type="text" className="w-full px-4 py-2.5 rounded border border-gray-300 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green" placeholder="1234567890" />
            <p className="text-xs text-gray-400 mt-1">{language === 'bn' ? 'শুধুমাত্র মক ডেটা। আসল আইডি প্রবেশ করাবেন না।' : 'Mock data only. Do not enter real IDs.'}</p>
          </div>
          
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">{language === 'bn' ? 'শিক্ষাগত যোগ্যতা' : 'Education Level'}</label>
            <select className="w-full px-4 py-2.5 rounded border border-gray-300 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green bg-white">
              <option>{language === 'bn' ? 'এসএসসি / সমমান' : 'SSC / Equivalent'}</option>
              <option>{language === 'bn' ? 'এইচএসসি / সমমান' : 'HSC / Equivalent'}</option>
              <option>{language === 'bn' ? 'জেএসসি / সমমান' : 'JSC / Equivalent'}</option>
              <option>{language === 'bn' ? 'জেএসসির নিচে' : 'Below JSC'}</option>
            </select>
          </div>
          
          <button type="submit" className="w-full bg-brand-green text-white font-bold py-3 rounded hover:bg-brand-green-dark transition-colors mt-6">
            {language === 'bn' ? 'নিবন্ধন সম্পন্ন করুন' : 'Complete Registration'}
          </button>
        </form>
        
        <div className="mt-6 text-center text-sm font-medium text-gray-600">
          {language === 'bn' ? 'ইতিমধ্যেই একটি অ্যাকাউন্ট আছে? ' : 'Already have an account? '} <Link to="#" className="text-brand-green font-bold">{language === 'bn' ? 'লগইন' : 'Login'}</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
