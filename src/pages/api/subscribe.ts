import type { NextApiRequest, NextApiResponse } from 'next'

export default async function subscribe(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { MAILCHIMP_SUBSCRIBE_URL } = process.env

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
      body: new URLSearchParams(req.body),
    })

    // skip check if confirmed
    if (response.status === 200) {
      res.status(200).json({
        subscribed: req.body.FRIEND,
        fname: req.body.FNAME,
        email: req.body.EMAIL,
        lname: req.body.LNAME,
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
