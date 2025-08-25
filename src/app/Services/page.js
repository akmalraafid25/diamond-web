import Image from "next/image";
import ServicePage from "@/pages/ServicePage";

export const metadata = {
  title: "Services || Diamond Express",
  description: "Your reliable solution",
};

export default function Service() {
  return (
    <ServicePage/>
  );
}