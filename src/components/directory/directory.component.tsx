import { Category } from '../../utils/types/types';
import CategoryItem from '../category-item/category-item.component';
import './directory.styles.scss';

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
