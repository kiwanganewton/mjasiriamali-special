"use client";

import Assessment from "./assessment";
import ModalShell from "@/components/ui/ModalShell";

type AssessmentModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function AssessmentModal({
  isOpen,
  onClose,
}: AssessmentModalProps) {
  return (
    <ModalShell
      isOpen={isOpen}
      onClose={onClose}
      ariaLabel="Mjasiriamali package assessment"
      closeButtonLabel="Close assessment"
      size="assessment"
    >
      <Assessment />
    </ModalShell>
  );
}
