export type ColorType = "blue" | "purple" | "green" | "orange";

export interface Feature {
  title: string;
  description: string;
  icon: string;
  image?: string;
}

export interface Service {
  id: number;
  slug: string;
  title: string;
  description: string;
  icon: string;
  color: ColorType;
  features: Feature[];
  benefits: Feature[];
  heroImage: string;
  bgPattern: string;
}

export const colorClasses: { [key in ColorType]: string } = {
  blue: "bg-blue-600 hover:bg-blue-700 text-blue-600",
  purple: "bg-purple-600 hover:bg-purple-700 text-purple-600",
  green: "bg-green-600 hover:bg-green-700 text-green-600",
  orange: "bg-orange-600 hover:bg-orange-700 text-orange-600",
};
