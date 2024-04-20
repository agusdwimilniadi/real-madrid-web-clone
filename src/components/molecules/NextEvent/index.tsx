import { useState } from 'react';
import { GoArrowRight } from 'react-icons/go';
import Checkbox from '../../atoms/Checkbox';
import { motion } from 'framer-motion';
import { IoMdOptions } from 'react-icons/io';
import Event from '../../atoms/Event';
import { NEXT_EVENTS } from '../../../constant/const';

const NextEvent = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <section className="mb-40 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Next Events</h1>
        <GoArrowRight size={25} className="text-gray-400" />
      </div>
      <div>
        <button
          className="text-indigo-600 flex items-center gap-2 text-lg font-semibold "
          onClick={() => setOpenModal(!openModal)}
        >
          <IoMdOptions />
          Filter Teams (48)
        </button>
      </div>
      <div>
        {NEXT_EVENTS.map((item) => (
          <Event
            competitionType={item.competitionType}
            key={item.nameTeamAway}
            date={item.date}
            logoTeamAway={item.logoTeamAway}
            logoTeamHome={item.logoTeamHome}
            nameTeamAway={item.nameTeamAway}
            nameTeamHome={item.nameTeamHome}
            stadium={item.stadium}
            steps={item.steps}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={
          openModal
            ? { visibility: 'visible', opacity: 1 }
            : { opacity: 0, visibility: 'hidden' }
        }
        transition={{ duration: 0.3 }}
        exit={{ opacity: 0 }}
        className="fixed top-0 bottom-0 left-0 right-0 h-screen w-screen backdrop-blur-2xl"
      >
        <div className="w-full h-full relative">
          <div className="bg-white w-full absolute bottom-0 p-5 rounded-t-3xl px-5 lg:px-20 flex flex-col gap-8">
            <div className=" flex justify-between">
              <button className="text-indigo-600 text-sm font-semibold">
                Reset Filters
              </button>
              <button onClick={() => setOpenModal(!openModal)}>X</button>
            </div>
            <p className="text-2xl font-bold">Filter teams</p>
            <div className="grid grid-cols-2 gap-5">
              <div>
                <p className="text-lg font-bold">Football</p>
                <div className="flex flex-col gap-3">
                  <Checkbox />
                  <Checkbox />
                  <Checkbox />
                </div>
              </div>
              <div>
                <p className="text-lg font-bold">Basketball</p>
                <div className="flex flex-col gap-3">
                  <Checkbox />
                  <Checkbox />
                  <Checkbox />
                </div>
              </div>
            </div>
            <button className="w-full text-white py-3 rounded-lg bg-gradient-to-r from-[#3E31FB] to-[#825DF6] font-bold">
              Show events
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default NextEvent;
