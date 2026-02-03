'use client';

import { Subtitle } from '@/components/Subtitle';
import { Body2 } from '@/components/Body2';
import {
  useQuotesContext,
  useQuotesDispatchContext,
} from '@/app/QuotesContext';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent
} from '@/components/ui/card';
import { HeartIcon } from '@phosphor-icons/react';

export default function Home() {
  const { quotes, currentIndex } = useQuotesContext();
  const { handleNextQuoteClick } = useQuotesDispatchContext();

  return (
    <main className='min-h-dvh flex items-center'>
      <Card className='mx-auto w-full max-w-lg'>
        <CardContent className='flex flex-col'>
          <Button className='self-end' variant='ghost' size='icon'>
            <HeartIcon size={32} weight='fill' className='text-pink-700' />
          </Button>
          <Subtitle title={quotes[currentIndex].quote} />
          <Body2>{quotes[currentIndex].author}</Body2>
          <Button
            className='mt-10'
            variant='outline'
            onClick={handleNextQuoteClick}
          >
            Next Quote
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
