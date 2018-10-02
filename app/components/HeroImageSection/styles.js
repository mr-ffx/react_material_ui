import heroImg from '../../images/hero_image.jpg';

const styles = {
  hero: {
    width: '56.125em',
    height: '23.5em',
    backgroundImage: `url(${heroImg})`,
    backgroundPosition: '50% 50%',
    backgroundSize: 'cover',
  },
  headline: {
    width: '33.75em',
    height: '14.5em',
    padding: '24px 32px',
    backgroundColor: 'transparent',
  },
  headlineDesc: {
    display: 'flex',
    flexDirection: 'column',
    width: '21.875em',
    height: '14.5em',
    padding: '24px 32px 34px',
    backgroundColor: 'transparent',
  },
};

export default styles;
