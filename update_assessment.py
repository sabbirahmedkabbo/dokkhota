import re

with open('gen_real_qs.py', 'r', encoding='utf-8') as f:
    c = f.read()

# Replace format_questions
format_qs_replacement = """import random
def format_questions(qs_list, domain_en, domain_bn):
    out = []
    for q_en, q_bn, opts_en, opts_bn in qs_list:
        paired = list(zip(opts_en, opts_bn))
        correct = paired[0]
        random.shuffle(paired)
        correct_index = paired.index(correct)
        
        shuffled_en = [p[0] for p in paired]
        shuffled_bn = [p[1] for p in paired]
        
        opt_str_en = "['" + "', '".join([o.replace("'", "\\\\'") for o in shuffled_en]) + "']"
        opt_str_bn = "['" + "', '".join([o.replace("'", "\\\\'") for o in shuffled_bn]) + "']"
        out.append(f\"\"\"      {{
        domain: language === 'bn' ? '{domain_bn.replace("'", "\\\\'")}' : '{domain_en.replace("'", "\\\\'")}',
        q: language === 'bn' ? '{q_bn.replace("'", "\\\\'")}' : '{q_en.replace("'", "\\\\'")}',
        options: language === 'bn' ? {opt_str_bn} : {opt_str_en},
        correctIndex: {correct_index}
      }}\"\"\")
    return ",\\n".join(out)
"""

c = re.sub(r"def format_questions\(qs_list, domain_en, domain_bn\):.*?return \",\\n\"\.join\(out\)", format_qs_replacement, c, flags=re.DOTALL)

# Inject score state
c = c.replace(
    "const [step, setStep] = useState(0);",
    "const [step, setStep] = useState(0);\n  const [score, setScore] = useState(0);"
)

# Update handleAnswer
handle_answer_old = """  const handleAnswer = () => {
    setStep(step + 1);
  };"""

handle_answer_new = """  const handleAnswer = (optIndex: number) => {
    if (optIndex === currentQ.correctIndex) {
      setScore(s => s + 1);
    }
    setStep(step + 1);
  };"""

c = c.replace(handle_answer_old, handle_answer_new)

# Update onClick in buttons
c = c.replace("onClick={handleAnswer}", "onClick={() => handleAnswer(i)}")

# Update Completion Screen
completion_old = """          <h2 className="text-3xl font-bold mb-3">{language === 'bn' ? 'মূল্যায়ন সম্পন্ন' : 'Assessment Complete'}</h2>
          <p className="text-gray-600 mb-8 font-medium leading-relaxed">
            {language === 'bn' ? 'আপনার ডায়াগনস্টিক স্কোর রেকর্ড করা হয়েছে। এআই কোপাইলট আপনার শেখার পরিকল্পনা আপডেট করেছে।' : 'Your diagnostic scores have been recorded. The AI Copilot has updated your learning plan.'}
          </p>"""

completion_new = """          <h2 className="text-3xl font-bold mb-3">{language === 'bn' ? 'মূল্যায়ন সম্পন্ন' : 'Assessment Complete'}</h2>
          <div className="bg-brand-green-light/30 border border-brand-green/30 p-4 rounded-lg mb-6">
            <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">{language === 'bn' ? 'আপনার স্কোর' : 'Your Score'}</div>
            <div className="text-4xl font-bold text-brand-green-dark">{score} <span className="text-xl text-gray-500">/ {questions.length}</span></div>
          </div>
          <p className="text-gray-600 mb-8 font-medium leading-relaxed">
            {language === 'bn' ? 'আপনার ডায়াগনস্টিক স্কোর রেকর্ড করা হয়েছে। এআই কোপাইলট আপনার শেখার পরিকল্পনা আপডেট করেছে।' : 'Your diagnostic scores have been recorded. The AI Copilot has updated your learning plan.'}
          </p>"""

c = c.replace(completion_old, completion_new)

# Reset score on track change
c = c.replace("onClick={() => { setTrack(t.id); setStep(0); }}", "onClick={() => { setTrack(t.id); setStep(0); setScore(0); }}")

with open('gen_real_qs_scored.py', 'w', encoding='utf-8') as f:
    f.write(c)
