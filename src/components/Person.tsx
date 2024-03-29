import AddItems from "-/components/AddItems";
import ListOfItems from "-/components/ListOfItems";
import { Separator } from "-/components/ui/separator";
import { addItems } from "-/lib/actions";

function Person() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-semibold text-primary sm:text-2xl">
          assignees;
        </h1>

        <h4 className="text-sm text-muted-foreground">
          who/what are you going to shuffle the items to?
        </h4>
      </div>

      <Separator />

      <div className="w-full flex-grow space-y-2">
        <ListOfItems name="person" />
      </div>

      <AddItems
        fn={addItems}
        name="person"
      />
    </>
  );
}

export default Person;
