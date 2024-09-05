import ImageWithText from '../imagewithtext/ImageWithText';
import '../styles/grid.css';

export default function Grid({ blok }) {
  console.log('Grid blok:', blok);

  if (!blok || !blok.columns || blok.columns.length === 0) {
    return <p>No items available</p>;
  }

  return (
    <div className="grid-container">
      <div className="grid">
        {blok.columns.map((item) => (
          <ImageWithText blok={item} key={item._uid} />
        ))}
      </div>
      <div className="line-container">
        <hr className="line" />
      </div>
    </div>
  );
}
