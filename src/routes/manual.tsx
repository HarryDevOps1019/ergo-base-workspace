import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/manual")({
  component: () => <div className="min-h-screen bg-background text-foreground flex items-center justify-center"><p className="text-muted-foreground">User Manual page coming soon.</p></div>,
});
