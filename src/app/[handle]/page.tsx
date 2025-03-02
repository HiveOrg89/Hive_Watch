import { Metadata } from "next";

// Simulating a delayed API call
const fetchChannelData = async (handle: string) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    channelId: "UCyT8HNBui789BJJBSC89",
    handle,
  };
};

// 🟢 Define metadata dynamically
export async function generateMetadata({
  params,
}: {
  params: { handle: string }; // 🔥 Get dynamic `handle` from route
}): Promise<Metadata> {
  const channelParams = await params;
  const channelData = await fetchChannelData(channelParams.handle);

  return {
    title: `Channel: ${channelData.handle}`,
    description: `Viewing channel ${channelData.handle}`,
  };
}

// Server Component
export default function Channel({}) {
  return <></>;
}
