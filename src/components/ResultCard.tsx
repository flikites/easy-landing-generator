import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download } from "lucide-react";

interface ResultCardProps {
  generationDetails: {
    timestamp: string;
    inputType: string;
    success: boolean;
  };
  onDownload: () => void;
}

export const ResultCard = ({ generationDetails, onDownload }: ResultCardProps) => {
  return (
    <Card className="p-6 mt-8 space-y-4">
      <h3 className="text-xl font-semibold">Generation Details</h3>
      <div className="space-y-2">
        <p>Generated at: {generationDetails.timestamp}</p>
        <p>Input type: {generationDetails.inputType}</p>
        <p>Status: {generationDetails.success ? "Success" : "Failed"}</p>
      </div>
      <Button onClick={onDownload} className="w-full">
        <Download className="mr-2 h-4 w-4" />
        Download Landing Page
      </Button>
    </Card>
  );
};