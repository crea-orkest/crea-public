import { Map } from 'components/map'

export interface Props {
  lat: number
  lng: number
  key: string
  title: string
}

export const InteractiveMap = ({ lat, lng, title, key }: Props) => {
  return (
    <Map
      id="concert-location"
      pin={{
        title: title ?? '',
        lat,
        lng,
      }}
      googleMapsApiKey={key}
      dimensions={{
        width: '100%',
        height: '400px',
      }}
    />
  )
}
