import React, { useState, useEffect, useRef } from 'react';
import { X, Send, Sparkles, Loader2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';

const SUGGESTED_PROMPTS = [
  "I finished SSC. What can I do?",
  "I like computers but I'm not very experienced.",
  "I want to work in hospitality.",
  "I want to become an electrician.",
  "Can I start a small business?",
  "How do I prepare for an interview?",
  "What courses are available for beginners?"
];

const AIChatDrawer = () => {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: string, content: string, hasActions?: boolean}[]>([
    {
      role: 'assistant',
            content: language === 'bn' 
        ? `👋 হ্যালো! আমি আপনার দক্ষতা সেতু এআই ক্যারিয়ার কোপাইলট।

আপনি কী করতে পছন্দ করেন, কী পড়াশোনা করেছেন, বা কোন ধরণের কাজে আগ্রহী তা আমাকে জানান — আমি আপনাকে উপযুক্ত পথ খুঁজতে সাহায্য করব।`
        : `👋 Hello! I'm your Dokkhota Shetu AI Career Copilot.

Tell me what you enjoy, what you've studied, or what kind of work you're interested in - I'll help you explore suitable pathways.`,
      hasActions: true
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    document.addEventListener('open-ai-chat', handleOpen);
    return () => document.removeEventListener('open-ai-chat', handleOpen);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;
    
    setMessages(prev => [...prev, { role: 'user', content: text }]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      let response = "";
      let hasActions = false;
      
      const lowerText = text.toLowerCase();
      
      if (lowerText.includes('computer') || lowerText.includes('ssc')) {
        response = "Based on what you've told me, **Computer Operation (Level 3)** could be a useful starting point.\n\nYou may want to build skills in:\n• Office applications (Word, Excel)\n• Digital communication\n• Data entry & workplace communication\n\nYou could then explore office support, administrative services or SME digital operations.\n\nWould you like me to create a learning plan or shall we explore this course?";
        hasActions = true;
      } else if (lowerText.includes('hospitality')) {
        response = "Hospitality is a great field with high demand! **Food & Beverage Service (Level 2)** training could be a strong match.\n\nSkills to focus on:\n• Customer service & etiquette\n• Food safety & hygiene\n• Teamwork under pressure\n\nPotential directions: Hotel service assistant, restaurant staff, or catering support.\n\nShall we explore courses in this area?";
        hasActions = true;
      } else if (lowerText.includes('electrician') || lowerText.includes('electrical')) {
        response = "**Electrical Installation & Maintenance (Level 2)** is an excellent pathway for those who enjoy hands-on work.\n\nThis involves:\n• Safety protocols & wiring fundamentals\n• Tool usage & troubleshooting\n• Maintenance basics\n\nThis is highly practical and often leads to self-employment or working with SME contractors. Should we look at the course details?";
        hasActions = true;
      } else if (lowerText.includes('business') || lowerText.includes('self-employment')) {
        response = "Starting a small business is a fantastic goal! \n\nBefore committing, you might want to consider:\n1. What specific skills do you have? (e.g., repairing, cooking, digital services)\n2. Who are your local customers?\n3. Do you have basic costing and ledger skills?\n\nOur courses often include an enterprise module to help you market-test a business idea. What type of business were you thinking of?";
      } else if (lowerText.includes('interview')) {
        response = "Interview preparation is crucial! \n\nI can act as an **AI Interview Coach**. We can practice for specific roles like Office Assistant, Electrical Helper, or a general interview.\n\nYou'll answer questions, and I'll give you instant feedback on confidence and clarity. Would you like to start a practice session now?";
      } else if (lowerText.includes('courses') || lowerText.includes('beginner')) {
        response = "We have several beginner-friendly practical courses designed for young people:\n\n1. **Computer Operation** - For office and digital work.\n2. **Food & Beverage Service** - For hospitality.\n3. **Electrical Installation** - For hands-on technical work.\n\nWould you like to compare these based on your specific interests?";
      } else {
        response = "That's an interesting direction! Based on your interests, we could explore several practical pathways. \n\nTo give you the best advice, could you tell me a bit more about what matters most to you? For example, are you looking to find a job quickly, learn a practical skill, or start your own business?";
      }

      setMessages(prev => [...prev, { role: 'assistant', content: response, hasActions }]);
      setIsTyping(false);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/50 z-50 transition-opacity backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />
      <div className="fixed inset-y-0 right-0 w-full sm:w-[400px] bg-white shadow-2xl z-50 flex flex-col transform transition-transform duration-300">
        
        {/* Header */}
        <div className="p-4 bg-gradient-to-r from-brand-green-dark to-brand-green text-white flex justify-between items-center shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Sparkles className="w-5 h-5 text-yellow-300" />
            </div>
            <div>
              <h3 className="font-bold text-lg leading-tight">AI Career Copilot</h3>
              <p className="text-[10px] text-brand-green-light uppercase tracking-wider font-semibold">Government Prototype</p>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-1.5 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-5 bg-gray-50 scrollbar-hide">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] rounded-2xl p-4 shadow-sm ${
                msg.role === 'user' 
                  ? 'bg-brand-green text-white rounded-br-sm' 
                  : 'bg-white text-gray-800 rounded-bl-sm border border-gray-200'
              }`}>
                {msg.role === 'assistant' && (
                  <div className="flex items-center gap-1.5 mb-2 text-xs text-brand-green-dark font-bold uppercase tracking-wider">
                    <Sparkles className="w-3 h-3 text-brand-green" /> Dokkhota AI
                  </div>
                )}
                
                <div className="whitespace-pre-wrap text-[15px] leading-relaxed">
                  {/* Basic markdown bold rendering for demo */}
                  {msg.content.split('**').map((part, index) => 
                    index % 2 === 1 ? <strong key={index} className="text-brand-green-dark font-bold">{part}</strong> : part
                  )}
                </div>
                
                {msg.hasActions && (
                  <div className="mt-4 space-y-2 pt-3 border-t border-gray-100">
                    <Link to="/courses" onClick={() => setIsOpen(false)} className="block w-full text-center py-2 bg-brand-green-light text-brand-green-dark text-sm font-bold rounded-xl hover:bg-brand-green hover:text-white transition-colors">
                      Explore Courses
                    </Link>
                    <Link to="/journey" onClick={() => setIsOpen(false)} className="block w-full text-center py-2 border-2 border-gray-200 text-gray-600 text-sm font-bold rounded-xl hover:bg-gray-100 transition-colors">
                      View Learning Plan
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white rounded-2xl rounded-bl-sm p-4 shadow-sm border border-gray-200 flex items-center gap-3">
                <Loader2 className="w-5 h-5 text-brand-green animate-spin" />
                <span className="text-sm font-medium text-gray-500">AI is analyzing...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-gray-200 shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.05)]">
          {messages.length === 1 && (
            <div className="mb-3 flex flex-wrap gap-2">
              {SUGGESTED_PROMPTS.map((prompt, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(prompt)}
                  className="text-xs font-medium bg-gray-50 border border-gray-200 text-gray-700 px-3 py-1.5 rounded-full hover:bg-brand-green-light hover:text-brand-green-dark hover:border-brand-green-light transition-all text-left"
                >
                  {prompt}
                </button>
              ))}
            </div>
          )}
          
          <div className="relative flex items-center">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend(inputValue)}
              placeholder="Ask a question..."
              className="w-full pl-4 pr-14 py-3.5 rounded-xl border border-gray-300 focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 text-sm font-medium bg-gray-50"
            />
            <button
              onClick={() => handleSend(inputValue)}
              disabled={!inputValue.trim() || isTyping}
              className="absolute right-2 p-2 bg-brand-green text-white rounded-lg hover:bg-brand-green-dark disabled:opacity-50 disabled:cursor-not-allowed transition-all active:scale-95"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIChatDrawer;
