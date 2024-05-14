// import 'nextra-theme-blog/style.css'
// import Head from 'next/head'

import '../globals.css'

// import '../styles/main.css'

export default function Nextra({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
        </>
    )
}