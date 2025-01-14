import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface UrlInputProps {
  value: string;
  onChange: (value: string) => void;
  onGenerate: () => void;
}

export const UrlInput = ({ value, onChange, onGenerate }: UrlInputProps) => {
  return (
    <Card className="p-6">
      <Label htmlFor="url-input" className="block text-lg font-medium mb-4">
        Enter website URL
      </Label>
      <Input
        id="url-input"
        type="url"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="https://example.com"
        className="w-full"
      />
      <Button onClick={onGenerate} className="w-full mt-4">
        Generate Landing Page
      </Button>
    </Card>
  );
};