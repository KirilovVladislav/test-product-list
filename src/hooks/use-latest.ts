import { useLayoutEffect, useRef } from "react"

export const useLatest = (value: any) => {
	const valueRef = useRef(value)

	useLayoutEffect(() => {
		valueRef.current = value
	})

	return valueRef
}