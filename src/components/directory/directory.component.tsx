import CategoryItem from '../category-item/category-item.component';
import './directory.styles.scss';

type Category = {
  id: number;
  title: string;
  imageUrl: string;
};

const Directory = ({ categories }: { categories: Category[] }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItem
          key={category.id}
          id={category.id}
          imageUrl={category.imageUrl}
          title={category.title}
        />
      ))}
    </div>
  );
};

export default Directory;
