import styles from './styles.module.scss'

interface Props {
  url: string
  height?: number | null
}

export function MailchimpForm({ url, height = 1100 }: Props) {
  return (
    <iframe
      className={styles.root}
      src={url}
      style={{ height: `${height}px` }}
    />
  )
}
