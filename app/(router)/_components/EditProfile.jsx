import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SquarePen } from "lucide-react";

const EditProfile = ({ name, value, updateInfo }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">
          <SquarePen size={15} />
        </Button>
      </DialogTrigger>
      <DialogContent className="">
        <DialogHeader>
          <DialogTitle>Edit {name}</DialogTitle>
          <DialogDescription>
            {
              "Update your details here. Don't forget to click 'Save' once you're finished making changes."
            }
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right capitalize">
              {name}
            </Label>
            {value?.length < 30 ? (
              <Input id="name" defaultValue={value} className="col-span-3" />
            ) : (
              <Textarea
                id="name"
                defaultValue={value}
                className="col-span-3 hide-scrollbar"
                rows={5}
                style={{
                  overflow: "auto",
                  scrollbarWidth: "none",
                  "-ms-overflow-style": "none",
                }}
              />
            )}
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={updateInfo}>
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditProfile;
