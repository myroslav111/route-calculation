import { Coords } from 'google-map-react';
import { useActions } from '../../../hooks/useActions';
import InputPlaces from '../../ui/InputPlaces';

const FromInput = () => {
  const { setFrom, setTo } = useActions();

  const cbSuccess = (address: string, location: Coords) => {
    console.log('success');
    setFrom({ location, description: address });
    setTo('');
  };

  return <InputPlaces cbSuccess={cbSuccess} type="from" />;
};

export default FromInput;
