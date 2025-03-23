export interface Movie {
  id: number;
  title: string;
  poster: string;
  rating: number;
  backdrop: string;
  releaseDate: Date;
  description: string;
}

export interface CompleteMovie extends Movie {
  genres: string[];
  duration: number;
  buget: number;
  originalTitle: string;
  productionCompanies: string[];
}
