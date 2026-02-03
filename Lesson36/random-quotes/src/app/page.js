'use client';

import { Subtitle } from '@/components/Subtitle';
import { Body2 } from '@/components/Body2';
import { useQuotesContext, useQuotesDispatchContext } from '@/app/QuotesContext';
import {Button} from '@/components/ui/button';

export default function Home() {
  const { quotes, currentIndex } = useQuotesContext();
  const { handleNextQuoteClick } = useQuotesDispatchContext();

  return (
    <main className='min-h-dvh flex items-center'>
      <div className='w-md mx-auto bg-slate-400 slate-900 dark:bg-slate-700 dark:slate-100 p-10 rounded-md flex flex-col'>
        <Subtitle title={quotes[currentIndex].quote} />
        <Body2>{quotes[currentIndex].author}</Body2>
        <Button variant="outline"
        onClick={handleNextQuoteClick}>Next Quote</Button>
      </div>
    </main>
  );
}
