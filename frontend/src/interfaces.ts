interface Post {
    
      _id: string;
      title: string;
      body: string;
      category: string;
      neighborhood: string;
      city: string;
      lat: number;
      lng: number;
      steps: string[];
      ingredients: { name: string; quantity: string }[];
        picUrl: string;
      createdBy: string | null
    views: number
}

interface Location {
    city: string;
    country: string;
    county: string;
    lat: number;
    lng: number;
    neighborhood: string;
    state: string;
    zipcode: string;
}
  
interface Posts {
    posts: 
}
  
export type {Post, Location}