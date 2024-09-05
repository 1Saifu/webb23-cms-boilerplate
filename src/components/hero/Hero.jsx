import Image from 'next/image';
import '../styles/hero.css'

export default function Hero({ blok }) {
  console.log('Hero blok:', blok); 

  const extractText = (richText) => {
    if (!richText || !richText.content) return '';

    return richText.content
      .flatMap(paragraph => paragraph.content.map(text => text.text))
      .join(' ');
  };

  return (
    <section className="hero">
      <div className="hero-text">
        <h1>{blok.title}</h1>
        <p>{extractText(blok.text)}</p>
        {blok.button && blok.button.length > 0 ? (
          blok.button.map((btn, index) => (
            <a
              key={index}
              href={btn?.link?.story?.url || "#"}
              className="hero-button"
            >
              {btn.Label || "Default Label"}
            </a>
          ))
        ) : (
          <p>No buttons available</p>
        )}
      </div>
      {blok.image && (
        <div className="hero-image">
          <Image 
            src={blok.image.filename} 
            alt={blok.image.alt || 'Hero Image'} 
            width={800} 
            height={400} 
          />
        </div>
      )}
    </section>
  );
}
