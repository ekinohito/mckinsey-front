import Link from "next/link";
import { Supplier, SupplierDoc } from "../typings/Supplier";
import convert from "../utils/convert";

export default function SupplierCard({ supplier, index }: { supplier: SupplierDoc, index: number }) {
    return (
        <Link href={`/supplier/${supplier._id}`}>
            <tr className="first:border-0 border-t-[1px] cursor-pointer relative group">
                <td className="py-4 ">{index}</td>
                <td>{supplier.name}</td>
                <td>{supplier.inn}</td>
                <td>{supplier.ogrn}</td>
                <td>{convert(supplier.rating)}</td>
                <div className="absolute top-0 bottom-0 left-0 right-full group-hover:right-0 transition-all duration-300 bg-blue-500 bg-opacity-20 "></div>
            </tr>
        </Link>
    )
}