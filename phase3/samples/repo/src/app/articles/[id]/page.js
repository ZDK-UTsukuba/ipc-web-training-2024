import { ArticleContent } from "@/components/ArticleContent";

const Home = async ({ params }) => {
  // index.json を読み込む
  const BASE_URL =
    "https://raw.githubusercontent.com/ZDK-UTsukuba/ipc-web-training-2024/master/phase3/samples/data";
  const jsonUrl = `${BASE_URL}/index.json`;
  const jsonResponse = await fetch(jsonUrl);
  const json = await jsonResponse.json();
  const item = json.find((item) => item.id === params.id);

  // Markdown を読み込む
  const markdownUrl = `${BASE_URL}/articles/${item.id}.md`;
  const markdownResponse = await fetch(markdownUrl);
  const markdown = await markdownResponse.text();

  return (
    <main>
      <h1>{item.title}</h1>
      <time>{item.date}</time>
      <ArticleContent markdown={markdown} />
    </main>
  );
};

export default Home;
