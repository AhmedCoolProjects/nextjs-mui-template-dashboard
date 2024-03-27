"use client";

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
import SearchSvg from "@/components/icons/search.svg";
import PluginCard from "./pluginCard";

function PluginsDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="mb-3 !pl-10 -ml-8 !py-5 rounded-full !pr-6 text-lg font-semibold tracking-tight">
          Plugins
        </Button>
      </DialogTrigger>
      <DialogModal />
    </Dialog>
  );
}

export default PluginsDialog;

export function DialogModal() {
  return (
    <DialogContent className="sm:max-w-[850px]">
      <DialogHeader>
        <DialogTitle>Plugin store</DialogTitle>
        <DialogDescription>
          Install and manage plugins to enhance your experience.
        </DialogDescription>
      </DialogHeader>
      <div className="flex flex-row items-center w-full space-x-2">
        <Button variant="default">Free</Button>
        <Button variant="outline">Popular</Button>
        <Button variant="outline">New</Button>
        <Button variant="outline">All</Button>
        <Button variant="outline">Installed</Button>
        <div className="flex-1 flex flex-row items-center relative">
          <SearchSvg className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 transform -translate-y-1/2" />

          <Input
            id="search"
            placeholder="Search ..."
            className="!pl-8 w-full"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-2 gap-y-6">
        <PluginCard />
        <PluginCard />
        <PluginCard />
      </div>
    </DialogContent>
  );
}
