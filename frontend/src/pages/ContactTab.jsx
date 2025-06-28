import React from 'react';
import Breadcrumb from '../components/common/Breadcrumb';
import AssignmentCard from '../components/cards/AssignmentCard';
import Chatbot from '../components/chat/Chatbot';
import FileList from '../components/lists/FileList';
import { MANAGERS, EMERGENCY_CONTACTS } from '../data/contactData';
import { QUICK_QUESTIONS } from '../data/chatResponses';

const ContactTab = ({ contactMessages, onSendContactMessage }) => {
  const connectToManager = (managerType) => {
    const manager = MANAGERS.find(m => m.type === managerType);
    if (manager && manager.managerContact) {
      const phone = manager.managerContact.replace(/[^0-9]/g, '');
      if (window.confirm(`${manager.managerName}에게 연결하시겠습니까?\n${manager.managerContact}`)) {
        window.location.href = `tel:${phone}`;
      }
    }
  };

  return (
    <>
      <Breadcrumb items={['🏠 Home', '💬 문의하기']} />
      
      <div className="assignment-section">
        <div className="assignment-header">
          <h2>👥 담당자별 문의</h2>
          <p>분야별 전문 담당자와 직접 연결해드립니다</p>
        </div>
        
        <div className="assignment-grid">
          {MANAGERS.map((manager, index) => (
            <AssignmentCard
              key={index}
              icon={manager.icon}
              title={manager.title}
              desc={manager.desc}
              managerName={manager.managerName}
              managerContact={manager.managerContact}
              status={manager.status}
              onClick={() => connectToManager(manager.type)}
            />
          ))}
        </div>
      </div>

      <Chatbot
        title="총학생회 실시간 상담"
        subtitle="궁금한 점을 바로 물어보세요!"
        icon="🏛️"
        messages={contactMessages}
        onSendMessage={onSendContactMessage}
        quickQuestions={QUICK_QUESTIONS.STUDENT_COUNCIL}
        placeholder="총학생회에 문의하실 내용을 입력해주세요..."
      />

      <FileList
        title="긴급 연락처"
        icon="📞"
        items={EMERGENCY_CONTACTS}
      />
    </>
  );
};

export default ContactTab;