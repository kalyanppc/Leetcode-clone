// app/api/auth/signin/page.tsx

import FormSignIn from "@/components/FormSignIn";

export default function SignInPage() {
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="max-w-md w-full space-y-8 p-10 bg-gray-800 rounded-lg shadow-md">
        <div>
          <h2 className="text-center text-3xl font-bold">Sign in to your account</h2>
        </div>
        <FormSignIn />
      </div>
    </div>
  );
}
