import { ChangeEventHandler } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useAppDispatch } from "store"
import { selectSearch } from "./control-selectors"
import { setSearch } from "./controls-slice"

export type OnSearch = ChangeEventHandler<HTMLInputElement>

export const useSearch = (): [string, OnSearch] => {
	const dispatch = useAppDispatch()
	const search = useSelector(selectSearch)

	const handleSearch: OnSearch = e => {
		dispatch(setSearch(e.target.value))
	}

	return [search, handleSearch]
}
