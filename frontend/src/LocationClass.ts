


enum LocationFilter {
    City = 'city',
    Global = 'global',
    Country = 'country'
  }

class LocationClass {
    city: string; 
    country: string;
    county: string;
    lat: string;
    lng: string;
    neighborhood: string;
    state: string;
    zipcode: string;
    

    constructor(city: string, country: string, county: string, lat: string, lng: string, neighborhood: string, state: string, zipcode: string) {
        this.city = city 
        this.country = country
        this.lat = lat;
        this.lng = lng;
        this.neighborhood = neighborhood;
        this.state = state;
        this.zipcode = zipcode
        this.county = county 

    }
    findLocation(proximty:LocationFilter): string
    {
        switch (proximty) {
            case LocationFilter.City:
                return this.city
            case LocationFilter.Global:
                return ''
            case LocationFilter.Country:
                return this.country
        }

            
        
    } 
}

export default LocationClass 