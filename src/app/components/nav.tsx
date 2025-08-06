import Link from "next/link";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";

export default async function Nav() {
  // Fetch the session on the server side if there is one.
  const session = await getServerSession(options);
  return (
    <header className="bg-gray-600 text-gray-100">
      <nav className="flex justify-between items-center w-full px-10 py-4">
        <div>My Site</div>
        <div className="flex gap-10">
          <Link href={"/"}>Home</Link>
          <Link href={"/CreateUser"}>Create User</Link>
          <Link href={"/ClientMember"}>Client Member</Link>
          <Link href={"/Member"}>Member</Link>
          <Link href={"/Public"}>Public</Link>
          {/* Checks if user is logged in */}
          {session ? (
            // Both Github and Google use http://localhost:3000/api/auth/callback/Github_OR_Google as default callback URLs
            // Redirects to sign-in page. Then, if they log in or log out, they will be redirected back to / per the callbackUrl.
            <Link href="/api/auth/signout?callbackUrl=/">Logout</Link>
          ) : (
            <Link href="/api/auth/signin?callbackUrl=/">Login</Link>
          )}
        </div>
      </nav>
    </header>
  );
}
