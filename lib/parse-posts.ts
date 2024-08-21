
import fs from "fs";
import { join } from "path"

const postsDir = join(process.cwd(), "pages/posts"); // 项目启动路径@/pages/posts

// 获取 /posts文件夹下所用markdown文档
export function getPostNames() {
  const postNames: String[] = fs.readdirSync(postsDir); // 读取文件夹下所有文件名，返回String[]

  return postNames.filter((postName) => postName.endsWith(".mdx")) // 过滤出以.mdx结尾的文件
              .map((postName) => postName.replace(/\.mdx$/, "")); // 去掉文件名的.mdx后缀
}