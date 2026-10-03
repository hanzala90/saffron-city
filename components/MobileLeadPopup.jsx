"use client";

import { useEffect, useState } from "react";
import LeadForm from "@/components/LeadForm";

const STORAGE_KEY = "saffron-popup-seen";

export default function MobileLeadPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const alreadySeen = window.sessionStorage.getItem(STORAGE_KEY) === "1";
    if (!alreadySeen) {
      const timer = window.setTimeout(() => {
        setIsOpen(true);
      }, 800);
      return () => window.clearTimeout(timer);
    }
    return undefined;
  }, []);

  const closePopup = () => {
    setIsOpen(false);
    if (typeof window !== "undefined") {
      window.sessionStorage.setItem(STORAGE_KEY, "1");
    }
  };

  if (!mounted) return null;

  return (
    <>
      {isOpen && (
        <div
          className="popup-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Get Saffron City pricing"
        >
          <div className="popup-card">
            <button
              className="popup-close"
              type="button"
              onClick={closePopup}
              aria-label="Close popup"
            >
              ×
            </button>
            <p className="kicker">Limited Plots Available</p>
            <h2>Get Saffron City Islamabad Pricing & Availability</h2>
            <p className="popup-copy">
              Share your details and our advisor will call you back with the
              latest rates, available plot sizes, and Saffron City payment plan
              options.
            </p>
            <LeadForm className="lead-form popup-form" />
          </div>
        </div>
      )}
    </>
  );
}
