import React, { useState, useEffect } from 'react'
import { useStore } from '@nanostores/react';
import { ClientOnly } from 'remix-utils/client-only';
import { chatStore } from '~/lib/stores/chat';
import { classNames } from '~/utils/classNames';
import { HeaderActionButtons } from './HeaderActionButtons.client';
import { ChatDescription } from '~/lib/persistence/ChatDescription.client';

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState('')
  const chat = useStore(chatStore);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    // Observe all sections
    const sections = document.querySelectorAll('section[id]')
    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  const getNavItemClasses = (sectionId: string) => {
    const isActive = activeSection === sectionId
    const baseClasses = 'flex items-center border-r border-gray-700 px-16 py-6 transition-all duration-300'
    const hoverClasses = 'hover:border-t-2 hover:border-t-neon-green hover:bg-gradient-to-b from-[#66ff004f] via-transparent to-transparent'
    const activeClasses = isActive
      ? 'border-t-2 border-t-neon-green bg-gradient-to-b from-[#66ff004f] via-transparent to-transparent shadow-lg'
      : ''

    return `${baseClasses} ${hoverClasses} ${activeClasses}`.trim()
  }

  // If chat has started, show the original header
  if (chat.started) {
    return (
      <header
        className={classNames('flex items-center px-4 border-b h-[var(--header-height)]', {
          'border-transparent': !chat.started,
          'border-bolt-elements-borderColor': chat.started,
        })}
      >
        <div className="flex items-center gap-2 z-logo text-bolt-elements-textPrimary cursor-pointer">
          <div className="i-ph:sidebar-simple-duotone text-xl" />
          <a href="/" className="text-2xl font-semibold text-accent flex items-center">
            <img src="/logo-light-styled.png" alt="logo" className="w-[90px] inline-block dark:hidden" />
            <img src="/logo-dark-styled.png" alt="logo" className="w-[90px] inline-block hidden dark:block" />
          </a>
        </div>
        <span className="flex-1 px-4 truncate text-center text-bolt-elements-textPrimary">
          <ClientOnly>{() => <ChatDescription />}</ClientOnly>
        </span>
        <ClientOnly>
          {() => (
            <div className="">
              <HeaderActionButtons chatStarted={chat.started} />
            </div>
          )}
        </ClientOnly>
      </header>
    );
  }

  // Show the new header design when chat hasn't started
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <div className="flex items-center">
            <svg
              width="32"
              height="24"
              viewBox="0 0 32 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.619 18.6039V18.9656V24H22.6534V14.886V9.46104H14.0891L10.1976 14.4954H17.2428H17.619V14.8715V18.6039Z" fill="#8EFE49" />
              <path d="M13.1486 0C6.58079 0 1.069 5.20799 0.880923 11.6312C0.77964 14.8862 1.9804 17.982 4.25163 20.3256C6.47951 22.6258 9.45962 23.9278 12.6423 23.9857L16.5917 18.9802L12.8593 18.9513C10.8918 18.9513 8.9967 18.1122 7.68022 16.6366C6.36379 15.161 5.72723 13.1936 5.95871 11.2117C6.34931 7.69626 9.40178 5.04887 13.0618 5.04887H23.4344L27.3259 0.0144827L13.1486 0Z" fill="#8EFE49" />
              <path d="M27.6585 9.47575L23.767 14.5101H31.6079V9.47575H27.6585Z" fill="#8EFE49" />
            </svg>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center">
            <div className={`${getNavItemClasses('game')} border-l`}>
              <a href="#game" className="text-white font-clash-regular transition-colors">
                Game
              </a>
            </div>

            <div className={`${getNavItemClasses('features')}`}>
              <a href="#features" className="text-white font-clash-regular transition-colors">
                Features
              </a>
            </div>

            <div className={getNavItemClasses('creators')}>
              <a href="#creators" className="text-white font-clash-regular transition-colors">
                Creators
              </a>
            </div>

            <div className={getNavItemClasses('pricing')}>
              <a href="#pricing" className="text-white font-clash-regular transition-colors">
                Pricing
              </a>
            </div>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <button className="text-white hover:text-neon-green transition-colors">
              Sign In
            </button>
            <button className="hover:opacity-80 transition-opacity">
              <svg width="116" height="44" viewBox="0 0 116 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2.625" y="2.5" width="110" height="39" rx="9.5" fill="#8CF449" />
                <rect x="2.625" y="2.5" width="110" height="39" rx="9.5" stroke="url(#paint0_linear_307_545)" strokeWidth="5" />
                <path d="M20.8588 27.15C17.9038 27.15 15.9388 25.11 15.9388 21.975C15.9388 18.84 18.0538 16.8 21.2638 16.8C24.1138 16.8 26.0938 18.24 26.0938 20.565V20.685H24.3088V20.565C24.3088 19.125 23.3038 18.345 21.2188 18.345C18.8038 18.345 17.6488 19.47 17.6488 21.975C17.6488 24.48 18.7888 25.59 21.1438 25.59C23.5438 25.59 24.4888 24.93 24.4888 23.235V23.1H20.7688V21.87H26.0938V27H24.6238V24.825H24.5188C24.0988 26.295 22.8238 27.15 20.8588 27.15ZM31.2095 27.15C28.7645 27.15 27.1595 25.77 27.1595 23.28C27.1595 20.955 28.7495 19.395 31.1795 19.395C33.4895 19.395 35.0645 20.67 35.0645 22.935C35.0645 23.205 35.0495 23.415 35.0045 23.64H28.6745C28.7345 25.08 29.4395 25.845 31.1645 25.845C32.7245 25.845 33.3695 25.335 33.3695 24.45V24.33H34.9895V24.465C34.9895 26.055 33.4295 27.15 31.2095 27.15ZM31.1495 20.67C29.4995 20.67 28.7795 21.405 28.6895 22.74H33.5345V22.71C33.5345 21.33 32.7395 20.67 31.1495 20.67ZM41.1678 27H39.4578C37.8528 27 36.8628 26.295 36.8628 24.48V20.895H35.6028V19.545H36.8628V17.91H38.4678V19.545H41.1678V20.895H38.4678V24.39C38.4678 25.305 38.8878 25.545 39.8178 25.545H41.1678V27ZM48.9596 27.15C45.9596 27.15 44.4296 25.83 44.4296 23.715V23.625H46.0496V23.865C46.0496 25.065 46.7546 25.665 48.9596 25.665C50.8796 25.665 51.5546 25.245 51.5546 24.3C51.5546 23.43 51.0446 23.1 49.7696 22.86L47.3096 22.455C45.6146 22.155 44.4146 21.375 44.4146 19.725C44.4146 18.27 45.6146 16.8 48.7346 16.8C51.6746 16.8 53.0096 18.27 53.0096 20.235V20.325H51.4046V20.13C51.4046 18.9 50.6696 18.285 48.5846 18.285C46.7546 18.285 46.0346 18.735 46.0346 19.635C46.0346 20.505 46.5446 20.79 47.7296 21.045L50.1746 21.465C52.1846 21.825 53.1746 22.74 53.1746 24.21C53.1746 25.74 51.9296 27.15 48.9596 27.15ZM59.2147 27H57.5047C55.8997 27 54.9097 26.295 54.9097 24.48V20.895H53.6497V19.545H54.9097V17.91H56.5147V19.545H59.2147V20.895H56.5147V24.39C56.5147 25.305 56.9347 25.545 57.8647 25.545H59.2147V27ZM62.418 27.15C60.873 27.15 59.898 26.43 59.898 25.2C59.898 24.045 60.828 23.445 62.298 23.28L65.688 22.92V22.485C65.688 21.255 65.148 20.82 63.723 20.82C62.343 20.82 61.668 21.27 61.668 22.365V22.425H60.063V22.365C60.063 20.67 61.473 19.395 63.843 19.395C66.213 19.395 67.278 20.685 67.278 22.47V27H65.793V25.14H65.688C65.298 26.4 64.113 27.15 62.418 27.15ZM61.518 25.095C61.518 25.695 61.923 25.98 62.853 25.98C64.548 25.98 65.688 25.35 65.688 23.88L62.763 24.21C61.923 24.315 61.518 24.51 61.518 25.095ZM70.3441 27H68.7241V19.545H70.2091V21.555H70.3141C70.5391 20.355 71.3491 19.395 72.8791 19.395C74.5741 19.395 75.3091 20.61 75.3091 22.02V22.995H73.7041V22.335C73.7041 21.27 73.2541 20.775 72.1441 20.775C70.8691 20.775 70.3441 21.48 70.3441 22.815V27ZM81.2167 27H79.5067C77.9017 27 76.9117 26.295 76.9117 24.48V20.895H75.6517V19.545H76.9117V17.91H78.5167V19.545H81.2167V20.895H78.5167V24.39C78.5167 25.305 78.9367 25.545 79.8667 25.545H81.2167V27ZM85.98 27.15C83.535 27.15 81.93 25.77 81.93 23.28C81.93 20.955 83.52 19.395 85.95 19.395C88.26 19.395 89.835 20.67 89.835 22.935C89.835 23.205 89.82 23.415 89.775 23.64H83.445C83.505 25.08 84.21 25.845 85.935 25.845C87.495 25.845 88.14 25.335 88.14 24.45V24.33H89.76V24.465C89.76 26.055 88.2 27.15 85.98 27.15ZM85.92 20.67C84.27 20.67 83.55 21.405 83.46 22.74H88.305V22.71C88.305 21.33 87.51 20.67 85.92 20.67ZM94.3333 27.15C91.9783 27.15 90.6733 25.575 90.6733 23.28C90.6733 20.955 91.9633 19.395 94.2283 19.395C95.9983 19.395 97.0033 20.31 97.3033 21.57H97.3933V16.95H99.0133V27H97.5283V24.855H97.4233C97.1083 26.34 96.0133 27.15 94.3333 27.15ZM92.3083 23.28C92.3083 25.065 93.2233 25.665 94.8283 25.665C96.4183 25.665 97.3933 24.915 97.3933 23.355V23.235C97.3933 21.645 96.4633 20.865 94.7983 20.865C93.2383 20.865 92.3083 21.48 92.3083 23.28Z" fill="black" />
                <defs>
                  <linearGradient id="paint0_linear_307_545" x1="57.625" y1="0" x2="57.625" y2="44" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#C1FF9C" />
                    <stop offset="1" stopColor="#8FF74D" />
                  </linearGradient>
                </defs>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
