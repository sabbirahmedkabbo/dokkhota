with open('gen_real_qs.py', 'r', encoding='utf-8') as f:
    c = f.read()

c = c.replace(
    "opt_str_en = \"['\" + \"', '\".join(opts_en) + \"']\"",
    "opt_str_en = \"['\" + \"', '\".join([o.replace(\"'\", \"\\\\'\") for o in opts_en]) + \"']\""
)
c = c.replace(
    "opt_str_bn = \"['\" + \"', '\".join(opts_bn) + \"']\"",
    "opt_str_bn = \"['\" + \"', '\".join([o.replace(\"'\", \"\\\\'\") for o in opts_bn]) + \"']\""
)
c = c.replace(
    "{domain_bn}' : '{domain_en}'",
    "{domain_bn.replace(\"'\", \"\\\\'\")}' : '{domain_en.replace(\"'\", \"\\\\'\")}'"
)
c = c.replace(
    "{q_bn}' : '{q_en}'",
    "{q_bn.replace(\"'\", \"\\\\'\")}' : '{q_en.replace(\"'\", \"\\\\'\")}'"
)

with open('gen_real_qs.py', 'w', encoding='utf-8') as f:
    f.write(c)
