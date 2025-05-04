"use client";

import React, { useState } from "react";
import Container from "./container";
import { Home, Mail, MapPin, Phone, Loader2 } from "lucide-react";
import { contactDetails } from "@/data/contact";
import { Button } from "@/components/ui/button";
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
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

// Define the schema using zod
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsLoading(true); // Start loading
    const formName = "contact"; // Match the form name in your Netlify form
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

      toast("Form successfully submitted!", {
        description:
          "Thank you for reaching out. We will get back to you soon.",
        duration: 5000,
        action: {
          label: "Close",
          onClick: () => toast.dismiss(),
        },
      }); // Show success toast
      form.reset(); // Reset the form
    } catch (error) {
      //console.error("Form submission error:", error);
      toast.error("There was an error submitting the form. Please try again."); // Show error toast
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <div id="contact" className="bg-white py-12">
      <Container>
        <h2 className="text-2xl md:text-3xl font-bold text-black mb-8 md:mb-16">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Get in Touch
            </h3>
            <p className="flex items-center gap-1 hover:underline mb-4">
              <Phone size={24} className="text-primary-bg" />{" "}
              <a
                href={`tel:${contactDetails?.Phone}`}
                className="text-lg text-gray-700"
              >
                {contactDetails?.Phone}
              </a>
            </p>
            <p className="flex items-center gap-1 hover:underline mb-4">
              <Mail size={24} className="text-primary-bg" />
              <a
                href={`mailto:${contactDetails?.email}`}
                className="text-lg text-gray-700"
              >
                {contactDetails?.email}
              </a>
            </p>
            <p className="flex items-center gap-1">
              <MapPin size={24} className="text-primary-bg" />
              <span className="text-gray-700">{contactDetails?.address}</span>
            </p>
            <div className="flex items-center gap-4 mt-6 mx-auto">
              {contactDetails.socialLinks?.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="p-2 border border-black rounded-full hover:bg-primary-bg hover:text-white transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <link.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Send a Message
            </h3>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
                name="contact"
                method="POST"
                data-netlify="true"
              >
                {/* Hidden input for Netlify Forms */}
                <input type="hidden" name="form-name" value="contact" />

                {/* Name Field */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your Name"
                          {...field}
                          className="w-full"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Email Field */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Your Email"
                          {...field}
                          className="w-full"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Message Field */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Your Message"
                          rows={4}
                          {...field}
                          className="w-full"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="bg-primary-bg text-white px-4 py-2 rounded-md cursor-pointer font-semibold hover:bg-primary-bg/80 focus:outline-none focus:ring-2 focus:ring-primary-bg/70 flex items-center justify-center"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <Loader2 className="animate-spin mr-2" size={16} />
                  ) : null}
                  {isLoading ? "Submitting..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </Container>
    </div>
  );
}
