"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";

const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
});

type NewsletterValues = z.infer<typeof newsletterSchema>;

/**
 * Newsletter signup — the only interactive piece of the footer, so it's the
 * only part extracted into a Client Component. Validated with Zod, wired
 * through React Hook Form for accessible, performant client-side validation.
 */
export function NewsletterForm() {
  const [status, setStatus] = React.useState<"idle" | "success" | "error">(
    "idle",
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterValues>({
    resolver: zodResolver(newsletterSchema),
  });

  async function onSubmit(values: NewsletterValues) {
    try {
      // Replace with real API route once available (e.g. /api/newsletter)
      await new Promise((resolve) => setTimeout(resolve, 600));
      console.log("Newsletter signup:", values.email);
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full max-w-md flex-col gap-2 sm:flex-row sm:items-start"
      noValidate
    >
      <div className="flex-1">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          placeholder="Your email address"
          className="h-11 w-full rounded-sm border border-white/20 bg-transparent px-3 text-body-sm text-white placeholder:text-ink-400 focus-visible:border-accent-signal focus-visible:outline-none"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "newsletter-error" : undefined}
          {...register("email")}
        />
        {errors.email && (
          <p id="newsletter-error" className="mt-1 text-body-sm text-state-error" role="alert">
            {errors.email.message}
          </p>
        )}
        {status === "success" && (
          <p className="mt-1 text-body-sm text-state-success" role="status">
            You&apos;re subscribed. Expect one considered insight per month.
          </p>
        )}
      </div>
      <Button
        type="submit"
        variant="onDark"
        disabled={isSubmitting}
        className="whitespace-nowrap"
      >
        {isSubmitting ? "Subscribing…" : "Subscribe →"}
      </Button>
    </form>
  );
}
