with open('gen_real_qs_scored.py', 'r', encoding='utf-8') as f:
    c = f.read()

c = c.replace('.replace("\'", "\'")', '.replace("\'", "\\\\\'")')

with open('gen_real_qs_scored.py', 'w', encoding='utf-8') as f:
    f.write(c)
