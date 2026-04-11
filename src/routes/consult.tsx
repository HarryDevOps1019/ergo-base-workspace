import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/consult")({
  component: () => <div className="min-h-screen bg-background text-foreground flex items-center justify-center"><p className="text-muted-foreground">Free consultation page coming soon.</p></div>,
});
