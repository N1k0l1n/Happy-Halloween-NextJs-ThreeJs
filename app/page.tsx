"use client";

import { PageWrapper } from "./page-wrapper";
import Head from "next/head";
import dynamic from 'next/dynamic';
import { NextPage } from "next";

const LitterWitch = dynamic(() => import('../components/LitterWitch'), {
  ssr: false,
  loading: () => <div>loading...</div>,
});

const Page :NextPage = () => {
  return ( 
    <>
      <PageWrapper>
        <div >
          <Head>
            <title>Happy HalloWeen</title>
          </Head>
          <LitterWitch/>
        </div>
      </PageWrapper>
    </>
  );
}

export default Page;