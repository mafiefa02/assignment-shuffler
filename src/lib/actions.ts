"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { separator } from "./constants";

export async function addItems(
  currentParams: string,
  currentState: { message: string } | null,
  data: FormData,
) {
  const params = new URLSearchParams(currentParams);
  const itemsData = data.get("item") as string | null;

  if (itemsData?.includes(separator))
    return { message: `don't include the character "${separator}"` };

  if (!itemsData) return { message: "you're not adding anything" };
  if (params.get("item")?.split(separator).includes(itemsData.trim())) {
    return { message: `there's already a duplicate of "${itemsData}"` };
  }

  const prevSearch = params.get("item") ? params.get("item") + separator : "";
  params.set("item", prevSearch + itemsData.trim());
  revalidatePath("/");
  return redirect("/?" + params.toString());
}

export async function addPerson(
  currentParams: string,
  currentState: { message: string } | null,
  data: FormData,
) {
  const params = new URLSearchParams(currentParams);
  const personParams = data.get("person-item") as string | null;

  if (personParams?.includes(separator))
    return { message: `don't include the character "${separator}"` };

  if (!personParams) return { message: "you're not adding anything" };
  if (params.get("person")?.split(separator).includes(personParams.trim())) {
    return { message: `there's already a duplicate of "${personParams}"` };
  }

  const prevSearch = params.get("person")
    ? params.get("person") + separator
    : "";
  params.set("person", prevSearch + personParams.trim());
  revalidatePath("/");
  return redirect("/?" + params.toString());
}

export async function deleteItem(
  paramsName: string,
  currentParams: string,
  data: FormData,
) {
  const params = new URLSearchParams(currentParams);
  const personParams = params.get(paramsName)?.split(separator);

  if (!personParams?.length) return redirect("/?" + params.toString());
  personParams.splice(Number(data.get("itemIndex")), 1);

  if (!personParams.length) {
    params.delete(paramsName);
    return redirect("/?" + params.toString());
  }

  params.set(paramsName, personParams.join(separator));
  revalidatePath("/");
  return redirect("/?" + params.toString());
}
