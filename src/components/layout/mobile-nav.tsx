"use client";

import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import { PRIMARY_NAV } from "@/lib/constants";
import { CtaButton } from "@/components/shared/cta-button";
import { Logo } from "@/components/shared/logo";

/**
 * Mobile navigation drawer. Built on Radix Dialog for free accessibility:
 * focus trap, Escape-to-close, aria-modal, and scroll lock are all handled
 * by the primitive — we only style it.
 */
export function MobileNav() {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-ink-900 md:hidden"
          aria-label="Open navigation menu"
        >
          <Menu className="h-6 w-6" aria-hidden="true" />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-ink-900/40 backdrop-blur-sm data-[state=open]:animate-in data-[state=open]:fade-in" />
        <Dialog.Content
          className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-surface-0 p-6 shadow-lg focus:outline-none"
          aria-label="Mobile navigation"
        >
          <div className="flex items-center justify-between">
            <Logo variant="dark" />
            <Dialog.Close asChild>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-ink-900"
                aria-label="Close navigation menu"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </Dialog.Close>
          </div>

          <nav className="mt-10 flex flex-col gap-1" aria-label="Primary">
            {PRIMARY_NAV.map((link) => (
              <Dialog.Close asChild key={link.href}>
                <a
                  href={link.href}
                  className="rounded-md px-3 py-3 text-heading-md text-ink-900 transition-colors hover:bg-surface-50"
                >
                  {link.label}
                </a>
              </Dialog.Close>
            ))}
          </nav>

          <div className="mt-auto pt-6">
            <CtaButton href="/consultation" className="w-full" size="lg">
              Book a Consultation
            </CtaButton>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
