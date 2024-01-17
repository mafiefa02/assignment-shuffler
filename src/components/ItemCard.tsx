import DeleteItemForm from "-/components/DeleteItemForm";
import { Button } from "-/components/ui/button";
import { TrashIcon } from "lucide-react";

const ItemCard = (props: { item: string; index: number; name: string }) => {
  return (
    <div className="flex items-center justify-between rounded-lg border py-1 pl-4 pr-2">
      <p className="w-full overflow-hidden text-ellipsis">{props.item}</p>

      <DeleteItemForm name={props.name}>
        <input
          type="hidden"
          name="itemIndex"
          value={props.index}
        />
        <Button
          type="submit"
          className="p-px hover:text-primary"
          variant="destructive"
          size="icon"
        >
          <TrashIcon className="size-4 shrink-0 text-destructive-foreground hover:cursor-pointer" />
        </Button>
      </DeleteItemForm>
    </div>
  );
};

export default ItemCard;
