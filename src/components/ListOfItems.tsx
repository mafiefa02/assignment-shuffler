"use client";

import ItemCard from "-/components/ItemCard";
import { separator } from "-/lib/constants";
import { useSearchParams } from "next/navigation";

const ListOfItems = (props: { name: string }) => {
  const params = useSearchParams().get(props.name);
  const data = params?.split(separator);

  if (!data) return "list is empty!";

  return (
    <>
      {data.map((item, i) => (
        <ItemCard
          key={i}
          index={i}
          name={props.name}
          item={item}
        />
      ))}
    </>
  );
};

export default ListOfItems;
