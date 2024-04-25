import { useState } from 'react';
import ButtonNavtab from '../../atoms/ButtonNavtab';
import TrohphyCount from '../../atoms/ThrophyCount';
import { THROPHY } from '../../../constant/const';

const TrackRecord = () => {
  const [isActiveFootball, setIsActiveFootball] = useState(true);

  return (
    <section className="mb-96">
      <h1 className="text-center text-4xl text-indigo-600 font-bold">
        A legendary <br />
        track record
      </h1>
      <div className="my-5 bg-slate-100 w-fit mx-auto rounded-full flex items-center justify-center ">
        <ButtonNavtab
          onClick={() => setIsActiveFootball(!isActiveFootball)}
          isActive={isActiveFootball}
        >
          Football
        </ButtonNavtab>
        <ButtonNavtab
          onClick={() => setIsActiveFootball(!isActiveFootball)}
          isActive={!isActiveFootball}
        >
          Basketball
        </ButtonNavtab>
      </div>
      <div>
        {isActiveFootball ? (
          <div className="flex flex-col gap-3">
            {THROPHY.map((item) => (
              <TrohphyCount
                count={item.count}
                img={item.img}
                name={item.name}
              />
            ))}
          </div>
        ) : (
          <p>Basketball</p>
        )}
      </div>
    </section>
  );
};

export default TrackRecord;
