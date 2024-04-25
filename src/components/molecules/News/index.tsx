import { ITEM_NEWS } from '../../../constant/const';
import CardNews from '../../atoms/CardNews';

const News = () => {
  return (
    <section>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {ITEM_NEWS.slice(0, 4).map((item) => (
          <CardNews imageUrl={item.img} title={item.title} />
        ))}
      </div>
    </section>
  );
};

export default News;
