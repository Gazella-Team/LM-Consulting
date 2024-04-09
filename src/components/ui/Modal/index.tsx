import { cn } from "@/helpers/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../Dialog";
import { NiceModalHandler } from "@ebay/nice-modal-react";

export function Modal({
  modal,
  title,
  description,
  children,
  removeOnClose = true,
  closeable = true,
  className = "",
  headerClassName = "",
  size = "md",
}: {
  modal: NiceModalHandler;
  title?: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  removeOnClose?: boolean;
  closeable?: boolean;
  className?: string;
  headerClassName?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}) {
  const getSize = () => {
    switch (size) {
      case "xs":
        return "max-w-xs";
      case "sm":
        return "max-w-sm";
      case "md":
        return "max-w-md";
      case "lg":
        return "max-w-lg";
      case "xl":
        return "max-w-xl";
    }
  };

  return (
    <Dialog
      open={modal.visible}
      onOpenChange={(value) => {
        if (!value) {
          if (!closeable) return;
          modal.hide();
          if (removeOnClose) {
            modal.remove();
          }
        }
      }}
    >
      <DialogContent
        className={cn("overflow-hidden", className, getSize())}
        closeButton={closeable}
      >
        {(title || description) && (
          <DialogHeader className={headerClassName}>
            {title && <DialogTitle>{title}</DialogTitle>}
            {description && (
              <DialogDescription>{description}</DialogDescription>
            )}
          </DialogHeader>
        )}
        {children}
      </DialogContent>
    </Dialog>
  );
}
