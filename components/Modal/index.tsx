"use client";

import { useCallback, useEffect, useRef } from "react";
import FocusTrap from "focus-trap-react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";

// Types
import ModalProps from "./modal.type";

export default function Modal({
  children,
  showModal,
  setShowModal,
  containerClasses,
}: ModalProps) {
  const desktopModalRef = useRef(null);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      // Close the modal when the Escape key is pressed
      if (e.key === "Escape") {
        setShowModal(false);
      }
    },
    [setShowModal]
  );

  useEffect(() => {
    // Add event listener to close modal on Escape key press
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown); // Cleanup on unmount
  }, [onKeyDown]);

  return (
    <AnimatePresence>
      {showModal && (
        <>
          <FocusTrap focusTrapOptions={{ initialFocus: false }}>
            <motion.div
              ref={desktopModalRef}
              key="desktop-modal"
              className="fixed inset-0 z-40 hidden min-h-screen items-center justify-center md:flex"
              initial={{ scale: 0.95, opacity: 0 }} // Initial modal state (scaled and transparent)
              animate={{ scale: 1, opacity: 1 }} // Modal animate to normal state (visible and scaled)
              exit={{ scale: 0.95, opacity: 0 }} // Modal exit animation (scaled and transparent)
              onMouseDown={(e) => {
                // Close modal if the background area is clicked (outside modal content)
                if (desktopModalRef.current === e.target) {
                  setShowModal(false);
                }
              }}
            >
              <div
                className={clsx(
                  `overflow relative w-full max-w-lg transform rounded-xl border border-gray-200 bg-white p-6 text-left shadow-2xl transition-all`,
                  containerClasses // Allow additional custom classes to be passed for container styling
                )}
              >
                {children}
              </div>
            </motion.div>
          </FocusTrap>
          <motion.div
            key="desktop-backdrop"
            className="fixed inset-0 z-30 bg-gray-100 bg-opacity-10 backdrop-blur"
            initial={{ opacity: 0 }} // Initial backdrop opacity (invisible)
            animate={{ opacity: 1 }} // Backdrop animate to visible
            exit={{ opacity: 0 }} // Backdrop exit animation (fade out)
            onClick={() => setShowModal(false)} // Close modal on clicking backdrop
          />
        </>
      )}
    </AnimatePresence>
  );
}
