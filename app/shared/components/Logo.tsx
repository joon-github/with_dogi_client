import Image from "next/image";
import Link from "next/link";

interface Props {
  href: string;
  width: number;
}

export default function Logo({ href = "/", width = 200 }: Props) {
  return (
    <Link href={href}>
      <Image
        src="/logo.png"
        alt="Vercel Logo"
        width={width}
        height={1}
        priority
      />
    </Link>
  );
}
