import { Experience } from '../pages/Experience';

type Props = {
  experience: Experience;
};

export const ExperienceCard = ({ experience }: Props) => {
  return (
    <div className="p-5 bg-slate-700 flex items-center mx-auto mb-10 rounded-lg flex-col w-[70%]">
      <div className="flex text-gray-800 pb-2 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full text-slate-300">
          <div>
            <h2 className="font-semibold">Client Name</h2>
            <p className="text-slate-200">{experience.clientName}</p>
          </div>
          <div>
            <h2 className="font-semibold">Role</h2>
            <p className="text-slate-200">{experience.role}</p>
          </div>
          <div>
            <h2 className="font-semibold">Start Date</h2>
            <p className="text-slate-200">
              {experience.startDate.toLocaleDateString()}
            </p>
          </div>
          <div>
            <h2 className="font-semibold">End Date</h2>
            <p className="text-slate-200">
              {experience.endDate.toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
      <p className="leading-relaxed text-base text-slate-200 ">
        {experience.description}
      </p>
      <div className="py-4">
        {experience.skills.map((skill) => {
          return (
            <span className="text-xs font-medium me-2 px-2.5 py-0.5 rounded bg-green-900 text-green-300">
              {skill}
            </span>
          );
        })}
      </div>
    </div>
  );
};
