import { useState } from 'react'
import { Supplier, SupplierDoc } from '../typings/Supplier'
import GoodsForm from './GoodsForm'
import SupplierCard from './SupplierCard'
import SuppliersList from './SuppliersList'

  

export default function Main() {
    const [suppliers, setSuppliers] = useState<SupplierDoc[] | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    return <main className="max-w-3xl shadow-2xl p-4 min-h-screen mx-auto ">
        <GoodsForm setSuppliers={setSuppliers} setLoading={setLoading}/>
        {suppliers && <SuppliersList suppliers={suppliers}/>}
        {loading && <img className='m-auto w-44 h-48' loading='eager' src="https://dilancovak.com/images/loading.gif"/>}
    </main>
}