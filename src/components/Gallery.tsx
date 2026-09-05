import CtaBar from '@/components/CtaBar';

type Section = {
  id: string;
  title: string;
  description: string;
  photos: { src: string; alt: string }[];
};

const sections: Section[] = [
  {
    id: 'earrings',
    title: 'Earrings',
    description: 'Statement pieces and everyday studs, printed in fine detail.',
    photos: [
      { src: 'https://scontent.fyka2-1.fna.fbcdn.net/v/t45.5328-4/741523519_4311262639204092_5524129084607324353_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=109&ccb=1-7&_nc_sid=247b10&_nc_ohc=-ghETsSrZPEQ7kNvwHrwe2V&_nc_oc=AdqHSOMW2uwEF_YZ0jEUHa5I4aSaPM6cuiIlYU-TAkQN2tadRHYGGNNTsjblm74XbQpehdrYkWUr94XujwWUbIaU&_nc_zt=23&_nc_ht=scontent.fyka2-1.fna&_nc_gid=cf4LjXjuT3aS3o6_WRiFWw&_nc_ss=7b2a8&oh=00_AQJfdNZHfJV9oLCuXbcRhgLLcyOAoQi5UuQhH2PGWs_TqA&oe=6A9E977F', alt: 'Gold jewelry arrangement' },
      { src: 'https://images.pexels.com/photos/3214241/pexels-photo-3214241.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Minimalist silver earring' },
      { src: 'https://images.pexels.com/photos/3881077/pexels-photo-3881077.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Gold earrings with gemstone' },
    ],
  },
  {
    id: 'necklaces',
    title: 'Necklaces',
    description: 'Pendants and chains with geometric, organic forms.',
    photos: [
      { src: 'https://images.pexels.com/photos/21235148/pexels-photo-21235148.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Emerald pendant necklace' },
      { src: 'https://images.pexels.com/photos/27454881/pexels-photo-27454881.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Pearl necklace' },
      { src: 'https://images.pexels.com/photos/29349286/pexels-photo-29349286.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Triangle pendant necklace' },
    ],
  },
  {
    id: 'hair-pins',
    title: 'Hair Pins',
    description: 'Decorative pins and clips for everyday wear and special occasions.',
    photos: [
      { src: 'https://images.pexels.com/photos/33343186/pexels-photo-33343186.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Minimalist hair clips' },
      { src: 'https://images.pexels.com/photos/17049710/pexels-photo-17049710.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Bride with hair accessories' },
      { src: 'https://images.pexels.com/photos/17671766/pexels-photo-17671766.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Woman with flower in hair' },
    ],
  },
  {
    id: 'structures',
    title: 'Structures',
    description: 'Sculptural objects and small-scale architectural models.',
    photos: [
      { src: 'https://images.pexels.com/photos/39199679/pexels-photo-39199679.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Metallic geometric sculpture' },
      { src: 'https://images.pexels.com/photos/37927675/pexels-photo-37927675.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Contemporary sculpture' },
      { src: 'https://images.pexels.com/photos/5374862/pexels-photo-5374862.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Metal roof structure' },
    ],
  },
  {
    id: 'rings',
    title: 'Rings',
    description: 'Bold forms and delicate bands for every hand.',
    photos: [
      { src: 'https://images.pexels.com/photos/11256750/pexels-photo-11256750.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Rings on waist' },
      { src: 'https://images.pexels.com/photos/30720998/pexels-photo-30720998.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Minimalist jewelry on hand' },
      { src: 'https://images.pexels.com/photos/30720973/pexels-photo-30720973.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Gold rings on hand' },
    ],
  },
];

export default function Gallery({ onBack }: { onBack: () => void }) {
  return (
    <>
    <CtaBar />
    <main className="site-shell">
      <nav className="topbar" aria-label="Main navigation">
        <button className="wordmark wordmark-button" onClick={onBack}>Tresdé</button>
        <div className="nav-links">
          <button className="nav-button" onClick={onBack}>Home</button>
        </div>
      </nav>

      <section className="gallery-header">
        <div className="eyebrow"><span>✣</span> Services</div>
        <h1 className="gallery-heading">Our work, <br />piece by piece.</h1>
        <p className="intro">A look at what we make — from jewelry to sculptural objects.</p>
      </section>

      <div className="gallery-sections">
        {sections.map((section) => (
          <section className="gallery-section" key={section.id} id={section.id}>
            <div className="gallery-section-header">
              <h2>{section.title}</h2>
              <p>{section.description}</p>
            </div>
            <div className="gallery-grid">
              {section.photos.map((photo, i) => (
                <figure className="gallery-item" key={i}>
                  <img src={photo.src} alt={photo.alt} loading="lazy" />
                </figure>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
    </>
  );
}
