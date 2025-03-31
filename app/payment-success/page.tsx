import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import Link from "next/link"
import { createClient } from "@/utils/supabase/server";


export default async function PaymentSuccessPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser() ;

  if (!user) {
    redirect("/sign-in")
  }

  return (
    <div className="container mx-auto py-12 flex flex-col items-center justify-center min-h-[70vh]">
      <div className="bg-green-100 rounded-full p-4 mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-green-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <h1 className="text-3xl font-bold text-center mb-4">Payment Successful!</h1>
      <p className="text-center text-gray-600 mb-8">
        Thank you for your purchase. Your subscription has been activated.
      </p>
      <button>
        <Link href="/dashboard">Go to Dashboard</Link>
      </button>
    </div>
  )
}

