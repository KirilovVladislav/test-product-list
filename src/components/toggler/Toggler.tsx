import { useOutsideClick } from '@/hooks'
import { Button } from '@/ui'
import { useRef, useState } from 'react'
import styles from './Toggler.module.css'

type Props = {
	buttons: number[],
	currentButton: number,
	handleClick: (button: number) => void,
}

export const Toggler = ({ buttons, currentButton, handleClick }: Props) => {
	const [showPages, setShowPages] = useState(false)
	const togglerRef = useRef(null)

	const toggleShowPages = () => {
		setShowPages((prev) => !prev)
	}

	const changeActivePage = (button: number) => {
		handleClick(button)
		toggleShowPages()
	}

	useOutsideClick(togglerRef, toggleShowPages, showPages)

	return (
		<section ref={togglerRef} className={styles.group}>
			{
				!showPages
					? <Button
						active={true}
						onClick={toggleShowPages}
						key={currentButton}>
						{`${currentButton}`}
					</Button>
					: buttons.map((button) => (
						<Button
							active={button === currentButton}
							onClick={() => changeActivePage(+button)}
							key={button}>
							{`${button}`}
						</Button>
					)
					)
			}
		</section>
	)
}