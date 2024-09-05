import Image from 'next/image';
import '../styles/footer.css';

export default function Footer({ blok }) {
    console.log("footer blok:", blok);

    // Extract rich text content
    const extractText = (richText) => {
        if (!richText || !richText.content) return '';

        return richText.content
          .flatMap(paragraph => {
            if (paragraph.content && Array.isArray(paragraph.content)) {
              return paragraph.content.map(text => text.text);
            }
            return '';
          })
          .join(' ');
    };

    const linkData = blok.link && blok.link.length > 0 ? blok.link[0] : null;
    const linkUrl = linkData?.link?.cached_url || '#';

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-text">
                    <h2>{blok.title}</h2>
                    <p>{extractText(blok.text)}</p>
                    {linkData && linkData.label && (
                        <a href={linkUrl} className="footer-link">
                            {linkData.label}
                        </a>
                    )}
                </div>
                {blok.image && (
                    <div className="footer-image">
                        <Image 
                          src={blok.image.filename} 
                          alt={blok.image.alt || 'Footer Image'} 
                          width={400} 
                          height={100} 
                        />
                    </div>
                )}
            </div>
            <div className="footer-line"></div>
        </footer>
    );
}
