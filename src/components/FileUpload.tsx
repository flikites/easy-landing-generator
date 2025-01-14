import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface FileUploadProps {
  onFileSelect: (files: File[]) => void;
  maxFiles?: number;
}

export const FileUpload = ({ onFileSelect, maxFiles = 3 }: FileUploadProps) => {
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files) {
      const filesArray = Array.from(e.dataTransfer.files).slice(0, maxFiles);
      onFileSelect(filesArray);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).slice(0, maxFiles);
      onFileSelect(filesArray);
    }
  };

  return (
    <Card
      className={cn(
        "border-2 border-dashed rounded-lg p-8 text-center transition-colors duration-300",
        dragActive ? "border-primary bg-primary/5" : "border-gray-200"
      )}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      <div className="space-y-4">
        <Label
          htmlFor="file-upload"
          className="block text-lg font-medium cursor-pointer"
        >
          Drop up to {maxFiles} files here or click to upload
        </Label>
        <Input
          id="file-upload"
          type="file"
          className="hidden"
          onChange={handleChange}
          accept="image/*"
          multiple
          max={maxFiles}
        />
      </div>
    </Card>
  );
};