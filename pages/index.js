// pages/index.js
import React from 'react';
import Head from 'next/head';
import WaitlistForm from '../components/WaitlistForm';

const Home = () => {
  return (
    <>
      <Head>
        <title>World of Rogues Waitlist</title>
        <link rel="icon" href="/fox.svg" type="image/svg+xml" />
      </Head>

      <main>
        <h1>Welcome to World of Rogues!</h1>
        <p>
          Join the priority/wait list and queue to be eventually allowed access
          to the game.
        </p>
        <WaitlistForm />
      </main>
    </>
  );
};

export default Home;