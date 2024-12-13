import { Category } from '../../utils/types/types';
import DirectoryItem from '../directory-item/directory-item.component';
import './directory.styles.scss';

const Directory = ({ categories }: { categories: Category[] }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <DirectoryItem
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
