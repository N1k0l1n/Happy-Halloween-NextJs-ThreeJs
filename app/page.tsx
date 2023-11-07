"use client";

import { PageWrapper } from "./page-wrapper";
import Head from "next/head";
import dynamic from 'next/dynamic';
import { NextPage } from "next";
import LittleImage from "@/components";

const LittlerImage = dynamic(() => import('../public/next.svg').then(module => module.default), {
  ssr: false,
  loading: () => <p>loading...</p>
});


const Page :NextPage = () => {
  return ( 
    <>
      <PageWrapper>
        <div >
          <Head>
            <title>Happy HalloWeen</title>
          </Head>
          <LittleImage/>
        </div>
      </PageWrapper>
    </>
  );
}

export default Page;