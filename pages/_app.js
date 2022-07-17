import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { usePrevious } from 'react-use'
import useSWR from 'swr'
import RootConfigContext from '../lib/RootConfigContext'
import config from '../config.yaml'
import '../styles/globals.css'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const useBuildId = () => {
  const { data } = useSWR('/api/build-id', fetcher, { refreshInterval: 10000 })
  return data?.buildId
}

function MyApp ({ Component, pageProps }) {
  const router = useRouter()
  const buildId = useBuildId()
  const prevBuildId = usePrevious(buildId)
  useEffect(() => {
    if (prevBuildId && buildId && prevBuildId !== buildId) {
      router.reload()
    }
  }, [buildId, prevBuildId, router])
  return (
    <RootConfigContext.Provider value={config}>
      <Component {...pageProps} />
    </RootConfigContext.Provider>
  )
}

export default MyApp
