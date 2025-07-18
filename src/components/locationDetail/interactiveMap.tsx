import { Map } from 'components/map'

export interface Props {
  lat: number
  lng: number
  apiKey: string
  title: string
}

export const InteractiveMap = ({ lat, lng, title, apiKey }: Props) => {
  return (
    <Map
      id="concert-location"
      pin={{
        title: title ?? '',
        lat,
        lng,
      }}
      googleMapsApiKey={apiKey}
      dimensions={{
        width: '100%',
        height: '400px',
      }}
    />
  )
}
