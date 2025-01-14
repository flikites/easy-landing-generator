import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface CodeInputProps {
  value: string;
  onChange: (value: string) => void;
  onGenerate: () => void;
}

export const CodeInput = ({ value, onChange, onGenerate }: CodeInputProps) => {
  return (
    <Card className="p-6">
      <Label htmlFor="css-code" className="block text-lg font-medium mb-4">
        Paste your CSS code
      </Label>
      <Textarea
        id="css-code"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="min-h-[200px] font-mono"
        placeholder="Paste your CSS code here..."
      />
      <Button onClick={onGenerate} className="w-full mt-4">
        Generate Landing Page
      </Button>
    </Card>
  );
};