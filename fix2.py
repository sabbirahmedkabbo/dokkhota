import re

with open('src/pages/CourseDetail.tsx', 'r', encoding='utf-8') as f:
    c = f.read()

target = """<div className="h-64 bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center text-gray-500 overflow-hidden shadow-inner font-bold text-sm">
                [IMAGE: {course.title}]
              </div>"""

replacement = """<div className="h-64 bg-gray-100 border border-gray-200 rounded-lg overflow-hidden shadow-inner group relative">
                <img src={`/${course.id}.jpg`} alt={course.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>"""

c = c.replace(target, replacement)

with open('src/pages/CourseDetail.tsx', 'w', encoding='utf-8') as f:
    f.write(c)
