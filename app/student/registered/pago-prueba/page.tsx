import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import CheckoutButton from "@/components/checkout-button";

export default async function PricingPage() {
  const supabase = await createClient();

  // Check if user is authenticated
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/sign-in");
  }

  const userId = user.id;

  const plans = [
    {
      name: "Basic",
      price: 9.99,
      features: ["Feature 1", "Feature 2", "Feature 3"],
    },
    {
      name: "Pro",
      price: 19.99,
      features: ["All Basic features", "Feature 4", "Feature 5", "Feature 6"],
    },
    {
      name: "Enterprise",
      price: 49.99,
      features: ["All Pro features", "Feature 7", "Feature 8", "Priority Support"],
    },
  ];

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div key={plan.name} className="border rounded-lg p-6 shadow-md flex flex-col">
            <div className="mb-4">
              <h2 className="text-xl font-semibold">{plan.name}</h2>
              <p className="text-gray-600">${plan.price.toFixed(2)} / month</p>
            </div>
            <div className="flex-grow">
              <ul className="space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6">
              <CheckoutButton price={plan.price} userId={userId} productName={plan.name} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
