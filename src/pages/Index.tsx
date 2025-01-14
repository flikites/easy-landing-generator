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
type ModelType = "gpt-4o-mini" | "chatgpt-4o-latest" | "o1" | "o1-mini";

const Index = () => {
  const [activeMethod, setActiveMethod] = useState<UploadMethod>("file");
  const [cssCode, setCssCode] = useState("");
  const [url, setUrl] = useState("");
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [generationResult, setGenerationResult] = useState<any>(null);
  const [apiKey, setApiKey] = useState("");
  const [selectedModel, setSelectedModel] = useState<ModelType>("chatgpt-4o-latest");
  const { toast } = useToast();

  const processWithGPT = async (input: string, type: string, files?: File[]) => {
    console.log("Processing with GPT:", { input, type, model: selectedModel, filesCount: files?.length });
    
    if (!apiKey) {
      toast({
        title: "API Key Required",
        description: "Please enter your OpenAI API key to continue",
        variant: "destructive",
      });
      return;
    }

    try {
      // Prepare the messages array with the system message
      const messages = [
        {
          role: "system",
          content: `You are a landing page generator specialized in creating modern, responsive HTML/CSS code. 
                   Focus on conversion optimization, clear call-to-actions, and mobile-first design. 
                   Include semantic HTML5 elements and follow accessibility best practices.`,
        }
      ];

      // If there are files, convert them to base64 and add them to the message
      if (files && files.length > 0) {
        const userMessage: any = {
          role: "user",
          content: [
            { 
              type: "text", 
              text: `Generate a conversion-optimized landing page based on these images and the following input: ${input}. 
                    The page should include:
                    - A compelling hero section
                    - Clear value propositions
                    - Call-to-action buttons
                    - Responsive design for all screen sizes
                    - Modern, clean aesthetics
                    Return only the HTML/CSS code.`
            }
          ]
        };

        // Add image URLs to the content array
        for (const file of files) {
          const base64 = await new Promise((resolve) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.readAsDataURL(file);
          });

          userMessage.content.push({
            type: "image_url",
            image_url: {
              url: base64
            }
          });
        }

        messages.push(userMessage);
      } else {
        // If no files, just add the text message
        messages.push({
          role: "user",
          content: `Generate a conversion-optimized landing page based on this ${type}: ${input}. 
                   The page should include:
                   - A compelling hero section
                   - Clear value propositions
                   - Call-to-action buttons
                   - Responsive design for all screen sizes
                   - Modern, clean aesthetics
                   Return only the HTML/CSS code.`
        });
      }

      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: selectedModel,
          messages,
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

  const handleFileSelect = async (files: File[]) => {
    setSelectedFiles(files);
    toast({
      title: "Files Selected",
      description: `${files.length} file(s) selected and ready for processing.`,
    });
  };

  const handleGenerate = async () => {
    if (activeMethod === "file" && selectedFiles.length > 0) {
      await processWithGPT("Process these images", "images", selectedFiles);
    } else if (activeMethod === "code" && cssCode) {
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
                <SelectItem value="chatgpt-4o-latest">GPT-4O Latest (Best quality)</SelectItem>
                <SelectItem value="gpt-4o-mini">GPT-4O Mini (Faster)</SelectItem>
                <SelectItem value="o1">O1 (Experimental)</SelectItem>
                <SelectItem value="o1-mini">O1 Mini (Fast experimental)</SelectItem>
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