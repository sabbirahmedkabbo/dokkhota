import React, { createContext, useState, useContext, type ReactNode } from 'react';

type Language = 'bn' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  bn: {
    'nav.home': 'হোম',
    'nav.discover': 'খুঁজুন',
    'nav.courses': 'কোর্সসমূহ',
    'nav.careers': 'কর্মজীবন',
    'nav.journey': 'আমার যাত্রা',
    'nav.assessment': 'মূল্যায়ন',
    'nav.register': 'নিবন্ধন',
    
    'header.gov': 'গণপ্রজাতন্ত্রী বাংলাদেশ সরকার',
    'header.portal': 'বাংলাদেশ জাতীয় তথ্য বাতায়ন',
    'header.beta': 'বেটা',
    'header.askAI': 'এআই কে জিজ্ঞাসা করুন',
    
    'home.hero.title': 'দক্ষতা থেকে কাজের পথে',
    'home.hero.subtitle': 'আপনার শক্তিগুলো জানুন, ক্যারিয়ারের পথগুলো খুঁজুন এবং আপনার পরবর্তী পদক্ষেপের জন্য একটি সহজ পরিকল্পনা তৈরি করুন।',
    'home.hero.explore': 'ক্যারিয়ারের পথ খুঁজুন',
    'home.hero.askAI': 'এআই কোপাইলটকে জিজ্ঞাসা করুন',
  },
  en: {
    'nav.home': 'Home',
    'nav.discover': 'Discover',
    'nav.courses': 'Courses',
    'nav.careers': 'Careers',
    'nav.journey': 'My Journey',
    'nav.assessment': 'Assessment',
    'nav.register': 'Register',
    
    'header.gov': 'Government of the People\'s Republic of Bangladesh',
    'header.portal': 'Bangladesh National Web Portal',
    'header.beta': 'BETA',
    'header.askAI': 'Ask AI',
    
    'home.hero.title': 'From Skills to Work',
    'home.hero.subtitle': 'Discover your strengths, explore career pathways, and build a practical plan for your next step with our AI Copilot.',
    'home.hero.explore': 'Explore Pathways',
    'home.hero.askAI': 'Ask AI Copilot',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('bn'); // Default is Bangla

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'bn' ? 'en' : 'bn');
  };

  const t = (key: string): string => {
    // @ts-ignore
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
