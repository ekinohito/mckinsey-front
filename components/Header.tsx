import Link from "next/link";

export default function Header() {
    return <div className="sticky top-0 z-10 w-full bg-blue-600  border-[#375974] border-b-2 flex flex-row items-baseline py-3 px-3 sm:px-20 text-gray-100">
        <div className="text-white text-2xl font-bold font-mono mx-6 hidden sm:block">Поиск поставщиков</div>
        <div className="mx-3"><Link href="/">Главная</Link></div>
    </div>
}