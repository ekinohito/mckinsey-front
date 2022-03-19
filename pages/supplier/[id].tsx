import axios from "axios"
import { NextPage } from "next"
import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { api } from "../../axios/api"
import Download from "../../components/Download"
import GraphCard from "../../components/GraphCard"
import Header from "../../components/Header"
import InfoCard from "../../components/InfoCard"
import { TagsSection } from "../../components/TagsSection"
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
    async function addToFavorite() {
        if (!data) return
        const {_id, inn, ogrn, name, rating, contacts} = data
        await api.post('/favorite/add', JSON.stringify({inn, ogrn, rating, name, id:_id}), {headers: {"Content-Type": "application/json"}})
    }
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
                    {data?.tags && <TagsSection tags={data?.tags}/>}    
                    <section>
                        <h2 className="text-xl text-gray-400">ИНН</h2>
                        <h1 className="text-3xl">{data?.inn}</h1>
                    </section>
                    <section>
                        <h2 className="text-xl text-gray-400">ОГРН</h2>
                        <h1 className="text-3xl">{data?.ogrn}</h1>
                    </section>
                    {data?.contacts && <>
                    {data.contacts.phone && <section>
                        <h2 className="text-xl text-gray-400">Телефон</h2>
                        <h1 className=" text-3xl">{data.contacts.phone}</h1>
                    </section>}
                    {data.contacts.email && <section>
                        <h2 className="text-xl text-gray-400">E-mail</h2>
                        <h1 className="text-3xl">{data.contacts.email}</h1>
                    </section>}
                    </>}
                    {false && process.env.NODE_ENV === "development" && <section><a href={`https://www.list-org.com/search?type=inn&val=${data?.inn}`}>телефон</a></section>}
                    <button onClick={addToFavorite}>Добавить в избранное</button>
                    {data && <section><Download supplier={data} fileName="exp"/></section>}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 col-span-2 gap-[2px] min-h-screen">
                    {data && <>
                    <GraphCard rating={data.rating} data={[+data.financeTotal, +data.juridicalTotal, +data.experienceTotal, 5, 5]}/>
                    <InfoCard title="Финансы" details={[
                        {
                            info: 'Комплексный показатель, основанный на анализе имущественного положения предприятия и структуры капитала: темпах изменения размера и стуктуры баланса и прибыли',
                            key: 'Положение предприятия',
                            value: data.financeStatus
                        },
                        {
                            info: 'Комплексный показатель, основанный на анализе деловой активности и рентабельности с учетом динамики изменений за год',
                            key: 'Эффективность',
                            value: data.financeEfficiency
                        },
                        {
                            info: 'Комплексный показатель, основанный на анализе финансовой устойчивости (в т.ч. при неустойчивой кредитной политике); анализе ликвидности и платежеспособности',
                            key: 'Финансовое состояние',
                            value: data.financeCondition
                        },
                    ]} rating={+data.financeTotal} />
                    <InfoCard title="Юр. показатели и надежность" details={[
                        {
                            info: 'Комплексный показатель, учитывающий наличие задолженностей и отчетностей',
                            key: 'Налоговое поведение',
                            value: data.juridicalTaxBehaviour
                        },
                        {
                            info: 'Информационная открытость',
                            key: 'Добросовестность',
                            value: data.juridicalHonesty
                        },
                        {
                            info: 'Комплексный показатель, учитывающий достоверность данных и сами данные о руководителе',
                            key: 'Руководитель',
                            value: data.juridicalDirector
                        },
                        {
                            info: 'Количество судебных дел',
                            key: 'Суды',
                            value: data.juridicalCourts
                        },
                    ]} rating={data.juridicalTotal} />
                    <InfoCard title="Размер и опыт" details={[
                        {
                            info: 'Комплексный показатель, учитывающий объем и структуру связанный предприятий',
                            key: 'Размер',
                            value: data.experienceSize
                        },
                        {
                            info: 'Комплексный показатель, рассчитанный с учетом возраста и истории изменений юр. адреса',
                            key: 'Стабильность',
                            value: data.experienceStability
                        },
                        {
                            info: 'Комплексный показатель, рассчитанный с учетом количества лицензий и товарных знаков, а так же размера уставного капитала',
                            key: 'Устойчивость',
                            value: data.experienceSustainability
                        },
                        {
                            info: 'Комплексный показатель, рассчитанный с учетом количества партнеров и истории госзакупок',
                            key: 'Опыт в качестве поставщика',
                            value: data.experienceSupplier
                        },
                    ]} rating={data.experienceTotal} />
                    <InfoCard title="Взаимодействие" details={[
                        { info: "", key: "Качество взимодействия", value: 'неизвестно' },
                        { info: "", key: "Время задержки товара", value: 'неизвестно' },
                    ]} rating="-" />
                    <InfoCard title="Качество товара" details={[
                        { info: "", key: "Количество товара", value: 'неизвестно' },
                        { info: "", key: "Процент брака", value: 'неизвестно' },
                    ]} rating="-" />
                </>}</div>
            </div>
        </div>
    )
}

export default Supplier