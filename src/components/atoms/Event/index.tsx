import { GoLocation } from 'react-icons/go';
import { IoCalendarOutline } from 'react-icons/io5';
import { MdOutlineMoreVert } from 'react-icons/md';

interface IEvent {
  logoTeamHome: string;
  logoTeamAway: string;
  nameTeamHome: string;
  nameTeamAway: string;
  competitionType: 'UCL' | 'LaLiga';
  steps: string;
  date: string;
  stadium: string;
}
const Event = ({
  logoTeamHome,
  logoTeamAway,
  nameTeamHome,
  nameTeamAway,
  competitionType,
  steps,
  date,
  stadium,
}: IEvent) => {
  return (
    <div className="w-[312px] ">
      <div className="bg-[#0F2145] rounded-lg p-10 text-white text-center   flex flex-col gap-2 pb-10">
        <div className="grid grid-cols-3 items-center">
          <div>
            <img
              src={logoTeamHome}
              alt={nameTeamHome}
              className="h-14 mx-auto"
            />
          </div>
          <div>
            {competitionType === 'LaLiga' ? (
              <img
                src="https://publish-p47754-e237306.adobeaemcloud.com/content/dam/common/statics/public-content/competition/football/34pl8szyvrbwcmfkuocjm3r6t-logo.app.svg?$Mobile$&wid=144&hei=144"
                alt="laliga"
                className="h-10 mx-auto"
              />
            ) : (
              <img
                src="https://publish-p47754-e237306.adobeaemcloud.com/content/dam/common/statics/public-content/competition/football/4oogyu6o156iphvdvphwpck10-logo.app.svg?$Mobile$&wid=144&hei=144"
                alt="laliga"
                className="h-10 mx-auto"
              />
            )}
          </div>
          <div>
            <img
              src={logoTeamAway}
              alt={nameTeamAway}
              className="h-14 mx-auto"
            />
          </div>
        </div>
        <div className="grid grid-cols-3 items-center">
          <p className="text-sm text-center">{nameTeamHome}</p>
          <p></p>
          <p className="text-sm text-center">{nameTeamAway}</p>
        </div>
      </div>
      <div className="relative -top-5 rounded-xl  w-full  flex flex-col gap-1 p-5 bg-white shadow-lg">
        <p className="text-xs">Football · First Team · Male</p>
        <h1 className="text-xl font-bold">
          {competitionType === 'LaLiga' ? 'La Liga' : 'UCL'}
        </h1>
        <h2 className="text-base font-bold">{steps}</h2>
        <div className="flex flex-col text-slate-600 mt-2">
          <div className="flex items-center gap-2">
            <IoCalendarOutline />
            <p>{date}</p>
          </div>
          <div className="flex items-center gap-2">
            <GoLocation />
            <p>{stadium}</p>
          </div>
        </div>
        <div className="mt-20 flex items-center text-indigo-600">
          <MdOutlineMoreVert size={20} />
          <button className="text-sm font-semibold hover:underline transition-all">
            More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Event;
