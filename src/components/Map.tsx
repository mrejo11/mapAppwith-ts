import type { Place } from "../api/place"

interface MapProps{
    place:Place|null
}
function Map({place}:MapProps) {
  return (
    <div>
      map
    </div>
  )
}

export default Map
 