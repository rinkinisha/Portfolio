import SectionBlock from './SectionBlock';
import { ScrollReveal } from './ui/ScrollReveal';

const experiences = [
  {
    role: 'Academic Associate Intern → Academic Associate',
    company: 'NavGurukul',
    period: '[OCT 2025 – PRESENT]',
    description: (
      <div className="space-y-4">
        <p>
          Started as an <strong>Academic Associate Intern</strong> and transitioned into a <strong>full-time Academic Associate</strong> role, supporting students in their journey toward becoming full-stack developers.
        </p>
        
        <div>
          <h4 className="font-bold mb-2">Key Contributions</h4>
          <ul className="space-y-2 list-none">
            <li>✦ Mentored students in <strong>full-stack web development</strong> through hands-on projects using JavaScript, React, Node.js, Express, MongoDB, REST APIs, and Git.</li>
<li>✦ Guided students in <strong>debugging, problem-solving, and writing structured, maintainable code</strong> instead of relying on ready-made solutions.</li>
<li>✦ Reviewed projects, identified <strong>learning gaps</strong>, and provided technical feedback while designing application-oriented activities to strengthen students' development skills.</li>
            </ul>
        </div>
      </div>
    ),
  },
];

const ExperienceSection = () => (
  <SectionBlock id="experience" title="Experience">
    <ScrollReveal animation="stagger-fade-up" className="space-y-12">
      {experiences.map((exp) => (
        <div
          key={exp.role}
          className="relative pl-8 md:pl-0 border-l md:border-l-0 border-black/20 md:grid md:grid-cols-[1fr_2fr] md:gap-8 pb-12 last:pb-0"
        >
          <div className="md:text-right md:pr-8 md:border-r border-black/20 relative">
            <div className="hidden md:block absolute top-1 -right-[5px] w-[9px] h-[9px] rounded-none bg-black"></div>
            <div className="md:hidden absolute top-1 -left-[5px] w-[9px] h-[9px] rounded-none bg-black"></div>

            <h4 className="font-mono text-xs tracking-widest text-foreground/60 uppercase mb-1">
              {exp.period}
            </h4>
            <h3 className="font-bold text-base md:text-lg">{exp.company}</h3>
          </div>

          <div className="mt-2 md:mt-0">
            <h3 className="text-base font-bold text-foreground md:hidden mb-2">
              {exp.role}
            </h3>
            <h3 className="text-lg font-bold text-foreground hidden md:block mb-3">
              {exp.role}
            </h3>
            <div className="body-text text-sm">{exp.description}</div>
          </div>
        </div>
      ))}
    </ScrollReveal>
  </SectionBlock>
);

export default ExperienceSection;
