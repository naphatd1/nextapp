// localhost:4000/about

import { Metadata } from "next";
import AboutContent from "../ui/AboutContent";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "เกี่ยวกับเรา",
  description: "ระบบจัดการข่าวสาร",
};

async function getData() {
  // const res = await fetch("https://api.codingthailand.com/api/version"); // Static site generation (SSG)
  // const res = await fetch("https://api.codingthailand.com/api/version", { // Incremental Static Regeneration (ISR)
  //   next: { revalidate: 10 }, // ดึงข้อมูลมาใหม่ทุกๆ 10 วินาที
  // });
  const res = await fetch("https://api.codingthailand.com/api/version", { //Server-side rendering (SSR)
    cache: "no-store", // ไม่ cache ข้อมูลจะอัปเดตทันที
  });

  if (res.status == 404) {
    notFound();
  }
  
  if (!res.ok) {
    throw new Error("ไม่สามารถดึงข้อมูลจาก Server ได้");
  }

  return res.json();
}

export default async function AboutPage() {
  const data = await getData(); 

  return (
    <>
       <AboutContent data={data} />
    </>
  );
}