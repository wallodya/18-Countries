import { useSelector, useDispatch } from "react-redux"
import { SingleValue } from "react-select"
import { useAppDispatch } from "store"
import { Region } from "types"
import { selectRegion } from "./control-selectors"

import { setRegion } from "./controls-slice"
import { CountryOption } from "./CustomSelect"

type OnSelect = (reg: SingleValue<CountryOption>) => void

export const useRegion = (): [Region | "", OnSelect] => {
	const dispatch = useAppDispatch()
	const region = useSelector(selectRegion)

	const handleSelect: OnSelect = reg => {
        if (reg) {
		    dispatch(setRegion(reg.value))
        } else {
            dispatch(setRegion(""))
        }
	}

	return [region, handleSelect]
}
