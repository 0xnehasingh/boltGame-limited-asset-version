import { json, type MetaFunction } from '@remix-run/cloudflare';
import { ClientOnly } from 'remix-utils/client-only';
import { BaseChat } from '~/components/chat/BaseChat';
import { Chat } from '~/components/chat/Chat.client';
import { Header } from '~/components/header/Header';
import BackgroundRays from '~/components/ui/BackgroundRays';
import FeaturedGames from '~/components/FeaturedGames';
import TopCreators from '~/components/TopCreators';
import Footer from '~/components/Footer';
import { useStore } from '@nanostores/react';
import { chatStore } from '~/lib/stores/chat';

export const meta: MetaFunction = () => {
  return [{ title: 'Bolt' }, { name: 'description', content: 'Talk with Bolt, an AI assistant from StackBlitz' }];
};

export const loader = () => json({});

/**
 * Landing page component for Bolt
 * Note: Settings functionality should ONLY be accessed through the sidebar menu.
 * Do not add settings button/panel to this landing page as it was intentionally removed
 * to keep the UI clean and consistent with the design system.
 */
export default function Index() {
  const chat = useStore(chatStore);

  // If chat has started, show the chat interface
  if (chat.started) {
    return (
      <div className="flex flex-col h-full w-full bg-bolt-elements-background-depth-1">
        <BackgroundRays />
        <Header />
        <ClientOnly fallback={<BaseChat />}>{() => <Chat />}</ClientOnly>
      </div>
    );
  }

  // Show landing page with original content plus featured games when no chat is active
  return (
    <div className="flex flex-col min-h-screen w-full bg-black">
      <BackgroundRays />
      <Header />
      
      {/* Original content remains unchanged */}
      <div className="flex-1">
        <ClientOnly fallback={<BaseChat />}>{() => <Chat />}</ClientOnly>
      </div>
      
      {/* Featured Games Section - added below original content */}
      <FeaturedGames />
      
      {/* Top Creators Section - added below Featured Games */}
      <TopCreators />
      
      {/* Footer Section - added below Top Creators */}
      <Footer />
    </div>
  );
}
