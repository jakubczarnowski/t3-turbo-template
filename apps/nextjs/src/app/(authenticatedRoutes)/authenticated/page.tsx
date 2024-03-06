"use client";

import { supabase } from "@acme/api";

import { Button } from "~/components/ui/button";
import { api } from "~/trpc/react";

const AuthenticatedExample = () => {
  const { data } = api.auth.getProfile.useQuery();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center ">
      <div className="container flex flex-col items-center justify-center gap-12">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          Authenticated Route Example
        </h1>
        <div className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20">
          <h3 className="text-2xl font-bold">User Information</h3>
          <div className="text-lg">Email: {data?.email}</div>
          <div className="text-lg">Name: {data?.fullName}</div>
        </div>
        <Button onClick={() => supabase().auth.signOut()} className="mt-4">
          Logout
        </Button>
      </div>
    </main>
  );
};

export default AuthenticatedExample;
