import React from 'react';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import Button from '../../ui/Button';
import { optionsList } from './data';

const OrderButton = () => {
  const { travelTime, selectedOption } = useTypedSelector(
    state => state.routeCalculation
  );
  const orderHandler = () => {
    alert('is counted ');
    optionsList.find(o => o._id === selectedOption)?.title;
  };
  return (
    <Button
      title="Count"
      color="#050505"
      cb={orderHandler}
      isDisabled={!travelTime && !selectedOption}
    />
  );
};

export default OrderButton;
