export interface StreamingInfo {
  name: string;
  url: string;
  logo?: string; // Optional: URL to the service's logo
}

export interface Movie {
  id: string;
  title: string;
  description: string;
  posterUrl: string;
  backdropUrl: string;
  rating: number;
  year: number;
  genres: string[];
  streamingOn?: StreamingInfo[];
  dateAdded: string; // วันที่เพิ่มหนังเข้ามาในระบบ
}

export interface MovieCategory {
  id: string;
  title:string;
  movies: Movie[];
}
