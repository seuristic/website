import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface NavLinkProps {
  to: string
  children: React.ReactNode
  variant?:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  className?: string
  onClick?: () => void
}

const NavLink = ({
  to,
  children,
  variant = 'ghost',
  size = 'default',
  className,
  onClick,
}: NavLinkProps) => {
  const location = useLocation()
  const isActive = location.pathname === to

  return (
    <Button
      variant={isActive ? 'default' : variant}
      size={size}
      asChild
      className={cn(className)}
    >
      <Link to={to} onClick={onClick}>
        {children}
      </Link>
    </Button>
  )
}

export default NavLink
