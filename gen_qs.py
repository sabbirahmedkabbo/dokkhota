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

with open('mock_qs.txt', 'w', encoding='utf-8') as f:
    f.write(out)
