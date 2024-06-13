import { CertificationCard } from '../components/CertificationCard';

export type Certification = {
  name: string;
  startDate: Date;
  endTime?: Date;
  badge: string;
  url?: string;
};

export const Certifications = () => {
  const certs: Certification[] = [
    {
      name: 'GitHub Actions',
      startDate: new Date(2024, 6, 9),
      endTime: new Date(2027, 6, 9),
      badge: '/github-actions.png',
    },
    {
      name: 'GitHub Foundations',
      startDate: new Date(2024, 5, 30),
      endTime: new Date(2027, 5, 30),
      badge: '/github-foundations.png',
    },
    {
      name: 'AWS Cloud Practitioner',
      startDate: new Date(2024, 5, 13),
      endTime: new Date(2027, 5, 13),
      badge: '/aws-certified-cloud-practitioner.png',
    },
    {
      name: 'Cloud Digital Leader',
      startDate: new Date(2024, 5, 5),
      endTime: new Date(2027, 5, 5),
      badge: '/cloud-digital-leader-certification.png',
    },
    {
      name: 'Green Software for Practitioners',
      startDate: new Date(2023, 10, 9),
      badge: '/lfc131-green-software-for-practitioners.png',
    },
    {
      name: 'Microsoft Azure Fundamentals',
      startDate: new Date(2023, 8, 7),
      badge: '/microsoft-certified-fundamentals-badge.svg',
    },
  ];

  certs.sort((a, b) => b.startDate.getTime() - a.startDate.getTime());

  return (
    <div className="flex flex-wrap -m-4 mx-64">
      {certs.map((cert) => {
        return <CertificationCard cert={cert} />;
      })}
    </div>
  );
};
