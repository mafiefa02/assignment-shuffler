import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function shuffle<T>(array: T[]): T[] {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

export function assignNumbers(
  people: string[],
  assignments: string[],
): { [person: string]: string[] } {
  const shuffledAssignments = shuffle(assignments);
  const shuffledPeople = shuffle(people);

  const mappedAssignments: { [person: string]: string[] } = {};
  const totalAssignments = shuffledAssignments.length;
  const totalPeople = shuffledPeople.length;

  for (let i = 0; i < totalAssignments; i++) {
    const person = shuffledPeople[i % totalPeople];
    const assignment = shuffledAssignments[i];

    if (mappedAssignments[person]) {
      // Append to the existing assignments array for the person
      mappedAssignments[person].push(assignment);
    } else {
      // Create a new assignments array for the person
      mappedAssignments[person] = [assignment];
    }
  }

  if (totalPeople > totalAssignments) {
    for (let i = totalAssignments; i < totalPeople; i++) {
      const person = shuffledPeople[i % totalPeople];
      mappedAssignments[person] = ["-"];
    }
  }

  return mappedAssignments;
}

// TODO: implement options to choose whether the shuffle should have a duplicate value or no.
export function withDuplicateShuffle(assignments: string[], persons: string[]) {
  const shuffledAssignments = [...assignments].sort(() => Math.random() - 0.5);
  const assignmentsMap: { [person: string]: string } = {};

  persons.forEach((person) => {
    if (shuffledAssignments.length === 0) {
      // If all unique assignments are assigned, reset and shuffle again
      shuffledAssignments.push(...assignments);
      shuffledAssignments.sort(() => Math.random() - 0.5);
    }

    // Remove duplicates from the shuffled list before assigning
    const uniqueAssignments = shuffledAssignments.filter(
      (a) => !Object.values(assignmentsMap).includes(a),
    );

    const assignment = uniqueAssignments.pop();

    assignmentsMap[person] = assignment!;
  });

  return assignmentsMap;
}
