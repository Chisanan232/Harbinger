import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    image: require('@site/static/img/harbinger_would_positively_checking.png').default,
    description: (
      <>
        UV-Template is very easy to use. Just import and everything is ready to go.
      </>
    ),
  },
  {
    title: 'Base on Python',
    image: require('@site/static/img/harbinger_would_positively_fixing_and_opening_pr.png').default,
    description: (
      <>
        Built with Python for excellent readability and maintainability.
        Leverage Python's extensive ecosystem and simplicity for your project automation needs.
      </>
    ),
  },
  {
    title: 'Base on Python',
    image: require('@site/static/img/harbinger_base_on_python.png').default,
    description: (
      <>
        Built with Python for excellent readability and maintainability.
        Leverage Python's extensive ecosystem and simplicity for your project automation needs.
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <img className={styles.featureSvg} src={image} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
