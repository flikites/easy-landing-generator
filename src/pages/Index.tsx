import { useState } from "react";
import { UploadToggle } from "@/components/UploadToggle";
import { FileUpload } from "@/components/FileUpload";
import { CodeInput } from "@/components/CodeInput";
import { UrlInput } from "@/components/UrlInput";
import { ResultCard } from "@/components/ResultCard";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type UploadMethod = "file" | "code" | "url";
type ModelType = "gpt-4" | "gpt-4-turbo-preview" | "gpt-3.5-turbo";

const Index = () => {
  const [activeMethod, setActiveMethod] = useState<UploadMethod>("file");
  const [cssCode, setCssCode] = useState("");
  const [url, setUrl] = useState("");
  const [generationResult, setGenerationResult] = useState<any>(null);
  const [apiKey, setApiKey] = useState("");
  const [selectedModel, setSelectedModel] = useState<ModelType>("gpt-4");
  const { toast } = useToast();

  const processWithGPT = async (input: string, type: string) => {
    console.log("Processing with GPT:", { input, type, model: selectedModel });
    
    if (!apiKey) {
      toast({
        title: "API Key Required",
        description: "Please enter your OpenAI API key to continue",
        variant: "destructive",
      });
      return;
    }

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: selectedModel,
          messages: [
            {
              role: "system",
              content: `You are a landing page generator specialized in creating modern, responsive HTML/CSS code. 
                       Focus on conversion optimization, clear call-to-actions, and mobile-first design. 
                       Include semantic HTML5 elements and follow accessibility best practices.`,
            },
            {
              role: "user",
              content: `Generate a conversion-optimized landing page based on this ${type}: ${input}. 
                       The page should include:
                       - A compelling hero section
                       - Clear value propositions
                       - Call-to-action buttons
                       - Responsive design for all screen sizes
                       - Modern, clean aesthetics
                       Return only the HTML/CSS code.`,
            },
          ],
          temperature: 0.7,
        }),
      });

      if (!response.ok) {
        throw new Error(`API request failed: ${response.statusText}`);
      }

      const data = await response.json();
      console.log("GPT Response:", data);

      setGenerationResult({
        timestamp: new Date().toLocaleString(),
        inputType: type,
        success: true,
        code: data.choices[0].message.content,
      });

      toast({
        title: "Generation Complete",
        description: "Your landing page has been generated successfully!",
      });
    } catch (error) {
      console.error("Error processing with GPT:", error);
      toast({
        title: "Generation Failed",
        description: error instanceof Error ? error.message : "An error occurred",
        variant: "destructive",
      });
    }
  };

  const handleFileSelect = async (file: File) => {
    toast({
      title: "Processing file",
      description: "Your file is being processed...",
    });

    const reader = new FileReader();
    reader.onload = async (e) => {
      const content = e.target?.result as string;
      await processWithGPT(content, "file");
    };
    reader.readAsText(file);
  };

  const handleGenerate = async () => {
    if (activeMethod === "code" && cssCode) {
      await processWithGPT(cssCode, "CSS code");
    } else if (activeMethod === "url" && url) {
      await processWithGPT(url, "URL");
    }
  };

  const handleDownload = () => {
    if (!generationResult?.code) return;

    const blob = new Blob([generationResult.code], { type: "text/html" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "landing-page.html";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);

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

        <div className="space-y-4">
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-medium">Select Model</label>
            <Select value={selectedModel} onValueChange={(value: ModelType) => setSelectedModel(value)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a model" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="gpt-4">GPT-4 (Best quality)</SelectItem>
                <SelectItem value="gpt-4-turbo-preview">GPT-4 Turbo (Faster)</SelectItem>
                <SelectItem value="gpt-3.5-turbo">GPT-3.5 Turbo (Fastest)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="mb-4">
            <input
              type="password"
              placeholder="Enter your OpenAI API key"
              className="w-full p-2 border rounded"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
            />
            <p className="text-sm text-gray-500 mt-1">
              This is temporary storage. In production, use secure methods to handle API keys.
            </p>
          </div>
        </div>

        <UploadToggle activeMethod={activeMethod} onMethodChange={setActiveMethod} />

        <div className="transition-all duration-300">
          {activeMethod === "file" && <FileUpload onFileSelect={handleFileSelect} />}
          {activeMethod === "code" && (
            <CodeInput value={cssCode} onChange={setCssCode} onGenerate={handleGenerate} />
          )}
          {activeMethod === "url" && (
            <UrlInput value={url} onChange={setUrl} onGenerate={handleGenerate} />
          )}
        </div>

        {generationResult && (
          <ResultCard
            generationDetails={{
              timestamp: generationResult.timestamp,
              inputType: generationResult.inputType,
              success: generationResult.success,
            }}
            onDownload={handleDownload}
          />
        )}
      </div>
    </div>
  );
};

export default Index;