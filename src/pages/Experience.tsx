import { ExperienceCard } from '../components/ExperienceCard';

export type Experience = {
  clientName: string;
  role: string;
  startDate: Date;
  endDate: Date;
  description: string;
  skills: string[];
};

export const Experience = () => {
  return (
    <>
      {experiences.map((experience) => (
        <ExperienceCard experience={experience} />
      ))}
    </>
  );
};

const experiences: Experience[] = [
  {
    clientName: 'Government Agency',
    role: 'Quality Assurance',
    startDate: new Date(2027, 6, 9),
    endDate: new Date(2027, 6, 9),
    description:
      'Ruairidh played a crucial role in a dynamic team, contributing to both front-end and back-end aspects of the project. His efforts spanned comprehensive QA testing for mobile (iOS) and web applications and upgrading essential packages and services within the AWS ecosystem. This dual focus ensured both high-quality user experiences and robust, up-to-date backend infrastructure.',
    skills: ['test'],
  },
  {
    clientName: 'Government Agency',
    role: 'Quality Assurance',
    startDate: new Date(2027, 6, 9),
    endDate: new Date(2027, 6, 9),
    description:
      'Ruairidh played a crucial role in a dynamic team, contributing to both front-end and back-end aspects of the project. His efforts spanned comprehensive QA testing for mobile (iOS) and web applications and upgrading essential packages and services within the AWS ecosystem. This dual focus ensured both high-quality user experiences and robust, up-to-date backend infrastructure.',
    skills: ['test'],
  },
  {
    clientName: 'Government Agency',
    role: 'Quality Assurance',
    startDate: new Date(2027, 6, 9),
    endDate: new Date(2027, 6, 9),
    description:
      'Ruairidh played a crucial role in a dynamic team, contributing to both front-end and back-end aspects of the project. His efforts spanned comprehensive QA testing for mobile (iOS) and web applications and upgrading essential packages and services within the AWS ecosystem. This dual focus ensured both high-quality user experiences and robust, up-to-date backend infrastructure.',
    skills: ['test'],
  },
];
