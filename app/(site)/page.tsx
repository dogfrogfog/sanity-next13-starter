import Link from "next/link";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";

export default async function Page() {
  return (
    <>
      <h1 className="text-7xl font-extrabold mb-12">
        <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
          Hello, Welcome!
        </span>
      </h1>
      <h2 className="text-2xl font-light mb-4">Tech stack</h2>
      <div className="grid grid-cols-2 gap-4 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>
              <Link
                className="hover:underline"
                href="https://www.sanity.io/"
                target="_blank"
              >
                Sanity v3
              </Link>
            </CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>
              <Link
                className="hover:underline"
                href="https://nextjs.org/"
                target="_blank"
              >
                Next 13.4
              </Link>
            </CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>
              <Link
                className="hover:underline"
                href="https://tailwindcss.com/"
                target="_blank"
              >
                Tailwind
              </Link>
            </CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>
              <Link
                className="hover:underline"
                href="https://ui.shadcn.com"
                target="_blank"
              >
                Shadcn/UI
              </Link>
            </CardTitle>
          </CardHeader>
        </Card>
      </div>
      <h2 className="text-2xl font-light mb-12">
        Check{" "}
        <Link
          className="font-extrabold hover:underline"
          href="https://github.com/dogfrogfog/sanity-next13-starter"
        >
          Readme.md
        </Link>{" "}
        for more information.
      </h2>
    </>
  );
}
