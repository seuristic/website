import type { PropsWithChildren } from 'react'
import flagsmith from 'flagsmith'
import { FlagsmithContext, FlagsmithProvider } from 'flagsmith/react'

const environmentId = import.meta.env.VITE_FLAGSMITH_ENVIRONMENT_ID
const apiUrl = import.meta.env.VITE_FLAGSMITH_API
const isLocalDev = import.meta.env.DEV

const fallbackFlagsmith = {
  hasFeature: () => true,
  getValue: () => null,
  getTrait: () => undefined,
  log: () => undefined,
} as unknown as typeof flagsmith

const FlagsmithClientProvider = ({ children }: PropsWithChildren) => {
  if (!environmentId || isLocalDev) {
    return (
      <FlagsmithContext.Provider value={fallbackFlagsmith}>
        {children}
      </FlagsmithContext.Provider>
    )
  }

  return (
    <FlagsmithProvider
      flagsmith={flagsmith}
      options={{
        environmentID: environmentId,
        ...(apiUrl ? { api: apiUrl } : {}),
        defaultFlags: {
          blogs_enabled: { enabled: true, value: null },
        },
      }}
    >
      {children}
    </FlagsmithProvider>
  )
}

export default FlagsmithClientProvider
