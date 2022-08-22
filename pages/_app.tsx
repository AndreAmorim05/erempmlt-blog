import * as React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider, EmotionCache } from '@emotion/react'
import createEmotionCache from '../utils/createEmotionCache'
import GlobalThemeProvider from '../theme/globalThemeProvider'
import { SettingsProvider } from '../contexts/SettingsContext'

import Header from '../components/Header'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <SettingsProvider>
        <GlobalThemeProvider>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline
          to build upon. */}
          <CssBaseline />
          <Header />
          <Component {...pageProps} />
        </GlobalThemeProvider>
      </SettingsProvider>
    </CacheProvider>
  )
}
