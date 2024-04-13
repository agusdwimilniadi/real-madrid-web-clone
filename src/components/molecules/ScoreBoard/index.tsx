const Team = ({ img, name }: { img: string; name: string }) => {
  return (
    <div className="flex flex-col items-center gap-2 ">
      <img src={img} alt="logo-team" className="h-[55px] block" />
      <p>{name}</p>
    </div>
  );
};
const ScoreBoard = () => {
  return (
    <div className="bg-[#0F2145] text-white pt-8 pb-5 px-14">
      <div className="text-center  text-sm">
        <p className="font-bold text-base mb-1">Friendly Match</p>
        <p>Gelora Bung Karno Stadium</p>
        <p>Football · First Team · Male</p>
      </div>
      <div className="flex justify-evenly items-start mt-5 gap-10">
        <div>
          <Team img="/assets/images/logo-real.webp" name="Real Madrid" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex text-5xl items-center gap-8">
            <p>4</p>
            <p className="text-3xl text-gray-500">-</p>
            <p>1</p>
          </div>
          <div className="text-xs font-semibold text-center bg-blue-50 w-fit text-blue-900 p-1 mx-auto rounded">
            17:00
          </div>
        </div>
        <div>
          <Team img="/assets/images/fc-barca.png" name="FC Barcelona" />
        </div>
      </div>
      <button className="border-2 border-blue-50/20 w-full mt-5 py-2 rounded-lg hover:bg-white hover:text-indigo-600 transition-all ease-in-out duration-700 font-semibold text-sm hover:border-indigo-600">
        Follow the match
      </button>
    </div>
  );
};

export default ScoreBoard;
