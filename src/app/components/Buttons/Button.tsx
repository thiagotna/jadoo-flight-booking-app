interface ButtonProps {
  classNames: string
  text: string
}

export default function Button({ classNames, text, ...props }: ButtonProps) {
  return (
    <button className={classNames} {...props}>
      {text}
    </button>
  )
}
