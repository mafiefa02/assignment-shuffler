"use server";

import { separator } from "-/lib/constants";
import { assignNumbers } from "-/lib/utils";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function addItems(
  fieldName: string,
  currentParams: string,
  currentState: { message: string } | null,
  data: FormData,
) {
  const params = new URLSearchParams(currentParams);
  const itemsData = data.get(fieldName) as string | null;

  if (itemsData?.includes(separator))
    return { message: `don't include the character "${separator}"` };

  if (!itemsData) return { message: "you're not adding anything" };
  if (params.get(fieldName)?.split(separator).includes(itemsData.trim())) {
    return { message: `there's already a duplicate of "${itemsData}"` };
  }

  const prevSearch = params.get(fieldName)
    ? params.get(fieldName) + separator
    : "";
  params.set(fieldName, prevSearch + itemsData.trim());
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
  return redirect("/?" + params.toString());
}

export async function shuffleItems(
  currentParams: string,
  currentState: { message: string } | null,
  data: FormData,
) {
  const params = new URLSearchParams(currentParams);
  const items = params.get("item")?.split(separator);
  const people = params.get("person")?.split(separator);

  if (!items?.length && !people?.length)
    return { message: "please add at least one item and one person!" };

  if (!items?.length) return { message: "please add at least one item!" };
  if (!people?.length) return { message: "please add at least one person!" };

  const assignmentMapping = assignNumbers(people, items);

  const sortedAssignmentMapping = Object.fromEntries(
    Object.entries(assignmentMapping).sort(([personA], [personB]) =>
      personA.localeCompare(personB),
    ),
  );

  let returnVal = [];
  for (const [person, assignment] of Object.entries(sortedAssignmentMapping)) {
    returnVal.push(`${person}: ${assignment.join(", ")}`);
  }

  returnVal.sort();

  params.set("result", returnVal.join("\n"));
  return redirect("/?" + params.toString());
}
