import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';

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
      <h1>{title}</h1>
      <p>
        <span>{date}</span>
        <span>{id}</span>
      </p>
      <div
        dangerouslySetInnerHTML={{ __html: contentsInHtml }}
      />
    </Layout>
  )
}