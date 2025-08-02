import React from 'react'

const Footer: React.FC = () => {
  return (
    
    
    <footer id="pricing" className="pt-10" style={{ borderTop: '0.1px solid transparent', opacity: 0.5, borderImage: 'linear-gradient(to right, transparent, #8CF449, transparent) 1' }}>
      
      <div className="text-center">
        {/* Logo */}
        <div className="mb-8">
          <div className="text-4xl font-bold text-neon-green mx-auto w-fit">
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
          </div>
        </div>

        {/* Tagline */}
        <p className="text-white mb-8 max-w-2xl mx-auto text-center text-xl leading-tight font-clash-light">
          No Code, No Wait, From AI-Powered Creation To Telegram-Ready
          <br />
          <div className="opacity-50">Playability...</div>
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="https://linkedin.com/company/gameterminal"
            className="text-white hover:text-neon-green transition-colors"
            aria-label="Connect with us on LinkedIn"
          >
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href="https://twitter.com/gameterminal"
            className="text-white hover:text-neon-green transition-colors"
            aria-label="Follow us on Twitter/X"
          >
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href="https://t.me/gameterminal"
            className="text-white hover:text-neon-green transition-colors"
            aria-label="Join us on Telegram"
          >
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
          </a>
        </div>
        <div className="bg-gradient-to-t from-[#66ff004f] via-transparent to-transparent opacity-60 shadow-lg">

        {/* Border below Social Media Icons */}
        <div 
          className="mb-8" 
          style={{ borderTop: '0.59px solid transparent', opacity: 0.5, borderImage: 'linear-gradient(to right, transparent, #FFFFFF, transparent) 1' }}
        ></div>

        {/* Copyright */}
        <p className="text-gray-400 pb-6 text-sm font-clash-light">
          © 2025 GameTerminal.com. All Rights Reserved.
        </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 