import { TABS } from '../utils/constants';

export const NAV_ITEMS = [
  { id: TABS.HOME, icon: '🏠', label: '홈' },
  { id: TABS.LINEUP, icon: '🎤', label: '라인업' },
  { id: TABS.MAP, icon: '🗺️', label: '지도' },
  { id: TABS.EVENTS, icon: '🎪', label: '이벤트' },
  { id: TABS.CONTACT, icon: '💬', label: '문의' }
];

export const MAIN_TABS = [
  { icon: '🎤', title: '라인업 보기', desc: '메인 아티스트 공연 일정', tab: TABS.LINEUP },
  { icon: '🗺️', title: '축제 지도', desc: '부스 위치와 대기줄 현황', tab: TABS.MAP },
  { icon: '🎸', title: '학생 공연', desc: '학생 밴드와 동아리 공연', tab: TABS.EVENTS }
];