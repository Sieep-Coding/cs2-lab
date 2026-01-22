import marioImage from "../assets/authors/nick.jpg";

export interface Props {
  name: string;
  slug: string;
  image: any;
  bio: string;
}

export type Author = Props;

export const authors: Props[] = [
  {
    name: "Nick Stambaugh",
    slug: "nick-stambaugh",
    image: marioImage,
    bio: "With roots in Counter-Strike dating back to 2009, Nick has witnessed the franchise transform from a mod-based grassroots scene to a global esports phenomenon. He provides high-level analysis on tactics and trends.",
  },
];
