import Head from 'next/head';
import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';

export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData
    }
  }
}

export default function Post({ postData: { title, id, date, contentsInHtml } }) {
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>

      <h1 className={utilStyles.headingX1}>{title}</h1>
      <p>
        <span className={utilStyles.lightText}>
          <Date dateString={date} />
        </span>
        {/* <span>{id}</span> */}
      </p>
      <div
        dangerouslySetInnerHTML={{ __html: contentsInHtml }}
      />
    </Layout>
  )
}