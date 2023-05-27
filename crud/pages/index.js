import Login from "@/components/Login";
import { useRouter } from "next/router";
import { getSession, useSession } from "next-auth/react";
import Navbar from "@/components/Navbar";
import Feed from "@/components/Feed";



export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();

  if (!session && !router.query.login) return <Login />;
  return (
    <main>
      <Navbar />
      <Feed />
    </main>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}

