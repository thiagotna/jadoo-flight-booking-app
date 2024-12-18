export default function Header({
  children,
  ...props
}: {
  children: React.ReactNode[]
} & React.HTMLAttributes<HTMLElement>) {
  const [brand, nav, signIn] = children

  return (
    <header {...props}>
      <div className="container mx-auto max-w-[1160px]">
        <div className="flex justify-start items-center gap-x-[222px]">
          {brand}
          <div className="flex items-center">
            {nav}
            {signIn}
          </div>
        </div>
      </div>
    </header>
  )
}
