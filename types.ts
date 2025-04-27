import { VariantProps } from "class-variance-authority"
import * as React from "react"

import { ToastVariants } from "@/components/ui/toast"

export type ToastProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof ToastVariants> & {
    open?: boolean
    onOpenChange?: (open: boolean) => void
  }

export type ToastActionElement = React.ReactElement 