export interface Props {
  title: string;
  slug: string;
  color: "green" | "blue" | "orange" | "purple" | "pink";
  description: string;
}
export type Category = Props;

export const categories: Props[] = [
  {
    title: "Guides",
    slug: "guides",
    color: "green",
    description: "Actionable tutorials on utility, movement, and mechanics to help you climb the Premier and FACEIT ranks.",
  },
  {
    title: "Esports News",
    slug: "news",
    color: "pink",
    description: "Real-time coverage of the professional circuit, from roster shuffles to tournament results.",
  },
  {
    title: "Pro Analysis",
    slug: "analysis",
    color: "purple",
    description: "Deep-dives into professional tactics, heatmaps, and the data-driven meta of top-tier CS2.",
  }
];
