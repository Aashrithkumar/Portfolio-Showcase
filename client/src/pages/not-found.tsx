import { FileX, Home } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-4">
      <div className="relative">
        <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
        <div className="relative z-10 glass-panel border border-white/10 rounded-3xl p-12 text-center max-w-md w-full shadow-2xl">
          <div className="w-20 h-20 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <FileX className="w-10 h-10 text-destructive" />
          </div>
          
          <h1 className="text-4xl font-bold font-display mb-3">404</h1>
          <h2 className="text-xl font-semibold mb-4 text-white">Page Not Found</h2>
          
          <p className="text-muted-foreground mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          
          <Link href="/">
            <Button size="lg" className="w-full h-12 rounded-xl font-semibold bg-primary hover:bg-primary/90 text-primary-foreground">
              <Home className="w-5 h-5 mr-2" />
              Return Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
