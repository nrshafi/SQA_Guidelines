import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Master the Craft',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Test design techniques, bug reports developers respect, exploratory
        testing, API testing, and automation with Playwright and CI — the
        skills that separate professionals from button-clickers.{' '}
        <Link to="/docs/category/foundations/">Start with Foundations →</Link>
      </>
    ),
  },
  {
    title: 'Win Remote Work',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        An honest map of the remote QA market: platforms compared, real rate
        data, portfolio projects that substitute for experience, proposals
        that win, and scam protection.{' '}
        <Link to="/docs/category/freelancing-playbook/">
          Open the Freelancing Playbook →
        </Link>
      </>
    ),
  },
  {
    title: 'Grow Your Career',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        A six-month roadmap from zero to first paid client, certifications
        worth paying for, scaling to retainers and specialization — plus a
        dedicated Bangladesh freelancer&apos;s guide.{' '}
        <Link to="/docs/career/six-month-roadmap/">Follow the Roadmap →</Link>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
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

export default function HomepageFeatures() {
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
