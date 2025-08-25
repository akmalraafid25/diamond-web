import Image from "next/image";
import AboutPage from "@/pages/AboutPage";

export const metadata = {
  title: "About || Diamond Express",
  description: "Your reliable solution",
};

export default function About() {
  return (
    <AboutPage/>
  );
}