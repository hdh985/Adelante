import React from 'react';

const MapContainer = () => {
  return (
    <div className="map-container">
      <div className="map-header">
        <h2>🗺️ 경희대 글로벌캠퍼스 축제 지도</h2>
        <p>부스 위치와 실시간 대기줄 현황을 확인하세요</p>
      </div>
      
      <div className="map-placeholder">
        <div className="map-content">
          <div className="map-icon">🗺️</div>
          <div className="map-title">지도 API 연동 준비 완료</div>
          <div className="map-description">
            • 부스 위치 마킹<br/>
            • 공연 대기줄 실시간 업데이트<br/>
            • 인터랙티브 캠퍼스 지도
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapContainer;