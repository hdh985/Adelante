import { MANAGER_TYPES, PHONE_NUMBERS } from '../utils/constants';
import { callNumber } from '../utils/helpers';

export const MANAGERS = [
  { 
    icon: '🎪', 
    title: '축제 기획팀', 
    desc: '공연 일정, 이벤트 문의', 
    managerName: '김민준 팀장', 
    managerContact: '📱 010-1234-5678', 
    status: '온라인',
    type: MANAGER_TYPES.EVENTS
  },
  { 
    icon: '🏗️', 
    title: '시설 관리팀', 
    desc: '부스 설치, 시설 문의', 
    managerName: '이서연 팀장', 
    managerContact: '📱 010-2345-6789', 
    status: '통화중',
    type: MANAGER_TYPES.FACILITIES
  },
  { 
    icon: '🚨', 
    title: '안전 관리팀', 
    desc: '응급상황, 보안 문의', 
    managerName: '박지훈 팀장', 
    managerContact: '📱 010-3456-7890', 
    status: '온라인',
    type: MANAGER_TYPES.SAFETY
  },
  { 
    icon: '🏛️', 
    title: '총학생회', 
    desc: '공식 문의, 건의사항', 
    managerName: '최은지 회장', 
    status: '온라인',
    type: MANAGER_TYPES.STUDENT
  },
  { 
    icon: '🔍', 
    title: '분실물센터', 
    desc: '분실물 신고, 찾기', 
    managerName: '정수민 담당자', 
    managerContact: '📱 010-5678-9012', 
    status: '온라인',
    type: MANAGER_TYPES.LOST
  },
  { 
    icon: '📺', 
    title: '홍보미디어팀', 
    desc: '취재, 촬영 문의', 
    managerName: '송하은 팀장', 
    managerContact: '📱 010-6789-0123', 
    status: '부재중',
    type: MANAGER_TYPES.MEDIA
  }
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