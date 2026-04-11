import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/pro-station")({
  component: ProStationPage,
});

function ProStationPage() {
  return <div className="min-h-screen bg-background text-foreground flex items-center justify-center"><p className="text-muted-foreground">Pro Station page coming soon.</p></div>;
}
