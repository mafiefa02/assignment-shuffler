"use client";

import ItemCard from "-/components/ItemCard";
import { separator } from "-/lib/constants";
import { useSearchParams } from "next/navigation";

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
