import { useNavigate } from 'react-router-dom';
import { Category } from '../../utils/types/types';
import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from './directory-item.styles';

const DirectoryItem = ({ category }: { category: Category }) => {
  const navigate = useNavigate();

  const handleClick = () => navigate(category.route);

  return (
    <DirectoryItemContainer onClick={handleClick}>
      <BackgroundImage imageurl={category.imageUrl} />
      <Body>
        <h2>{category.title}</h2>
        <p>Show Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
