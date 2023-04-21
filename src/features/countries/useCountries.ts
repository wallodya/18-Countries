import { selectControls } from "features/controls/control.selector"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { RootState, useAppDispatch } from "store"
import { Country } from "types"

import {
    selectCountriesInfo,
    selectVisibleCountries,
} from "./countries.selector"
import { loadCountries } from "./countries.slice"

export const useCountries = (): [
	Country[],
	ReturnType<typeof selectCountriesInfo>
] => {
	const dispatch = useAppDispatch()
	const controls = useSelector(selectControls)
	const countries = useSelector((state: RootState) =>
		selectVisibleCountries(state, controls)
	)
	const { status, error, qty } = useSelector(selectCountriesInfo)

	useEffect(() => {
		if (!qty) {
			dispatch(loadCountries())
		}
	}, [qty, dispatch])

	return [countries, { status, error, qty }]
}
