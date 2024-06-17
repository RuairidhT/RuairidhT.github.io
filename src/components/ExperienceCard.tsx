import { Fragment } from 'react/jsx-runtime';
import { Experience } from '../pages/Experience';

type Props = {
  experience: Experience;
};

export const ExperienceCard = ({ experience }: Props) => {
  const formattedDescription = experience.description
    .split('\n')
    .map((line, index) => (
      <Fragment key={index}>
        {line.replace(/\t/g, '\u00A0\u00A0\u00A0\u00A0')}
        <br />
      </Fragment>
    ));

  return (
    <div className="p-5 rounded-lg bg-slate-800 border border-slate-700 flex items-center mx-auto mb-10 flex-col w-[70%]">
      <div className="flex pb-2 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full text-slate-200">
          <div>
            <h2 className="font-semibold">Client Name</h2>
            <p className="text-slate-300">{experience.clientName}</p>
          </div>
          <div>
            <h2 className="font-semibold">Role</h2>
            <p className="text-slate-300">{experience.role}</p>
          </div>
          <div>
            <h2 className="font-semibold">Start Date</h2>
            <p className="text-slate-300">
              {experience.startDate.toLocaleDateString()}
            </p>
          </div>
          <div>
            <h2 className="font-semibold">End Date</h2>
            <p className="text-slate-300">
              {experience.endDate.toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
      <p className="leading-relaxed text-base text-slate-300 w-full">
        {formattedDescription}
      </p>
      <div className="flex flex-wrap mt-4">
        {experience.skills.map((skill) => {
          return (
            <span className="text-xs font-medium me-2 px-2.5 py-0.5 my-0.5 rounded bg-slate-700 text-slate-400 border border-slate-500 ">
              {skill}
            </span>
          );
        })}
      </div>
    </div>
  );
};
