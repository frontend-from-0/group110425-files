'use client';

import { Subtitle } from '@/components/Subtitle';
import { Body2 } from '@/components/Body2';
import {
  useQuotesContext,
  useQuotesDispatchContext,
} from '@/app/QuotesContext';

export default function UserQuotes() {
  const {quotes} = useQuotesContext();
  const {handleUnlike} = useQuotesDispatchContext();

  console.log(quotes);
  const likedQuotes = () => quotes.filter((quote) => quote.likedBy > 0);

  return (
    <main className='min-h-dvh text-center'>
      <h1 className='text-4xl font-bold my-12'>Liked Quotes</h1>
      {likedQuotes().length > 0 &&
        likedQuotes().map((quote) => (
          <div
            key={quote.quote}
            className='w-md mx-auto bg-slate-700 p-10 rounded-md flex flex-col my-6'
          >
            <button
              onClick={() => handleUnlike(quote)}
              className='self-end hover:cursor-pointer text-2xl'
            >
              ❤️
            </button>
            <div>
              <Subtitle title={quote.quote} />
              <Body2>{quote.author}</Body2>
            </div>
          </div>
        ))}
    </main>
  );
}
