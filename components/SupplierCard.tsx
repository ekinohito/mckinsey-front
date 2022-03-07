import Link from "next/link";
import { Supplier } from "../typings/Supplier";

export default function SupplierCard({ supplier }: { supplier: Supplier }) {
    return (
        <Link href="/" passHref>
            <a>
                <li className="first:border-0 border-t-2 p-3 cursor-pointer relative group">
                    <div className="absolute top-0 bottom-0 left-0 right-full group-hover:right-0 transition-all duration-300 bg-blue-500 bg-opacity-20 "></div>
                    <span>{supplier.name}</span>
                    <span>{supplier.inn}</span>
                    <span>{supplier.ogrn}</span>
                </li>
            </a>
        </Link>
    )
}