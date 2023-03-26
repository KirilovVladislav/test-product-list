type Props = {
  title: string,
}

export const Badge = ({title}: Props) => {
  return (
    <span>{title}</span>
  )
}