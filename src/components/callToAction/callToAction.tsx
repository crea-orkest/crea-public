import { Button } from 'components/button'
import type { ButtonProps } from 'components/button'
import { isOfType } from 'components/contentField/isOfType'
import { ArrowRight } from 'components/icons/arrow-right'
import type {
  CallToActionFragment,
  ConcertLinkFragment,
  PageLinkFragment,
} from 'graphql/generated/graphql'
import { slugFormatter } from 'utils/slugFormatter'

interface Props {
  record: CallToActionFragment
}

export const CallToAction = ({ record }: Props) => {
  const { pageLink, externalUrl, label, variant } = record
  const buttonVariant = variant as ButtonProps['variant']

  if (!pageLink) {
    return (
      <Button
        href={externalUrl || ''}
        target="_blank"
        rel="noopener noreferrer"
        rightIcon={<ArrowRight />}
        variant={buttonVariant}
      >
        {label}
      </Button>
    )
  }

  const { slug } = pageLink

  if (isOfType<PageLinkFragment>(pageLink, 'PageRecord')) {
    if (!slug) return null
    return (
      <Button
        href={slugFormatter({ slug })}
        rightIcon={<ArrowRight />}
        variant={buttonVariant}
      >
        {label}
      </Button>
    )
  }

  if (isOfType<ConcertLinkFragment>(pageLink, 'ConcertRecord')) {
    if (!slug) return null
    return (
      <>
        <Button
          href={slugFormatter({
            slug,
            prefix: '/concerten',
          })}
          rightIcon={<ArrowRight />}
          variant={buttonVariant}
        >
          {label}
        </Button>
      </>
    )
  }

  return null
}
