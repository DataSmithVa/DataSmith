import Link from "next/link";
import clsx from "clsx";

export default function NotFound() {
  return (
    <main className="grid h-screen place-items-center">
      <div className="mx-auto grid w-1/3 place-items-center gap-3 rounded-lg bg-slate-400 px-10 py-5 text-center drop-shadow-xl">
        <h2 className="font-poppins text-6xl font-black tracking-wides text-slate-50">
          4 0 4
        </h2>
        <h2 className="font-poppins text-2xl font-light text-stone-700">
          Page Not Found
        </h2>
        <p className="pb-4 font-poppins font-light text-stone-700">
          Seems like this page doesnt exist..
        </p>
        <Link
          href="/"
          className={clsx(
            "hidden rounded-full border-2 border-slate-50 bg-slate-50 px-4 py-1 font-poppins text-slate-500 hover:border-slate-500 hover:bg-slate-500 hover:text-slate-200 md:block",
          )}
        >
          Go Back
        </Link>
      </div>
    </main>
  );
}