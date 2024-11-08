import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <>
      <div className="bg-gray-50">
        <div className="relative overflow-hidden">
          <div className="absolute inset-y-0 h-full w-full" aria-label="true">
            <div className="relative h-full">
              <svg
                className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 sm:-translate-x-1/2 md:-translate-y-1/2 lg:-translate-x-3/4"
                width={404}
                height={784}
                fill="none"
                viewBox="0 0 404 784"
              >
                <defs>
                  <pattern
                    id="d2a68204-c383-44b1-b99f-42ccff4e5365"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={784}
                  fill="url(#d2a68204-c383-44b1-b99f-42ccff4e5365)"
                />
              </svg>
            </div>
          </div>
          <div className="relative pt-6 pb-16 sm:pb-24 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <nav className="relative flex items-center justify-between sm:h-10 md:justify-center">
                <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <Link href="/">
                      <div className="flex items-center">
                        <img
                          src="readme.svg"
                          alt=""
                          className="h-8 mt-1 w-auto cursor-pointer"
                        />
                        <p className="text-gray-800 ml-2 -mb-2 text-md">
                          readmeGenerator
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="relative w-28 items-center flex-1 md:absolute md:inset-y-0 md:right-0 z-10">
                  Language
                </div>
              </nav>
            </div>
            <div className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6">
              <div className="text-center">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block ">Lightning Fast Way to Generate</span>
                  <span className="block text-green-600">README</span>
                </h1>
                <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                  Our editor empowers developers and maintainers to quickly add
                  and customize all the sections you need for your readme files
                </p>
              </div>
              <div className="flex justify-center mt-6 ">
                <span className="inline-flex rounded-md shadow">
                  <Link
                    href="/editor"
                    className="inline-flex items-center px-4 py-2 border border-transparent ext-base font-medium rounded-lg text-green-700 bg-white hover:text-green-600"
                  >
                    Get Started
                  </Link>
                </span>
              </div>
              <div className="text-center">
                <p className="mt-3 mx-auto text-sm text-gray-900 ">100% Free</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex flex-col">
            <div className="flex-1" />
            <div className="flex-1 w-full bg-gray-800" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <img
              src="/readmeCreator.png"
              alt="App Image"
              className="relative rounded-md shadow-lg "
            />
          </div>
        </div>
        <div className="bg-gray-800">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <h2 className="text-center text-gray-400 text-sm font-semibold tracking-wide">
              Made With Love &#9825; by{" "}
              <a
                href="https://vinayak-gaikwad-portfolio.vercel.app/"
                className="hover:text-white"
                target="_blank"
              >
                Vinayak Gaikwad
              </a>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
