"use client";

import { useEffect, useState } from "react";
import LeadForm from "@/components/LeadForm";

const STORAGE_KEY = "saffron-mobile-popup-seen";

export default function MobileLeadPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [canShow, setCanShow] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const isMobile = window.matchMedia("(max-width: 900px)").matches;
    const alreadySeen = window.sessionStorage.getItem(STORAGE_KEY) === "1";

    if (!isMobile) {
      return;
    }

    setCanShow(true);

    if (!alreadySeen) {
      const timer = window.setTimeout(() => {
        setIsOpen(true);
      }, 1400);

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

  const openPopup = () => {
    setIsOpen(true);
  };

  if (!canShow) {
    return null;
  }

  return (
    <>
      <button className="mobile-lead-fab" type="button" onClick={openPopup} aria-label="Open quick booking form">
        Quick Booking
      </button>

      {isOpen && (
        <div className="popup-overlay" role="dialog" aria-modal="true" aria-label="Quick booking form">
          <div className="popup-card">
            <button className="popup-close" type="button" onClick={closePopup} aria-label="Close popup">
              ×
            </button>
            <p className="kicker">Mobile Priority Form</p>
            <h2>Get Pricing on WhatsApp Call</h2>
            <p className="popup-copy">
              Fill this quick form and our advisor will contact you with latest rates and availability.
            </p>
            <LeadForm className="lead-form popup-form" />
          </div>
        </div>
      )}
    </>
  );
}
