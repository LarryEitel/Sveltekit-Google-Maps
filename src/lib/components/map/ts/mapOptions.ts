const MapOptions = {
  center: {
    lat: 45.05,
    lng: -90.275
  },
  mapTypeControl: true,
  mapTypeControlOptions: {
    mapTypeIds: ['hybrid', 'roadmap', 'terrain', 'satellite'],
    position: 3
  },
  mapTypeId: 'hybrid',
  streetViewControl: false,
  zoomControl: true,
  zoomControlOptions: {
    position: 7
  },
  zoom: 7
}

export default MapOptions
