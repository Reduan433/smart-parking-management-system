 "use client";
import Link from "next/link";
import { useState } from "react";

const parkingSlots = [
  { id: "A01", type: "Compact", location: "Ground Floor", price: 50, status: "Available" },
  { id: "A02", type: "Standard", location: "Ground Floor", price: 70, status: "Available" },
  { id: "B01", type: "Premium", location: "Level 1", price: 100, status: "Available" },
];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

const filteredSlots = parkingSlots.filter((slot) =>
  `${slot.id} ${slot.type} ${slot.location}`
    .toLowerCase()
    .includes(searchTerm.toLowerCase())
);
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          Park<span className="text-emerald-400">Smart</span>
        </Link>
        <div className="hidden gap-8 text-sm text-slate-300 md:flex">
          <a href="#home" className="hover:text-emerald-400">Home</a>
          <a href="#parking" className="hover:text-emerald-400">Parking Slots</a>
          <a href="#features" className="hover:text-emerald-400">Features</a>
        </div>
        <Link
          href="#parking"
          className="rounded-full bg-emerald-400 px-5 py-2.5 font-semibold text-slate-950 hover:bg-emerald-300"
        >
          Find Parking
        </Link>
      </nav>

      <section id="home" className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300">
            ● Smart Parking Management System
          </p>
          <h1 className="text-5xl font-extrabold leading-tight md:text-7xl">
            Parking made <span className="text-emerald-400">simple.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
            Find available parking spaces, explore your options, and plan your
            parking experience from one convenient place.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link href="#parking" className="rounded-xl bg-emerald-400 px-6 py-3.5 font-bold text-slate-950 hover:bg-emerald-300">
              Explore Parking →
            </Link>
            <a href="#features" className="rounded-xl border border-slate-700 px-6 py-3.5 font-semibold hover:bg-slate-900">
              Learn More
            </a>
          </div>
          <div className="mt-12 flex gap-10">
            <div><p className="text-3xl font-bold">24/7</p><p className="mt-1 text-sm text-slate-400">Easy access</p></div>
            <div><p className="text-3xl font-bold">Smart</p><p className="mt-1 text-sm text-slate-400">Slot discovery</p></div>
            <div><p className="text-3xl font-bold">Simple</p><p className="mt-1 text-sm text-slate-400">Booking journey</p></div>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-3xl border border-slate-700 bg-slate-900 p-6 shadow-2xl shadow-emerald-950/30 md:p-8">
            <div className="flex items-center justify-between">
              <div><p className="text-sm text-slate-400">Parking overview</p><h2 className="mt-1 text-2xl font-bold">Find your spot</h2></div>
              <span className="rounded-lg bg-emerald-400/10 px-3 py-2 text-sm text-emerald-300">Live-ready UI</span>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-3">
              {Array.from({ length: 9 }, (_, i) => (
                <div key={i} className={`flex aspect-square flex-col items-center justify-center rounded-xl border ${i === 4 ? "border-rose-400/40 bg-rose-400/10" : "border-emerald-400/30 bg-emerald-400/10"}`}>
                  <span className={`text-2xl ${i === 4 ? "text-rose-300" : "text-emerald-300"}`}>P</span>
                  <span className="mt-1 text-xs text-slate-300">{`S-${String(i + 1).padStart(2, "0")}`}</span>
                  <span className={`mt-1 text-[10px] ${i === 4 ? "text-rose-300" : "text-emerald-300"}`}>{i === 4 ? "Occupied" : "Available"}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 flex justify-between border-t border-slate-800 pt-5 text-sm">
              <span className="text-slate-400">Illustrative slot layout</span>
              <span className="text-emerald-300">● Available</span>
            </div>
          </div>
          <div className="absolute -right-3 -top-5 rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 shadow-xl md:-right-5">
            <p className="text-xs text-slate-400">Parking status</p>
            <p className="mt-1 font-bold text-emerald-300">Easy to explore ✓</p>
          </div>
        </div>
      </section>

      <section id="parking" className="bg-slate-900/70 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div><p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">Explore spaces</p><h2 className="mt-3 text-3xl font-bold md:text-4xl">Parking options</h2><p className="mt-3 text-slate-400">Sample slots for the initial interface.</p><div className="mt-6">
  <input
    type="text"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    placeholder="Search by slot ID, type, or floor..."
    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-emerald-400 md:max-w-md"
  />
</div></div>
            <span className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300">3 sample slots</span>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {filteredSlots.map((slot) => (
              <article key={slot.id} className="rounded-2xl border border-slate-800 bg-slate-950 p-6 transition hover:border-emerald-400/50">
                <div className="flex items-center justify-between"><span className="rounded-lg bg-slate-800 px-3 py-2 text-sm font-bold">{slot.id}</span><span className="text-sm text-emerald-300">● {slot.status}</span></div>
                <h3 className="mt-5 text-xl font-bold">{slot.type} Parking</h3>
                <p className="mt-2 text-sm text-slate-400">{slot.location}</p>
                <p className="mt-6 text-2xl font-bold">৳{slot.price}<span className="text-sm font-normal text-slate-400"> / hour</span></p>
                <button type="button" onClick={() => window.alert("Booking will be enabled after database integration.")} className="mt-6 w-full rounded-xl bg-emerald-400 px-4 py-3 font-bold text-slate-950 hover:bg-emerald-300">Explore Slot</button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">Why ParkSmart?</p>
        <h2 className="mt-3 text-3xl font-bold md:text-4xl">A smarter parking experience</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[{ icon: "⌕", title: "Find parking", desc: "Explore parking options in one place." }, { icon: "▦", title: "Organized slots", desc: "View parking spaces in a clear layout." }, { icon: "◷", title: "Simple booking", desc: "Prepare for a streamlined booking flow." }].map((feature) => (
            <div key={feature.title} className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <span className="text-3xl text-emerald-400">{feature.icon}</span>
              <h3 className="mt-4 text-xl font-bold">{feature.title}</h3>
              <p className="mt-3 leading-7 text-slate-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-slate-800 px-6 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} ParkSmart · Smart Parking Management System · Capstone Project
      </footer>
    </main>
  );
}