import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="px-5 pt-6">
        <h1 className="text-[8.2vw] leading-[0.85] font-medium tracking-[-0.05em] whitespace-nowrap">
          Alejandro Bernal
        </h1>
      </main>
    </>
  );
}
