import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";

export function LoadingButton({
  isLoading,
  children,
}: {
  isLoading: boolean;
  children: React.ReactNode;
}) {
  return (
    <Button
      className="flex gap-1 items-center "
      disabled={isLoading}
      type="submit"
    >
      {isLoading && <Loader2 className="animate-spin" />}
      {isLoading ? "Uploading" : "Uploaded"}
      Submit
    </Button>
  );
}
