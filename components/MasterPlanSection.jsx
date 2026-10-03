"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

export default function MasterPlanSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const touchStartRef = useRef({ x: 0, y: 0, dist: 0 });
  const viewerRef = useRef(null);

  const openLightbox = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
    setIsOpen(true);
  };

  const closeLightbox = useCallback(() => {
    setIsOpen(false);
    setScale(1);
    setPosition({ x: 0, y: 0 });
  }, []);

  // Handle ESC key and body scroll locking
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      const handleKeyDown = (e) => {
        if (e.key === "Escape") {
          closeLightbox();
        } else if (e.key === "+" || e.key === "=") {
          e.preventDefault();
          zoomIn();
        } else if (e.key === "-" || e.key === "_") {
          e.preventDefault();
          zoomOut();
        } else if (e.key === "0") {
          e.preventDefault();
          resetZoom();
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isOpen, closeLightbox]);

  // Zoom controls
  const zoomIn = () => {
    setScale((prev) => Math.min(prev + 0.5, 4));
  };

  const zoomOut = () => {
    setScale((prev) => {
      const next = Math.max(prev - 0.5, 1);
      if (next === 1) {
        setPosition({ x: 0, y: 0 });
      }
      return next;
    });
  };

  const resetZoom = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  // Wheel zoom inside viewer
  const handleWheel = (e) => {
    e.preventDefault();
    const zoomDelta = e.deltaY < 0 ? 0.25 : -0.25;
    setScale((prev) => {
      const next = Math.min(Math.max(prev + zoomDelta, 1), 4);
      if (next === 1) {
        setPosition({ x: 0, y: 0 });
      }
      return next;
    });
  };

  // Mouse pan controls
  const handleMouseDown = (e) => {
    if (scale <= 1) return;
    setIsDragging(true);
    dragStartRef.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y
    };
  };

  const handleMouseMove = (e) => {
    if (!isDragging || scale <= 1) return;
    setPosition({
      x: e.clientX - dragStartRef.current.x,
      y: e.clientY - dragStartRef.current.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch controls for mobile
  const handleTouchStart = (e) => {
    if (e.touches.length === 1) {
      if (scale > 1) {
        setIsDragging(true);
        dragStartRef.current = {
          x: e.touches[0].clientX - position.x,
          y: e.touches[0].clientY - position.y
        };
      }
    } else if (e.touches.length === 2) {
      // Pinch tracking
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      touchStartRef.current.dist = dist;
    }
  };

  const handleTouchMove = (e) => {
    if (e.touches.length === 1 && isDragging && scale > 1) {
      setPosition({
        x: e.touches[0].clientX - dragStartRef.current.x,
        y: e.touches[0].clientY - dragStartRef.current.y
      });
    } else if (e.touches.length === 2 && touchStartRef.current.dist > 0) {
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      const factor = dist / touchStartRef.current.dist;
      if (Math.abs(factor - 1) > 0.05) {
        setScale((prev) => {
          const next = Math.min(Math.max(prev * factor, 1), 4);
          if (next === 1) setPosition({ x: 0, y: 0 });
          return next;
        });
        touchStartRef.current.dist = dist;
      }
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    touchStartRef.current.dist = 0;
  };

  const whatsappMessage = encodeURIComponent(
    "Hi, I viewed the Saffron City Master Plan and would like to inquire about available plots."
  );

  return (
    <>
      <section
        id="master-plan"
        className="section master-plan-section"
        aria-label="Saffron City Master Plan"
      >
        <div className="container">
          {/* Section Head */}
          <div className="section-head reveal">
            <p className="kicker">MASTER PLAN</p>
            <h2>Saffron City Master Plan</h2>
            <p>
              Explore the proposed Saffron City master plan, including residential
              plots, commercial areas, road infrastructure and planned amenities.
            </p>
          </div>

          {/* Master Plan Card / Image Preview */}
          <div className="master-plan-card reveal">
            <div
              className="master-plan-preview-wrapper"
              onClick={openLightbox}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && openLightbox()}
              aria-label="Click to inspect full master plan in interactive zoom viewer"
            >
              <Image
                src="/images/saffron-city-master-plan.webp"
                alt="Saffron City Islamabad master plan showing residential and commercial plots"
                width={1200}
                height={1200}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1120px"
                className="master-plan-preview-img"
                priority={false}
              />
              <div className="master-plan-overlay-cue">
                <span className="master-plan-cue-pill">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                  Click to Expand &amp; Zoom
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="master-plan-actions">
              <div className="master-plan-primary-actions">
                <button
                  type="button"
                  onClick={openLightbox}
                  className="btn btn-primary master-plan-btn"
                  aria-label="Open full interactive master plan viewer"
                >
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="15 3 21 3 21 9" />
                    <polyline points="9 21 3 21 3 15" />
                    <line x1="21" y1="3" x2="14" y2="10" />
                    <line x1="3" y1="21" x2="10" y2="14" />
                  </svg>
                  View Full Plan
                </button>

                <a
                  href="/saffron-city-master-plan.pdf"
                  download="Saffron-City-Master-Plan.pdf"
                  className="btn btn-ghost master-plan-btn"
                  aria-label="Download Saffron City master plan PDF"
                >
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  ↓ Download Master Plan (PDF)
                </a>
              </div>

              <div className="master-plan-secondary-actions">
                <a
                  href={`https://wa.me/923315408089?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp-cta master-plan-btn"
                  aria-label="Inquire about plot availability on WhatsApp"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 2.117.549 4.099 1.51 5.819L.055 23.24l5.54-1.453A11.953 11.953 0 0012 24c6.626 0 12-5.373 12-12S18.626 0 12 0zm6.001 16.917c-.252.71-1.474 1.356-2.018 1.4-.527.042-1.03.208-3.476-.724-2.94-1.104-4.83-4.066-4.976-4.257-.147-.19-1.196-1.59-1.196-3.034 0-1.444.756-2.154 1.024-2.448.268-.294.584-.368.779-.368.195 0 .39.001.56.01.179.009.42-.068.657.502.246.592.834 2.04.907 2.187.073.147.12.319.024.513-.097.195-.146.316-.292.487-.147.17-.308.38-.44.511-.146.147-.299.307-.128.602.17.293.757 1.247 1.625 2.02 1.116.994 2.057 1.302 2.35 1.448.293.147.463.122.634-.073.17-.196.73-.853.924-1.146.195-.292.389-.243.657-.146.268.098 1.703.804 1.996.951.293.147.487.22.56.341.073.122.073.707-.18 1.417z" />
                  </svg>
                  Ask About a Plot on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full-Screen Interactive Lightbox Viewer */}
      {isOpen && (
        <div
          className="plan-lightbox-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Interactive Master Plan Viewer"
        >
          {/* Top Bar with Title, Zoom Controls & Close */}
          <div className="plan-lightbox-bar">
            <div className="plan-lightbox-title-group">
              <span className="plan-lightbox-kicker">Interactive Viewer</span>
              <h3 className="plan-lightbox-title">Saffron City Master Plan</h3>
            </div>

            {/* Zoom / Navigation Controls */}
            <div className="plan-lightbox-controls">
              <button
                type="button"
                onClick={zoomOut}
                disabled={scale <= 1}
                className="plan-ctl-btn"
                title="Zoom Out (-)"
                aria-label="Zoom out"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </button>

              <span className="plan-zoom-indicator">
                {Math.round(scale * 100)}%
              </span>

              <button
                type="button"
                onClick={zoomIn}
                disabled={scale >= 4}
                className="plan-ctl-btn"
                title="Zoom In (+)"
                aria-label="Zoom in"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                >
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </button>

              <button
                type="button"
                onClick={resetZoom}
                className="plan-ctl-btn plan-ctl-reset"
                title="Reset Zoom (0)"
                aria-label="Reset zoom"
              >
                Reset
              </button>
            </div>

            {/* Quick Actions & Close */}
            <div className="plan-lightbox-header-actions">
              <a
                href="/saffron-city-master-plan.pdf"
                download="Saffron-City-Master-Plan.pdf"
                className="plan-header-link"
                title="Download PDF"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                <span className="plan-header-link-text">PDF</span>
              </a>

              <a
                href={`https://wa.me/923315408089?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="plan-header-link plan-header-wa"
                title="WhatsApp Inquiry"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 2.117.549 4.099 1.51 5.819L.055 23.24l5.54-1.453A11.953 11.953 0 0012 24c6.626 0 12-5.373 12-12S18.626 0 12 0zm6.001 16.917c-.252.71-1.474 1.356-2.018 1.4-.527.042-1.03.208-3.476-.724-2.94-1.104-4.83-4.066-4.976-4.257-.147-.19-1.196-1.59-1.196-3.034 0-1.444.756-2.154 1.024-2.448.268-.294.584-.368.779-.368.195 0 .39.001.56.01.179.009.42-.068.657.502.246.592.834 2.04.907 2.187.073.147.12.319.024.513-.097.195-.146.316-.292.487-.147.17-.308.38-.44.511-.146.147-.299.307-.128.602.17.293.757 1.247 1.625 2.02 1.116.994 2.057 1.302 2.35 1.448.293.147.463.122.634-.073.17-.196.73-.853.924-1.146.195-.292.389-.243.657-.146.268.098 1.703.804 1.996.951.293.147.487.22.56.341.073.122.073.707-.18 1.417z" />
                </svg>
                <span className="plan-header-link-text">WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={closeLightbox}
                className="plan-close-btn"
                title="Close (Esc)"
                aria-label="Close full-screen master plan viewer"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Interactive Canvas */}
          <div
            ref={viewerRef}
            className={`plan-lightbox-canvas ${scale > 1 ? (isDragging ? "is-panning" : "can-pan") : ""}`}
            onWheel={handleWheel}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="plan-image-transform-container"
              style={{
                transform: `translate3d(${position.x}px, ${position.y}px, 0px) scale(${scale})`,
                transition: isDragging ? "none" : "transform 150ms ease-out"
              }}
            >
              <img
                src="/images/saffron-city-master-plan.webp"
                alt="Saffron City Islamabad master plan high resolution zoom view"
                className="plan-lightbox-image"
                draggable={false}
              />
            </div>
          </div>

          {/* Bottom helper tip */}
          <div className="plan-lightbox-footer-tip">
            <span>
              {scale > 1
                ? "💡 Drag with mouse or finger to inspect plot numbers • Scroll or use buttons to zoom"
                : "💡 Click + or scroll wheel to zoom into individual plots • Esc to exit"}
            </span>
          </div>
        </div>
      )}
    </>
  );
}
