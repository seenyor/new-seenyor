/** @format */

import PageTitle from "@/components/dashboard/pageTitle";

export default function Home() {
  return (
    <div className="flex flex-col gap-5  w-full">
      <PageTitle title="Dashboard" />
      <section className="grid grid-cols-1  gap-4 transition-all lg:grid-cols-2">
        <h3>hi dashboard</h3>
      </section>
    </div>
  );
}
