import json

def generate_track_qs(track_name, domain_en, domain_bn, start_idx=1):
    qs = []
    for i in range(20):
        idx = start_idx + i
        qs.append({
            'domain': f"language === 'bn' ? '{domain_bn}' : '{domain_en}'",
            'q': f"language === 'bn' ? 'মক প্রশ্ন {idx} - {domain_bn} সম্পর্কিত একটি সাধারণ প্রশ্ন। সঠিক উত্তরটি বেছে নিন।' : 'Mock Question {idx} - A general question related to {domain_en}. Choose the correct answer.'",
            'options': f"language === 'bn' ? ['সঠিক উত্তর', 'ভুল উত্তর ১', 'ভুল উত্তর ২', 'ভুল উত্তর ৩'] : ['Correct Answer', 'Wrong Answer 1', 'Wrong Answer 2', 'Wrong Answer 3']"
        })
    return qs

def fmt_qs(qs):
    res = []
    for q in qs:
        res.append('      {\n' +
                   f"        domain: {q['domain']},\n" +
                   f"        q: {q['q']},\n" +
                   f"        options: {q['options']}\n" +
                   '      }')
    return ',\n'.join(res)

office_qs = fmt_qs(generate_track_qs('office', 'Digital Literacy', 'ডিজিটাল লিটারেসি', 1))
tech_qs = fmt_qs(generate_track_qs('technical', 'Safety Basics', 'নিরাপত্তা', 1))
care_qs = fmt_qs(generate_track_qs('care', 'Patient Care', 'রোগীর যত্ন', 1))

out = '    office: [\n' + office_qs + '\n    ],\n    technical: [\n' + tech_qs + '\n    ],\n    care: [\n' + care_qs + '\n    ]'

file_content = f'''import React, {{ useState }} from 'react';
import {{ useNavigate }} from 'react-router-dom';
import {{ ClipboardList, CheckCircle2, ArrowRight, Laptop, Zap, HeartPulse }} from 'lucide-react';
import {{ useLanguage }} from '../LanguageContext';

const Assessment = () => {{
  const [track, setTrack] = useState<string | null>(null);
  const [step, setStep] = useState(0);
  const navigate = useNavigate();
  const {{ language }} = useLanguage();

  const tracks = [
    {{ id: 'office', icon: Laptop, title: language === 'bn' ? 'অফিস ও ডিজিটাল' : 'Office & Digital', desc: language === 'bn' ? 'কম্পিউটার অপারেশন এবং অ্যাডমিন' : 'Computer Operations & Admin' }},
    {{ id: 'technical', icon: Zap, title: language === 'bn' ? 'কারিগরি কাজ' : 'Technical Work', desc: language === 'bn' ? 'বৈদ্যুতিক এবং রক্ষণাবেক্ষণ' : 'Electrical & Maintenance' }},
    {{ id: 'care', icon: HeartPulse, title: language === 'bn' ? 'স্বাস্থ্যসেবা' : 'Care Giving', desc: language === 'bn' ? 'রোগী ও বয়স্কদের সেবা' : 'Patient & Elderly Care' }}
  ];

  const questionsByTrack: Record<string, any[]> = {{
{out}
  }};

  const handleAnswer = () => {{
    setStep(step + 1);
  }};

  if (!track) {{
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 flex justify-center">
        <div className="max-w-3xl w-full animate-in fade-in">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-gray-900 mb-3">{{language === 'bn' ? 'আপনার আগ্রহ নির্বাচন করুন' : 'Select your interest track'}}</h1>
            <p className="text-gray-600 font-medium">{{language === 'bn' ? 'আমরা আপনার আগ্রহ অনুযায়ী প্রশ্ন তৈরি করব।' : 'We will curate the assessment questions based on your track.'}}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {{tracks.map(t => (
              <button
                key={{t.id}}
                onClick={{() => {{ setTrack(t.id); setStep(0); }}}}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:border-brand-green hover:shadow-md transition-all text-center group"
              >
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-green-light transition-colors">
                  <t.icon className="w-8 h-8 text-gray-500 group-hover:text-brand-green" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{{t.title}}</h3>
                <p className="text-sm text-gray-500 font-medium">{{t.desc}}</p>
              </button>
            ))}}
          </div>
        </div>
      </div>
    );
  }}

  const questions = questionsByTrack[track];

  if (step >= questions.length) {{
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white p-10 rounded-xl shadow-sm border border-gray-200 text-center max-w-md w-full animate-in zoom-in duration-300">
          <div className="w-20 h-20 bg-brand-green-light rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-brand-green" />
          </div>
          <h2 className="text-3xl font-bold mb-3">{{language === 'bn' ? 'মূল্যায়ন সম্পন্ন' : 'Assessment Complete'}}</h2>
          <p className="text-gray-600 mb-8 font-medium leading-relaxed">
            {{language === 'bn' ? 'আপনার ডায়াগনস্টিক স্কোর রেকর্ড করা হয়েছে। এআই কোপাইলট আপনার শেখার পরিকল্পনা আপডেট করেছে।' : 'Your diagnostic scores have been recorded. The AI Copilot has updated your learning plan.'}}
          </p>
          <button 
            onClick={{() => navigate('/journey')}}
            className="w-full bg-brand-green text-white font-bold py-4 rounded-lg hover:bg-brand-green-dark transition-colors flex items-center justify-center gap-2 text-lg shadow-sm"
          >
            {{language === 'bn' ? 'আমার যাত্রা দেখুন' : 'View My Journey'}} <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    );
  }}

  const currentQ = questions[step];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 flex justify-center">
      <div className="max-w-2xl w-full">
        <div className="mb-8 flex items-center gap-3">
          <div className="p-2 bg-white rounded shadow-sm border border-gray-200">
            <ClipboardList className="w-6 h-6 text-brand-green" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">{{language === 'bn' ? 'ডায়াগনস্টিক মূল্যায়ন' : 'Diagnostic Assessment'}}</h1>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 md:p-10">
          <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-5">
            <span className="text-sm font-bold uppercase tracking-wider text-gray-500 bg-gray-50 px-3 py-1 rounded">{{currentQ.domain}} Module</span>
            <span className="text-sm font-bold text-brand-green">Question {{step + 1}} of {{questions.length}}</span>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-8 leading-tight">{{currentQ.q}}</h2>
          
          <div className="space-y-4">
            {{currentQ.options.map((opt: string, i: number) => (
              <button
                key={{i}}
                onClick={{handleAnswer}}
                className="w-full text-left px-6 py-4 rounded-lg border-2 border-gray-100 hover:border-brand-green hover:bg-brand-green-light font-bold text-gray-700 transition-all text-lg"
              >
                {{opt}}
              </button>
            ))}}
          </div>
          
          <div className="mt-10 text-xs font-bold uppercase tracking-widest text-gray-400 text-center">
            {{language === 'bn' ? 'স্কোর সহায়তার জন্য, মেরিট কাট-অফ নয়।' : 'Scores guide bridging support, not merit cut-offs.'}}
          </div>
        </div>
      </div>
    </div>
  );
}};

export default Assessment;
'''

with open('src/pages/Assessment.tsx', 'w', encoding='utf-8') as f:
    f.write(file_content)
