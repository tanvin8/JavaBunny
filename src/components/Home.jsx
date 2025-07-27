import React from 'react';
import Card from './Card';

function Home() {
  return (
    <div className="min-h-screen bg-champagne font-quicksand text-center py-[70px] relative overflow-hidden">
      <h1 className="text-6xl font-bold text-blush">Welcome to JavaBunny!</h1>
      <p className="mt-4 text-3xl text-blush font-bold">Learn Java the fun way</p>
      <p className="text-2xl text-blush">Start Learning Now </p>

      {/* Bunny GIF Animation */}
      <div className="w-full h-40 mt-3 relative overflow-hidden">
        <img
          src="bunny.gif"
          alt="Running Bunny"
          className="absolute top-0 left-0 h-40 w-[500px] animate-bunny"
          style={{ maxWidth: '400px' }}
        />
      </div>

      <style jsx>{`
        @keyframes bunny-run {
          0% {
            left: -100px;
            transform: scaleX(-1);
          }
          45% {
            transform: scaleX(-1);
          }
          55% {
            transform: scaleX(-1);
          }
          100% {
            left: 100vw;
            transform: scaleX(-1);
          }
        }

        .animate-bunny {
          animation: bunny-run 10s ease-in-out infinite;
        }
      `}</style>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-[50px] mx-20">
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
