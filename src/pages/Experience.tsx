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
    startDate: new Date(2023, 11, 28),
    endDate: new Date(2024, 6, 7),
    description: `Ruairidh played a crucial role in a dynamic team, contributing to both front-end and back-end aspects of the project. His efforts spanned comprehensive QA testing for mobile (iOS) and web applications and upgrading essential packages and services within the AWS ecosystem. This dual focus ensured both high-quality user experiences and robust, up-to-date backend infrastructure.
      
      - Conducted both automated and manual QA testing for the iOS mobile application.
      - Performed manual web application testing to ensure a seamless user experience.
      - Upgraded various packages and dependencies, including:
      \u00A0\u00A0\u00A0\u00A0- Lamda Upgrades to the latest version of AWS SDK
      \u00A0\u00A0\u00A0\u00A0- Node.js version
      - Conducted QA testing for AWS service upgrades (CloudWatch, SQS, SNS, Lambda, S3, DynamoDB).
      - Collaborated closely with a team of four developers, ensuring code integrity and robustness during package upgrades.`,
    skills: [
      'AWS',
      'AWS SDK',
      'Amazon S3',
      'AWS Lambda',
      'AWS CloudWatch',
      'AWS DynamoDB',
      'TypeScript',
      'Node.js',
      'iOS Testing',
      'Manual Testing',
    ],
  },
  {
    clientName: 'Internal AI Project',
    role: 'Software Engineer',
    startDate: new Date(2023, 6, 3),
    endDate: new Date(2023, 10, 27),
    description: `In the project, Ruairidh played a pivotal role in the front-end development, with a specific focus on enhancing the user interface and user experience. This critical work was conducted using React and TypeScript, ensuring a robust and efficient development process.

His responsibilities encompassed a wide range of tasks, including:
 - New Component Creation: Ruairidh created essential new components to improve user interactions.
 - Recoil Atom Implementation: He efficiently managed application state using Recoil atoms for a responsive user experience.
 - Tailwind CSS Styling: Ruairidh used Tailwind CSS to enhance the visual design and ensure a consistent user interface.
 - Bug Resolution: He identified and fixed front-end bugs, ensuring system stability.
 - Vitest Testing: Ruairidh conducted thorough testing with Vitest to guarantee functionality and reliability.
 - Integration with Cognitive Search and OpenAI: He seamlessly integrated the front-end with Azure Cognitive Search and OpenAI, enabling advanced data management and analysis.`,
    skills: [
      'AI',
      'React',
      'TypeScript',
      'API',
      'TailwindCSS',
      'Vite',
      'Vitest',
      'Recoil',
      'Github',
      'git',
      'actions',
      'MSAL',
    ],
  },
  {
    clientName: 'Financial Trading',
    role: 'Software Engineer',
    startDate: new Date(2023, 2, 1),
    endDate: new Date(2023, 5, 30),
    description: `The project involved the development of three single-page applications within a global team, fostering collaboration across different locations and centered around React and TypeScript. One of these applications served as the primary platform for foreign currency trading, while the remaining two focused on trade monitoring and amendments. Ruairidh joined the front-end team during the latter stages of the project, quickly integrating into the global team and contributing to its success, particularly in React and TypeScript-based front-end development.

Ruairidh's specific responsibilities encompassed:
- Swiftly developing reusable components that could be effectively utilised across all three applications by leveraging packages.
- Ensuring the stability of the applications by writing comprehensive tests using Vitest.
- Effectively addressing and resolving any identified bugs or issues.
- Upholding the project's design principles and leveraging the existing UI Framework.
- Actively participating in Agile development practices such as stand-ups, retrospectives, and demos.`,
    skills: [
      'React',
      'TypeScript',
      'HTML',
      'CSS',
      'WebSockets',
      'Vite',
      'Vitest',
      'Recoil',
      'Swagger',
      'GitLab',
    ],
  },
  {
    clientName: 'Government Agency',
    role: 'Quality Assurance',
    startDate: new Date(2023, 0, 26),
    endDate: new Date(2024, 1, 28),
    description: `Upon rejoining the project, Ruairidh resumed his role as a front-end developer, contributing to the continued development of the web application. In addition to his previous responsibilities, he also took on user acceptance testing and bug-finding tasks, which involved:

- Performing user acceptance testing to ensure the application met client requirements and specifications.
- Identifying and reporting bugs using issue-tracking tools such as Jira, and working with the development team to resolve them.`,
    skills: ['Jenkins', 'HTML', 'TypeScript', 'DynamoDB', 'Jest', 'Angular'],
  },
  {
    clientName: 'Bench Project',
    role: 'Software Engineer',
    startDate: new Date(2022, 11, 5),
    endDate: new Date(2023, 0, 25),
    description: `Ruairidh was a key contributor to a small, dedicated team of developers tasked with developing a web-based scorekeeping application. This application, built using React, TypeScript, Azure Functions, and Prisma, serves as a versatile tool for tracking scores in various games, including pool, table tennis, and darts.

Within the team, Ruairidh took on significant responsibilities, including designing and implementing new features, creating new pages, and addressing bugs within the application.

Furthermore, the team aimed to roll out the application company-wide, enabling other offices to use it for score tracking. To achieve this, they ensured the application's security and scalability. Azure Functions were employed to add scalability to the application, ensuring a smooth and responsive user experience as it expanded to serve a broader user base.`,
    skills: [
      'prisma',
      'Azure Functions',
      'NextJS',
      'React',
      'git',
      'Github',
      'Github Actions',
      'GitHub Copilot',
    ],
  },
  {
    clientName: 'Govenment Agency',
    role: 'Software Engineer',
    startDate: new Date(2022, 5, 6),
    endDate: new Date(2022, 10, 30),
    description: `This project involved developing a web application that allowed the client to create and modify various vehicle tests. Due to the need for the application to integrate with pre-existing external systems, it presented added complexity.

Ruairidh, as a front-end developer, contributed to the development of new components. The application was developed using Angular and Typescript with Jest testing framework.

His specific responsibilities included:
- Designing and developing re-usable front-end components to be used throughout the website.
- Creating custom form validation that can be reused across the app
- Writing automated tests using Jest
- Deploying, testing, seeding, and deploying the application using Jenkins
- Adhering to government design principles
- Participating in Agile development practices such as stand-ups, retrospectives, and live demos.`,
    skills: [
      'Angular',
      'NgRx',
      'HTML',
      'CSS',
      'Javascript',
      'TypeScript',
      'AWS',
      'Nexus',
      'git',
      'Github',
    ],
  },
  {
    clientName: 'Education Technology',
    role: 'Software Engineer',
    startDate: new Date(2020, 2, 2),
    endDate: new Date(2022, 4, 27),
    description: `Ruairidh was part of a team of four developers working on various projects, his responsibilities included:
    
- Migrating existing components from KnockoutJS to React
- Designing and implementing dynamic and browser-compatible pages using Elixir Phoenix and the web stack
- Maintaining a legacy application developed using ASP.NET C#
- Managing version control using Git and ensuring accurate documentation of changes made.`,
    skills: [
      'React',
      'KnockoutJS',
      'C#',
      'Elixir',
      'git',
      'Github',
      'HTML',
      'CSS',
      'Javascript',
    ],
  },
];
