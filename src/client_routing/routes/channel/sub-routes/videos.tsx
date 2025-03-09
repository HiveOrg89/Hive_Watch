import Link from "@/client_routing/AppRouter/components/Link";

export default function ChannelVideosPage() {
  return (
    <div className='videos-page'>
      <h3>This is the videos page of this channel</h3>
      <Link href='/watch?v=qyCRPfq5dqN'>First Video</Link>
      <Link href='/watch?v=Od7PbjTYPJi'>Second Video</Link>
    </div>
  );
}
