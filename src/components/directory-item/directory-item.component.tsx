import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from './directory-item.styles';

const DirectoryItem = ({
  id,
  title,
  imageUrl,
}: {
  imageUrl: string;
  id: number;
  title: string;
}) => {
  return (
    <DirectoryItemContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Show Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
