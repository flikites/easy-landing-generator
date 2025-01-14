import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type UploadMethod = "file" | "code" | "url";

interface UploadToggleProps {
  activeMethod: UploadMethod;
  onMethodChange: (method: UploadMethod) => void;
}

export const UploadToggle = ({ activeMethod, onMethodChange }: UploadToggleProps) => {
  return (
    <div className="flex gap-2 p-1 bg-gray-100 rounded-lg w-fit mx-auto mb-8">
      {(["file", "code", "url"] as const).map((method) => (
        <Button
          key={method}
          variant="ghost"
          className={cn(
            "px-6 py-2 transition-all duration-300",
            activeMethod === method && "bg-white shadow-sm"
          )}
          onClick={() => onMethodChange(method)}
        >
          {method.charAt(0).toUpperCase() + method.slice(1)}
        </Button>
      ))}
    </div>
  );
};