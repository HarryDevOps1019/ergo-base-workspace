import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/corporate")({
  component: () => <div className="min-h-screen bg-background text-foreground flex items-center justify-center"><p className="text-muted-foreground">Corporate page coming soon.</p></div>,
});
