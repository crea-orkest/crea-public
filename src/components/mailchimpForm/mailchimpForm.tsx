import { useState, type FormEvent } from 'react'
import classNames from 'classnames'
import { Button } from 'components/button'
import { Loader } from 'components/icons/loader'
import { ArrowRight } from 'components/icons/arrow-right'

import styles from './styles.module.scss'

const cost = {
  'Goede vriend': 30,
  'Bijzondere vriend': 50,
  Ambassadeur: 100,
}

interface Props {
  title: string
}

interface Subscription {
  error?: string
  subscribed?: 'Goede vriend' | 'Bijzondere vriend' | 'Ambassadeur'
  fname?: string
  email?: string
  lname?: string
}

// Don't change the field names!
// Fields of the form need to be according to the Mailchimp form
export const MailchimpForm = ({ title }: Props) => {
  const [subscription, setSubscription] = useState<Subscription>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    const formData = new FormData(event.target as HTMLFormElement)
    const data = new URLSearchParams()
    for (const [key, value] of formData.entries()) {
      data.append(key, value as string)
    }

    try {
      setIsSubmitting(true)
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        body: data,
      })
      const json = (await response.json()) as Subscription
      setSubscription(json)
    } catch (error) {
      setSubscription({ error: 'Probeer later opnieuw' })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (subscription.subscribed) {
    return (
      <div className={styles.container}>
        <h2 className={classNames('h3', styles.title)}>{title}</h2>
        <div className={styles.success}>
          <h3 className="h5">Bedankt voor uw aanmelding</h3>
          <p>
            Zodra uw betaling is binnengekomen sturen wij uw Vriendenpas op.
          </p>
        </div>
        <div className={styles.contentGroup}>
          <p>
            Welkom, {subscription.fname} {subscription.lname}, onze nieuwste{' '}
            <span className={styles.lowercase}>{subscription.subscribed}</span>.
          </p>
          <p>
            We verzoeken u <strong>€{cost[subscription.subscribed]},-</strong>{' '}
            over te maken op rekeningnummer{' '}
            <strong>NL64 INGB 0000 3569 92</strong> t.n.v.{' '}
            <strong>Vereniging Vrienden van het CREA Orkest</strong> onder
            vermelding van <strong>Vriend</strong>.
          </p>
        </div>
      </div>
    )
  }

  if (subscription.error) {
    return (
      <div className={styles.container}>
        <h2 className={classNames('h3', styles.title)}>{title}</h2>
        <div className={styles.error} role="alert">
          <h3 className="h5">Er is iets misgegaan</h3>
          <p>{subscription.error}</p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <h2 className={classNames('h3', styles.title)}>{title}</h2>
      <div className={styles.inputGroup}>
        <label
          className={classNames('text-small', styles.label, {
            [`${styles.disabledLabel}`]: isSubmitting,
          })}
          htmlFor="mce-EMAIL"
        >
          Email adres <span className={styles.asterix}>*</span>
        </label>
        <input
          className={styles.input}
          type="email"
          name="EMAIL"
          id="mce-EMAIL"
          required
          disabled={isSubmitting}
        />
      </div>
      <div className={styles.inputRow}>
        <div className={styles.inputGroup}>
          <label
            className={classNames('text-small', styles.label, {
              [`${styles.disabledLabel}`]: isSubmitting,
            })}
            htmlFor="mce-FNAME"
          >
            Voornaam <span className={styles.asterix}>*</span>
          </label>
          <input
            className={styles.input}
            type="text"
            name="FNAME"
            id="mce-FNAME"
            required
            disabled={isSubmitting}
          />
        </div>
        <div className={styles.inputGroup}>
          <label
            className={classNames('text-small', styles.label, {
              [`${styles.disabledLabel}`]: isSubmitting,
            })}
            htmlFor="mce-LNAME"
          >
            Achternaam <span className={styles.asterix}>*</span>
          </label>
          <input
            className={styles.input}
            type="text"
            name="LNAME"
            id="mce-LNAME"
            required
            disabled={isSubmitting}
          />
        </div>
      </div>
      <div className={styles.inputGroup}>
        <label
          className={classNames('text-small', styles.label, {
            [`${styles.disabledLabel}`]: isSubmitting,
          })}
          htmlFor="mce-PHONE"
        >
          Telefoonnummer (Optioneel)
        </label>
        <input
          className={styles.input}
          type="text"
          name="PHONE"
          id="mce-PHONE"
          disabled={isSubmitting}
        />
      </div>
      <div className={styles.inputGroup}>
        <label
          className={classNames('text-small', styles.label, {
            [`${styles.disabledLabel}`]: isSubmitting,
          })}
          htmlFor="mce-ADDRESS"
        >
          Adres (Optioneel)
        </label>
        <input
          className={styles.input}
          type="text"
          name="ADDRESS"
          id="mce-ADDRESS"
          disabled={isSubmitting}
        />
      </div>
      <div className={styles.inputGroup}>
        <label
          className={classNames('text-small', styles.label, {
            [`${styles.disabledLabel}`]: isSubmitting,
          })}
          htmlFor="mce-POSTALCODE"
        >
          Postcode (Optioneel)
        </label>
        <input
          className={styles.input}
          type="text"
          name="POSTALCODE"
          id="mce-POSTALCODE"
          disabled={isSubmitting}
        />
      </div>
      <div className={styles.inputGroup}>
        <p
          className={classNames('h4', {
            [`${styles.disabledLabel}`]: isSubmitting,
          })}
        >
          Soort vriend <span className={styles.asterix}>*</span>
        </p>
        <div className={styles.radioGroup}>
          <input
            className={styles.radio}
            type="radio"
            name="FRIEND"
            id="mce-FRIEND0"
            value="Goede vriend"
            required
          />
          <label className={styles.radioLabel} htmlFor="mce-FRIEND0">
            <span className="h5">Goede vriend</span>
            <span className={classNames('text-small', styles.radioLabelSuffix)}>
              € {cost['Goede vriend']},-
            </span>
          </label>
          <input
            className={styles.radio}
            type="radio"
            name="FRIEND"
            id="mce-FRIEND1"
            value="Bijzondere vriend"
            required
          />
          <label className={styles.radioLabel} htmlFor="mce-FRIEND1">
            <span className="h5">Bijzondere vriend</span>
            <span className={classNames('text-small', styles.radioLabelSuffix)}>
              € {cost['Bijzondere vriend']},-
            </span>
          </label>
          <input
            className={styles.radio}
            type="radio"
            name="FRIEND"
            id="mce-FRIEND2"
            value="Ambassadeur"
            required
          />
          <label className={styles.radioLabel} htmlFor="mce-FRIEND2">
            <span className="h5">Ambassadeur</span>
            <span className={classNames('text-small', styles.radioLabelSuffix)}>
              € {cost['Ambassadeur']},-
            </span>
          </label>
        </div>
      </div>
      <input type="hidden" name="tags" value="4285097" />
      <input type="hidden" name="subscribe" value="Subscribe" />
      <div aria-hidden="true" className={styles.hiddenInput}>
        {/*
            Real people should not fill this in and expect good
            things - do not remove this or risk form bot signups
          */}
        <input
          type="text"
          name="b_8910cdd0574b0309c35b4183a_e76554c7e8"
          tabIndex={-1}
        />
      </div>

      {Boolean(subscription.error) && (
        <div className={styles.error} role="alert">
          <h3 className="h5">Er is iets misgegaan</h3>
          <p>{subscription.error}</p>
        </div>
      )}

      <Button
        className={styles.button}
        type="submit"
        disabled={isSubmitting}
        variant="tertiary"
        rightIcon={
          isSubmitting ? (
            <Loader className={styles.buttonIcon} />
          ) : (
            <ArrowRight className={styles.buttonIcon} />
          )
        }
      >
        Word vriend
      </Button>
    </form>
  )
}
