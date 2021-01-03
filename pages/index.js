import Head from 'next/head'
import Link from 'next/link'
import Layout, { pageTitle } from '../components/layout'

import utilStyles from '../styles/utils.module.css'

import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()

  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <section className={utilStyles.headingMedium}>
        <p>Hi, I'm dev-song</p>
        <p>This is a sample blog built with Next.js</p>
      </section>
      <section className={`${utilStyles.headingMedium} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLarge}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <p className={utilStyles.listItemLine}>{title}</p>
              <div>
                <span className={utilStyles.listItemText}>{id}</span>
                <span className={utilStyles.listItemText}>{date}</span>
              </div>
            </li>
          ))

          }
        </ul>
      </section>
    </Layout>
  )
}
