
import React from 'react';
import Card from './Card';

function Home() {
  return (
    <div className="min-h-screen bg-champagne font-quicksand text-center py-[70px]">
        <h1 className="text-6xl font-bold text-blush">Welcome to JavaBunny!</h1>
        <p className="mt-4 text-3xl text-blush font-bold">Learn Java the fun way</p>
        <p className="text-2xl text-blush">Start Learning Now </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-[100px] mr-20 ml-20">
        <Card
          title="Intro to Java"
          description="Start with the basics of Java programming."
          to="/intro-to-java"
        />
        <Card
          title="Beginner"
          description="Build foundational skills and small projects."
          to="/beginner"
        />
        <Card
          title="Intermediate"
          description="Advance your Java knowledge with more complex topics."
          to="/intermediate"
        />
      </div>
    </div>
  );
}

export default Home;
