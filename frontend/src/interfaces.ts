interface Post {
    
      _id: string;
      title: string;
      body: string;
      category: string[];
      neighborhood: string;
  city: string;
  country: string;
      lat: number;
      lng: number;
      steps: string[];
      ingredients: { name: string; quantity: string }[];
        picUrl: string;
      createdBy: string | null
    views: number
}




interface Ingredient {
    name: string;
    quantity: string
}

  
export type {Post, Ingredient}