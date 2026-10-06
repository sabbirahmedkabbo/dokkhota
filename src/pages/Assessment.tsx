import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ClipboardList, CheckCircle2, ArrowRight, Laptop, Zap, HeartPulse } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Assessment = () => {
  const [track, setTrack] = useState<string | null>(null);
  const [step, setStep] = useState(0);
  const navigate = useNavigate();
  const { language } = useLanguage();

  const tracks = [
    { id: 'office', icon: Laptop, title: language === 'bn' ? 'অফিস ও ডিজিটাল' : 'Office & Digital', desc: language === 'bn' ? 'কম্পিউটার অপারেশন এবং অ্যাডমিন' : 'Computer Operations & Admin' },
    { id: 'technical', icon: Zap, title: language === 'bn' ? 'কারিগরি কাজ' : 'Technical Work', desc: language === 'bn' ? 'বৈদ্যুতিক এবং রক্ষণাবেক্ষণ' : 'Electrical & Maintenance' },
    { id: 'care', icon: HeartPulse, title: language === 'bn' ? 'স্বাস্থ্যসেবা' : 'Care Giving', desc: language === 'bn' ? 'রোগী ও বয়স্কদের সেবা' : 'Patient & Elderly Care' }
  ];

  const questionsByTrack: Record<string, any[]> = {
    office: [
      {
        domain: language === 'bn' ? 'ডিজিটাল ও অ্যাডমিন' : 'Digital & Admin',
        q: language === 'bn' ? 'এমএস এক্সেল (MS Excel)-এর মূল কাজ কী?' : 'What is the primary function of MS Excel?',
        options: language === 'bn' ? ['ডেটা অ্যানালাইসিস এবং স্প্রেডশিট', 'ওয়ার্ড প্রসেসিং', 'ছবি সম্পাদনা', 'ভিডিও তৈরি'] : ['Data analysis and spreadsheets', 'Word processing', 'Photo editing', 'Video creation']
      },
      {
        domain: language === 'bn' ? 'ডিজিটাল ও অ্যাডমিন' : 'Digital & Admin',
        q: language === 'bn' ? 'টেক্সট কপি করার জন্য কোন কীবোর্ড শর্টকাট ব্যবহার করা হয়?' : 'Which keyboard shortcut is used to copy text?',
        options: language === 'bn' ? ['Ctrl + C', 'Ctrl + V', 'Ctrl + P', 'Ctrl + X'] : ['Ctrl + C', 'Ctrl + V', 'Ctrl + P', 'Ctrl + X']
      },
      {
        domain: language === 'bn' ? 'ডিজিটাল ও অ্যাডমিন' : 'Digital & Admin',
        q: language === 'bn' ? 'ইমেইলে \'CC\'-এর পূর্ণরূপ কী?' : 'What does \'CC\' stand for in an email?',
        options: language === 'bn' ? ['কার্বন কপি (Carbon Copy)', 'ক্রিয়েটিভ কন্ট্রোল', 'কম্পিউটার কপি', 'কাস্টম কোড'] : ['Carbon Copy', 'Creative Control', 'Computer Copy', 'Custom Code']
      },
      {
        domain: language === 'bn' ? 'ডিজিটাল ও অ্যাডমিন' : 'Digital & Admin',
        q: language === 'bn' ? 'অনলাইন ভিডিও কনফারেন্সিংয়ের জন্য কোন টুলটি সবচেয়ে ভালো?' : 'Which tool is best for online video conferencing?',
        options: language === 'bn' ? ['জুম (Zoom)', 'নোটপ্যাড', 'এমএস পেইন্ট', 'ক্যালকুলেটর'] : ['Zoom', 'Notepad', 'MS Paint', 'Calculator']
      },
      {
        domain: language === 'bn' ? 'ডিজিটাল ও অ্যাডমিন' : 'Digital & Admin',
        q: language === 'bn' ? 'কীভাবে পাসওয়ার্ড সুরক্ষিতভাবে সংরক্ষণ করবেন?' : 'How do you securely store passwords?',
        options: language === 'bn' ? ['পাসওয়ার্ড ম্যানেজার ব্যবহার করে', 'স্টিকি নোটে লিখে রাখা', 'সব জায়গায় একই পাসওয়ার্ড ব্যবহার করা', 'সহকর্মীদের সাথে শেয়ার করা'] : ['Use a password manager', 'Write them on a sticky note', 'Use the same password everywhere', 'Share them with colleagues']
      },
      {
        domain: language === 'bn' ? 'ডিজিটাল ও অ্যাডমিন' : 'Digital & Admin',
        q: language === 'bn' ? 'গুগল ড্রাইভ (Google Drive) প্রধানত কী কাজে ব্যবহৃত হয়?' : 'What is Google Drive primarily used for?',
        options: language === 'bn' ? ['ক্লাউড স্টোরেজ', 'গেম খেলা', 'টাইপিং স্পিড পরীক্ষা', 'অ্যান্টিভাইরাস স্ক্যান'] : ['Cloud storage', 'Playing games', 'Typing speed test', 'Antivirus scan']
      },
      {
        domain: language === 'bn' ? 'ডিজিটাল ও অ্যাডমিন' : 'Digital & Admin',
        q: language === 'bn' ? 'প্রেজেন্টেশন তৈরি করতে কোন প্রোগ্রাম ব্যবহার করা হয়?' : 'Which program is used to create presentations?',
        options: language === 'bn' ? ['এমএস পাওয়ারপয়েন্ট', 'এমএস ওয়ার্ড', 'এমএস এক্সেল', 'অ্যাডোবি ফটোশপ'] : ['MS PowerPoint', 'MS Word', 'MS Excel', 'Adobe Photoshop']
      },
      {
        domain: language === 'bn' ? 'ডিজিটাল ও অ্যাডমিন' : 'Digital & Admin',
        q: language === 'bn' ? 'শক্তিশালী পাসওয়ার্ড কোনটি?' : 'What is a strong password?',
        options: language === 'bn' ? ['অক্ষর, সংখ্যা এবং চিহ্নের মিশ্রণ', 'আপনার নাম ও জন্ম সাল', '12345678', 'password123'] : ['A mix of letters, numbers, and symbols', 'Your name and birth year', '12345678', 'password123']
      },
      {
        domain: language === 'bn' ? 'ডিজিটাল ও অ্যাডমিন' : 'Digital & Admin',
        q: language === 'bn' ? 'সন্দেহজনক ইমেইল লিংক পেলে আপনার কী করা উচিত?' : 'What should you do if you receive a suspicious email link?',
        options: language === 'bn' ? ['লিংকে ক্লিক না করে রিপোর্ট করা', 'ক্লিক করে দেখা', 'বন্ধুদের ফরোয়ার্ড করা', 'প্রেরককে উত্তর দেওয়া'] : ['Do not click and report it', 'Click it to see what it is', 'Forward it to friends', 'Reply to the sender']
      },
      {
        domain: language === 'bn' ? 'ডিজিটাল ও অ্যাডমিন' : 'Digital & Admin',
        q: language === 'bn' ? 'পরিবর্তন করা যায় না এমন ডকুমেন্ট পাঠানোর জন্য কোন ফরম্যাট সেরা?' : 'Which format is best for sending uneditable text documents?',
        options: language === 'bn' ? ['পিডিএফ (PDF)', 'ডকএক্স (DOCX)', 'টেক্সট (TXT)', 'এক্সএলএসএক্স (XLSX)'] : ['PDF', 'DOCX', 'TXT', 'XLSX']
      },
      {
        domain: language === 'bn' ? 'ডিজিটাল ও অ্যাডমিন' : 'Digital & Admin',
        q: language === 'bn' ? 'অপারেটিং সিস্টেমের কাজ কী?' : 'What is the function of an Operating System?',
        options: language === 'bn' ? ['কম্পিউটার হার্ডওয়্যার এবং সফটওয়্যার পরিচালনা করা', 'কীবোর্ড পরিষ্কার করা', 'ইন্টারনেট স্পিড বাড়ানো', 'ডকুমেন্ট প্রিন্ট করা'] : ['Manages computer hardware and software', 'Cleans the keyboard', 'Increases internet speed', 'Prints documents']
      },
      {
        domain: language === 'bn' ? 'ডিজিটাল ও অ্যাডমিন' : 'Digital & Admin',
        q: language === 'bn' ? 'ব্রাউজার কী?' : 'What is a browser?',
        options: language === 'bn' ? ['ইন্টারনেট অ্যাক্সেস করার সফটওয়্যার', 'এক ধরনের মনিটর', 'টাইপিং টুল', 'ডেটাবেস সিস্টেম'] : ['A software to access the internet', 'A type of computer monitor', 'A typing tool', 'A database system']
      },
      {
        domain: language === 'bn' ? 'ডিজিটাল ও অ্যাডমিন' : 'Digital & Admin',
        q: language === 'bn' ? 'ডিলিট করা ফাইল কীভাবে ফিরে পাবেন?' : 'How can you restore a deleted file?',
        options: language === 'bn' ? ['রিসাইকেল বিন থেকে', 'কম্পিউটার রিস্টার্ট করে', 'উইন্ডোজ রি-ইনস্টল করে', 'এটি অসম্ভব'] : ['From the Recycle Bin', 'Restart the computer', 'Reinstall Windows', 'It is impossible']
      },
      {
        domain: language === 'bn' ? 'ডিজিটাল ও অ্যাডমিন' : 'Digital & Admin',
        q: language === 'bn' ? 'ফায়ারওয়ালের মূল উদ্দেশ্য কী?' : 'What is the main purpose of a firewall?',
        options: language === 'bn' ? ['নেটওয়ার্ককে অননুমোদিত অ্যাক্সেস থেকে রক্ষা করা', 'কম্পিউটার ঠান্ডা রাখা', 'টাইপিং স্পিড বাড়ানো', 'ফাইল গুছিয়ে রাখা'] : ['To protect a network from unauthorized access', 'To cool down the computer', 'To speed up typing', 'To organize files']
      },
      {
        domain: language === 'bn' ? 'ডিজিটাল ও অ্যাডমিন' : 'Digital & Admin',
        q: language === 'bn' ? 'ইমেইলে \'BCC\' কী কাজ করে?' : 'What does \'BCC\' do in an email?',
        options: language === 'bn' ? ['অন্যদের থেকে প্রাপকের ইমেইল ঠিকানা গোপন রাখে', 'দ্রুত ইমেইল পাঠায়', 'অ্যাটাচমেন্ট যোগ করে', 'ইমেইল মুছে ফেলে'] : ['Hides the recipient\'s email address from others', 'Sends the email faster', 'Adds an attachment', 'Deletes the email']
      },
      {
        domain: language === 'bn' ? 'ডিজিটাল ও অ্যাডমিন' : 'Digital & Admin',
        q: language === 'bn' ? 'কোন শর্টকাট ব্যবহার করে আনডু (Undo) করা হয়?' : 'Which shortcut is used to undo an action?',
        options: language === 'bn' ? ['Ctrl + Z', 'Ctrl + Y', 'Ctrl + A', 'Ctrl + S'] : ['Ctrl + Z', 'Ctrl + Y', 'Ctrl + A', 'Ctrl + S']
      },
      {
        domain: language === 'bn' ? 'ডিজিটাল ও অ্যাডমিন' : 'Digital & Admin',
        q: language === 'bn' ? '\'ফিশিং\' (Phishing) কী?' : 'What is \'phishing\'?',
        options: language === 'bn' ? ['গোপনীয় তথ্য হাতিয়ে নেওয়ার প্রতারণামূলক চেষ্টা', 'একটি নতুন গেম', 'টাইপিং কৌশল', 'ওয়াই-ফাই কানেক্ট করার উপায়'] : ['A fraudulent attempt to obtain sensitive information', 'A new computer game', 'A typing technique', 'A way to connect to Wi-Fi']
      },
      {
        domain: language === 'bn' ? 'ডিজিটাল ও অ্যাডমিন' : 'Digital & Admin',
        q: language === 'bn' ? 'এক্সেলে ফর্মুলা তৈরি করতে কোন চিহ্ন ব্যবহৃত হয়?' : 'Which symbol is used to create a formula in Excel?',
        options: language === 'bn' ? ['=', '+', '-', '/'] : ['=', '+', '-', '/']
      },
      {
        domain: language === 'bn' ? 'ডিজিটাল ও অ্যাডমিন' : 'Digital & Admin',
        q: language === 'bn' ? 'RAM-এর পূর্ণরূপ কী?' : 'What does RAM stand for?',
        options: language === 'bn' ? ['র‍্যান্ডম অ্যাক্সেস মেমোরি', 'রিড অ্যাক্সেস মেমোরি', 'রান অল মেশিনস', 'র‍্যাপিড অ্যাকশন মেমোরি'] : ['Random Access Memory', 'Read Access Memory', 'Run All Machines', 'Rapid Action Memory']
      },
      {
        domain: language === 'bn' ? 'ডিজিটাল ও অ্যাডমিন' : 'Digital & Admin',
        q: language === 'bn' ? 'ডেটা ব্যাকআপ কেন গুরুত্বপূর্ণ?' : 'Why is data backup important?',
        options: language === 'bn' ? ['হার্ডওয়্যার নষ্ট হলে ডেটা হারানো রোধ করতে', 'কম্পিউটার দ্রুত চালাতে', 'বিদ্যুৎ সাশ্রয় করতে', 'সহজে প্রিন্ট করতে'] : ['To prevent data loss in case of hardware failure', 'To make the computer run faster', 'To save electricity', 'To print documents easily']
      }
    ],
    technical: [
      {
        domain: language === 'bn' ? 'কারিগরি ও নিরাপত্তা' : 'Technical Safety',
        q: language === 'bn' ? 'বৈদ্যুতিক প্রবাহের (Current) আদর্শ একক কী?' : 'What is the standard unit of electrical current?',
        options: language === 'bn' ? ['অ্যাম্পিয়ার (Ampere)', 'ভোল্ট', 'ওয়াট', 'ওহম'] : ['Ampere', 'Volt', 'Watt', 'Ohm']
      },
      {
        domain: language === 'bn' ? 'কারিগরি ও নিরাপত্তা' : 'Technical Safety',
        q: language === 'bn' ? 'আর্থিংয়ের জন্য সাধারণত কোন রঙের তার ব্যবহার করা হয়?' : 'Which wire is typically used for earthing?',
        options: language === 'bn' ? ['সবুজ/হলুদ', 'লাল', 'কালো', 'নীল'] : ['Green/Yellow', 'Red', 'Black', 'Blue']
      },
      {
        domain: language === 'bn' ? 'কারিগরি ও নিরাপত্তা' : 'Technical Safety',
        q: language === 'bn' ? 'বৈদ্যুতিক ভোল্টেজ মাপতে কোন যন্ত্র ব্যবহৃত হয়?' : 'What tool is used to measure electrical voltage?',
        options: language === 'bn' ? ['মাল্টিমিটার', 'থার্মোমিটার', 'ব্যারোমিটার', 'স্পিডোমিটার'] : ['Multimeter', 'Thermometer', 'Barometer', 'Speedometer']
      },
      {
        domain: language === 'bn' ? 'কারিগরি ও নিরাপত্তা' : 'Technical Safety',
        q: language === 'bn' ? 'লাইভ তার ধরার আগে কী পরা উচিত?' : 'What should you wear before handling live wires?',
        options: language === 'bn' ? ['ইনসুলেটেড রাবারের গ্লাভস', 'সুতির গ্লাভস', 'চামড়ার বুট', 'কিছু না'] : ['Insulated rubber gloves', 'Cotton gloves', 'Leather boots', 'Nothing']
      },
      {
        domain: language === 'bn' ? 'কারিগরি ও নিরাপত্তা' : 'Technical Safety',
        q: language === 'bn' ? 'সার্কিটে MCB-এর কাজ কী?' : 'What does an MCB do in a circuit?',
        options: language === 'bn' ? ['ওভারকারেন্ট এবং শর্ট সার্কিট থেকে রক্ষা করা', 'ভোল্টেজ বাড়ানো', 'রেজিস্ট্যান্স কমানো', 'বিদ্যুৎ শক্তি সঞ্চয় করা'] : ['Protects against overcurrent and short circuits', 'Increases voltage', 'Decreases resistance', 'Stores electrical energy']
      },
      {
        domain: language === 'bn' ? 'কারিগরি ও নিরাপত্তা' : 'Technical Safety',
        q: language === 'bn' ? 'কোন উপাদানটি বিদ্যুতের ভালো পরিবাহী?' : 'Which material is a good conductor of electricity?',
        options: language === 'bn' ? ['তামা (Copper)', 'কাঠ', 'রাবার', 'কাঁচ'] : ['Copper', 'Wood', 'Rubber', 'Glass']
      },
      {
        domain: language === 'bn' ? 'কারিগরি ও নিরাপত্তা' : 'Technical Safety',
        q: language === 'bn' ? 'ফিউজের উদ্দেশ্য কী?' : 'What is the purpose of a fuse?',
        options: language === 'bn' ? ['বিদ্যুৎ প্রবাহ নিরাপদ মাত্রা অতিক্রম করলে সার্কিট ভেঙে দেওয়া', 'বিদ্যুৎ তৈরি করা', 'কারেন্ট সঞ্চয় করা', 'ভোল্টেজ মাপা'] : ['To break the circuit if the current exceeds a safe level', 'To generate power', 'To store current', 'To measure voltage']
      },
      {
        domain: language === 'bn' ? 'কারিগরি ও নিরাপত্তা' : 'Technical Safety',
        q: language === 'bn' ? 'ওহমের সূত্রের সমীকরণ কোনটি?' : 'What is the formula for Ohm\'s Law?',
        options: language === 'bn' ? ['V = I x R', 'V = I / R', 'I = V x R', 'R = V x I'] : ['V = I x R', 'V = I / R', 'I = V x R', 'R = V x I']
      },
      {
        domain: language === 'bn' ? 'কারিগরি ও নিরাপত্তা' : 'Technical Safety',
        q: language === 'bn' ? 'তার কাটার জন্য কোন টুলটি সেরা?' : 'Which tool is best for cutting wires?',
        options: language === 'bn' ? ['ওয়্যার স্ট্রিপার/কাটার', 'হাতুড়ি', 'স্ক্রুড্রাইভার', 'রেঞ্চ'] : ['Wire strippers/cutters', 'Hammer', 'Screwdriver', 'Wrench']
      },
      {
        domain: language === 'bn' ? 'কারিগরি ও নিরাপত্তা' : 'Technical Safety',
        q: language === 'bn' ? 'বিদ্যুতের ক্ষেত্রে \'AC\'-এর পূর্ণরূপ কী?' : 'What does \'AC\' stand for in electrical terms?',
        options: language === 'bn' ? ['অল্টারনেটিং কারেন্ট', 'অ্যাকচুয়াল কারেন্ট', 'অ্যাক্টিভ চার্জ', 'অটো সার্কিট'] : ['Alternating Current', 'Actual Current', 'Active Charge', 'Auto Circuit']
      },
      {
        domain: language === 'bn' ? 'কারিগরি ও নিরাপত্তা' : 'Technical Safety',
        q: language === 'bn' ? 'বৈদ্যুতিক দুর্ঘটনার ক্ষেত্রে প্রথমে কী করা উচিত?' : 'What should you do first in an electrical emergency?',
        options: language === 'bn' ? ['মূল পাওয়ার সাপ্লাই বন্ধ করা', 'পানি ঢালা', 'আক্রান্ত ব্যক্তিকে ধরা', 'পালিয়ে যাওয়া'] : ['Turn off the main power supply', 'Pour water', 'Touch the person', 'Run away']
      },
      {
        domain: language === 'bn' ? 'কারিগরি ও নিরাপত্তা' : 'Technical Safety',
        q: language === 'bn' ? 'বৈদ্যুতিক আগুনে কোন ধরনের ফায়ার এক্সটিংগুইশার ব্যবহৃত হয়?' : 'What type of fire extinguisher is used for electrical fires?',
        options: language === 'bn' ? ['CO2 বা ড্রাই কেমিক্যাল', 'পানি', 'ফোম', 'ওয়েট কেমিক্যাল'] : ['CO2 or Dry Chemical', 'Water', 'Foam', 'Wet Chemical']
      },
      {
        domain: language === 'bn' ? 'কারিগরি ও নিরাপত্তা' : 'Technical Safety',
        q: language === 'bn' ? 'টুলসগুলো কেন ইনসুলেটেড করা থাকে?' : 'Why are tools insulated?',
        options: language === 'bn' ? ['বৈদ্যুতিক শক রোধ করতে', 'সুন্দর দেখানোর জন্য', 'গরম রাখতে', 'ওজন বাড়াতে'] : ['To prevent electric shocks', 'To make them look good', 'To keep them warm', 'To increase their weight']
      },
      {
        domain: language === 'bn' ? 'কারিগরি ও নিরাপত্তা' : 'Technical Safety',
        q: language === 'bn' ? 'বৈদ্যুতিক রেজিস্ট্যান্সের একক কী?' : 'What is the unit of electrical resistance?',
        options: language === 'bn' ? ['ওহম', 'ওয়াট', 'জুল', 'অ্যাম্পিয়ার'] : ['Ohm', 'Watt', 'Joule', 'Ampere']
      },
      {
        domain: language === 'bn' ? 'কারিগরি ও নিরাপত্তা' : 'Technical Safety',
        q: language === 'bn' ? 'কোন যন্ত্র AC-কে DC-তে রূপান্তর করে?' : 'Which device converts AC to DC?',
        options: language === 'bn' ? ['রেকটিফায়ার', 'ট্রান্সফরমার', 'জেনারেটর', 'মোটর'] : ['Rectifier', 'Transformer', 'Generator', 'Motor']
      },
      {
        domain: language === 'bn' ? 'কারিগরি ও নিরাপত্তা' : 'Technical Safety',
        q: language === 'bn' ? 'ট্রান্সফরমারের মূল কাজ কী?' : 'What is the main function of a transformer?',
        options: language === 'bn' ? ['ভোল্টেজ বাড়ানো বা কমানো', 'AC-কে DC-তে রূপান্তর করা', 'বিদ্যুৎ সঞ্চয় করা', 'কারেন্ট মাপা'] : ['To step up or step down voltage', 'To convert AC to DC', 'To store power', 'To measure current']
      },
      {
        domain: language === 'bn' ? 'কারিগরি ও নিরাপত্তা' : 'Technical Safety',
        q: language === 'bn' ? 'PPE-এর পূর্ণরূপ কী?' : 'What does PPE stand for?',
        options: language === 'bn' ? ['পার্সোনাল প্রোটেক্টিভ ইকুইপমেন্ট', 'পাওয়ার প্ল্যান্ট ইঞ্জিন', 'প্রাইমারি পাওয়ার এলিমেন্ট', 'পাবলিক প্রোটেকশন এন্টিটি'] : ['Personal Protective Equipment', 'Power Plant Engine', 'Primary Power Element', 'Public Protection Entity']
      },
      {
        domain: language === 'bn' ? 'কারিগরি ও নিরাপত্তা' : 'Technical Safety',
        q: language === 'bn' ? 'নিচের কোনটি ইনসুলেটর (অপরিবাহী)?' : 'Which of the following is an insulator?',
        options: language === 'bn' ? ['প্লাস্টিক', 'লোহা', 'সোনা', 'অ্যালুমিনিয়াম'] : ['Plastic', 'Iron', 'Gold', 'Aluminum']
      },
      {
        domain: language === 'bn' ? 'কারিগরি ও নিরাপত্তা' : 'Technical Safety',
        q: language === 'bn' ? 'শর্ট সার্কিট কী?' : 'What is a short circuit?',
        options: language === 'bn' ? ['সার্কিটের দুটি নোডের মধ্যে অস্বাভাবিক সংযোগ', 'ছেঁড়া তার', 'নিম্ন ভোল্টেজ অবস্থা', 'এক ধরনের ব্যাটারি'] : ['An abnormal connection between two nodes of a circuit', 'A broken wire', 'A low voltage state', 'A type of battery']
      },
      {
        domain: language === 'bn' ? 'কারিগরি ও নিরাপত্তা' : 'Technical Safety',
        q: language === 'bn' ? 'সেফটি গিয়ার কতদিন পর পর পরীক্ষা করা উচিত?' : 'How often should safety gear be inspected?',
        options: language === 'bn' ? ['প্রতিবার ব্যবহারের আগে', 'বছরে একবার', 'শুধুমাত্র নষ্ট হলে', 'কখনো নয়'] : ['Before every use', 'Once a year', 'Only when broken', 'Never']
      }
    ],
    care: [
      {
        domain: language === 'bn' ? 'রোগীর যত্ন' : 'Patient Care',
        q: language === 'bn' ? 'একজন প্রাপ্তবয়স্ক মানুষের স্বাভাবিক শরীরের তাপমাত্রা কত?' : 'What is the normal body temperature for an adult?',
        options: language === 'bn' ? ['৯৮.৬°F (৩৭°C)', '১০০.৪°F (৩৮°C)', '৯৫.০°F (৩৫°C)', '১০২.০°F (৩৯°C)'] : ['98.6°F (37°C)', '100.4°F (38°C)', '95.0°F (35°C)', '102.0°F (39°C)']
      },
      {
        domain: language === 'bn' ? 'রোগীর যত্ন' : 'Patient Care',
        q: language === 'bn' ? 'সংক্রমণ ছড়ানো রোধ করার সবচেয়ে কার্যকরী উপায় কী?' : 'What is the most effective way to prevent the spread of infection?',
        options: language === 'bn' ? ['সঠিকভাবে হাত ধোয়া', 'সারাক্ষণ মাস্ক পরা', 'ঘরের ভেতরে থাকা', 'গরম পানি পান করা'] : ['Proper handwashing', 'Wearing a mask all the time', 'Staying indoors', 'Drinking warm water']
      },
      {
        domain: language === 'bn' ? 'রোগীর যত্ন' : 'Patient Care',
        q: language === 'bn' ? 'চলাচলে অক্ষম রোগীকে কীভাবে নড়াচড়া করাবেন?' : 'How should you move a patient with mobility issues?',
        options: language === 'bn' ? ['সঠিক লিফটিং কৌশল এবং সহায়ক ডিভাইস ব্যবহার করে', 'হাত ধরে টেনে তোলা', 'একা একা পুরো তুলে নেওয়া', 'তাদের নিজেদের চেষ্টা করতে দেওয়া'] : ['Use proper lifting techniques and assistive devices', 'Pull them by the arms', 'Lift them entirely by yourself', 'Let them struggle']
      },
      {
        domain: language === 'bn' ? 'রোগীর যত্ন' : 'Patient Care',
        q: language === 'bn' ? 'CPR-এর পূর্ণরূপ কী?' : 'What does CPR stand for?',
        options: language === 'bn' ? ['কার্ডিওপালমোনারি রিসাসিটেশন', 'কেয়ার পেশেন্ট রিকভারি', 'কার্ডিয়াক পালস রেট', 'ক্লিনিক্যাল পেশেন্ট রেসপন্স'] : ['Cardiopulmonary Resuscitation', 'Care Patient Recovery', 'Cardiac Pulse Rate', 'Clinical Patient Response']
      },
      {
        domain: language === 'bn' ? 'রোগীর যত্ন' : 'Patient Care',
        q: language === 'bn' ? 'রোগীর গলায় কিছু আটকে গেলে (Choking) কী করবেন?' : 'What should you do if a patient starts choking?',
        options: language === 'bn' ? ['হেইমলিচ ম্যানুভার (Heimlich maneuver) প্রয়োগ করা', 'পানি খেতে দেওয়া', 'বিছানায় সোজা করে শুইয়ে দেওয়া', 'অপেক্ষা করা'] : ['Perform the Heimlich maneuver', 'Give them water', 'Lay them flat on the bed', 'Wait for it to pass']
      },
      {
        domain: language === 'bn' ? 'রোগীর যত্ন' : 'Patient Care',
        q: language === 'bn' ? 'বয়স্কদের মধ্যে পানিশূন্যতার (Dehydration) লক্ষণ কোনটি?' : 'Which of the following is a sign of dehydration in the elderly?',
        options: language === 'bn' ? ['গাঢ় হলুদ প্রস্রাব এবং মুখ শুকিয়ে যাওয়া', 'অতিরিক্ত ঘাম', 'উচ্চ রক্তচাপ', 'ওজন বৃদ্ধি'] : ['Dark yellow urine and dry mouth', 'Excessive sweating', 'High blood pressure', 'Weight gain']
      },
      {
        domain: language === 'bn' ? 'রোগীর যত্ন' : 'Patient Care',
        q: language === 'bn' ? 'বেডসোর রোধে শয্যাশায়ী রোগীকে কতক্ষণ পর পর পাশ ফেরানো উচিত?' : 'How often should a bedridden patient be turned to prevent bedsores?',
        options: language === 'bn' ? ['প্রতি ২ ঘণ্টা পর পর', 'দিনে একবার', 'প্রতি ৬ ঘণ্টা পর পর', 'তারা বললে তখন'] : ['Every 2 hours', 'Once a day', 'Every 6 hours', 'Only when they ask']
      },
      {
        domain: language === 'bn' ? 'রোগীর যত্ন' : 'Patient Care',
        q: language === 'bn' ? 'একজন কেয়ারগিভারের প্রধান কাজ কী?' : 'What is the primary role of a caregiver?',
        options: language === 'bn' ? ['দৈনন্দিন কাজে সহায়তা করা এবং নিরাপত্তা নিশ্চিত করা', 'ওষুধ লিখে দেওয়া', 'অস্ত্রোপচার করা', 'রোগীর আর্থিক হিসাব রাখা'] : ['To assist with daily living activities and ensure safety', 'To prescribe medication', 'To perform surgeries', 'To manage the patient\'s finances']
      },
      {
        domain: language === 'bn' ? 'রোগীর যত্ন' : 'Patient Care',
        q: language === 'bn' ? 'ওষুধ খাওয়ানোর আগে কী করা উচিত?' : 'What should you do before administering medication?',
        options: language === 'bn' ? ['প্রেসক্রিপশন, মাত্রা এবং রোগীর পরিচয় যাচাই করা', 'আগে নিজে স্বাদ পরীক্ষা করা', 'গোপনে খাবারের সাথে মিশিয়ে দেওয়া', 'দ্রুত কাজ করার জন্য দ্বিগুণ দেওয়া'] : ['Check the prescription, dosage, and patient identity', 'Taste it first', 'Mix it with food secretly', 'Give double dose to act faster']
      },
      {
        domain: language === 'bn' ? 'রোগীর যত্ন' : 'Patient Care',
        q: language === 'bn' ? 'প্রাপ্তবয়স্কদের স্বাভাবিক বিশ্রামের হার্ট রেট কত?' : 'What is a normal resting heart rate for adults?',
        options: language === 'bn' ? ['মিনিটে ৬০ থেকে ১০০ বিট', 'মিনিটে ৪০ থেকে ৫০ বিট', 'মিনিটে ১২০ থেকে ১৪০ বিট', 'মিনিটে ১০ থেকে ২০ বিট'] : ['60 to 100 beats per minute', '40 to 50 beats per minute', '120 to 140 beats per minute', '10 to 20 beats per minute']
      },
      {
        domain: language === 'bn' ? 'রোগীর যত্ন' : 'Patient Care',
        q: language === 'bn' ? 'শ্রবণশক্তি দুর্বল এমন রোগীর সাথে কীভাবে কথা বলবেন?' : 'How should you communicate with a patient who is hard of hearing?',
        options: language === 'bn' ? ['স্পষ্টভাবে, তাদের দিকে তাকিয়ে কথা বলা এবং চিৎকার না করা', 'যত জোরে সম্ভব চিৎকার করা', 'শুধু হাতের ইশারা ব্যবহার করা', 'অন্য ঘর থেকে কথা বলা'] : ['Speak clearly, face them, and avoid shouting', 'Shout as loud as possible', 'Use only hand gestures', 'Talk from another room']
      },
      {
        domain: language === 'bn' ? 'রোগীর যত্ন' : 'Patient Care',
        q: language === 'bn' ? 'ময়লা বা নোংরা বিছানার চাদর কীভাবে সামলানো উচিত?' : 'What is the correct way to handle soiled linens?',
        options: language === 'bn' ? ['গ্লাভস পরে নির্দিষ্ট লন্ড্রি ব্যাগে রাখা', 'ঘরের ভেতরে ঝাড়া দেওয়া', 'থালাবাসনের সাথে ধোয়া', 'মেঝেতে ফেলে রাখা'] : ['Wear gloves and place them in a designated laundry bag', 'Shake them out in the room', 'Wash them with dishes', 'Leave them on the floor']
      },
      {
        domain: language === 'bn' ? 'রোগীর যত্ন' : 'Patient Care',
        q: language === 'bn' ? 'ক্ষত নিরাময়ের জন্য কোন পুষ্টি উপাদানটি জরুরি?' : 'Which nutrient is essential for wound healing?',
        options: language === 'bn' ? ['প্রোটিন', 'চিনি', 'ফ্যাট', 'সোডিয়াম'] : ['Protein', 'Sugar', 'Fat', 'Sodium']
      },
      {
        domain: language === 'bn' ? 'রোগীর যত্ন' : 'Patient Care',
        q: language === 'bn' ? 'হাইপারটেনশন (Hypertension) কী?' : 'What is hypertension?',
        options: language === 'bn' ? ['উচ্চ রক্তচাপ', 'নিম্ন রক্তে শর্করা', 'উচ্চ হার্ট রেট', 'নিম্ন শরীরের তাপমাত্রা'] : ['High blood pressure', 'Low blood sugar', 'High heart rate', 'Low body temperature']
      },
      {
        domain: language === 'bn' ? 'রোগীর যত্ন' : 'Patient Care',
        q: language === 'bn' ? 'বয়স্কদের জন্য দাঁত ও মুখের যত্ন কেন গুরুত্বপূর্ণ?' : 'Why is maintaining oral hygiene important for the elderly?',
        options: language === 'bn' ? ['এটি সংক্রমণ রোধ করে এবং পুষ্টি বাড়ায়', 'দাঁত সাদা করে', 'চুল পড়া বন্ধ করে', 'দৃষ্টিশক্তি উন্নত করে'] : ['It prevents infections and improves nutrition', 'It makes teeth whiter', 'It stops hair loss', 'It improves eyesight']
      },
      {
        domain: language === 'bn' ? 'রোগীর যত্ন' : 'Patient Care',
        q: language === 'bn' ? 'স্ট্রোকের একটি সাধারণ লক্ষণ কোনটি?' : 'What is a common sign of a stroke?',
        options: language === 'bn' ? ['শরীরের একপাশে হঠাৎ দুর্বলতা বা অবশ হয়ে যাওয়া', 'হঠাৎ র‍্যাশ ওঠা', 'টানা কাশি', 'হালকা মাথাব্যথা'] : ['Sudden weakness or numbness on one side of the body', 'A sudden rash', 'Persistent coughing', 'A mild headache']
      },
      {
        domain: language === 'bn' ? 'রোগীর যত্ন' : 'Patient Care',
        q: language === 'bn' ? 'আলঝেইমার রোগী বিভ্রান্ত হলে কীভাবে সাহায্য করবেন?' : 'How should you assist a patient with Alzheimer\'s who is confused?',
        options: language === 'bn' ? ['শান্ত থাকা, আশ্বস্ত করা এবং ধীরে ধীরে মনোযোগ অন্যদিকে নেওয়া', 'স্মৃতি ঠিক করতে তাদের সাথে তর্ক করা', 'এড়িয়ে যাওয়া', 'ঘরে তালাবন্ধ করে রাখা'] : ['Remain calm, reassure them, and gently redirect their attention', 'Argue with them to correct their memory', 'Ignore them', 'Lock them in a room']
      },
      {
        domain: language === 'bn' ? 'রোগীর যত্ন' : 'Patient Care',
        q: language === 'bn' ? 'ডায়াবেটিস রোগীর অবস্থা পর্যবেক্ষণের সেরা উপায় কী?' : 'What is the best way to monitor a diabetic patient\'s condition?',
        options: language === 'bn' ? ['নিয়মিত রক্তের গ্লুকোজ লেভেল পরীক্ষা করা', 'উচ্চতা মাপা', 'চুলের বৃদ্ধি পরীক্ষা করা', 'মাঝে মাঝে কেমন লাগছে তা জিজ্ঞেস করা'] : ['Regularly check their blood glucose levels', 'Measure their height', 'Check their hair growth', 'Ask them how they feel occasionally']
      },
      {
        domain: language === 'bn' ? 'রোগীর যত্ন' : 'Patient Care',
        q: language === 'bn' ? 'হুইলচেয়ার ট্রান্সফার বেল্টের উদ্দেশ্য কী?' : 'What is the purpose of a wheelchair transfer belt?',
        options: language === 'bn' ? ['রোগীকে আঘাত না দিয়ে নিরাপদে নড়াচড়ায় সাহায্য করা', 'রোগীকে চেয়ারের সাথে বেঁধে রাখা', 'লাগেজ বহন করা', 'ঘাড়ে সাপোর্ট দেওয়া'] : ['To safely assist the patient in moving without causing injury', 'To tie the patient to the chair', 'To carry luggage', 'To support their neck']
      },
      {
        domain: language === 'bn' ? 'রোগীর যত্ন' : 'Patient Care',
        q: language === 'bn' ? 'রোগী খেতে অস্বীকৃতি জানালে কী করবেন?' : 'What should you do if a patient refuses to eat?',
        options: language === 'bn' ? ['কারণ বের করা, বিকল্প দেওয়া এবং টানা চলতে থাকলে রিপোর্ট করা', 'জোর করে খাওয়ানো', 'সাথে সাথে প্লেট সরিয়ে নেওয়া', 'বকা দেওয়া'] : ['Find out why, offer choices, and report it if it continues', 'Force feed them', 'Take their plate away immediately', 'Scold them']
      }
    ]
  };

  const handleAnswer = () => {
    setStep(step + 1);
  };

  if (!track) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 flex justify-center">
        <div className="max-w-3xl w-full animate-in fade-in">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-gray-900 mb-3">{language === 'bn' ? 'আপনার আগ্রহ নির্বাচন করুন' : 'Select your interest track'}</h1>
            <p className="text-gray-600 font-medium">{language === 'bn' ? 'আমরা আপনার আগ্রহ অনুযায়ী প্রশ্ন তৈরি করব।' : 'We will curate the assessment questions based on your track.'}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {tracks.map(t => (
              <button
                key={t.id}
                onClick={() => { setTrack(t.id); setStep(0); }}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:border-brand-green hover:shadow-md transition-all text-center group"
              >
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-green-light transition-colors">
                  <t.icon className="w-8 h-8 text-gray-500 group-hover:text-brand-green" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t.title}</h3>
                <p className="text-sm text-gray-500 font-medium">{t.desc}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const questions = questionsByTrack[track];

  if (step >= questions.length) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white p-10 rounded-xl shadow-sm border border-gray-200 text-center max-w-md w-full animate-in zoom-in duration-300">
          <div className="w-20 h-20 bg-brand-green-light rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-brand-green" />
          </div>
          <h2 className="text-3xl font-bold mb-3">{language === 'bn' ? 'মূল্যায়ন সম্পন্ন' : 'Assessment Complete'}</h2>
          <p className="text-gray-600 mb-8 font-medium leading-relaxed">
            {language === 'bn' ? 'আপনার ডায়াগনস্টিক স্কোর রেকর্ড করা হয়েছে। এআই কোপাইলট আপনার শেখার পরিকল্পনা আপডেট করেছে।' : 'Your diagnostic scores have been recorded. The AI Copilot has updated your learning plan.'}
          </p>
          <button 
            onClick={() => navigate('/journey')}
            className="w-full bg-brand-green text-white font-bold py-4 rounded-lg hover:bg-brand-green-dark transition-colors flex items-center justify-center gap-2 text-lg shadow-sm"
          >
            {language === 'bn' ? 'আমার যাত্রা দেখুন' : 'View My Journey'} <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    );
  }

  const currentQ = questions[step];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 flex justify-center">
      <div className="max-w-2xl w-full">
        <div className="mb-8 flex items-center gap-3">
          <div className="p-2 bg-white rounded shadow-sm border border-gray-200">
            <ClipboardList className="w-6 h-6 text-brand-green" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">{language === 'bn' ? 'ডায়াগনস্টিক মূল্যায়ন' : 'Diagnostic Assessment'}</h1>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 md:p-10">
          <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-5">
            <span className="text-sm font-bold uppercase tracking-wider text-gray-500 bg-gray-50 px-3 py-1 rounded">{currentQ.domain} Module</span>
            <span className="text-sm font-bold text-brand-green">Question {step + 1} of {questions.length}</span>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-8 leading-tight">{currentQ.q}</h2>
          
          <div className="space-y-4">
            {currentQ.options.map((opt: string, i: number) => (
              <button
                key={i}
                onClick={handleAnswer}
                className="w-full text-left px-6 py-4 rounded-lg border-2 border-gray-100 hover:border-brand-green hover:bg-brand-green-light font-bold text-gray-700 transition-all text-lg"
              >
                {opt}
              </button>
            ))}
          </div>
          
          <div className="mt-10 text-xs font-bold uppercase tracking-widest text-gray-400 text-center">
            {language === 'bn' ? 'স্কোর সহায়তার জন্য, মেরিট কাট-অফ নয়।' : 'Scores guide bridging support, not merit cut-offs.'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assessment;
