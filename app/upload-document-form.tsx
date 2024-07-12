"use client";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Loader2 } from "lucide-react";
import { title } from "process";
import { LoadingButton } from "@/components/loading-Button";

const formSchema = z.object({
  title: z.string().min(1).max(250),
  file: z.instanceof(File),
});
// zod parsing lib for form validation and zod schema for validation schema
export default function UploadDocumentForm({
  onUpload,
}: {
  onUpload: () => void;
}) {
  // sleep 2 seconds

  const createDocument = useMutation(api.documents.creteDocument);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  });

  // on submit handler

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    await createDocument(values);
    onUpload();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title </FormLabel>
              <FormControl>
                <Input placeholder="Enter you title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="file"
          render={({ field: { value, onChange, ...fieldProps } }) => (
            <FormItem>
              <FormLabel>File </FormLabel>
              <FormControl>
                <Input
                  {...fieldProps}
                  type="file"
                  onChange={(event) => {
                    const file = event.target.files?.[0];
                    onChange(file);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <LoadingButton
          isLoading={form.formState.isSubmitting}
          loadingText="Uploading...."
        >
          Upload
        </LoadingButton>
      </form>
    </Form>
  );
}
