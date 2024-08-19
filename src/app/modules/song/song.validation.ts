import { z } from "zod";

// Define the Zod schema
export const songValidationSchema = z.object({
  songName: z.string().nonempty({ message: "songName is required" }),
  songArtist: z.string().nonempty({ message: "songArtist is required" }),
  songAlbum: z.string().nonempty({ message: "songAlbum is required" }),
  songDuration: z.string().nonempty({ message: "songDuration is required" }),
  releaseYear: z
    .number()
    .int()
    .min(1900, { message: "releaseYear must be a valid year" })
    .max(new Date().getFullYear(), {
      message: "releaseYear cannot be in the future",
    }),
  genre: z.string().nonempty({ message: "genre is required" }),
});

// Example usage
// const songData = {
//   songName: "Some Song",
//   songArtist: "Some Artist",
//   songAlbum: "Some Album",
//   songDuration: "3:45",
//   releaseYear: 2022,
//   genre: "Pop",
// };
//
// SongSchema.parse(songData);
export const songValidation = {
  songValidationSchema,
};
