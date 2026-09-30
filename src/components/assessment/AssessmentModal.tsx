"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Assessment from "./assessment";

type AssessmentModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function AssessmentModal({
  isOpen,
  onClose,
}: AssessmentModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/45 px-3 py-4 sm:px-6 sm:py-6 lg:px-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              onClose();
            }
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
            className="relative flex h-[92vh] w-full max-w-[900px] flex-col overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-[0_25px_80px_rgba(0,0,0,0.18)]"
          >
            {/* Header */}
<div className="flex h-[64px] shrink-0 items-center border-b border-neutral-200 bg-white px-5 sm:px-7">
  <button
    type="button"
    onClick={onClose}
    aria-label="Close assessment"
    className="ml-auto flex h-9 w-9 items-center justify-center rounded-md border border-neutral-200 text-neutral-500 transition-colors hover:border-neutral-300 hover:bg-neutral-50 hover:text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#c8102e]/20"
  >
    <X size={18} strokeWidth={1.8} />
  </button>
</div>

            {/* Scrollable Assessment */}
            <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
              <Assessment />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}