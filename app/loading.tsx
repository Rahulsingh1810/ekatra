import LoadingSpinner from "@/components/loading-spinner"

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh]">
      <LoadingSpinner size="large" />
      <p className="mt-4 text-lg font-medium text-gray-700">Loading Ekatra Care...</p>
    </div>
  )
}
