import { useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import { TypeRootState } from '../store/stor';

export const useTypedSelector: TypedUseSelectorHook<TypeRootState> =
  useSelector;
