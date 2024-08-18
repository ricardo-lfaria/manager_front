import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/register`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/login`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/manager`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/leagues`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/ranking`,
    },
  ];
}
