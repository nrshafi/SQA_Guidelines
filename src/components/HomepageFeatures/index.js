import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import {Target, Globe, TrendingUp} from 'lucide-react';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Master the Craft',
    Icon: Target,
    description: (
      <>
        Test design techniques, bug reports developers respect, exploratory
        testing, API testing, and automation with Playwright and CI — the
        skills that separate professionals from button-clickers.
      </>
    ),
    link: {to: '/docs/category/foundations/', label: 'Start with Foundations'},
  },
  {
    title: 'Win Remote Work',
    Icon: Globe,
    description: (
      <>
        An honest map of the remote QA market: platforms compared, real rate
        data, portfolio projects that substitute for experience, proposals
        that win, and scam protection.
      </>
    ),
    link: {
      to: '/docs/category/freelancing-playbook/',
      label: 'Open the Freelancing Playbook',
    },
  },
  {
    title: 'Grow Your Career',
    Icon: TrendingUp,
    description: (
      <>
        A six-month roadmap from zero to first paid client, certifications
        worth paying for, scaling to retainers and specialization — plus a
        dedicated Bangladesh freelancer&apos;s guide.
      </>
    ),
    link: {to: '/docs/career/six-month-roadmap/', label: 'Follow the Roadmap'},
  },
];

function Feature({Icon, title, description, link}) {
  return (
    <div className="col col--4">
      <div className={styles.card}>
        <span className={styles.iconChip} aria-hidden="true">
          <Icon size={24} strokeWidth={2} />
        </span>
        <Heading as="h3" className={styles.cardTitle}>
          {title}
        </Heading>
        <p className={styles.cardText}>{description}</p>
        <Link className={styles.cardLink} to={link.to}>
          {link.label} <span aria-hidden="true">→</span>
        </Link>
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
