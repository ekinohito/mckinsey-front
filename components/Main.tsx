import { useState } from 'react'
import { Supplier, SupplierDoc } from '../typings/Supplier'
import GoodsForm from './GoodsForm'
import SupplierCard from './SupplierCard'

  

export default function Main() {
    const [suppliers, setSuppliers] = useState<SupplierDoc[]>([])
    return <main className="max-w-3xl shadow-lg p-4 min-h-screen mx-auto ">
        <GoodsForm setSuppliers={setSuppliers}/>
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
    </main>
}