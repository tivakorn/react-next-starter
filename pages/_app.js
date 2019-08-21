import React from 'react'
import App, { Container } from "next/app"
import Head from 'next/head'

class MyApp extends App {

    static async getInitialProps({ Component, ctx }) {

        let pageProps = {}

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return { pageProps }
    }

    render() {
        const { Component, pageProps } = this.props

        return (
            <Container>
                <Head>
                    <meta charSet='utf-8' />
                    <meta name='viewport' content='width=device, initial-scale=1, shrink-to-fit=no' />

                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css" />

                    <title>GIT TISSUE</title>
                </Head>

                <Component {...pageProps} />

            </Container>
        )
    }
}

export default MyApp