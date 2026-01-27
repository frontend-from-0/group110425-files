'use client';
import { createContext, useContext, useState } from 'react';
import { quotes as initialQuotes } from '@/quotes';

function getRandomIndex(currentIndex, arrayLength) {
  const random = () => Math.floor(Math.random() * arrayLength);

  const result = random();
  if (result === currentIndex) {
    getRandomIndex(currentIndex, arrayLength);
  } else {
    return result;
  }
}

const QuotesContext = createContext([]);
const QuotesDispatchContext = createContext(undefined);

export const QuotesProvider = ({ children }) => {
  const [quotes,setQuotes] = useState(initialQuotes);
  const [currentIndex,setCurrentIndex] = useState(0);

  function handleUnlike (quoteToUnlike) {
    setQuotes((prevQuotes) => {
      const updatedQuotes = prevQuotes.map((currentQuote) => {
        if (
          currentQuote.quote === quoteToUnlike.quote &&
          currentQuote.author === quoteToUnlike.author
        ) {
          return {
            ...currentQuote,
            likedBy: 0,
          };
        } else {
          return currentQuote;
        }
      });

      return updatedQuotes;
    });
  }

  function handleLike(quoteToLike) {

  }

  function handleNextQuoteClick() {
    const nextIndex = getRandomIndex(currentIndex, quotes.length);
    setCurrentIndex(nextIndex);
  }

  return (
    <QuotesContext.Provider value={{quotes, currentIndex}}>
      <QuotesDispatchContext.Provider value={{handleUnlike, handleLike, handleNextQuoteClick}}>
        {children}
        </QuotesDispatchContext.Provider>
    </QuotesContext.Provider>
  );
};

// useQuotesContext is a custom hook used to simplify usage of QuotesContext
export const useQuotesContext = () => useContext(QuotesContext);
export const useQuotesDispatchContext = () => useContext(QuotesDispatchContext);

