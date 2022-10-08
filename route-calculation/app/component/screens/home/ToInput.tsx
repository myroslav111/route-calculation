import { Coords } from 'google-map-react';
import { useActions } from '../../../hooks/useActions';
import InputPlaces from '../../ui/InputPlaces';

const ToInput = () => {
  const { setTo } = useActions();

  const cbSuccess = (address: string, location: Coords) => {
    console.log('success');
    setTo({ location, description: address });
  };

  return <InputPlaces cbSuccess={cbSuccess} type="to" />;
};

export default ToInput;
