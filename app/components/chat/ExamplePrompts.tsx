import React from 'react';

const EXAMPLE_PROMPTS = [
  { text: 'Make a Space Invaders game', icon: '/M1.png' },
  { text: 'Create a 2D platformer game', icon: '/M2.png' },
  { text: 'Build a Tic Tac Toe game', icon: '/M3.png' },
  { text: 'Develop a memory matching game', icon: '/M4.png' },
  { text: 'Create a Snake game', icon: '/M5.png' },
  { text: 'Build a card-matching game', icon: '/M6.png' },
];

export function ExamplePrompts(sendMessage?: { (event: React.UIEvent, messageInput?: string): void | undefined }) {
  return (
    <div id="examples" className="relative flex flex-col gap-9 w-full max-w-3xl mx-auto flex justify-center mt-6">
      <div
        className="flex flex-wrap justify-center gap-2"
        style={{
          animation: '.25s ease-out 0s 1 _fade-and-move-in_g2ptj_1 forwards',
        }}
      >
        {EXAMPLE_PROMPTS.map((examplePrompt, index: number) => {
          return (
            <button
              key={index}
              onClick={(event) => {
                sendMessage?.(event, examplePrompt.text);
              }}
              className="flex items-center space-x-3 border border-emerald-500/30 rounded-full bg-slate-900/60 hover:bg-emerald-900/40 backdrop-blur-sm text-slate-200 hover:text-emerald-100 hover:border-emerald-400/50 px-4 py-2 text-sm transition-all duration-200 font-medium shadow-lg hover:shadow-emerald-500/20"
            >
              <img 
                src={examplePrompt.icon} 
                alt={`${examplePrompt.text} icon`}
                className="w-5 h-5 flex-shrink-0"
              />
              <span>{examplePrompt.text}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
