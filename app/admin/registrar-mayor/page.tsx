// En app/admin/registrar-mayor/page.tsx
import { checkAdminAction } from "@/app/actions";
import SignupForm from "./RegisterElderForm";

export default async function SignupPage() {
  await checkAdminAction();

  return <SignupForm />;
}
