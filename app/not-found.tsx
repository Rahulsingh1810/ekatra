import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] p-6 text-center">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <h2 className="text-2xl font-bold mb-2">Page Not Found</h2>
      <p className="text-gray-600 mb-6 max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <div className="flex gap-4">
        <Button asChild className="bg-red-600 hover:bg-red-700 text-white">
          <Link href="/">Return Home</Link>
        </Button>
        <Button asChild variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  )
}
