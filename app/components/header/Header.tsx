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
            <button className="text-white bg-transparent  hover:text-neon-green transition-colors font-clash-regular">
              Sign In
            </button>
            <button className="bg-neon-green text-black px-6 py-2 rounded-lg font-semibold hover:opacity-80 transition-opacity font-clash-medium">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export { Header }
