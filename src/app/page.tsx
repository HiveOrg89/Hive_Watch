import { Metadata } from "next";

// Simulating a delayed API call
const fetchHomeData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    title: `Browse Awesome videos to wind down`,
    description: "This is a great browse videos description for SEO",
  };
};

// 🟢 Define metadata dynamically
export async function generateMetadata(): Promise<Metadata> {
  const browseMetadata = await fetchHomeData();

  return {
    title: browseMetadata.title,
    description: browseMetadata.description,
  };
}

export default function Home({}) {
  return <></>;
}
