import React from 'react';
import { Sparkles, Info } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Footer = () => {
  const { language } = useLanguage();

  return (
    <footer className="bg-brand-charcoal text-gray-300 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-brand-green rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl text-white">{language === 'bn' ? 'দক্ষতা সেতু' : 'Dokkhota Shetu'}</span>
            </div>
            <p className="text-sm text-gray-400">
              {language === 'bn' ? 'আপনার শক্তিগুলো জানুন, ক্যারিয়ারের পথগুলো খুঁজুন এবং আপনার পরবর্তী পদক্ষেপের জন্য একটি সহজ পরিকল্পনা তৈরি করুন।' : 'Discover your strengths, explore career pathways, and build a practical plan for your next step.'}
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">{language === 'bn' ? 'প্রয়োজনীয় লিংক' : 'Explore'}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-brand-green-light transition-colors">{language === 'bn' ? 'ক্যারিয়ারের পথ' : 'Career Pathways'}</a></li>
              <li><a href="#" className="hover:text-brand-green-light transition-colors">{language === 'bn' ? 'কোর্স ও প্রশিক্ষণ' : 'Courses & Training'}</a></li>
              <li><a href="#" className="hover:text-brand-green-light transition-colors">{language === 'bn' ? 'দক্ষতা মূল্যায়ন' : 'Skills Assessment'}</a></li>
              <li><a href="#" className="hover:text-brand-green-light transition-colors">{language === 'bn' ? 'আমার যাত্রা' : 'My Journey'}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">{language === 'bn' ? 'এআই ফিচারসমূহ' : 'AI Features'}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-brand-green-light transition-colors">{language === 'bn' ? 'এআই ক্যারিয়ার কোপাইলট' : 'AI Career Copilot'}</a></li>
              <li><a href="#" className="hover:text-brand-green-light transition-colors">{language === 'bn' ? 'ইন্টারভিউ কোচ' : 'Interview Coach'}</a></li>
              <li><a href="#" className="hover:text-brand-green-light transition-colors">{language === 'bn' ? 'সিভি বিল্ডার' : 'CV Builder'}</a></li>
              <li><a href="#" className="hover:text-brand-green-light transition-colors">{language === 'bn' ? 'বিজনেস আইডিয়া এক্সপ্লোরার' : 'Business Idea Explorer'}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">{language === 'bn' ? 'আমাদের সম্পর্কে' : 'About'}</h4>
            <div className="bg-gray-800 p-4 rounded-lg flex items-start gap-3">
              <Info className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
              <p className="text-xs text-gray-400">
                {language === 'bn' ? 'এটি শুধুমাত্র প্রদর্শনের উদ্দেশ্যে তৈরি একটি ইন্টারেক্টিভ এআই এমভিপি প্রোটোটাইপ। এখানে দেখানো ডেটা কাল্পনিক এবং কোনো আসল শূন্যপদ বা আনুষ্ঠানিক যোগ্যতার প্রতিনিধিত্ব করে না।' : 'This is an interactive AI MVP prototype built for demonstration purposes. Data shown here is illustrative and does not represent live vacancies or official eligibility.'}
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} {language === 'bn' ? 'দক্ষতা সেতু প্রোটোটাইপ। শুধুমাত্র প্রদর্শনের জন্য।' : 'Dokkhota Shetu Prototype. For demonstration only.'}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">{language === 'bn' ? 'গোপনীয়তা (ডেমো)' : 'Privacy Demo'}</a>
            <a href="#" className="hover:text-white transition-colors">{language === 'bn' ? 'শর্তাবলী (ডেমো)' : 'Terms Demo'}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
