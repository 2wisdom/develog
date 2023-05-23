import fs from "fs";
import path from "path";

// POSTS_PATH is useful when you want to get the path to a specific file
export const POSTS_PATH_DEVELOP = path.join(
  process.cwd(),
  "src",
  "posts",
  "develop"
);
export const POSTS_PATH_DAILY = path.join(
  process.cwd(),
  "src",
  "posts",
  "daily"
);

// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
export const postFilePathsDevelop = fs
  .readdirSync(POSTS_PATH_DEVELOP)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path));

export const postFilePathsDaily = fs
  .readdirSync(POSTS_PATH_DAILY)
  .filter((path) => /\.mdx?$/.test(path));
