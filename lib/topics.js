import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { generateSlug } from "../utils/generators";

const postsDirectory = path.join(process.cwd(), "posts");

export function getAllTopics() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  let topicsArticles = {};
  fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    matterResult.data.topics?.map((topic) => {
      if (topicsArticles[topic]) {
        topicsArticles[topic] = topicsArticles[topic] + 1;
      } else {
        topicsArticles[topic] = 1;
      }
    });
  });
  let allTopics = Object.keys(topicsArticles)
    .map((topic) => {
      return {
        name: topic,
        postsCount: topicsArticles[topic],
        slug: generateSlug(topic),
      };
    })
    .sort((a, b) => (a.postsCount > b.postsCount ? -1 : 1));

  // Sort posts by date
  return allTopics;
}

export function getPostsByTopic(slug) {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  // Sort posts by date
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

export function getAllTopicSlugs() {
  const allTopics = getAllTopics();
  return allTopics.map((topic) => {
    return {
      params: {
        slug: topic.slug,
      },
    };
  });
}
