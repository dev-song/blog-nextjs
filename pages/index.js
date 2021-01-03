import Head from 'next/head'
import Link from 'next/link'
import Layout, { pageTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <section className={utilStyles.headingMedium}>
        <p>Hi, I'm dev-song</p>
        <p>This is a sample blog built with Next.js</p>
      </section>
    </Layout>
  )
}
