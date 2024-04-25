interface IThrophyCount {
  name: string;
  count: number;
  img: string;
}

const TrohphyCount = ({ name, count, img }: IThrophyCount) => {
  const counter = (count / 35) * 100 + 12;
  return (
    <div>
      <p className="text-sm text-slate-600">{name}</p>
      <div>
        <div
          style={{ width: `${counter > 100 ? 100 : counter}%` }}
          className="bg-[#DDE5FD] rounded-e-full"
        >
          <div className="bg-gradient-to-r from-[#3E30FA] to-[#855EF5] flex items-center justify-between p-3 rounded-e-full transition-all">
            <img src={img} className="h-8" alt="national-leagues" />
            <p className="text-center text-white text-xl font-bold me-5">
              {count}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrohphyCount;
