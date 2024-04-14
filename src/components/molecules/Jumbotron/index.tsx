import { ITEM_NEWS } from '../../../constant/const';
import CardNews from '../../atoms/CardNews';

const Jumbotron = () => {
  return (
    <div className="m-5 lg:mx-20">
      {ITEM_NEWS.slice(0, 1).map((item) => (
        <CardNews isHeader imageUrl={item.img} title={item.title} />
      ))}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {ITEM_NEWS.slice(1).map((item) => (
          <CardNews imageUrl={item.img} title={item.title} />
        ))}
      </div>
    </div>
  );
};

export default Jumbotron;
