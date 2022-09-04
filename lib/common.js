import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { generateId } from "../utils/generators";

export const postsDirectory = path.join(process.cwd(), "posts");

export const fileNames = fs.readdirSync(postsDirectory);

export const getMatterResult = (fileName) => {
  const fullPath = path.join(postsDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  return matter(fileContents);
};

export const allPostsData = fileNames.map((fileName) => {
  const id = generateId(fileName);
  const matterResult = getMatterResult(fileName);
  return {
    id,
    ...matterResult.data,
  };
});
