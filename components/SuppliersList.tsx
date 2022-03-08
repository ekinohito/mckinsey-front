import { SupplierDoc } from "../typings/Supplier";
import SupplierCard from "./SupplierCard";

export default function SuppliersList({suppliers}:{suppliers: SupplierDoc[]}) {
    return (
        <table className="w-full mt-12">
            <thead>
                <tr className="text-left">
                    <th>№</th>
                    <th>Название</th>
                    <th>ИНН</th>
                    <th>ОГРН</th>
                    <th>Рейтинг</th>
                </tr>
            </thead>
            <tbody>
                {suppliers.map((supplier, index) => (
                    <SupplierCard key={supplier.inn} supplier={supplier} index={index + 1}/>
                ))}
            </tbody>
        </table>
    )
}