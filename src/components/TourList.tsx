import { useState } from 'react'

interface Tour {
  id: number
  artist: string
  tourName: string
  startDate: string
  endDate: string
  venues: string[]
}

const TourList = () => {
  const [tours] = useState<Tour[]>([
    {
      id: 1,
      artist: "Metallica",
      tourName: "M72 World Tour",
      startDate: "2024-04-01",
      endDate: "2024-09-30",
      venues: ["Madison Square Garden", "Wembley Stadium"]
    },
    {
      id: 2,
      artist: "Taylor Swift",
      tourName: "Eras Tour",
      startDate: "2024-05-01",
      endDate: "2024-12-31",
      venues: ["SoFi Stadium", "AT&T Stadium"]
    }
  ])

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-white">Upcoming Tours</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tours.map((tour) => (
          <div key={tour.id} className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-bold text-white">{tour.artist}</h3>
            <p className="text-gray-400">{tour.tourName}</p>
            <div className="mt-4">
              <p className="text-sm text-gray-300">
                {new Date(tour.startDate).toLocaleDateString()} - {new Date(tour.endDate).toLocaleDateString()}
              </p>
              <div className="mt-2">
                <p className="text-sm font-medium text-gray-300">Venues:</p>
                <ul className="list-disc list-inside text-sm text-gray-400">
                  {tour.venues.map((venue, index) => (
                    <li key={index}>{venue}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TourList 