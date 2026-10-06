import re

# Update Footer
with open('src/components/Footer.tsx', 'r', encoding='utf-8') as f:
    c = f.read()

c = c.replace('<span className="font-bold text-xl text-white">Dokkhota Shetu</span>', '<span className="font-bold text-xl text-white">{language === \'bn\' ? \'দক্ষতা সেতু\' : \'Dokkhota Shetu\'}</span>')
c = c.replace("Dokkhota Shetu Prototype.", "{language === 'bn' ? 'দক্ষতা সেতু প্রোটোটাইপ।' : 'Dokkhota Shetu Prototype.'}")

with open('src/components/Footer.tsx', 'w', encoding='utf-8') as f:
    f.write(c)

# Update AI Drawer
with open('src/components/AIChatDrawer.tsx', 'r', encoding='utf-8') as f:
    chat = f.read()

replacement = """content: language === 'bn' 
          ? "👋 হ্যালো! আমি আপনার দক্ষতা সেতু এআই ক্যারিয়ার কোপাইলট।\\n\\nআপনি কী করতে পছন্দ করেন, কী পড়াশোনা করেছেন, বা কোন ধরণের কাজে আগ্রহী তা আমাকে জানান — আমি আপনাকে উপযুক্ত পথ খুঁজতে সাহায্য করব।"
          : "👋 Hello! I'm your Dokkhota Shetu AI Career Copilot.\\n\\nTell me what you enjoy, what you've studied, or what kind of work you're interested in - I'll help you explore suitable pathways.\""""

chat = re.sub(r'content: ".*?Hello! I\'m your Dokkhota Shetu AI Career Copilot.*?"', replacement, chat, flags=re.DOTALL)

with open('src/components/AIChatDrawer.tsx', 'w', encoding='utf-8') as f:
    f.write(chat)

