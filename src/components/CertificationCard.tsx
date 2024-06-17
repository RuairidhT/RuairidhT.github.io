import { Certification } from '../pages/Certifications';

type certificationCardProps = {
  cert: Certification;
};

export const CertificationCard = ({ cert }: certificationCardProps) => {
  return (
    <div className="h-full rounded-lg bg-slate-800 border border-slate-700 p-2 duration-250 hover:bg-slate-700 overflow-hidden">
      <div className="py-2 flex justify-center items-center">
        <img
          className="rounded-lg object-cover object-center w-44 h-44"
          src={cert.badge}
          alt="badge"
        />
      </div>
      <p className="my-4 text-xl font-bold text-slate-200">{cert.name}</p>
      <p className="mb-4 text-sm text-slate-300">
        {cert.startDate.toDateString()}
        {cert.endTime !== undefined ? ` - ${cert.endTime.toDateString()}` : ''}
      </p>
    </div>
  );
};
