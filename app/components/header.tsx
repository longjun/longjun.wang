import Link from "next/link"
import Image from 'next/image'

export function Header() {
  return (
    <header className="flex justify-center my-8">
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="longjun.wang"
          width={48}
          height={48}
          priority
        ></Image>
      </Link>
    </header>
  )
}
