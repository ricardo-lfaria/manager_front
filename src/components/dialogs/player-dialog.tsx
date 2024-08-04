"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "@/components/ui/dialog";

interface DialogPlayerProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode; 
}
export function DialogPlayer({ isOpen, onClose, children }: DialogPlayerProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] flex flex-col justify-center items-center">
        <DialogHeader className="hidden"></DialogHeader>
        {children}
        <DialogFooter>
          <div className="flex w-full justify-between gap-10 mb-4">
            <Button
              type="submit"
              className=" rounded-lg font-semibold p-4"
              onClick={onClose}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              className=" rounded-lg font-semibold p-4 bg-blue-800"
            >
              Escalar Jogador
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
