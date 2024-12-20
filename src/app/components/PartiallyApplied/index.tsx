const PartiallyApplied = <P extends object>(
  Component: React.ComponentType<P>,
  partialProps: Partial<P>,
) => {
  return (props: Omit<P, keyof typeof partialProps>) => {
    return <Component {...(partialProps as P)} {...(props as P)} />
  }
}

export default PartiallyApplied
