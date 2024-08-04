"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";
import { useRef } from "react";

export function DialogShareLeague() {
  const { register, handleSubmit } = useForm();
  const linkRef = useRef<HTMLInputElement>(null);

  const onSubmit = async () => {
    const link = linkRef.current?.value;
    if (link) {
      await navigator.clipboard
        .writeText(link)
        .then(() => {
          toast({
            title: "Link Copiado",
            description:
              "O link da liga foi copiado para a área de transferência.",
          });
          console.log("Link copied to clipboard");
        })
        .catch((error) => {
          toast({
            title: "Erro ao copiar",
            description:
              "Ocorreu um erro ao copiar o link para a área de transferência.",
          });
          console.error("Failed to copy link:", error);
        });
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          type="button"
          className="bg-transparent p-4 w-1/2  h-12 font-semibold py-4 px-6 max-w-[240px]  text-neutral-600  border-neutral-600 rounded-lg text-center"
        >
          Convidar
        </Button>
      </DialogTrigger>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent className="sm:max-w-md flex flex-col w-4/5 lg:w-1/4 py-6 h-fit justify-start items-center gap-4">
          <DialogHeader className="border-b w-full pb-4">
            <DialogTitle className="px-4">Compartilhar Liga</DialogTitle>
          </DialogHeader>
          <DialogDescription className="px-4 text-neutral-950 mb-2">
            Para convidar amigos para participarem da sua liga, envie o link:
          </DialogDescription>
          <div className="flex items-center space-x-2 w-full px-4">
            <div className="grid flex-1 gap-2">
              <Label htmlFor="link" className="sr-only">
                Link
              </Label>
              <Input
                id="link"
                defaultValue="https://ui.shadcn.com/docs/installation"
                readOnly
                {...register("link")}
                ref={linkRef}
              />
            </div>
          </div>
          <DialogFooter className="sm:justify-between flex flex-row items-center justify-between w-full px-4">
            <DialogClose asChild>
              <Button
                variant="outline"
                type="button"
                className="bg-transparent font-semibold py-4 px-5 max-w-[240px] h-10 text-neutral-600  border-neutral-600 rounded-lg"
              >
                Cancelar
              </Button>
            </DialogClose>
            <Button
              asChild
              type="submit"
              size="sm"
              className="font-semibold py-4 px-6 max-w-[240px] h-10"
            >
              <span
                className="hover:cursor-pointer"
                onClick={handleSubmit(onSubmit)}
              >
                Copiar
              </span>
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
