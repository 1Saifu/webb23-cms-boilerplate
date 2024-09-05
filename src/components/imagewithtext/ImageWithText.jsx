import Image from 'next/image';
import '../styles/imagewithtext.css';

export default function ImageWithText({ blok }) {
  // Function to extract text from the nested structure
  const extractText = (richText) => {
    if (!richText || !richText.content) return '';

    // Ensure that content is an array before attempting to map
    return richText.content
      .flatMap(paragraph => 
        Array.isArray(paragraph.content) 
          ? paragraph.content.map(text => text.text || '') 
          : []
      )
      .join(' ');
  };

  return (
    <section className="image-with-text">
      {blok.image && blok.image.filename && (
        <Image 
          src={blok.image.filename} 
          alt={blok.image.alt || 'Image'} 
          width={200} 
          height={150} 
          style={{ objectFit: 'cover' }}
        />
      )}
      <div className="content">
        <h2>{blok.title}</h2>
        <p>{extractText(blok.text)}</p>
      </div>
    </section>
  );
}
