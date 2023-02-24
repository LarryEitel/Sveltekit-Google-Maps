export default class GoogleWrapper {
    google

    constructor(google) {
        this.google = google
    }

    createMap(container, options): any {
        return new this.google.maps.Map(container, options)
    }

    latLng(latitude: number, longitude: number) {
        return new this.google.maps.latLng(latitude, longitude)
    }
}