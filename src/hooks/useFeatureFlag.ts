import { useMemo } from 'react'
import { useFlags } from 'flagsmith/react'

export const BLOGS_FLAG_KEY = 'blogs_enabled'

const useFeatureFlag = (flagKey: string, fallback = true) => {
  const flags = useFlags([flagKey])

  return useMemo(() => {
    const feature = flags[flagKey as keyof typeof flags]
    if (feature && typeof feature.enabled === 'boolean') {
      return feature.enabled
    }

    return fallback
  }, [fallback, flagKey, flags])
}

export default useFeatureFlag
