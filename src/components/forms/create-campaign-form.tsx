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
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { ptBR } from "date-fns/locale";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const createCampaingSchema = z.object({
  name: z.string().min(1, "Nome do Time é obrigatório"),
  link: z.string().url(),
  photo: z.string(),
  beginDate: z.date({
    required_error: "A data de ínicio é necessária",
  }),
  endDate: z.date({
    required_error: "A data de fim é necessária",
  }),
});

type CreateCampaingData = z.infer<typeof createCampaingSchema>;

export default function CreateCampaingForm() {
  const methods = useForm<CreateCampaingData>({
    resolver: zodResolver(createCampaingSchema),
  });
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = methods;

  const onSubmit = (data: CreateCampaingData) => {
    const formDataToSend = new FormData();
    for (const [key, value] of Object.entries(data)) {
      formDataToSend.append(key, value as string | Blob);
    }
    console.log(formDataToSend);
    const fileInput = document.getElementById(
      "photo"
    ) as HTMLInputElement | null;
    if (fileInput?.files && fileInput.files.length > 0) {
      formDataToSend.append("photo", fileInput.files[0]);
    }
    for (const [key, value] of formDataToSend.entries()) {
      console.log(key, value);
    }
  };
  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const selectedFile = files[0];
      console.log("Selected File:", selectedFile);
    }
  };
  const { field } = useController({
    name: "photo",
    control,
    defaultValue: "",
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="w-full flex flex-col gap-1">
            <label htmlFor="name" className="self-start">
              Nome
            </label>
            <Input
              type="text"
              id="name"
              {...register("name")}
              className="mt-1"
            />
            {errors.name && <span>{errors.name.message}</span>}
          </div>

          <div className="w-full flex flex-col gap-1">
            <label htmlFor="link" className="self-start">
              Link de redirecionamento
            </label>
            <Input
              type="text"
              id="link"
              {...register("link")}
              className="mt-1"
            />
            {errors.link && <span>{errors.link.message}</span>}
          </div>

          <div className="w-full flex flex-col gap-1">
            <label className="" htmlFor="photo">
              Foto
            </label>
            <div className="relative">
              <Input
                type="file"
                id="photo"
                accept="image/*"
                {...field}
                onChange={(e) => {
                  field.onChange(e);
                  handlePhotoChange(e);
                }}
                className="pr-12 file:hidden"
                hidden
              />

              <Button
                type="button"
                onClick={() => {
                  document.getElementById("photo")?.click();
                }}
                className="absolute top-2 right-2 text-xs h-6 py-1 px-6 rounded-md bg-blue-800 text-white"
              >
                Upload
              </Button>
            </div>
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
              name="endDate"
              render={({ field }) => (
                <FormItem className="flex flex-col w-full">
                  <FormLabel>Fim</FormLabel>
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
                        disabled={(date) =>
                          date < getValues("beginDate") || date < new Date()
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <DialogClose className="w-full">
          <div className="flex w-full gap-1 justify-between">
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
              Salvar Campanha
            </Button>
          </div>
        </DialogClose>
      </form>
    </FormProvider>
  );
}
