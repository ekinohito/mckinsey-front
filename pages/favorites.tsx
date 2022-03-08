import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { api } from '../axios/api'
import Header from '../components/Header'
import Main from '../components/Main'
import SuppliersList from '../components/SuppliersList'
import { SupplierDoc } from '../typings/Supplier'

const Favorites: NextPage = () => {
    const [data, setData] = useState<SupplierDoc[] | undefined>(undefined)
    const [error, setError] = useState<string | undefined>(undefined)
    useEffect(() => {
        (async () => {
            const { data } = await api.get(`favorite`)
            const supplierData = JSON.parse(data) as SupplierDoc[]
            setData(supplierData)
        })()
    }, [])
    return (
        <div className="bg-[#01385f] border-[#375974] text-white">
            <Head>
                <title>Что нашел Сервер?</title>
                <meta name="description" content="Сайт сделала команда 5 денег" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>
            <Header />
            <div className="max-w-3xl shadow-2xl p-4 min-h-screen mx-auto">
                <h1 className="text-2xl text-center font-bold">Избранное</h1>
                {data && <SuppliersList suppliers={data}/>}
            </div>
        </div>
    )
}

export default Favorites
