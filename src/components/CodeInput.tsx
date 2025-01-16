import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface CodeInputProps {
  value: string;
  onChange: (value: string) => void;
  onGenerate: () => void;
}

export const CodeInput = ({ value, onChange, onGenerate }: CodeInputProps) => {
  return (
    <Card className="p-6">
      <Label htmlFor="code-input" className="block text-lg font-medium mb-4">
        Enter CSS code
      </Label>
      <Textarea
        id="code-input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Paste your CSS code here..."
        className="min-h-[200px] font-mono"
      />
      <Button onClick={onGenerate} className="w-full mt-4">
        Continue
      </Button>
    </Card>
  );
};