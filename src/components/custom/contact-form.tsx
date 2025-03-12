"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { SendIcon } from "lucide-react";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string()
});

export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast.success("Done");

    const subject = encodeURIComponent(`Message from ${values.name}`);
    const body = encodeURIComponent(values.message);

    const mailtoLink = `mailto:mohdshahanwaz55@gmail.com?subject=${subject}&body=${body}`;

    window.open(mailtoLink, "_blank");

    form.reset();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-8 sm:grid-cols-2"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your lovely name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="example@domain.xyz" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="col-span-full">
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  className="min-h-48"
                  placeholder="Write here..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div>
          <Button
            disabled={!form.formState.isValid || form.formState.isSubmitting}
            className=""
            type="submit"
          >
            SEND MESSAGE <SendIcon />
          </Button>
        </div>
      </form>
    </Form>
  );
}
