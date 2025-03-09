import Link from "@/client_routing/AppRouter/components/Link";

export default function Home() {
  return (
    <div className='home-route'>
      <Link href='/watch?v=qyCRPfq5dqN'>Video</Link>
      <Link href='/channel/@WebDevSimplified'>@WebDevSimplified</Link>
      <h1>This is home page</h1>
    </div>
  );
}
