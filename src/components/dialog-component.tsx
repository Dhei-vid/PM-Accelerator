"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function DialogCloseButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className={"bg-secondary p-8 w-full text-primary"}
          variant="default"
        >
          Info
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-secondary">
        <DialogHeader className={"flex flex-col gap-5"}>
          <DialogTitle>PM Accelerator Description</DialogTitle>
          <DialogDescription>
            The Product Manager Accelerator Program is designed to support PM
            professionals through every stage of their careers. From students
            looking for entry-level jobs to Directors looking to take on a
            leadership role, our program has helped over hundreds of students
            fulfill their career aspirations.
          </DialogDescription>
          <DialogDescription>
            Our Product Manager Accelerator community are ambitious and
            committed. Through our program they have learnt, honed and developed
            new PM and leadership skills, giving them a strong foundation for
            their future endeavors.
          </DialogDescription>
        </DialogHeader>

        {/* <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
}
