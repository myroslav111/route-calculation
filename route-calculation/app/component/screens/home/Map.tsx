import styles from '../../../../styles/Map.module.scss';
import GoogleMapReact from 'google-map-react';

const Map = () => {
  return (
    <div className={styles.Map}>
      <GoogleMapReact
        style={{ position: 'static' }}
        bootstrapURLKeys={{
          key: 'AIzaSyADvTDrOIC3ZkHqjuMMs84jKt93KDoFitQ',
        }}
        defaultCenter={{ lat: 50.1109221, lng: 8.6821267 }}
        defaultZoom={13}
        options={{
          keyboardShortcuts: false,
          zoomControl: false,
          fullscreenControl: false,
          scrollwheel: false,
        }}
      />
    </div>
  );
};

export default Map;
