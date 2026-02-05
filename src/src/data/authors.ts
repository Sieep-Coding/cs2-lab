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
    name: "Nick s",
    slug: "nick-s",
    image: marioImage,
    bio: "Nick s has been following pro Counter-Strike since 2009. He witnessed the franchise transform from a grassroots scene to a global esports phenomenon. Nick provides high-level analysis on tactics and trends.",
  },
];
