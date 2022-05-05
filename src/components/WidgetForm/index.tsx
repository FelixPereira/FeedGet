import { CloseButton } from "../CloseButton";
import { useState } from "react";

import bugImageUrl from '../../assets/img/bug.svg';
import ideaImageUrl from '../../assets/img/idea.svg';
import thoughtImageUrl from '../../assets/img/thought.svg';
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageUrl,
      alt: 'Imagem de um inseto'
    }
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImageUrl,
      alt: 'Imagem de uma lâmpada'
    }
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: thoughtImageUrl,
      alt: 'Nuvem de pensamento'
    }
  }
};

export type FeedbackType = keyof typeof feedbackTypes;

export const WidgetForm = () => {
  const [feedbackType, setFeedbackType] = useState<FeedbackType |
   null>(null);

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6">Deixe o seu feddback</span>

        <CloseButton />
      </header>
      
      { !feedbackType ?  (
          <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
        ) : (
            <p>Hello world</p>
          )
      }

      <footer className="text-xs text-neutral-400">
        Feito com amor por <a className="underline underline-offset-2" href="#">FélixPereira</a>
      </footer>
    </div>
  )
}