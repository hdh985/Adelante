import React from 'react';
import Breadcrumb from '../components/common/Breadcrumb';
import FolderGrid from '../components/lists/FolderGrid';
import FileList from '../components/lists/FileList';
import { DAY_FOLDERS, MAIN_LINEUP_ITEMS, TIMETABLE_ITEMS } from '../data/eventData';

const LineupTab = () => {
  return (
    <>
      <Breadcrumb items={['🏠 Home', '🎤 라인업']} />
      <FolderGrid folders={DAY_FOLDERS} />
      <FileList title="메인 라인업" icon="🎵" items={MAIN_LINEUP_ITEMS} />
      <FileList title="타임테이블" icon="🕒" items={TIMETABLE_ITEMS} />
    </>
  );
};

export default LineupTab;