import Head from 'next/head';
import Link from 'next/link';
import {  } from '@heroicons/react/outline';
import { useEffect, useState } from 'react';
import { HomeFeatures } from '../components/Features';

const Home = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return;

  return (
    <>
      <Head>
        <title>Strays</title>
      </Head>

      <div className="w-auto px-4 pt-16 pb-8 mx-auto sm:pt-24 lg:px-8">
        <h1 className="max-w-5xl text-center mx-auto text-6xl font-extrabold tracking-tighter leading-[1.1] sm:text-7xl lg:text-8xl xl:text-8xl font-sans">
          Strays
        </h1>

        <p className="max-w-lg mx-auto mt-6 text-xl font-medium leading-tight text-center text-gray-400 ">
          Created by CrewJays#1234
        </p>

        <div className="max-w-xl mx-auto mt-5 sm:flex sm:justify-center md:mt-8">
          <div className="rounded-md">
            <Link href="https://discord.com/api/oauth2/authorize?client_id=1047628918196293672&permissions=8&scope=bot">
              <a className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white no-underline bg-black border border-transparent rounded-md dark:bg-white dark:text-black betterhover:dark:hover:bg-gray-300 betterhover:hover:bg-gray-700 md:py-3 md:text-lg md:px-10 md:leading-6">
                Invite Bot →
              </a>
            </Link>
          </div>
        </div>

        <div className="relative from-gray-50 to-gray-100">
          <div className="px-4 py-16 mx-auto sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24">
            <h2 className="text-4xl font-extrabold tracking-tight lg:text-5xl xl:text-6xl lg:text-center dark:text-white">
              Awesome Commands
            </h2>
            <p className="mx-auto mt-4 text-lg font-medium text-gray-400 lg:text-center">
              Strays has many useful commands for you to use.
            </p>
            <HomeFeatures />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
