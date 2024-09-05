import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/header.css'; 


const getLinkUrl = (link) => {
  return link.cached_url ? `/${link.cached_url}` : '#';
};

export default function Header({ config }) {
  if (!config || !config.content) return null;

  const { logo, links } = config.content;

  return (
    <header className={styles.header}>
      {logo && logo.filename && (
        <Image 
          className={styles.logo}
          src={logo.filename} 
          alt="Logo" 
          width={100} 
          height={50} 
        />
      )}
      <nav>
        <ul>
          {links && links.length > 0 ? (
            links.map((link, index) => {
              const { link: linkData, Label } = link;
              const url = getLinkUrl(linkData);
              const label = Label || 'Untitled';

              return (
                <li key={index}>
                  <Link href={url}>
                    {label}
                  </Link>
                </li>
              );
            })
          ) : (
            <li>No links available</li>
          )}
        </ul>
      </nav>
    </header>
  );
}
