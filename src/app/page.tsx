import Image from "next/image";
import Link from 'next/link';


  
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
            <img src={artwork.imageUrl} alt={artwork.title} style={{ width: '200px', height: '200px' }} />
            <h2>{artwork.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Home;