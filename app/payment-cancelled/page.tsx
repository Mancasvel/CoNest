import Link from "next/link"

export default function PaymentCancelledPage() {
  return (
    <div className="container mx-auto py-12 flex flex-col items-center justify-center min-h-[70vh]">
      <div className="bg-red-100 rounded-full p-4 mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-red-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <h1 className="text-3xl font-bold text-center mb-4">Payment Cancelled</h1>
      <p className="text-center text-gray-600 mb-8">Your payment was cancelled. No charges were made.</p>
      <div className="flex gap-4">
        <button >
          <Link href="/pricing">Return to Pricing</Link>
        </button>
        <button>
          <Link href="/dashboard">Go to Dashboard</Link>
        </button>
      </div>
    </div>
  )
}

