import { redirect } from "next/navigation";
import ListItem from "./ListItem";

const Form = ({ items, keyword }) => {
  const action = async (formData) => {
    "use server";
    const newKeyword = formData.get("keyword");
    redirect(`/?keyword=${encodeURI(newKeyword)}`);
  };

  const filteredItems =
    keyword.length > 0
      ? items.filter((item) => item.title.includes(keyword))
      : items;

  return (
    <>
      <form action={action}>
        <input type="text" placeholder="キーワードを入力" name="keyword" />
        <input type="submit" value="検索" />
      </form>
      {filteredItems.map((item, index) => (
        <ListItem
          id={item.id}
          title={item.title}
          date={item.date}
          key={index}
        />
      ))}
    </>
  );
};

export default Form;
