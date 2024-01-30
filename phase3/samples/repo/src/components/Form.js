"use client";

import { useState } from "react";
import ListItem from "./ListItem";

const Form = ({ items }) => {
  const [keyword, setKeyword] = useState("");
  const [filteredItems, setFilteredItems] = useState(items);

  const search = (e) => {
    e.preventDefault();
    setFilteredItems(
      keyword.length > 0
        ? items.filter((item) => item.title.includes(keyword))
        : items
    );
  };

  return (
    <>
      <form onSubmit={search}>
        <input
          type="text"
          placeholder="キーワードを入力"
          value={keyword}
          onChange={(e) => setKeyword(e.currentTarget.value)}
        />
        <input type="submit" value="検索" />
      </form>
      {filteredItems.map((item) => (
        <ListItem
          id={item.id}
          title={item.title}
          date={item.date}
          key={item.id}
        />
      ))}
    </>
  );
};

export default Form;
