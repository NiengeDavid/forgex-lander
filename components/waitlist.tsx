"use client";

import { useState } from "react";
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
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

// Define the schema using zod
const waitlistFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

type WaitlistFormValues = z.infer<typeof waitlistFormSchema>;

export default function WaitlistSection() {
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const form = useForm<WaitlistFormValues>({
    resolver: zodResolver(waitlistFormSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: WaitlistFormValues) => {
    setIsLoading(true); // Start loading
    const formName = "waitlist"; // Match the form name in your Netlify form
    const formData = new FormData();

    // Append form fields to FormData
    formData.append("form-name", formName);
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      // Submit the form to Netlify
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });

      toast.success("You’ve been added to the waitlist!"); // Show success toast
      form.reset(); // Reset the form
    } catch (error) {
      //console.error("Form submission error:", error);
      toast.error("There was an error submitting the form. Please try again."); // Show error toast
    } finally {
      setIsLoading(false); // Stop loading
    }
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
              method="POST"
              action="/submission-endpoint.html"
              data-netlify="true"
            >
              {/* Hidden input for Netlify Forms */}
              <input type="hidden" name="form-name" value="waitlist" />

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
                className="px-6 py-6 bg-btn hover:bg-btn/80 text-black font-medium rounded-lg transition-colors duration-300 whitespace-nowrap flex items-center justify-center"
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loader2 className="animate-spin mr-2" size={16} />
                ) : null}
                {isLoading ? "Submitting..." : "Subscribe"}
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
