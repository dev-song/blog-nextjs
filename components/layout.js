import Head from 'next/head';
import Link from 'next/link';

import styles from '../styles/Layout.module.css';
import utilStyles from '../styles/utils.module.css';

const NAME = 'dev-song';
export const pageTitle = 'Blog built with Next.js';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="og:title" content={pageTitle}></meta>
        <meta name="og:description" content="Sample blog post built with Next.js"></meta>
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="/images/cat_512x512.png"
              className={`${styles.headerHomeImage} ${utilStyles.roundBorder}`}
              alt={NAME}
            />
            <h1 className={utilStyles.heading2X1}>{NAME}</h1>
          </>
        ) : (
            <>
              <Link href="/">
                <a>
                  <img
                    src="/images/cat_512x512.png"
                    className={`${styles.headerImage} ${utilStyles.roundBorder}`}
                    alt={NAME}
                  />
                </a>
              </Link>
              <h2 className={utilStyles.headingLarge}>
                <Link href="/">
                  <a className={utilStyles.colorInherit}>{NAME}</a>
                </Link>
              </h2>
            </>
          )
        }
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to Home</a>
          </Link>
        </div>
      )}
    </div>
  );
}