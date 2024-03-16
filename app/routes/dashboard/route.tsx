import { LoaderFunctionArgs } from "@remix-run/cloudflare";
import { Outlet, redirect } from "@remix-run/react";

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
      {/* <Navbar /> */}
      <div className="bg-dark-400 flex-grow flex h-full">
        <div className="mx-auto justify-between max-w-[1280px] min-h-full flex-grow flex my-10">
          {/* <ProfileAside /> */}
          <Outlet />
          {/* <SearchTravelAside /> */}
        </div>
      </div>
    </div>
  );
}
