import SvgComponent from "@/assets/logo";
import {
  BoldPoppins,
  HeaderPoppins,
  ThinPoppins,
} from "../../../../utils/fonts";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid place-items-center h-screen">
      <div className="text-center flex flex-col gap-3 items-center w-full md:w-1/4 p-2">
      <label className={`${BoldPoppins.className} uppercase text-xs text-black/70`}>Ops, page not found</label>
        <h1 className={`text-6xl text-red-700 ${HeaderPoppins.className}`}>
          404
        </h1>
        <p className={`${BoldPoppins.className} uppercase text-sm text-black/70`}>
          We sorry to inform you that the url you attempting to access is not found!
        </p>
        <Link href={'/p/home'} className="text-sm p-1 bg-green-700 text-white w-1/2 rounded-full">Go to home</Link>
      </div>
    </main>
  );
}
