import { useState } from 'react';

export const AnimationItem: React.FC<{ name: string; stateHandler: () => void }> = ({
  name,
  stateHandler,
}) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(`animate-${name}`);
    setCopied(true);
  };

  const resetState: React.MouseEventHandler<HTMLDivElement> = () => {
    setCopied(false);
  };

  return (
    <li>
      <a
        className="font-sand tracking-wide justify-between group active:!bg-neutral active:focus-within:!bg-base-content active:focus-within:!bg-opacity-10 active:focus-within:!text-current"
        onClick={stateHandler}
      >
        {name}
        <div
          data-tip={copied ? 'copied!' : 'click to copy'}
          className="tooltip tooltip-left"
          onClick={copyToClipboard}
          onMouseEnter={resetState}
          tabIndex={0}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5 opacity-0 transition delay-75 group-hover:opacity-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
            />
          </svg>
        </div>
      </a>
    </li>
  );
};
