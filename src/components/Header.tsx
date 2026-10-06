import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles, Languages } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { language, toggleLanguage, t } = useLanguage();

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.discover'), path: '/discover' },
    { name: t('nav.courses'), path: '/courses' },
    { name: t('nav.careers'), path: '/jobs' },
    { name: t('nav.assessment'), path: '/assessment' },
    { name: t('nav.journey'), path: '/journey' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  return (
    <>
      {/* Official Govt Top Bar */}
      <div className="bg-brand-green-dark text-white py-1 text-xs border-b border-green-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span>{t('header.portal')}</span>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            
            {/* Logo and Govt Branding */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 border-2 border-brand-green relative overflow-hidden bg-white shadow-sm">
                <img src="/bd-govt.jpg" alt="BD Govt Logo" className="w-9 h-9 object-contain" />
              </div>
              
              <Link to="/" className="flex flex-col justify-center">
                <span className="text-[10px] sm:text-xs text-gray-500 font-semibold uppercase tracking-wider mb-0.5">
                  {t('header.gov')}
                </span>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-xl sm:text-2xl text-brand-green-dark">Dokkhota Shetu</span>
                  <span className="bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded font-bold">{t('header.beta')}</span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-5 xl:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`${
                    isActive(link.path)
                      ? 'text-brand-green border-b-2 border-brand-green font-bold'
                      : 'text-gray-700 hover:text-brand-green font-medium transition-colors'
                  } py-7 text-sm xl:text-base`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center space-x-3">
              <button 
                onClick={toggleLanguage}
                className="flex items-center gap-1.5 text-sm font-bold text-brand-green border border-brand-green px-3 py-1.5 rounded hover:bg-brand-green hover:text-white transition-colors"
              >
                <Languages className="w-4 h-4" />
                {language === 'bn' ? 'English' : 'বাংলা'}
              </button>
              <Link
                to="/register"
                className="text-sm font-bold text-gray-700 hover:text-brand-green transition-colors px-2"
              >
                {t('nav.register')}
              </Link>
              <button 
                className="bg-brand-green text-white px-4 py-2 rounded font-bold hover:bg-brand-green-dark transition-colors flex items-center gap-2 shadow-sm text-sm"
                onClick={() => document.dispatchEvent(new CustomEvent('open-ai-chat'))}
              >
                <Sparkles className="w-4 h-4 text-yellow-300" />
                {t('header.askAI')}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center lg:hidden gap-3">
              <button 
                onClick={toggleLanguage}
                className="text-sm font-bold text-brand-green border border-brand-green px-2 py-1 rounded"
              >
                {language === 'bn' ? 'EN' : 'BN'}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-500 hover:text-brand-charcoal focus:outline-none p-2 bg-gray-50 rounded"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-b border-gray-200 absolute w-full shadow-lg z-50">
            <div className="px-4 pt-2 pb-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-3 rounded text-base font-bold text-gray-800 hover:text-brand-green hover:bg-brand-green-light border-b border-gray-50 last:border-0"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/register"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-3 rounded text-base font-bold text-brand-green border-b border-gray-50"
              >
                {t('nav.register')}
              </Link>
              <div className="pt-4 pb-2">
                <button 
                  className="w-full bg-brand-green text-white px-5 py-3 rounded font-bold flex items-center justify-center gap-2"
                  onClick={() => {
                    setIsMenuOpen(false);
                    document.dispatchEvent(new CustomEvent('open-ai-chat'));
                  }}
                >
                  <Sparkles className="w-5 h-5 text-yellow-300" />
                  {t('header.askAI')}
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
