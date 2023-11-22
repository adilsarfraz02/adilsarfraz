'use client'

import {NextUIProvider} from '@nextui-org/react'

export function NextuiProviders({children}) {
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  )
}