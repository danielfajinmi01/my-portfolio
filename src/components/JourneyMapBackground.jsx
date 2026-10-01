import React, { useMemo } from 'react'
import DottedMap from 'dotted-map/without-countries'
import worldMapGrid from '../data/worldMapGrid.json'

// Lagos, Nigeria — where the journey starts
const ORIGIN = { lat: 6.5244, lng: 3.3792 }

export default function JourneyMapBackground() {
  const svgMap = useMemo(() => {
    const map = new DottedMap({ map: worldMapGrid })

    map.addPin({
      lat: ORIGIN.lat,
      lng: ORIGIN.lng,
      svgOptions: { color: '#a78bfa', radius: 1.1 }
    })

    return map.getSVG({
      radius: 0.12,
      color: 'rgba(255, 255, 255, 0.08)',
      shape: 'circle',
      backgroundColor: 'transparent'
    })
  }, [])

  return (
    <div
      className="journey-map-bg"
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: svgMap }}
    />
  )
}
