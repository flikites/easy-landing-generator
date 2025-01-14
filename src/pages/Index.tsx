import { useState } from "react";
import { UploadToggle } from "@/components/UploadToggle";
import { FileUpload } from "@/components/FileUpload";
import { CodeInput } from "@/components/CodeInput";
import { UrlInput } from "@/components/UrlInput";
import { ResultCard } from "@/components/ResultCard";
import { useToast } from "@/hooks/use-toast";

type UploadMethod = "file" | "code" | "url";

const Index = () => {
  const [activeMethod, setActiveMethod] = useState<UploadMethod>("file");
  const [cssCode, setCssCode] = useState("");
  const [url, setUrl] = useState("");
  const [generationResult, setGenerationResult] = useState<any>(null);
  const { toast } = useToast();

  const handleFileSelect = async (file: File) => {
    // Here we would handle the file upload and API call
    toast({
      title: "Processing file",
      description: "Your file is being processed...",
    });
  };

  const handleGenerate = async () => {
    // Here we would handle the API call based on the active method
    toast({
      title: "Generating landing page",
      description: "Please wait while we process your request...",
    });
  };

  const handleDownload = () => {
    // Here we would handle the file download
    toast({
      title: "Download started",
      description: "Your landing page is being downloaded...",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Landing Page Generator</h1>
          <p className="text-gray-600">
            Transform your design assets into a conversion-optimized landing page
          </p>
        </div>

        <UploadToggle activeMethod={activeMethod} onMethodChange={setActiveMethod} />

        <div className="transition-all duration-300">
          {activeMethod === "file" && <FileUpload onFileSelect={handleFileSelect} />}
          {activeMethod === "code" && (
            <CodeInput value={cssCode} onChange={setCssCode} />
          )}
          {activeMethod === "url" && <UrlInput value={url} onChange={setUrl} />}
        </div>

        {generationResult && (
          <ResultCard
            generationDetails={{
              timestamp: new Date().toLocaleString(),
              inputType: activeMethod,
              success: true,
            }}
            onDownload={handleDownload}
          />
        )}
      </div>
    </div>
  );
};

export default Index;