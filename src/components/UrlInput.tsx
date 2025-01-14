import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

interface UrlInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const UrlInput = ({ value, onChange }: UrlInputProps) => {
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
    </Card>
  );
};