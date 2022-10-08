import styles from '../../../../styles/Map.module.scss';
import GoogleMapReact from 'google-map-react';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useState, useEffect } from 'react';
import { useActions } from '../../../hooks/useActions';
import { optionsList } from './data';

interface IMAP {
  map: google.maps.Map;
  maps: any;
}

const Map = () => {
  const [MAP, setMAP] = useState<IMAP>({} as IMAP);
  const [isExistRoute, setIsExistRoute] = useState(false);
  const { from, to, travelTime } = useTypedSelector(
    state => state.routeCalculation
  );
  const { setTravelTime, setSelectedOptions } = useActions();

  console.log(travelTime);

  const renderWay = () => {
    const { map, maps } = MAP;
    console.log(maps);
    if (typeof maps.DirectionsRenderer === 'function') {
      const directionsRenderer: google.maps.DirectionsRenderer =
        new maps.DirectionsRenderer();

      const directionsService: google.maps.DirectionsService =
        new maps.DirectionsService();
      console.log('hello');
      directionsService
        .route({
          origin: from.location,
          destination: to.location,
          travelMode: google.maps.TravelMode.DRIVING,
        })
        .then(res => {
          directionsRenderer.setDirections(res);

          const durationSec = res.routes[0].legs[0].duration?.value;
          console.log(durationSec);
          const distanceMet = res.routes[0].legs[0].distance?.value;
          if (durationSec) {
            setTravelTime(Math.ceil(durationSec / 60));
            setSelectedOptions(optionsList[0]._id);
          }
        })
        .catch(err => alert(err));

      directionsRenderer.setOptions({
        markerOptions: {
          clickable: false,
        },
      });

      directionsRenderer.setMap(map);
    }
  };

  useEffect(() => {
    if (
      from.location?.lat &&
      to.location?.lat &&
      MAP?.map &&
      MAP?.maps &&
      !isExistRoute
    ) {
      renderWay();
      // eslint-disable-next-line
    }
  }, [from, to, MAP?.map, MAP?.maps, isExistRoute]);

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
        center={
          from.location?.lat
            ? {
                lat: from.location?.lat,
                lng: from.location?.lng,
              }
            : undefined
        }
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={setMAP}
      />
    </div>
  );
};

export default Map;
