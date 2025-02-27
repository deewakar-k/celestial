import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full flex justify-center items-center bg-background bg-gradient-to-b from-transparent to-gray-50/5">
      <Image src="/Celestial.svg" alt="Celestial" width={1244} height={258} />
    </footer>
  );
}
