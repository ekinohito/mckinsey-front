import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import { api } from '../axios/api'
import Header from '../components/Header'
import Main from '../components/Main'
import SideMenu from '../components/SideMenu'
import mapper, { InData } from '../utils/mapper'

const Home: NextPage = () => {
    const [text, setText] = useState('')
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
            <textarea value={text} onChange={e => setText(e.currentTarget.value)} />
            <button onClick={async () => {
                const t = JSON.parse(text) as InData[]
                for (const v of t) {
                    const x = mapper(v)
                    console.log(x)
                    try {
                        await api.post('supplier', JSON.stringify(x), {headers: {"Content-Type": "application/json"}})
                        console.log('success!')
                    } catch {
                        console.log('no success!')
                    }
                }
            }}>fix</button>
        </div>
    )
}

export default Home
