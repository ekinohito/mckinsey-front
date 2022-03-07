import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Main from '../components/Main'
import SideMenu from '../components/SideMenu'

const Home: NextPage = () => {
    return (
        <div className="bg-[#001731] border-[#375974] text-white">
            <Head>
                <title>Что нашел Сервер?</title>
                <meta name="description" content="Сайт сделала команда 5 денег" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>
            <Header />
            <SideMenu />
            <Main/>
        </div>
    )
}

export default Home
