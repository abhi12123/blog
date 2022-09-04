import { remark } from "remark";
import html from "remark-html";
import { allPostsData, fileNames, getMatterResult } from "./common";
import { generateId } from "../utils/generators";

export function getSortedPostsData() {
  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}

export function getAllPostIds() {
  return fileNames.map((fileName) => {
    return {
      params: {
        id: generateId(fileName),
      },
    };
  });
}

export async function getPostData(id) {
  const matterResult = getMatterResult(`${id}.md`);
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();
  const wpm = 255;
  const words = contentHtml.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);
  const sortedPostData = getSortedPostsData();
  const postIndex = sortedPostData.findIndex((el) => el.id == id);
  return {
    id,
    contentHtml,
    ...matterResult.data,
    time,
    prevPost: sortedPostData[postIndex + 1] || null,
    nextPost: sortedPostData[postIndex - 1] || null,
  };
}
