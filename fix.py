import re

with open('src/pages/CourseExplorer.tsx', 'r', encoding='utf-8') as f:
    c = f.read()

target = """<div className="h-40 bg-gray-100 flex items-center justify-center relative border-b border-gray-200">
                  <span className="text-lg font-bold text-gray-500 bg-white px-4 py-2 rounded shadow-sm border border-gray-200">
                    {course.imageLabel}
                  </span>
                  <div className="absolute top-3 right-3 bg-brand-charcoal text-white px-2 py-1 rounded text-[10px] font-bold shadow-sm uppercase tracking-wider">
                    {course.level}
                  </div>
                </div>"""

replacement = """<div className="h-48 bg-gray-100 relative border-b border-gray-200 overflow-hidden group">
                  <img src={`/${course.id}.jpg`} alt={course.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute top-3 right-3 bg-brand-charcoal text-white px-2 py-1 rounded text-[10px] font-bold shadow-sm uppercase tracking-wider z-10">
                    {course.level}
                  </div>
                </div>"""

c = c.replace(target, replacement)

with open('src/pages/CourseExplorer.tsx', 'w', encoding='utf-8') as f:
    f.write(c)
