import React from "react";
import Head from "next/head";
import Navbar from "./navbar";

export const siteTitle = "Album-a-Day";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Head>
        <meta
          name="description"
          content="Album-a-Day: A collection of albums"
        />
        <title>{siteTitle}</title>
      </Head>
      <main>
        <div className="w-screen h-screen justify-between bg-neutral-900 font-mono text-white flex flex-col">
          <Navbar />
          <div className="flex-grow content-center">{children}</div>
        </div>
      </main>
    </div>
  );
}
