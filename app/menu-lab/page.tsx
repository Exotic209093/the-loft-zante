import type { Metadata } from "next";
import MenuExperiment from "./MenuExperiment";
import "./menu-lab.css";

export const metadata: Metadata = {
  title: "Drinks menu experiments | The Loft",
  robots: { index: false, follow: false },
};

export default function MenuLabPage() {
  return <MenuExperiment />;
}
