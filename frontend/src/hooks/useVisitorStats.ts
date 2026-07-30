import { useEffect, useState } from 'react'

const COUNT_API_NAMESPACE = 'rcxd.zeroday-defense-demo'
const COUNT_API_KEY = 'visits'
const SESSION_FLAG = 'zd-visit-counted'

export function useVisitorStats() {
  const [count, setCount] = useState<number | null>(null)

  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        const alreadyCounted = sessionStorage.getItem(SESSION_FLAG) === '1'
        const url = alreadyCounted
          ? `https://api.countapi.xyz/get/${COUNT_API_NAMESPACE}/${COUNT_API_KEY}`
          : `https://api.countapi.xyz/hit/${COUNT_API_NAMESPACE}/${COUNT_API_KEY}`

        const res = await fetch(url)
        if (!res.ok) return
        const data = (await res.json()) as { value?: number }
        if (!cancelled && typeof data.value === 'number') {
          setCount(data.value)
          if (!alreadyCounted) sessionStorage.setItem(SESSION_FLAG, '1')
        }
      } catch {
        /* counter is best-effort */
      }
    }

    void load()
    return () => {
      cancelled = true
    }
  }, [])

  return count
}
