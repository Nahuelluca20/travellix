import { LoaderFunctionArgs } from "@remix-run/cloudflare";
import { Outlet, redirect } from "@remix-run/react";
import Navbar from "./components/navbar";

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);

  if (url.pathname === "/dashboard") {
    return redirect("/dashboard/home");
  }

  return null;
}

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="bg-white flex-grow flex h-full">
        <div className="mx-auto  justify-between px-5 max-w-[1280px] min-h-full flex-grow flex my-10">
          {/* <ProfileAside /> */}
          <Outlet />
          {/* <SearchTravelAside /> */}
        </div>
      </div>
    </div>
  );
}
