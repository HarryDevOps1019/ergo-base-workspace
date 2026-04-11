import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/customizer")({
  component: () => <div className="min-h-screen bg-background text-foreground flex items-center justify-center"><p className="text-muted-foreground">Customization Studio coming soon.</p></div>,
});
