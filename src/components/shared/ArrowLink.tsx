import type { ReactNode } from 'react'

type ArrowLinkProps = {
  children: ReactNode
  href: string
}

function ArrowLink({ children, href }: ArrowLinkProps) {
  return (
    <a className="arrow-link" href={href}>
      {children}
      <img src="/assets/arrow-up-right.svg" alt="" aria-hidden="true" />
    </a>
  )
}

export default ArrowLink
