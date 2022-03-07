import { useState } from 'react'
import { Supplier } from '../typings/Supplier'
import GoodsForm from './GoodsForm'
import SupplierCard from './SupplierCard'

  

export default function Main() {
    const [suppliers, setSuppliers] = useState<Supplier[]>([])
    return <main className="max-w-3xl shadow-lg p-4 min-h-screen ml-96 ">
        <GoodsForm setSuppliers={setSuppliers}/>
        <ul>
            {suppliers.map(supplier => (
                <SupplierCard key={supplier.inn} supplier={supplier}/>
            ))}
        </ul>
    </main>
}