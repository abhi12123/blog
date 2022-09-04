import { generateSlug } from "../utils/generators";
import { allPostsData, fileNames, getMatterResult } from "./common";

export function getAllTopics() {
  let topicsArticles = {};
  fileNames.map((fileName) => {
    getMatterResult(fileName).data.topics?.map((topic) => {
      if (topicsArticles[topic]) {
        topicsArticles[topic] = topicsArticles[topic] + 1;
      } else {
        topicsArticles[topic] = 1;
      }
    });
  });
  return Object.keys(topicsArticles)
    .map((topic) => {
      return {
        name: topic,
        postsCount: topicsArticles[topic],
        slug: generateSlug(topic),
      };
    })
    .sort((a, b) => (a.postsCount > b.postsCount ? -1 : 1));
}

export function getPostsByTopic(slug) {
  return allPostsData
    .filter((postData) =>
      postData.topics.find((topic) => generateSlug(topic) == slug)
    )
    .sort(({ date: a }, { date: b }) => {
      if (a < b) {
        return 1;
      } else if (a > b) {
        return -1;
      } else {
        return 0;
      }
    });
}

export function getTopicDetails(slug) {
  return getAllTopics().find((topic) => topic.slug == slug);
}

export function getAllTopicSlugs() {
  return getAllTopics().map((topic) => {
    return {
      params: topic,
    };
  });
}
