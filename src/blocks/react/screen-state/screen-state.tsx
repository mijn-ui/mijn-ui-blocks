import React from "react";
import { Button } from "@mijn-ui/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@mijn-ui/react";
import { Archive } from "lucide-react";

interface ScreenStateProps {
  title: string;
  description: string;
  onCancel: () => void;
  onCreate: () => void;
}

const ScreenState: React.FC<ScreenStateProps> = ({
  title,
  description,
  onCancel,
  onCreate,
}) => {
  return (
    <Card className="flex w-full max-w-screen-sm flex-col items-center justify-center space-y-3 rounded-2xl bg-background-alt p-6 text-center sm:space-y-6">
      <CardHeader className="p-0">
        <Archive className="size-10 text-foreground sm:size-12" />
      </CardHeader>
      <CardContent unstyled className="space-y-1">
        <CardTitle
          unstyled
          className="text-lg font-medium text-foreground sm:text-xl">
          {title}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>

      <CardFooter className="gap-3">
        <Button onClick={onCancel}>Cancel</Button>
        <Button variant="primary" onClick={onCreate}>
          Create New File
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ScreenState;
