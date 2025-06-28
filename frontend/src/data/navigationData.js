import { TABS } from '../utils/constants';

export const NAV_ITEMS = [
  { id: TABS.HOME, icon: '🏠', label: 'hear' },
  { id: TABS.LINEUP, icon: '🎤', label: '라인업' },
  { id: TABS.MAP, icon: '🗺️', label: '실시간 대기줄' },
  { id: TABS.EVENTS, icon: '🎪', label: '부스' },
  { id: TABS.CONTACT, icon: '💬', label: '문의' }
];

export const MAIN_TABS = [
  { icon: '🎤', title: '라인업 보기', desc: '메인 아티스트 공연 일정', tab: TABS.LINEUP },
  { icon: '🗺️', title: '지도', desc: '부스 위치와 대기줄 현황', tab: TABS.MAP },
  { icon: '❤️', title: '소개팅 ', desc: 'hear만의 소개팅 서비스', tab: TABS.EVENTS }
];