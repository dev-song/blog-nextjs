import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';

const POSTS_DIR = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(POSTS_DIR);
  const allPostsData = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '');

    const fullFilePath = path.join(POSTS_DIR, fileName);
    const fileContents = fs.readFileSync(fullFilePath, 'utf8');

    const parseResult = matter(fileContents);

    return {
      id,
      ...parseResult.data
    };
  })

  return allPostsData.sort((a, b) => {
    if (a.data < b.data) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(POSTS_DIR);

  return fileNames.map(fileName => ({
    params: {
      id: fileName.replace(/\.md$/, ''),
    }
  }));
}

export async function getPostData(id) {
  const fullFilePath = path.join(POSTS_DIR, `${id}.md`);
  const fileContents = fs.readFileSync(fullFilePath, 'utf8');

  // use gray-matter to parse posts' metadata
  const parsedContents = matter(fileContents);

  // use remark to convert .md into HTML
  const convertedContents = await remark()
    .use(html)
    .process(parsedContents.content)
  const contentsInHtml = convertedContents.toString();

  return {
    id,
    contentsInHtml,
    ...parsedContents.data
  };
}