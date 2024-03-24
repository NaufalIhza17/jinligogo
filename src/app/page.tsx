"use client";
import React, { useState, useEffect } from "react";
import useWindowWidth from "@/hooks/useWindowWidth";
import {
  Navbar,
  Hero,
  Reviews,
  Versatile,
  Upgrade,
  Features,
  Footer,
} from "@/components";

export default function Home() {
  const windowWidth = useWindowWidth();
  const [pageMobile, setPageMobile] = useState(false);
  useEffect(() => {
    if (windowWidth < 1024) {
      setPageMobile(true);
    } else {
      setPageMobile(false);
    }
  }, [windowWidth]);
  if (pageMobile) {
    return (
      <section className="w-full h-screen flex justify-center items-center">
        page isn&apos;t available in screen width under 1024px
      </section>
    );
  } else {
    return (
      <main>
        <Navbar />
        <Hero />
        <Reviews />
        <Versatile />
        <Upgrade />
        <Features />
        <Footer />
      </main>
    );
  }
}
