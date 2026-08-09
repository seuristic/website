import { cn } from "@/lib/utils"

/** The single horizontal rhythm for the whole site — header, main and footer all use it. */
export function Container({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("mx-auto w-full max-w-3xl px-gutter", className)}
      {...props}
    />
  )
}
