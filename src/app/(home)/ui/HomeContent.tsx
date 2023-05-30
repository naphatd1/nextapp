"use client"

import { AppFeature } from "./AppFeature";
import { AppHero } from "./AppHero";

export default function HomeContent() {
  return (
    <>
      <AppHero />
      <AppFeature title="บริการของเรา" description="รายละเอียดสินค้า" />
    </>
  );
}
