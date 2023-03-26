//@ts-nocheck

import { useEffect } from "react"
import { useLatest } from "./use-latest"

export const useOutsideClick = (elementRef, handler, attached = true) => {
	const latestHandler = useLatest(handler)
	useEffect(() => {
		if (!attached) return

		const handleClick = (evt) => {
			if (!elementRef.current) return
			if (!elementRef.current.contains(evt.target)) {
				latestHandler.current()
			}
		}

		document.addEventListener('click', handleClick)

		return () => {
			document.removeEventListener('click', handleClick)
		}
	}, [elementRef, latestHandler, attached])
}