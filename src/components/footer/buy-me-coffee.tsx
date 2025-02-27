import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { CoolMode } from "../magicui/cool-mode";

export default function BuyMeCoffee() {
  return (
    <div className="flex items-center justify-center gap-2">
      <CoolMode>
        <Button variant="outline" size="icon">
          <Link href="https://buymeacoffee.com/dazaii" target="_blank">
            <Image
              src="/icecream.gif"
              alt="Buy me some ice cream"
              width={20}
              height={20}
            />
          </Link>
        </Button>
      </CoolMode>
    </div>
  );
}
