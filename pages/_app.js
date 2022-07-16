import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { usePrevious } from 'react-use'
import useSWR from 'swr'
import '../styles/globals.css'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const useBuildId = () => {
  const { data } = useSWR('/api/build-id', fetcher, { refreshInterval: 10000 })
  return data?.buildId
}

function MyApp ({ Component, pageProps }) {
  const router = useRouter()
  // this goes in /pages/_app.tsx
  const buildId = useBuildId() // useSWR under the hood
  const prevBuildId = usePrevious(buildId)
  useEffect(() => {
    if (prevBuildId && buildId && prevBuildId !== buildId) {
      router.reload()
    }
  }, [buildId, prevBuildId, router])
  return <Component {...pageProps} />
}

export default MyApp
