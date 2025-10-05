"use client"; // This is a Client Component

import { ReactNode, useEffect, useRef } from "react";
import { motion, AnimatePresence, easeIn, easeOut } from "framer-motion";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
}

const modalBackdropVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modalContentVariants = {
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: easeOut },
  },
  hidden: {
    y: -50,
    opacity: 0,
    scale: 0.9,
    transition: { duration: 0.2, ease: easeIn },
  },
};

export default function Modal({
  isOpen,
  onClose,
  children,
  title,
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    } else {
      document.removeEventListener("keydown", handleEscape);
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  // Handle clicks outside the modal content to close it
  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
          variants={modalBackdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={handleBackdropClick}
        >
          <motion.div
            ref={modalRef}
            className="bg-white rounded-lg shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto relative"
            variants={modalContentVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-neutral-light-grey">
              <h3 className="text-2xl font-serif text-brand-navy">
                {title || "Details"}
              </h3>
              <button
                onClick={onClose}
                className="text-neutral-grey hover:text-brand-navy transition-colors duration-200"
                aria-label="Close modal"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
