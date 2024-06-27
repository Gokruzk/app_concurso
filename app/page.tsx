import Image from "next/image";
import Link from "next/link";
import LinkButton from "@/components/LInkButton";


export default function Home() {
  return (
    <main className="bg-gray-50 dark:bg-gray-900">
      <div>
        <LinkButton href="/login"  style="m-5 bg-red-500 sm:bg-orange-400 text-center hover:bg-red-200 py-5 px-8 font-bold text-white rounded" title="Login"/>
    
        <br />
        <button className=" m-5 bg-red-500 sm:bg-orange-400 text-center hover:bg-red-200 py-5 px-8 font-bold text-white rounded">
            ACERCA DE
        </button>
      </div>
    </main>
  );
}
