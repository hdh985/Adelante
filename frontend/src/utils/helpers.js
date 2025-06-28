export const callNumber = (number) => {
    const cleanNumber = number.replace(/[^0-9]/g, '');
    if (window.confirm(`${number}로 전화를 걸까요?`)) {
      window.location.href = `tel:${cleanNumber}`;
    }
  };
  
  export const scrollToBottom = (element) => {
    element?.scrollIntoView({ behavior: "smooth" });
  };
  
  export const getStatusClass = (status) => {
    switch (status) {
      case '온라인': return 'status-online';
      case '통화중': return 'status-busy';
      case '부재중': return 'status-offline';
      default: return 'status-offline';
    }
  };
  
  export const getBotResponse = (question, responses) => {
    if (responses[question]) {
      return responses[question];
    }
    
    const lowerQuestion = question.toLowerCase();
    
    if (lowerQuestion.includes('일정') || lowerQuestion.includes('언제') || lowerQuestion.includes('시간')) {
      return responses['📅 축제 일정'] || responses.default;
    } else if (lowerQuestion.includes('공연') || lowerQuestion.includes('라인업') || lowerQuestion.includes('아티스트')) {
      return responses['🎤 공연 정보'] || responses.default;
    } else if (lowerQuestion.includes('음식') || lowerQuestion.includes('먹을') || lowerQuestion.includes('주점')) {
      return responses['🍻 음식 정보'] || responses.default;
    } else if (lowerQuestion.includes('교통') || lowerQuestion.includes('버스') || lowerQuestion.includes('지하철')) {
      return responses['🚌 교통편'] || responses.default;
    } else if (lowerQuestion.includes('부스') || lowerQuestion.includes('신청')) {
      return responses['🏪 부스 신청'] || responses.default;
    } else if (lowerQuestion.includes('분실') || lowerQuestion.includes('잃어')) {
      return responses['🔍 분실물 신고'] || responses.default;
    } else if (lowerQuestion.includes('건의') || lowerQuestion.includes('개선')) {
      return responses['💡 건의사항'] || responses.default;
    } else if (lowerQuestion.includes('응급') || lowerQuestion.includes('위험')) {
      return responses['🚨 응급상황'] || responses.default;
    } else {
      return responses.default;
    }
  };