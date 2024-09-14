import Image from "next/image"; // 重新导入Image组件

const artworks = [
  { title: 'Artwork 1', imageUrl: '/images/artwork1.jpg' },
  { title: 'Artwork 2', imageUrl: '/images/artwork2.jpg' },
  // 添加更多画作
];

const Home: React.FC = () => {
  return (
    <div>
      <h1>My Art Gallery</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {artworks.map((artwork, index) => (
          <div key={index} style={{ margin: '10px' }}>
            {/* 使用Image组件替换img标签 */}
            <Image src={artwork.imageUrl} alt={artwork.title} width={200} height={200} />
            <h2>{artwork.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;