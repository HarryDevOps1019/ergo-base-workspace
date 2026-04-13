import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/pain-relief/$type")({
  component: PainReliefPage,
});

function PainReliefPage() {
  const { type } = Route.useParams();
  const title = type.split("-").map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-foreground mb-4">{title}</h1>
        <p className="text-muted-foreground">Pain relief content coming soon.</p>
      </div>
    </div>
  );
}
