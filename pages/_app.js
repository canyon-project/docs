// import 'nextra-theme-blog/style.css'
// import Head from 'next/head'

import '../globals.css'
import {useRouter} from "next/router";

// import '../styles/main.css'

export default function Nextra({ Component, pageProps }) {
    const router = useRouter();
    // 我只是想实现一个全局的404重定向，要这么多代码？
    // 定义getInitialProps方法，用于全局的404重定向
    Nextra.getInitialProps = async (appContext) => {
        const { Component, ctx } = appContext;

        // 调用原始的getInitialProps方法
        let pageProps = {};
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }
        // 检查页面是否存在，如果不存在，则重定向到首页
        if (ctx.res && ctx.res.statusCode === 404) {
            if (typeof window === 'undefined') {
                // 如果是在服务器端渲染，直接重定向
                ctx.res.writeHead(302, { Location: '/overview/why-canyon' });
                ctx.res.end();
            } else {
                // 如果是在客户端渲染，通过Router进行重定向
                router.push('/overview/why-canyon');
            }
        }

        return { pageProps };
    };
    return (
        <>
            <Component {...pageProps} />
        </>
    )
}