import {
  json,
  type LoaderFunctionArgs,
  type MetaFunction,
} from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Travellix" },
    {
      name: "description",
      content: "Manage your trips and expenses with Travellix.",
    },
  ];
};

export async function loader({ context }: LoaderFunctionArgs) {
  const { MY_ENV } = context.cloudflare.env;
  console.log(MY_ENV);
  return json({ MY_ENV });
}

export default function Index() {
  const { MY_ENV } = useLoaderData<typeof loader>();

  return (
    <div className="bg-hunt-dark-200">
      <h1 className="text-3xl text-red-200 font-bold underline">
        Hello world!
      </h1>
      <h1 className="bg-hunt-teal-100">
        Welcome to Remix (with Vite and Cloudflare)
      </h1>
      <h3>My env is: {MY_ENV}</h3>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://developers.cloudflare.com/pages/framework-guides/deploy-a-remix-site/"
            rel="noreferrer"
          >
            Cloudflare Pages Docs - Remix guide
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
