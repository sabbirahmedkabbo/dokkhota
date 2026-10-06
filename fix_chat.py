import re

with open('src/components/AIChatDrawer.tsx', 'r', encoding='utf-8') as f:
    chat = f.read()

replacement = """content: language === 'bn' 
        ? "👋 হ্যালো! আমি আপনার দক্ষতা সেতু এআই ক্যারিয়ার কোপাইলট।\\n\\nআপনি কী করতে পছন্দ করেন, কী পড়াশোনা করেছেন, বা কোন ধরণের কাজে আগ্রহী তা আমাকে জানান — আমি আপনাকে উপযুক্ত পথ খুঁজতে সাহায্য করব।"
        : "👋 Hello! I'm your Dokkhota Shetu AI Career Copilot.\\n\\nTell me what you enjoy, what you've studied, or what kind of work you're interested in - I'll help you explore suitable pathways.\""""

chat = re.sub(r"content: language === 'bn'.*?: \".*?\"", replacement, chat, flags=re.DOTALL)

with open('src/components/AIChatDrawer.tsx', 'w', encoding='utf-8') as f:
    f.write(chat)
