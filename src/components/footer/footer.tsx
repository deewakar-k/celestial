import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full flex justify-center items-center bg-background bg-gradient-to-b from-transparent to-gray-50/5 overflow-hidden">
      <div className="w-full relative">
        <Image
          src="/Celestial.svg"
          alt="Celestial"
          width={1244}
          height={258}
          className="w-full object-cover object-center min-w-full"
          style={{
            width: "100vw",
            maxWidth: "none",
            marginLeft: "50%",
            transform: "translateX(-50%)",
          }}
        />
      </div>
    </footer>
  );
}
