"use client";

import { separator } from "-/lib/constants";
import { useSearchParams } from "next/navigation";

import ItemCard from "./ItemCard";

const ListOfItems = () => {
  const params = useSearchParams().get("item");
  const items = params?.split(separator);

  if (!items) return "list is empty!";

  return (
    <>
      {items.map((item, i) => (
        <ItemCard
          key={i}
          index={i}
          name="item"
          item={item}
        />
      ))}
    </>
  );
};

export default ListOfItems;
