import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';
import { InferGetStaticPropsType } from 'next';
import Image from 'next/image';
import Hero from '@components/hero/Hero';
import Navbar2 from '@components/navigation/Navbar copy';
import Footer from '@components/navigation/Footer';
import ButtonLink from '@components/buttons/ButtonLink';
import { Color } from 'styles/styleEnums';
import DienstenSection from '@components/sections/DienstenSection';
import DokterHero from '@components/hero/DokterHero';

const Home = ({ documents }: InferGetStaticPropsType<GetStaticProps>) => {
  return (
    <div className="relative">
      <Head>
        <title>Onoo Dokters</title>
        <meta name="Onoo Dokters" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins"
          rel="stylesheet"
        ></link>
      </Head>

      <main className=" mx-auto">
        <Navbar2></Navbar2>
        {/* Hero */}

        <DokterHero />
        {/* CONTAINER */}
        <div className="max-w-7xl  mx-auto"></div>
        <DienstenSection diensten={['test']} />
      </main>

      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {},
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { name: 'test' } }],
    fallback: true,
  };
};

export default Home;
