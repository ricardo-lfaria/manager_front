"use client";

import { FormProvider, useController, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DialogClose } from "@/components/ui/dialog";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon, Clock12 } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { ptBR } from "date-fns/locale";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { TimePicker } from "../time-picker/time-picker";
import { useState } from "react";

const createGameSchema = z.object({
  league: z.string(),
  firstFraternity: z.string(),
  secondFraternity: z.string(),
  beginDate: z.date({
    required_error: "A data de ínicio é necessária",
  }),
  hour: z.string().time(),
  place: z.string(),
});

type CreateGameData = z.infer<typeof createGameSchema>;

export default function CreateGameForm() {
  const [selectedTime, setSelectedTime] = useState<Date | undefined>(undefined);

  const methods = useForm<CreateGameData>({
    resolver: zodResolver(createGameSchema),
  });
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = (data: CreateGameData) => {
    const formDataToSend = new FormData();

    for (const [key, value] of Object.entries(data)) {
      formDataToSend.append(key, value as string | Blob);
    }
    console.log(formDataToSend);

    for (const [key, value] of formDataToSend.entries()) {
      console.log(key, value);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex flex-col w-full gap-1">
            <label htmlFor="league">Categoria</label>
            <Select {...register("league")}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione..." />
              </SelectTrigger>
              <SelectContent className="relative ">
                {[...Array(15)].map((_, i) => (
                  <SelectItem key={i} value={(i + 2).toString()}>
                    {i + 2}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.league && <span>{errors.league.message}</span>}
          </div>

          <div className="flex flex-col w-full gap-1">
            <label htmlFor="firstFraternity">República 1</label>
            <Select {...register("firstFraternity")}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione..." />
              </SelectTrigger>
              <SelectContent className="realtive">
                {[...Array(15)].map((_, i) => (
                  <SelectItem key={i} value={(i + 2).toString()}>
                    {i + 2}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.firstFraternity && (
              <span>{errors.firstFraternity.message}</span>
            )}
          </div>

          <div className="flex flex-col w-full gap-1">
            <label htmlFor="secondFraternity">República 2</label>
            <Select {...register("secondFraternity")}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione..." />
              </SelectTrigger>
              <SelectContent className="reative ">
                {[...Array(15)].map((_, i) => (
                  <SelectItem key={i} value={(i + 2).toString()}>
                    {i + 2}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.secondFraternity && (
              <span>{errors.secondFraternity.message}</span>
            )}
          </div>

          <div className="flex flex-col gap-2 items-center justify-around w-full">
            <FormField
              control={control}
              name="beginDate"
              render={({ field }) => (
                <FormItem className="flex flex-col w-full">
                  <FormLabel>Início</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "px-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "dd 'de' MMMM 'de' yyyy'", {
                              locale: ptBR,
                            })
                          ) : (
                            <span>Escolha uma data</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="hour"
              render={({ field }) => (
                <FormItem className="flex flex-col w-full">
                  <FormLabel>Horário</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          onClick={() => {
                            if (selectedTime) {
                              field.onChange(format(selectedTime, "HH:mm"));
                            }
                          }}
                          className={cn(
                            "w-full justify-start px-3",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {/* Display the formatted time if it exists, otherwise show the placeholder */}
                          {selectedTime
                            ? format(selectedTime, "HH:mm")
                            : "Selecione um horário"}
                          <Clock12 className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-full p-0">
                      <TimePicker
                        date={selectedTime}
                        setDate={setSelectedTime}
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="w-full flex flex-col gap-1">
              <label htmlFor="place" className="self-start">
                Local
              </label>
              <Input
                type="text"
                id="place"
                {...register("place")}
                className="mt-1"
              />
              {errors.place && <span>{errors.place.message}</span>}
            </div>
          </div>
        </div>

        <DialogClose className="w-full">
          <div className="flex w-full gap-2 justify-between px-2">
            <Button
              variant="outline"
              type="button"
              className="bg-transparent font-semibold py-4 px-2 lg:px-6 max-w-[240px] h-10 text-neutral-600  border-neutral-600 rounded-lg text-center"
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              className="font-semibold py-4 px-2 lg:px-6 max-w-[240px] h-10"
            >
              Salvar Jogo
            </Button>
          </div>
        </DialogClose>
      </form>
    </FormProvider>
  );
}
