import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import axios from "axios";

// Schema for validation
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid 10 digit phone number"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const ContactForm = ({ serviceType }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    const payload = { ...data, serviceType: serviceType || "General Inquiry" };

    setIsSubmitting(true);
    console.log("Submitting form data:", { ...data, serviceType });

    try {
      const response = await axios.post(
        "https://psychjinni-server.vercel.app/api/enquiry",
        payload,
        { headers: { "Content-Type": "application/json" } }
      );

      console.log("Server response:", response.data);

      toast.success("Message Sent!", {
        description: "Thank you for your inquiry. We'll get back to you soon.",
      });
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);

      if (error.response) {
        // Server responded with a non-2xx code
        toast.error("Failed to send message", {
          description: error.response.data?.error || "Please try again later.",
        });
      } else {
        // Network or other error
        toast.error("Network error", {
          description: "Could not connect to the server.",
        });
      }
    }

    setIsSubmitting(false);
  };

  return (
    <Card className="bg-white/80 backdrop-blur-xl shadow-lg rounded-2xl p-8">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-foreground mb-2">
          Get in Touch
        </h3>
        <p className="text-muted-foreground">
          Ready to start your mental health journey? Contact us today.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your full name" {...field} />
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
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your email"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your phone number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder={`Tell us about your ${
                      serviceType || "mental health"
                    } needs...`}
                    className="min-h-[120px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </Form>
    </Card>
  );
};

export default ContactForm;
