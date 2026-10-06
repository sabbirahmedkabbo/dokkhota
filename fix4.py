import re

with open('src/components/AIChatDrawer.tsx', 'r', encoding='utf-8') as f:
    c = f.read()

c = c.replace("import { Link } from 'react-router-dom';", "import { Link } from 'react-router-dom';\nimport { useLanguage } from '../LanguageContext';")
c = c.replace("const AIChatDrawer = () => {", "const AIChatDrawer = () => {\n  const { language } = useLanguage();")

with open('src/components/AIChatDrawer.tsx', 'w', encoding='utf-8') as f:
    f.write(c)
