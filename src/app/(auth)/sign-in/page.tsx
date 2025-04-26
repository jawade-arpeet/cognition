import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const metadata = {
  title: "Cognition | Sign In",
};

const Page = () => {
  return (
    <>
      <Link href={"/"} className="text-xl font-semibold">
        cognition
      </Link>
      <h4 className="text-2xl mt-1 font-semibold tracking-tight">Login</h4>
      <p className="text-sm mt-0.5 text-stone-500">
        Enter email and password to continue
      </p>
      <form className="flex items-center flex-col gap-y-1 mt-3">
        <Input placeholder="Email" name="email" type="email" />
        <Input placeholder="Password" name="password" type="password" />
        <Button type="submit" className="mt-2" fullWidth={true}>
          Sign Up
        </Button>
        <p className="inline-flex items-center gap-x-1 text-sm text-stone-400 mt-2">
          Don't have an account?
          <Link
            href="/sign-up"
            className="underline underline-offset-4 text-stone-50"
          >
            Sign Up
          </Link>
        </p>
      </form>
    </>
  );
};

export default Page;
