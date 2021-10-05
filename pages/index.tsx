import type { NextPage } from 'next';
import { Fragment, useState } from 'react';

const Animations: Record<string, Array<string>> = {
  'Attention Seekers': [
    'bounce',
    'flash',
    'pulse',
    'rubberBand',
    'shakeX',
    'shakeY',
    'headShake',
    'swing',
    'tada',
    'wobble',
    'jello',
    'heartBeat',
  ],

  'Back Entrances': ['backInDown', 'backInLeft', 'backInRight', 'backInUp'],

  'Back Exits': ['backOutDown', 'backOutLeft', 'backOutRight', 'backOutUp'],

  'Bouncing Entrances': ['bounceIn', 'bounceInDown', 'bounceInLeft', 'bounceInRight', 'bounceInUp'],

  'Bouncing Exits': [
    'bounceOut',
    'bounceOutDown',
    'bounceOutLeft',
    'bounceOutRight',
    'bounceOutUp',
  ],

  'Fade Entrances': [
    'fadeIn',
    'fadeInDown',
    'fadeInDownBig',
    'fadeInLeft',
    'fadeInLeftBig',
    'fadeInRight',
    'fadeInRightBig',
    'fadeInUp',
    'fadeInUpBig',
    'fadeInTopLeft',
    'fadeInTopRight',
    'fadeInBottomLeft',
    'fadeInBottomRight',
  ],

  'Fade Exits': [
    'fadeOut',
    'fadeOutDown',
    'fadeOutDownBig',
    'fadeOutLeft',
    'fadeOutLeftBig',
    'fadeOutRight',
    'fadeOutRightBig',
    'fadeOutUp',
    'fadeOutUpBig',
    'fadeOutTopLeft',
    'fadeOutTopRight',
    'fadeOutBottomRight',
    'fadeOutBottomLeft',
  ],

  Flippers: ['flip', 'flipInX', 'flipInY', 'flipOutX', 'flipOutY'],

  LightSpeed: ['lightSpeedInRight', 'lightSpeedInLeft', 'lightSpeedOutRight', 'lightSpeedOutLeft'],

  'Rotating Entrances': [
    'rotateIn',
    'rotateInDownLeft',
    'rotateInDownRight',
    'rotateInUpLeft',
    'rotateInUpRight',
  ],

  'Rotating Exits': [
    'rotateOut',
    'rotateOutDownLeft',
    'rotateOutDownRight',
    'rotateOutUpLeft',
    'rotateOutUpRight',
  ],

  Specials: ['hinge', 'jackInTheBox', 'rollIn', 'rollOut'],

  'Zooming Entrances': ['zoomIn', 'zoomInDown', 'zoomInLeft', 'zoomInRight', 'zoomInUp'],

  'Zooming Exits': ['zoomOut', 'zoomOutDown', 'zoomOutLeft', 'zoomOutRight', 'zoomOutUp'],

  'Sliding Entrances': ['slideInDown', 'slideInLeft', 'slideInRight', 'slideInUp'],

  'Sliding Exits': ['slideOutDown', 'slideOutLeft', 'slideOutRight', 'slideOutUp'],
};

const AnimationItem: React.FC<{ name: string; stateHandler: () => void }> = ({
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
        className="justify-between group active:!bg-neutral active:focus-within:!bg-base-content active:focus-within:!bg-opacity-10 active:focus-within:!text-current"
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

const Home: NextPage = () => {
  const [animation, setAnimation] = useState('none');

  const resetState: React.AnimationEventHandler<HTMLHeadingElement> = () => {
    setAnimation('none');
  };

  return (
    <div className="h-screen shadow bg-base-200 drawer drawer-mobile drawer-end">
      <input id="sidebar" type="checkbox" className="drawer-toggle" />
      <div className="flex flex-col justify-center items-center drawer-content">
        <a
          href="https://github.com/ikcb/animated-tailwindcss"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-4 left-4 w-8 h-8 transition duration-500 text-base-content hover:scale-125"
        >
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentcolor"
          >
            <title>GitHub</title>
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
        </a>

        <div className="h-full hero bg-base-200">
          <div className="text-center hero-content">
            <div className="max-w-md">
              <h1
                className={`mb-5 text-5xl font-bold animate-animated animate-${animation}`}
                onAnimationEnd={resetState}
              >
                tw-Animated
              </h1>
              <p className="mb-5 text-lg">A configuration to use Animate.css with Tailwind CSS</p>
              <label
                htmlFor="sidebar"
                className="mt-4 btn btn-neutral btn-outline drawer-button btn-sm md:btn-md lg:hidden"
              >
                See Animations
              </label>
            </div>
          </div>
        </div>
        <footer className="p-4 footer bg-base-300 text-base-content footer-center">
          <div>
            <p>
              {'Engineered at '}
              <a href="https://ikcb.org" target="_blank" rel="noopener noreferrer" className="link">
                IIIT Kota
              </a>
              {' by '}
              <a
                href="https://github.com/brc-dd"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                Divyansh Singh
              </a>
            </p>
          </div>
        </footer>
      </div>
      <div className="overflow-x-hidden drawer-side">
        <label htmlFor="sidebar" className="drawer-overlay" />
        <ul className="overflow-y-auto p-4 pt-0 w-72 menu compact bg-base-100 text-base-content">
          {Object.entries(Animations).map(([title, names]) => (
            <Fragment key={title}>
              <li className="mt-4 menu-title">
                <span className="!text-base-content !text-base">{title}</span>
              </li>
              {names.map((name) => (
                <AnimationItem
                  name={name}
                  stateHandler={() => {
                    setAnimation(name);
                  }}
                  key={name}
                />
              ))}
            </Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
