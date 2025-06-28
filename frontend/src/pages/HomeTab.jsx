import React from 'react';
import FestivalImageSection from '../components/sections/FestivalImageSection';
import MainTabCard from '../components/cards/MainTabCard';
import Chatbot from '../components/chat/Chatbot';
import FileList from '../components/lists/FileList';
import NewsCard from '../components/common/NewsCard';
import { MAIN_TABS } from '../data/navigationData';
import { PROMOTION_ITEMS, NOTICE_ITEMS } from '../data/eventData';
import { QUICK_QUESTIONS } from '../data/chatResponses';

const HomeTab = ({ onTabChange, chatMessages, onSendChatMessage }) => {
  return (
    <>
      <FestivalImageSection />
      
      <div className="main-tabs">
        {MAIN_TABS.map((tab, index) => (
          <MainTabCard
            key={index}
            icon={tab.icon}
            title={tab.title}
            desc={tab.desc}
            onClick={() => onTabChange(tab.tab)}
          />
        ))}
      </div>

      <Chatbot
        title="쿠옹이에게 물어보세요!"
        subtitle="축제에 대한 궁금한 점을 언제든지 물어보세요"
        icon="🐻"
        messages={chatMessages}
        onSendMessage={onSendChatMessage}
        quickQuestions={QUICK_QUESTIONS.CHATBOT}
        placeholder="쿠옹이에게 질문해보세요..."
      />

      <FileList
        title="프로모션"
        icon="🎁"
        items={PROMOTION_ITEMS}
      />

      <FileList
        title="공지사항"
        icon="📢"
        items={NOTICE_ITEMS}
      />

      <NewsCard
        badge="긴급 공지"
        title="축제 안전 수칙 및 주의사항"
        subtitle="학생회 공지 • 2025.05.25"
        content="모든 참가자들의 안전한 축제를 위해 다음 사항들을 꼭 지켜주세요. 🔥 화기 사용 금지 🍺 과도한 음주 자제 📱 응급상황 시 즉시 신고"
      />
    </>
  );
};

export default HomeTab;