import React from 'react';
import Breadcrumb from '../components/common/Breadcrumb';
import MapContainer from '../components/sections/MapContainer';
import FileList from '../components/lists/FileList';
import { LEGEND_ITEMS } from '../data/eventData';

const MapTab = () => {
  return (
    <>
      <Breadcrumb items={['🏠 Home', '🗺️ 공연 대기줄']} />
      <MapContainer />
      <FileList title="지도 범례" icon="🏷️" items={LEGEND_ITEMS} />
    </>
  );
};

export default MapTab;