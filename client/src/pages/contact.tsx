import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactMessageSchema, type InsertContactMessage } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  
  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your inquiry. I'll get back to you soon.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactMessage) => {
    contactMutation.mutate(data);
  };

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-6">
            Contact
          </h1>
          <p className="text-xl text-muted-foreground">
            Let's collaborate on your next branding project or discuss design opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-serif font-semibold mb-8">Get in Touch</h2>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4" data-testid="contact-email">
                <Mail className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-muted-foreground">arifhaque.zeronlab@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4" data-testid="contact-phone">
                <Phone className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-muted-foreground">+88 01712773855</p>
                </div>
              </div>

              <div className="flex items-start space-x-4" data-testid="contact-studio">
                <MapPin className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Studio</h3>
                  <p className="text-muted-foreground">
                    Dhaka, Bangladesh<br />
                    Available for Remote Work
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4" data-testid="contact-hours">
                <Clock className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Studio Hours</h3>
                  <p className="text-muted-foreground">
                    Tuesday - Saturday<br />
                    10:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-12">
              <h3 className="text-lg font-semibold mb-4">View My Portfolio</h3>
              <div className="flex space-x-4">
                <a href="https://dribbble.com/arif_haque" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" data-testid="social-dribbble">
                  <span className="sr-only">Dribbble</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12 12-5.374 12-12S18.626 0 12 0zm7.568 5.302c1.4 1.5 2.252 3.5 2.273 5.698-.653-.126-2.194-.26-3.742-.16-.1-.246-.2-.49-.32-.73-.32-.77-.67-1.52-1.03-2.26 1.34-.55 2.478-1.228 2.818-1.548zM12 2.275c2.245 0 4.315.855 5.876 2.256-.2.2-1.26.748-2.56 1.17-1.27-2.295-2.646-4.16-2.848-4.426A9.725 9.725 0 0112 2.275zM9.7 1.9c.22.27 1.6 2.14 2.87 4.42C10.18 7.69 7.9 8.35 5.27 8.35c-.27 0-.54 0-.81-.02C5.11 6.06 7.03 3.42 9.7 1.9zm-7.15 10.25c.3.01.61.01.91.01 3.36 0 6.17-.85 7.97-2.22.32.62.6 1.26.85 1.9-.14.04-.27.09-.4.15-2.1.82-3.97 2.38-5.26 4.56A9.7 9.7 0 012.55 12.15zm1.9 6.62c1.1-1.94 2.69-3.24 4.45-3.95.37-.15.75-.27 1.14-.36.2.52.38 1.04.54 1.57.48 1.62.73 3.17.8 4.6-2.44-.49-4.47-2.04-5.93-3.86zm7.33 2.9c-.1-1.32-.35-2.72-.8-4.26-.14-.48-.3-.95-.48-1.4 1.4-.18 2.9-.12 4.54.18-.18 2.23-1.04 4.25-2.42 5.7-.84-.14-1.68-.22-2.84-.22z"/>
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="social-behance">
                  <span className="sr-only">Behance</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.48.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.497 1.19.9.26 1.567.65 2.002 1.17.435.52.652 1.19.652 2.01 0 .75-.13 1.39-.39 1.93-.26.54-.65.99-1.17 1.35-.52.36-1.146.62-1.883.78-.736.16-1.576.24-2.52.24H0V4.51h6.938v-.007zM16.94 16.665c.44.428 1.073.643 1.894.643.59 0 1.1-.148 1.53-.447.43-.297.71-.687.84-1.17h2.31c-.39 1.39-1.03 2.39-1.91 3.01-.88.62-1.94.93-3.18.93-1.337 0-2.518-.4-3.544-1.2-1.025-.8-1.537-2.19-1.537-4.17 0-1.83.537-3.27 1.61-4.32 1.073-1.05 2.426-1.58 4.06-1.58 1.23 0 2.27.28 3.12.84.85.56 1.525 1.311 2.025 2.254.5.943.75 2.006.75 3.19l-.02.32h-6.95c.02.97.29 1.683.73 2.111z"/>
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="social-linkedin">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-serif font-semibold mb-8">Send a Message</h2>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name *</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your full name" 
                          {...field}
                          data-testid="input-name"
                        />
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
                      <FormLabel>Email *</FormLabel>
                      <FormControl>
                        <Input 
                          type="email"
                          placeholder="your.email@example.com" 
                          {...field}
                          data-testid="input-email"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger data-testid="select-subject">
                            <SelectValue placeholder="Select a subject" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="branding">Branding Project</SelectItem>
                          <SelectItem value="logo">Logo Design</SelectItem>
                          <SelectItem value="packaging">Packaging Design</SelectItem>
                          <SelectItem value="web">Web Design</SelectItem>
                          <SelectItem value="collaboration">Collaboration</SelectItem>
                          <SelectItem value="general">General Inquiry</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message *</FormLabel>
                      <FormControl>
                        <Textarea 
                          rows={6}
                          placeholder="Tell me about your project or inquiry..."
                          className="resize-none"
                          {...field}
                          data-testid="textarea-message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={contactMutation.isPending}
                  data-testid="button-submit"
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
