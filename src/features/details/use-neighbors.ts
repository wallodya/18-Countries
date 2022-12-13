import { useSelector } from "react-redux"
import { useEffect } from "react"
import { loadNeighborsByBorder } from "./details-slice"
import { useAppDispatch } from "store"
import { selectNeighbors } from "./details-selectors"

export const useNeighbors = (borders: string[] = []) => {
	const dispatch = useAppDispatch()
	const neighbors = useSelector(selectNeighbors)

	useEffect(() => {
		if (borders.length) {
			dispatch(loadNeighborsByBorder(borders))
		}
	}, [borders, dispatch])

	return neighbors
}
