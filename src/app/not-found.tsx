import Link from "next/link";
import { Button } from "@/components/ui/button";
import { fontSans } from "@/lib/font";

export default function NotFound() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-center bg-stone-950 text-stone-50 p-4 ${fontSans.variable}`}>
      <div className="text-center max-w-md mx-auto">
        <div className="text-6xl font-bold mb-6 bg-gradient-to-r from-stone-50 to-stone-300 text-transparent bg-clip-text">
          404
        </div>
        <h2 className="text-2xl font-medium mb-4">Page not found</h2>
        <p className="text-stone-400 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/">
            <Button variant="primary">
              Return home
            </Button>
          </Link>
          <Link href="/chat">
            <Button variant="outline">
              Go to chat
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}