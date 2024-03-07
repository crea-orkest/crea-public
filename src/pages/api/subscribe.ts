import type { NextApiRequest, NextApiResponse } from 'next'

export default async function subscribe(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { MAILCHIMP_SUBSCRIBE_URL } = process.env

  const formData = req.body
  const data = new FormData()
  for (const [key, value] of Object.entries(req.body)) {
    data.append(key, String(value ?? ''))
  }

  if (!MAILCHIMP_SUBSCRIBE_URL) {
    return res.status(500).json({
      error:
        'Het formulier kon niet verstuurd worden door verkeerde configuratie. Probeer het later opnieuw.',
    })
  }

  try {
    const response = await fetch(MAILCHIMP_SUBSCRIBE_URL, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      method: 'POST',
      body: data,
    })

    console.log(response.body)

    const htmlPage = await response.text()

    console.log(htmlPage)

    if (htmlPage.includes('Subscription Confirmed')) {
      res.status(200).json({
        subscribed: formData.FRIEND,
        fname: formData.FNAME,
        email: formData.EMAIL,
        lname: formData.LNAME,
      })
    } else {
      res.status(400).json({
        error:
          'Er zijn problemen met het versturen van het formulier. Probeer het later opnieuw.',
      })
    }
  } catch (error) {
    res.status(500).json({ error })
  }
}
