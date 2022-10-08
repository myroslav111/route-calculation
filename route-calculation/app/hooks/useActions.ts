import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { routeCalculationSlice } from '../store/slice';

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(routeCalculationSlice.actions, dispatch);
};
