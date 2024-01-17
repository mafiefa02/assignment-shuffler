"use client";

import { deleteItem } from "-/lib/actions";
import { useSearchParams } from "next/navigation";

const DeleteItemForm = (props: { children: React.ReactNode; name: string }) => {
  const params = useSearchParams();
  const deleteItemWithIndex = deleteItem.bind(
    null,
    props.name,
    params.toString(),
  );

  return <form action={deleteItemWithIndex}>{props.children}</form>;
};

export default DeleteItemForm;
