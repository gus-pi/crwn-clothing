import './directory-item.styles.scss';

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
    <div key={id} className="directory-item-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="body">
        <h2>{title}</h2>
        <p>Show Now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
