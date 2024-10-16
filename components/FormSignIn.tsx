"use client";

import { signIn } from "next-auth/react";

export default function FormSignIn() {
      
      const handleSignIn = async (formData: FormData) => {
            
            const clgId = Number(formData.get("clgId"));
            const password = formData.get("password")?.toString();

            await signIn("credentials", { clgId, password, callbackUrl: "/" });
      };

      return (
            <>
                  <form action={handleSignIn} className="mt-8 space-y-6">
                        <div className="rounded-md shadow-sm -space-y-px">
                              <div>
                                    <label htmlFor="clgId" className="sr-only">College ID</label>
                                    <input
                                    id="clgId"
                                    name="clgId"
                                    type="number"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="College ID"
                                    />
                              </div>
                              <div>
                                    <label htmlFor="password" className="sr-only">Password</label>
                                    <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Password"
                                    />
                              </div>
                        </div>

                        <div>
                              <button
                              type="submit"
                              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                              >
                              Sign In
                              </button>
                        </div>
                  </form>
            </>
      )
}