import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Page = () => {
  return (
    <main>
      <header className="py-4 md:py-6">
        <nav className="max-w-screen-lg mx-auto flex items-center justify-between px-4 ">
          <Link href={"/"} className="font-semibold tracking-tight text-xl">
            cognition
          </Link>
          <div className="flex items-center gap-x-2 md:gap-x-4">
            <Link href={"/sign-in"}>
              <Button variant={"ghost"}>Login</Button>
            </Link>
            <Link href={"/sign-up"}>
              <Button>Get Started</Button>
            </Link>
          </div>
        </nav>
      </header>
      <section className="px-4 mt-10 max-w-screen-xl mx-auto lg:mt-8">
        <h1 className="text-5xl lg:text-7xl font-semibold tracking-tight md:w-3/5 lg:max-w-screen-md">
          Get answers. Find inspiration. Be more productive.
        </h1>
        <p className="mt-4 font-medium md:w-4/5 max-w-2xl">
          Free to use. Easy to try. Just ask and Cognition can help with
          writing, learning, brainstorming, and more.
        </p>
        <Link href={"/sign-up"}>
          <Button rightIcon={<ArrowRight size={20} />} className="mt-4">
            Create an Account
          </Button>
        </Link>
      </section>
    </main>
  );
};

export default Page;
