import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-4">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <p className="text-black font-semibold text-3xl">
         Hello Kenato 
        </p>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p className="text-black dark:text-white font-semibold text-xl">
          This is a footer
        </p>
      </footer>
    </div>
  );
}
