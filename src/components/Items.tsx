import AddItems from "-/components/AddItems";
import ListOfItems from "-/components/ListOfItems";
import { Separator } from "-/components/ui/separator";
import { addItems } from "-/lib/actions";

const Items = () => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-semibold text-primary sm:text-2xl">
          assignments;
        </h1>

        <h4 className="text-sm text-muted-foreground">
          please list all of the things u want to shuffle or assign
        </h4>
      </div>

      <Separator />

      <div className="w-full flex-grow space-y-2">
        <ListOfItems name="item" />
      </div>

      <AddItems
        fn={addItems}
        name="item"
      />
    </>
  );
};

export default Items;
