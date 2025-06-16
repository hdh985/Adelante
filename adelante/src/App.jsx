import React from 'react';
import Header from './components/common/Header';
import BottomNavigation from './components/common/BottomNavigation';
import HomeTab from './pages/HomeTab';
import LineupTab from './pages/LineupTab';
import MapTab from './pages/MapTab';
import EventsTab from './pages/EventsTab';
import ContactTab from './pages/ContactTab';
import { useNavigation } from './hooks/useNavigation';
import { useChat } from './hooks/useChat';
import { CHATBOT_RESPONSES, STUDENT_COUNCIL_RESPONSES } from './data/chatResponses';
import { TABS } from './utils/constants';
import './styles/globals.css';

const AdelanteFestivalApp = () => {
  const { activeTab, handleTabChange } = useNavigation(TABS.HOME);
  
  const { messages: chatMessages, sendMessage: sendChatMessage } = useChat(
    '안녕하세요! 저는 아델란테 축제 도우미 쿠옹이에요! 축제에 대해 궁금한 것이 있으시면 언제든지 물어보세요! 🎉',
    CHATBOT_RESPONSES
  );
  
  const { messages: contactMessages, sendMessage: sendContactMessage } = useChat(
    '안녕하세요! 경희대 글로벌캠퍼스 총학생회입니다. 🎓<br/>축제와 관련된 모든 문의사항을 언제든지 말씀해주세요!',
    STUDENT_COUNCIL_RESPONSES
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case TABS.HOME:
        return (
          <HomeTab
            onTabChange={handleTabChange}
            chatMessages={chatMessages}
            onSendChatMessage={sendChatMessage}
          />
        );
      case TABS.LINEUP:
        return <LineupTab />;
      case TABS.MAP:
        return <MapTab />;
      case TABS.EVENTS:
        return <EventsTab />;
      case TABS.CONTACT:
        return (
          <ContactTab
            contactMessages={contactMessages}
            onSendContactMessage={sendContactMessage}
          />
        );
      default:
        return (
          <HomeTab
            onTabChange={handleTabChange}
            chatMessages={chatMessages}
            onSendChatMessage={sendChatMessage}
          />
        );
    }
  };

  return (
    <div>
      <Header />
      
      <main className="main-content">
        <div className={`tab-content ${activeTab ? 'active' : ''}`}>
          {renderTabContent()}
        </div>
      </main>

      <BottomNavigation activeTab={activeTab} onTabChange={handleTabChange} />
    </div>
  );
};

export default AdelanteFestivalApp;