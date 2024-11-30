import { auth } from "@/lib/auth";
import { SessionWrapper } from "@/components/SessionWrapper";
import SignInPage from "@/components/login/LoginComponent";
import SignOutPage from "@/components/login/SignOutComponent";

export default async function Home()  {
  const session = await auth();
  const isAuthenticated = !!session?.user;

  return(
    <div>
      <SessionWrapper>
<div className="min-h-screen bg-gray-50 animation-fade-in">
  <header className="bg-gray-800 text-white p-4 text-center">
    <h1 className="text-3xl font-bold">Welcome to My App</h1>
  </header>
        {isAuthenticated
        ?
        <SignOutPage/>:
        <SignInPage/>
        }
</div>
      </SessionWrapper>
    </div>
  )
}

