import React from 'react'

const FeaturedGames: React.FC = () => {
  const games = [
    {
      title: 'Neon Racers',
      description: 'Race through cyberpunk cityscapes with neon-lit vehicles',
      image: '/image 1.png',
      category: 'RACING/ARCADE',
      profileImage: '/avatar1.png',
      stats: {
        likes: 0,
        users: 0,
        plays: 1,
        code: 0
      }
    },
    {
      title: 'Space Shooter',
      description: 'Defend against alien invaders in pixel art space combat',
      image: '/image 2.png',
      category: 'SHOOTER/ARCADE',
      profileImage: '/avatar2.png',
      stats: {
        likes: 0,
        users: 0,
        plays: 1,
        code: 0
      }
    },
    {
      title: 'Platform Adventure',
      description: 'Explore vibrant worlds with classic platformer mechanics',
      image: '/image 3.png',
      category: 'PLATFORMER/ADVENTURE',
      profileImage: '/avatar3.png',
      stats: {
        likes: 0,
        users: 0,
        plays: 1,
        code: 0
      }
    },
    {
      title: 'Castle Quest',
      description: 'Navigate through mysterious castles and ancient fortresses',
      image: '/image 4.png',
      category: 'ADVENTURE/PUZZLE',
      profileImage: '/avatar4.png',
      stats: {
        likes: 0,
        users: 0,
        plays: 0,
        code: 0
      }
    }
  ]

  return (
    <section id="features" className="py-60 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-clash-medium text-white text-center mb-16">
          Featured Games
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {games.map((game, index) => (
            <div key={index} className="bg-dark-gray rounded-[20px] overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer group relative">
              {/* Original Card Content - Unchanged */}
              <div className="w-full h-70 relative overflow-hidden">
                <img 
                  src={game.image} 
                  alt={`${game.title} - ${game.description}`} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              <div className="p-6">
                {/* Title */}
                <h3 className="text-l font-poppins font-semibold text-white mb-2 group-hover:text-neon-green transition-colors">
                  {game.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 text-xs mb-4 font-poppins font-regular group-hover:text-gray-200 transition-colors">
                  {game.description}
                </p>
                
                {/* Stats Row */}
                <div className="flex items-center justify-center space-x-12">
                  <div className="flex flex-col items-center space-y-1">
                    <svg className="w-4 h-4" fill="none" stroke="#66FF00" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <span className="text-neon-green text-xs font-medium">{game.stats.likes}</span>
                  </div>
                  
                  <div className="flex flex-col items-center space-y-1">
                    <svg className="w-4 h-4" fill="none" stroke="#66FF00" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                    </svg>
                    <span className="text-neon-green text-xs font-medium">{game.stats.users}</span>
                  </div>
                  
                  <div className="flex flex-col items-center space-y-1">
                    <svg className="w-4 h-4" fill="none" stroke="#66FF00" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 5v14l11-7z" />
                    </svg>
                    <span className="text-neon-green text-xs font-medium">{game.stats.plays}</span>
                  </div>
                  
                  <div className="flex flex-col items-center space-y-1">
                    <svg className="w-4 h-4" fill="none" stroke="#66FF00" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    <span className="text-neon-green text-xs font-medium">{game.stats.code}</span>
                  </div>
                </div>
              </div>

              {/* Hover Overlay - Rises from bottom */}
              <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex flex-col items-center justify-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out p-6">
                {/* Category Tag */}
                <div className="bg-gray-800/80 backdrop-blur-sm rounded-full px-3 py-0 mb-6">
                  <span className="text-neon-green text-xs font-clash-display uppercase tracking-wide">
                    {game.category}
                  </span>
                </div>
                
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-full border-2 border-neon-green overflow-hidden bg-black">
                    <img 
                      src="/creater3.png" 
                      alt={`${game.title} creator`} 
                      className="w-full h-full object-cover grayscale"
                    />
                  </div>
                </div>
                
                {/* Game Title */}
                <h3 className="text-xl font-poppins  text-neon-green mb-4 text-center">
                  {game.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-300 text-sm mb-6 text-center leading-relaxed max-w-xs">
                  {game.description}
                </p>
                
                {/* Play Now Button */}
                <button className="bg-neon-green text-black  py-1 px-16 rounded-xl hover:bg-green-400 transition-colors duration-300 transform hover:scale-105">
                  Play Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedGames 