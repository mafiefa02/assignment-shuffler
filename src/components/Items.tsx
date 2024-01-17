import AddItems from "./AddItems";
import ListOfItems from "./ListOfItems";
import { Separator } from "./ui/separator";

const Items = () => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-semibold text-primary sm:text-2xl">
          list of items;
        </h1>

        <h4 className="text-sm text-muted-foreground">
          please list all of the items u want to shuffle or assign
        </h4>
      </div>

      <Separator />

      <div className="w-full flex-grow space-y-2">
        <ListOfItems />
      </div>

      <AddItems />
    </>
  );
};

export default Items;
