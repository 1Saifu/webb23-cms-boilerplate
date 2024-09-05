import Image from 'next/image';
import '../styles/about.css';

export default function About({ blok }) {
  console.log('About blok:', blok);

  const extractText = (richText) => {
    if (!richText || !richText.content) return '';

    return richText.content
      .flatMap(paragraph => paragraph.content.map(text => text.text))
      .join(' ');
  };

  return (
    <section className="about">
      <div className="about-title-background">
        <h1 className="about-title">{blok.title}</h1>
      </div>

      <div className="about-content">
        {blok.image && (
          <div className="about-image">
            <Image 
              src={blok.image.filename} 
              alt={blok.image.alt || 'About Image'} 
              width={300} 
              height={200} 
            />
          </div>
        )}
        <div className="about-text">
          <p>{extractText(blok.text)}</p>
        </div>
      </div>
    </section>
  );
}
