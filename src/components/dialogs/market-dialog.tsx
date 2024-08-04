import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import MarketForm from "../forms/market-form";

export async function DialogMarket() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-blue-800 font-semibold p-4 w-full lg:w-1/2 lg:max-w-[240px] h-12 text-white rounded-lg text-center">
          Abrir Mercado
        </Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col w-4/5 lg:w-2/4 xl:w-2/5 py-6 h-fit justify-start items-center gap-4">
        <DialogHeader className="border-b w-full pb-4">
          <DialogTitle className="px-4">Abrir Mercado</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="w-full px-4">
          <MarketForm />
        </div>
      </DialogContent>
    </Dialog>
  );
}
