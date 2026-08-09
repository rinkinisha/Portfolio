import SectionBlock from './SectionBlock';

interface EducationItem {
  degree: string;
  school: string;
  year: string;
  description?: string[];
}

const education: EducationItem[] = [
  {
    degree: 'Certificate Course in Web Development',
    school: 'NavGurukul Foundation Social Welfare, Kishanganj - Bihar',
    year: 'June 2024 – Oct 2025',
    description: [
      'Completed industry-focused training in Full Stack Web Development, covering React.js, Node.js, Express.js , MongoDB, and RESTful APIs.',
      'Gained hands-on experience in Web Technologies including HTML5, CSS3, JavaScript, and responsive design principles.',
    ],
  },
  {
    degree: 'Bachelor of Arts',
    school: 'Purnia University, Purnia - Bihar',
    year: '2020 – 2023',
  },
];

const EducationSection = () => (
  <SectionBlock id="education" title="Education">
    <div className="space-y-10">
      {education.map((item) => (
        <div
          key={item.degree}
          className="border-l-2 border-black/10 pl-6 py-2 hover:border-black transition-colors duration-300"
        >
          <h3 className="text-base md:text-lg font-bold text-foreground">
            {item.degree}
          </h3>
          <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 mt-2">
            <span className="text-sm font-medium text-foreground">
              {item.school}
            </span>
            <span className="hidden md:inline text-foreground/20">•</span>
            <span className="font-mono text-xs text-foreground/60">
              {item.year}
            </span>
          </div>
          {item.description && (
            <ul className="mt-4 space-y-2 list-disc list-outside pl-4 text-sm text-foreground/80">
              {item.description.map((point, index) => (
                <li key={index} className="leading-relaxed">
                  {point}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  </SectionBlock>
);

export default EducationSection;
