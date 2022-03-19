import { useState } from 'react'
import { SupplierDoc } from '../typings/Supplier'
import GoodsForm from './GoodsForm'
import SuppliersList from './SuppliersList'

  
export default function Main() {
    const [suppliers, setSuppliers] = useState<SupplierDoc[] | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    return <main className="max-w-3xl shadow-2xl p-4 min-h-screen mx-auto ">
        <GoodsForm setSuppliers={setSuppliers} setLoading={setLoading}/>
        {suppliers && <SuppliersList suppliers={suppliers}/>}
        {loading && <img className='m-auto w-32 h-32 mt-32' loading='eager' src="/magnifier.png"/>}
    </main>
}