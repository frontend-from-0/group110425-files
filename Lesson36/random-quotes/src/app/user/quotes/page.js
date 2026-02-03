'use client';

import { Subtitle } from '@/components/Subtitle';
import { Body2 } from '@/components/Body2';
import {
  useQuotesContext,
  useQuotesDispatchContext,
} from '@/app/QuotesContext';
import { Button } from '@/components/ui/button';
import { HeartIcon } from '@phosphor-icons/react';
import { Card, CardContent} from '@/components/ui/card';

export default function UserQuotes() {
  const { quotes } = useQuotesContext();
  const { handleUnlike } = useQuotesDispatchContext();

  console.log(quotes);
  const likedQuotes = () => quotes.filter((quote) => quote.likedBy > 0);

  return (
    <main className='min-h-dvh text-center'>
      <h1 className='text-4xl font-bold my-12'>Liked Quotes</h1>
      {likedQuotes().length > 0 &&
        likedQuotes().map((quote) => (
          <Card className='mx-auto w-full max-w-lg mb-10'>
            <CardContent className='flex flex-col'>
              <Button
                className='self-end'
                variant='ghost'
                size='icon'
                onClick={() => handleUnlike(quote)}
              >
                <HeartIcon size={32} weight='fill' className='text-pink-700' />
              </Button>
              <Subtitle title={quote.quote} />
              <Body2>{quote.author}</Body2>
            </CardContent>
          </Card>
        ))}
    </main>
  );
}
