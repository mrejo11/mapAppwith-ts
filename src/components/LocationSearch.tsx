import { Fragment, useState } from "react";
import type { Place } from "../api/place";
import { search } from "../api/search";
interface LocationSearchProps {
  onPlaceClick: (place: Place) => void;
}
function LocationSearch({ onPlaceClick }) {
  const [places, setPlaces] = useState<Place[]>([]);
  const [term, setTerm] = useState("");

  const handleSubmit = async(e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
   const results= await search(term)
   setPlaces(results)
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className="font-bold" htmlFor="term">
          Search
        </label>
        <input
          className="border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 px-4 py-2 w-full"
          id="term"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </form>

      <h1 className="font-bold mt-6"></h1>
      <div className="grid grid-cols-[1fr_40px] gap-2 items-center">
        {
        places.map(place=>{
          return <Fragment key={place.id}>
            <p className="text-sm">{place.name}</p>
            <button className="bg-blue-500 text-xs text-white font-bold py-1" onClick={()=>onPlaceClick(place)}>
              Go
            </button>
          </Fragment>
        })
        }
        
      </div>
    </div>
  );
}

export default LocationSearch;
