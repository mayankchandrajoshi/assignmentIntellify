import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { GrLinkNext } from "react-icons/gr";
import { GoPasskeyFill } from "react-icons/go";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-center items-center font-[family-name:var(--font-geist-sans)] bg-background p-5">
      <div className="w-full max-w-2xl flex flex-col justify-center items-center gap-5">
        <h1 className="text-5xl text-center font-bold">
          Welcome to our app
        </h1>
        <p className="text-center">
          Use Charts to track data
        </p>
        <section className="w-full max-w-80 flex flex-col gap-5">
          <Link href="/auth/login" className="w-full flex flex-row items-center justify-center gap-2 p-2 px-5 rounded-md bg-indigo-600 hover:bg-indigo-500 duration-500">
            <GoPasskeyFill/>
            <h2>Login with Email</h2>
          </Link>
          <button className="w-full flex flex-row items-center justify-center gap-2 bg-neutral-800 hover:bg-neutral-700 duration-500 p-2 px-5 rounded-md">
            <FcGoogle className="text-xl"/>
            <h2>Login with Google</h2>
          </button>
          <Link href="/auth/register" className="w-full flex flex-row items-center justify-center gap-2 p-2 px-5 rounded-md text-blue-500 hover:text-blue-400 duration-500">
            <h2 className="text-sm">Create new account</h2>
            <GrLinkNext />
          </Link>
        </section>
      </div>
    </div>
  );
}
