import { MANAGER_TYPES, PHONE_NUMBERS } from '../utils/constants';
import { callNumber } from '../utils/helpers';

export const MANAGERS = [
  { 
    icon: '🎪', 
    title: '행사 문의', 
    desc: '아델라테 외국어대학 총괄', 
    managerName: '학생회장 윤동현', 
    managerContact: '📱 010-1234-5678', 
    status: '온라인',
    type: MANAGER_TYPES.EVENTS
  },
  { 
    icon: '🚨', 
    title: '안전 요원 호출', 
    desc: '응급상황, 긴급', 
    managerName: '집행위원장 이경빈', 
    managerContact: '📱 010-3456-7890', 
    status: '온라인',
    type: MANAGER_TYPES.SAFETY
  },
  { 
    icon: '🤝', 
    title: '프로모션 문의', 
    desc: '이벤트, 프로모션', 
    managerName: '대외국장 황창익', 
    managerContact: '📱 010-3456-7890', 
    status: '온라인',
    type: MANAGER_TYPES.STUDENT
  },
  { 
    icon: '🔍', 
    title: '분실물 문의', 
    desc: '분실물 신고, 찾기', 
    managerName: '운영복지국장 김윤서', 
    managerContact: '📱 010-5678-9012', 
    status: '온라인',
    type: MANAGER_TYPES.LOST
  },
 
];

export const EMERGENCY_CONTACTS = [
  { 
    icon: '🚨', 
    name: '응급상황', 
    desc: '119 / 031-201-2119', 
    badge: '긴급', 
    onClick: () => callNumber(PHONE_NUMBERS.EMERGENCY) 
  },
  { 
    icon: '🏛️', 
    name: '총학생회', 
    desc: '031-201-2114', 
    onClick: () => callNumber(PHONE_NUMBERS.STUDENT_COUNCIL) 
  },
  { 
    icon: '🔍', 
    name: '분실물센터', 
    desc: '031-201-2120', 
    onClick: () => callNumber(PHONE_NUMBERS.LOST_AND_FOUND) 
  },
  { 
    icon: '🛡️', 
    name: '경비실', 
    desc: '031-201-2000', 
    onClick: () => callNumber(PHONE_NUMBERS.SECURITY) 
  }
];