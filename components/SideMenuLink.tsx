import Link from "next/link";

export default function SideMenuLink({children}:{children: string}) {
    return (
        <li>
            <Link href="/">{children}</Link>
        </li>
    )
}