import Image from "next/image";
  import Link from "next/link";


export default function Home() {
  return (
    <main className="bg-gray-50 dark:bg-gray-900">
      
      <div>
      <button className=" m-5 bg-red-500 sm:bg-orange-400 text-center hover:bg-red-200 py-5 px-8 font-bold text-white rounded">
            ¡EMPEZAR!
        </button>
        <br />
        <button className=" m-5 bg-red-500 sm:bg-orange-400 text-center hover:bg-red-200 py-5 px-8 font-bold text-white rounded">
            ACERCA DE
        </button>
      </div>
    </main>
  );
}
