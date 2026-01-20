'use client';

import { useState } from 'react';
import { quotes as initialQuotes } from '@/quotes';
import {Subtitle} from '@/components/Subtitle';
import {Body2} from '@/components/Body2';
import {Button} from '@/components/Button';

function getRandomIndex(currentIndex, arrayLength) {
  const random = () => Math.floor(Math.random() * arrayLength);

  const result = random();
  if (result === currentIndex) {
    getRandomIndex(currentIndex, arrayLength);
  } else {
    return result;
  }
}

export default function Home() {
  const [quotes, setQuotes] = useState(initialQuotes);
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleNextClick() {
    console.log('next Quote is clicked');
    const nextIndex = getRandomIndex(currentIndex, quotes.length);
    setCurrentIndex(nextIndex);
  }

  return (
    <main className='min-h-dvh flex items-center'>
      <div className='w-md mx-auto bg-slate-700 p-10 rounded-md flex flex-col'>
        <Subtitle title={quotes[currentIndex].quote} />
        <Body2>{quotes[currentIndex].author}</Body2>
        <Button
          onClick={handleNextClick}
        >
          Next Quote
        </Button>
      </div>
    </main>
  );
}
