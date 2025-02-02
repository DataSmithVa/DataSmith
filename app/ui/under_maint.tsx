import Image from "next/image";
import logo from "@/public/images/DataSmith_Logo_v_2.1.svg";

export default function UnderMaint() {
  return (
    <main className="grid h-screen place-items-center">
      <div className="grid m-auto place-items-center w-3/4 md:w-1/4 p-10 bg-slate-300 rounded-md text-center drop-shadow-xl">
        <Image src={logo} alt="Logo" width={500} height={500}  className="w-3/4"/>
        <h1 className=" text-red-500 p-4 text-md"> Site is currently under maintenence</h1>
        <h3 className="text-sm text-slate-500">If you have any questions please reach out to</h3>
        <h3 className=" font-semibold p-2 text-slate-900">inquiries@datasmithva.com</h3>
      </div>
    </main>
  );
}