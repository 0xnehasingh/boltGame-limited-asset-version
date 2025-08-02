import React from 'react';

const TopCreators: React.FC = () => {
  const creators = [
    {
      id: 1,
      name: '@puzzler',
      image: '/creater1.png',
      stats: {
        games: '100',
        plays: '100K',
        hours: '250',
        commits: '30'
      },
      buttonColor: 'bg-teal-500 hover:bg-teal-600',
      usernameColor: 'text-teal-500',
      borderColor: 'hover:border-teal-500'
    },
    {
      id: 2,
      name: '@puzzler',
      image: '/creater2.png',
      stats: {
        games: '100',
        plays: '100K',
        hours: '250',
        commits: '30'
      },
      buttonColor: 'bg-blue-500 hover:bg-blue-600',
      usernameColor: 'text-blue-400',
      borderColor: 'hover:border-blue-500',

      buttonTextColor: 'text-white'
      
    },
    {
      id: 3,
      name: '@puzzler',
      image: '/creater3.png',
      stats: {
        games: '100',
        plays: '100K',
        hours: '250',
        commits: '30'
      },
      buttonColor: 'bg-neon-green hover:bg-neon-green',
      usernameColor: 'text-neon-green',
      borderColor: 'hover:border-neon-green'
    },
    {
      id: 4,
      name: '@puzzler',
      image: '/creater4.png',
      stats: {
        games: '100',
        plays: '100K',
        hours: '250',
        commits: '30'
      },
      buttonColor: 'bg-cyan-500 hover:bg-cyan-600',
      usernameColor: 'text-cyan-500',
      borderColor: 'hover:border-cyan-500'
    }
  ];

  return (
    <section id="creators" className="py-10 bg-black">
      <div className="max-w-7xl mx-auto px-4 py-sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="ttext-4xl md:text-5xl font-clash-medium text-white mb-4">
            Top Creators
          </h2>
        </div>

        {/* Creators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-35">
          {creators.map((creator) => (
            <div key={creator.id} className={`bg-dark-gray rounded-[20px] overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer group border border-transparent hover:border-2 ${creator.borderColor}`}>
              {/* Profile Picture Area */}
              <div className="relative px-3 pt-3">
                <div className="w-full h-48 relative overflow-hidden bg-gray-800 rounded-2xl">
                  <img 
                    src={creator.image}
                    alt={`${creator.name} profile`} 
                    className="w-full h-full object-cover rounded-2xl"
                    style={{ minHeight: '100%', minWidth: '100%' }}
                    onError={(e) => {
                      console.error(`Failed to load image: ${creator.image}`);
                      e.currentTarget.style.display = 'none';
                    }}
                    onLoad={() => {
                      console.log(`Successfully loaded image: ${creator.image}`);
                    }}
                  />
                  
                  {/* Username Overlay - At bottom of image */}
                  <div className="absolute bottom-0 left-0 right-0 flex justify-center pt-10">
                    <div className="relative ">
                      <img 
                        src="/abcd.svg" 
                        alt="username background" 
                        className="w-auto h-10"
                      />
                      <span className={`absolute inset-0 flex items-center justify-center text-sm font-bold ${creator.usernameColor}`}>
                        {creator.name}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Section */}
              <div className="p-6">
                <div className="grid grid-cols-4 gap-0 mb-5">
                  <div className="text-center border-r border-gray-600 pr-2">
                    <div className="text-gray-400 text-xs mb-1 font-clash-display">Games</div>
                    <div className="text-white text-l font-bold font-clash-display">100</div>
                  </div>
                  <div className="text-center border-r border-gray-600 px-2">
                    <div className="text-gray-400 text-xs mb-1 font-clash-display">Plays</div>
                    <div className="text-white text-l font-bold font-clash-display">100K</div>
                  </div>
                  <div className="text-center border-r border-gray-600 px-2">
                    <div className="text-gray-400 text-xs mb-1 font-clash-display">Hours</div>
                    <div className="text-white text-l font-bold font-clash-display">250</div>
                  </div>
                  <div className="text-center pl-2">
                    <div className="text-gray-400 text-xs mb-1 font-clash-display">Commits</div>
                    <div className="text-white text-l font-bold font-clash-display">30</div>
                  </div>
                </div>

                {/* View Games Button */}
                <button className={`w-full text-sm font-semibold py-2 px-6 rounded-lg transition-all duration-300 ${creator.buttonColor} ${creator.buttonTextColor || 'text-black'}`}>
                  View Games
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCreators; 