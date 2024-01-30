import Form from "@/components/Form";

const Page = async () => {
  const BASE_URL =
    "https://raw.githubusercontent.com/ZDK-UTsukuba/ipc-web-training-2024/master/phase3/samples/data";
  const url = `${BASE_URL}/index.json`;
  const response = await fetch(url);
  const json = await response.json();

  return (
    <main>
      <h1>記事一覧</h1>
      <ul>
        <Form items={json} />
      </ul>
    </main>
  );
};

export default Page;
