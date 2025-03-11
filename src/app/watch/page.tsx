import { Metadata } from "next";

// Simulating a delayed API call
const fetchVideoData = async (id: string | null) => {
  await new Promise((resolve) => setTimeout(resolve, 300));

  return {
    id,
    title: `Awesome Video ${id}`,
    description: "This is a great video description for SEO.",
    thumbnail: "https://example.com/thumbnail.jpg",
  };
};

// 🟢 Define metadata dynamically
export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ v?: string }>;
}): Promise<Metadata> {
  const sParams = await searchParams;
  const video = await fetchVideoData(sParams.v ?? null);

  return {
    title: video.title,
    description: video.description,
    openGraph: {
      images: [video.thumbnail],
    },
  };
}

export default function Watch({}) {
  return <></>;
}
