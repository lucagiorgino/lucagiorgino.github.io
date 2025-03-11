import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Blog',
    Svg: require('@site/static/img/blog.svg').default,
    description: (
      <>
        Trying to share what I learn and what I face during my adventure in the engineering world
      </>
    ),
  },
  {
    title: 'About me',
    Svg: require('@site/static/img/explore.svg').default,
    description: (
      <>
        Currently working as a Software Engineer at <a href="https://www.aruba.it">Aruba</a>
      </>
    ),
  },
  {
    title: 'Hobbies and Interests',
    Svg: require('@site/static/img/playing.svg').default,
    description: (
      <>
        🏎️ Formula 1, 🎮 Videogames, 📚 Comics and books
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
