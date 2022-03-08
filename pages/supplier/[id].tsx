import axios from "axios"
import { NextPage } from "next"
import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { api } from "../../axios/api"
import GraphCard from "../../components/GraphCard"
import Header from "../../components/Header"
import InfoCard from "../../components/InfoCard"
import { OptResponse } from "../../typings/Response"
import { SupplierDoc } from "../../typings/Supplier"
import { SupplierResponse } from "../api/supplier/[id]"

const Supplier: NextPage = () => {
    const router = useRouter()
    const { id } = router.query
    const [data, setData] = useState<SupplierDoc | undefined>(undefined)
    const [error, setError] = useState<string | undefined>(undefined)
    useEffect(() => {
        (async () => {
            if (id == undefined) return
            const { data } = await api.get(`supplier/${id}`)
            const supplierData = JSON.parse(data) as SupplierResponse
            if (supplierData.status === "error") return setError(error)
            setData(supplierData.data)
        })()
    }, [id])
    return (
        <div>
            <Head>
                <title>Что нашел Сервер?</title>
                <meta name="description" content="Сайт сделала команда 5 денег" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>
            <Header />
            <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-[2px] bg-[#375974]">
                <div className="bg-[#00385f] text-white p-10 space-y-6">
                    <section>
                        <h2 className="text-xl text-gray-400">Название</h2>
                        <h1 className="text-3xl">{data?.name}</h1>
                    </section>
                    <section>
                        <h2 className="text-xl text-gray-400">ИНН</h2>
                        <h1 className="text-3xl">{data?.inn}</h1>
                    </section>
                    <section>
                        <h2 className="text-xl text-gray-400">ОГРН</h2>
                        <h1 className="text-3xl">{data?.ogrn}</h1>
                    </section>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 col-span-2 gap-[2px] min-h-screen">
                    <GraphCard rating={4.7} data={[1, 2, 1, 3, 1]}/>
                    <InfoCard title="Финансы" details={[
                        {
                            info: 'Комплексный показатель, основанный на анализе имущественного положения предприятия и структуры капитала: темпах изменения размера и стуктуры баланса и прибыли',
                            key: 'Положение предприятия',
                            value: '100'
                        },
                        {
                            info: 'Комплексный показатель, основанный на анализе деловой активности и рентабельности с учетом динамики изменений за год',
                            key: 'Эффективность',
                            value: '100'
                        },
                        {
                            info: 'Комплексный показатель, основанный на анализе финансовой устойчивости (в т.ч. при неустойчивой кредитной политике); анализе ликвидности и платежеспособности',
                            key: 'Финансовое состояние',
                            value: '100'
                        },
                    ]} rating={3} />
                    <InfoCard title="Юр. показатели и надежность" details={[
                        {
                            info: 'Комплексный показатель, учитывающий наличие задолженностей и отчетностей',
                            key: 'Налоговое поведение',
                            value: '100'
                        },
                        {
                            info: 'Информационная открытость',
                            key: 'Добросовестность',
                            value: '100'
                        },
                        {
                            info: 'Комплексный показатель, учитывающий достоверность данных и сами данные о руководителе',
                            key: 'Руководитель',
                            value: '100'
                        },
                        {
                            info: 'Количество судебных дел',
                            key: 'Суды',
                            value: '100'
                        },
                    ]} rating={4.5} />
                    <InfoCard title="Размер и опыт" details={[
                        {
                            info: 'Комплексный показатель, учитывающий объем и структуру связанный предприятий',
                            key: 'Размер',
                            value: '100'
                        },
                        {
                            info: 'Комплексный показатель, рассчитанный с учетом возраста и истории изменений юр. адреса',
                            key: 'Стабильность',
                            value: '100'
                        },
                        {
                            info: 'Комплексный показатель, рассчитанный с учетом количества лицензий и товарных знаков, а так же размера уставного капитала',
                            key: 'Устойчивость',
                            value: '100'
                        },
                        {
                            info: 'Комплексный показатель, рассчитанный с учетом количества партнеров и истории госзакупок',
                            key: 'Опыт в качестве поставщика',
                            value: '100'
                        },
                    ]} rating={8} />
                    <InfoCard title="Взаимодействие" details={[
                        { info: "", key: "Качество взимодействия", value: 'неизвестно' },
                        { info: "", key: "Время задержки товара", value: 'неизвестно' },
                    ]} rating="-" />
                    <InfoCard title="Качество товара" details={[

                        { info: "", key: "Количество товара", value: 'неизвестно' },
                        { info: "", key: "Процент брака", value: 'неизвестно' },
                    ]} rating="-" />
                </div>
            </div>
        </div>
    )
}

export default Supplier