import FormSignUp from "@/components/FormSignup";

export default async function Signup() {
  
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="max-w-md w-full space-y-8 p-10 bg-gray-800 rounded-lg shadow-md">
          <div>
            <h2 className="text-center text-3xl font-bold">Create a new account</h2>
          </div>
          <FormSignUp />
        </div>
      </div>
    </>
  );
}
