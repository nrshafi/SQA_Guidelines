import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

const chips = [
  'Foundations → Automation',
  'Remote QA Playbook',
  'Six-Month Roadmap',
];

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className={clsx('container', styles.heroInner)}>
        <Heading as="h1" className={styles.heroTitle}>
          {siteConfig.title}
        </Heading>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro/">
            Start Reading
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            to="/docs/career/six-month-roadmap/">
            The Six-Month Roadmap
          </Link>
        </div>
        <div className={styles.chips}>
          {chips.map((label) => (
            <span className={styles.chip} key={label}>
              <span className={styles.chipDot} aria-hidden="true" />
              {label}
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} — Remote QA & Freelancing Handbook`}
      description="Practical software quality assurance guidelines: testing craft, automation, and a complete playbook for remote QA jobs and freelancing.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
