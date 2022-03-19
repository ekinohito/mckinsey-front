import Link from "next/link";

function Logo({countdown}:{countdown: number}) {
    if (countdown <= 0) return null
    return (
        <>
            5 денег
            <span className="opacity-60 mx-3">
                <Logo countdown={countdown - 1}/>
            </span>
        </>
    )
}

export default function Header() {
    return <div className="sticky top-0 z-10 w-full bg-[#011631] border-[#375974] border-b-2 flex flex-row items-baseline justify-between p-4 sm:px-20 text-gray-100">
        <Link href="/" passHref>
            <a className="text-white text-lg font-bold mx-6 whitespace-nowrap overflow-hidden">
                <Logo countdown={7}/>
            </a>
        </Link>
        <div className="space-x-6">
            <Link href="/">Поиск</Link>
            <Link href="/favorites">Избранное</Link>
            <Link href="/">Настройки</Link>
        </div>
    </div>
}