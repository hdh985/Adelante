import React from 'react';
import Breadcrumb from '../components/common/Breadcrumb';
import FolderGrid from '../components/lists/FolderGrid';
import FileList from '../components/lists/FileList';
import { 
  EVENT_FOLDERS, 
  PHOTOZONE_ITEMS, 
  BOOTH_ITEMS, 
  GAME_ITEMS 
} from '../data/eventData';

const EventsTab = () => {
  return (
    <>
      <Breadcrumb items={['🏠 Home', '🎪 이벤트']} />
      <FolderGrid folders={EVENT_FOLDERS} />
      <FileList title="포토존 안내" icon="📸" items={PHOTOZONE_ITEMS} />
      <FileList title="학과별 주점" icon="🍻" items={BOOTH_ITEMS} />
      <FileList title="게임 & 체험" icon="🎮" items={GAME_ITEMS} />
    </>
  );
};

export default EventsTab;