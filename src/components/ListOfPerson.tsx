"use client";

import { separator } from "-/lib/constants";
import { useSearchParams } from "next/navigation";

import ItemCard from "./ItemCard";

const ListOfPerson = () => {
  const params = useSearchParams().get("person");
  const people = params?.split(separator);

  if (!people) return "list is empty!";

  return (
    <>
      {people.map((person, i) => (
        <ItemCard
          key={i}
          index={i}
          name="person"
          item={person}
        />
      ))}
    </>
  );
};

export default ListOfPerson;
