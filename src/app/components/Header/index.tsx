export default function Header({
  children,
  ...props
}: {
  children: React.ReactNode[]
} & React.HTMLAttributes<HTMLElement>) {
  const [brand, nav, signIn] = children

  return (
    <header {...props}>
      <div className="container mx-auto max-w-[116rem]">
        <div className="flex justify-start items-center gap-x-[22.2rem]">
          {brand}
          <div className="flex justify-start items-center w-full">
            {nav}
            {signIn}
          </div>
        </div>
      </div>
    </header>
  )
}
