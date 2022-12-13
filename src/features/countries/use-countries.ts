import { selectControls } from 'features/controls/control-selectors';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, useAppDispatch } from 'store';
import { Country } from 'types';

import { selectCountriesInfo, selectVisibleCountries } from './countries-selectors';
import { loadCountries } from './countries-slice';

export const useCountries = (): [
    Country[],
    ReturnType<typeof selectCountriesInfo>
] => {
  const dispatch = useAppDispatch();
  const controls = useSelector(selectControls);
  const countries = useSelector((state: RootState) => selectVisibleCountries(state, controls));
  const {status, error, qty} = useSelector(selectCountriesInfo);

  useEffect(() => {
    if (!qty) {
      dispatch(loadCountries());
    }
  }, [qty, dispatch]);

  return [countries, {status, error, qty}];
}
