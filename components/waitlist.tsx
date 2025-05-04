"use client";

import Container from "./container";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Define the schema using zod
const waitlistFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

type WaitlistFormValues = z.infer<typeof waitlistFormSchema>;

export default function WaitlistSection() {
  const form = useForm<WaitlistFormValues>({
    resolver: zodResolver(waitlistFormSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: WaitlistFormValues) => {
    console.log("Form Submitted:", data);
    // Add your form submission logic here (e.g., API call)
  };

  return (
    <section
      id="waitlist"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-primary-bg text-white"
    >
      <Container className="max-w-4xl mx-auto text-center">
        <div className="p-8 md:p-10 lg:p-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Be the first to know when we launch in June!
          </h2>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="mt-8 flex flex-col sm:flex-row gap-4 max-w-md mx-auto sm:max-w-xl"
              name="waitlist"
              data-netlify="true"
            >
              {/* Email Field */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex-grow">
                    <FormLabel className="sr-only">Email address</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        {...field}
                        className="w-full bg-white py-6"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Submit Button */}
              <Button
                type="submit"
                className="px-6 py-6 bg-btn hover:bg-btn/80 text-black font-medium rounded-lg transition-colors duration-300 whitespace-nowrap"
              >
                Subscribe
              </Button>
            </form>
          </Form>

          <p className="mt-4 text-sm text-white">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </Container>
    </section>
  );
}
