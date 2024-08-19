import { ObjectId } from "mongoose";

export interface TSong {
  songName: string;
  songArtist: string;
  songLink: string;
  songAlbum: ObjectId;
  songDuration: string;
  releaseYear: number;
  genre: string;
  category: ObjectId;
}
