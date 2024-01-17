import AddPerson from "./AddPerson";
import ListOfPerson from "./ListOfPerson";
import { Separator } from "./ui/separator";

function Person() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-semibold text-primary sm:text-2xl">
          list of person;
        </h1>

        <h4 className="text-sm text-muted-foreground">
          who are you going to shuffle the items to?
        </h4>
      </div>

      <Separator />

      <div className="w-full flex-grow space-y-2">
        <ListOfPerson />
      </div>

      <AddPerson />
    </>
  );
}

export default Person;
