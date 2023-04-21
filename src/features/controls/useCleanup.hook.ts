import { useAppDispatch } from 'store';
import { clearControls } from './controls.slice';


export const useReset = () => {
  const dispatch = useAppDispatch();

  const reset = () => dispatch(clearControls());

  return () => dispatch(reset());
}
