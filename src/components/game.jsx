import React, { useState, useEffect } from 'react'
import css from '../styles/styles.css'

const {
	AppWrapper,
	Cell,
	GameGrid,
	GameWindow,
	ContentBox,
	ContentLogo,
	GameButton,
	GameTimer,
	GameTopBar,
} = css

const Game = ({ createBoard }) => {
	const [board, setBoard] = useState(() => createBoard(10, 10, 10))
	const [isGameOver, setIsGameOver] = useState(false)
	const [isWin, setWin] = useState(false)
	const [timer, setTimer] = useState(0)
	const [isGameStarted, setIsGameStarted] = useState(false)

	const revealEmptyCells = (newBoard, row, col) => {
		if (
			row < 0 ||
			row >= newBoard.length ||
			col < 0 ||
			col >= newBoard[0].length
		) {
			return
		}

		const cell = newBoard[row][col]

		if (cell.isRevealed || cell.isFlagged || cell.isMine) {
			return
		}

		cell.isRevealed = true

		if (cell.neighborMines > 0) {
			return
		}

		for (let i = -1; i <= 1; i++) {
			for (let j = -1; j <= 1; j++) {
				if (i !== 0 || j !== 0) {
					revealEmptyCells(newBoard, row + i, col + j)
				}
			}
		}
	}

	const handleCellClick = (row, col) => {
		const newBoard = JSON.parse(JSON.stringify(board))
		const cell = newBoard[row][col]

		if (!isGameStarted) {
			setIsGameStarted(true)
		}

		if (cell.isRevealed || cell.isFlagged) return

		if (cell.isMine) {
			const finalBoard = newBoard.map(rowArr =>
				rowArr.map(c => (c.isMine ? { ...c, isRevealed: true } : c))
			)
			setIsGameOver(true)
			setBoard(finalBoard)
			alert('Game Over!')
			return
		}

		if (cell.neighborMines === 0) {
			revealEmptyCells(newBoard, row, col)
		} else {
			cell.isRevealed = true
		}

		if (isGameOver) {
			return
		}

		setBoard(newBoard)
	}

	const handleRightClick = (event, row, col) => {
		event.preventDefault()
		const newBoard = JSON.parse(JSON.stringify(board))
		const cell = newBoard[row][col]
		if (!cell.isRevealed) {
			cell.isFlagged = !cell.isFlagged
			setBoard(newBoard)
		}
	}
	// win
	useEffect(() => {
		if (isGameOver) {
			return
		}

		const unreavealedCells = board.flat().filter(cell => !cell.isRevealed)
		const minesLeft = unreavealedCells.every(cell => cell.isMine)

		if (minesLeft && unreavealedCells > 0) {
			setWin(true)
			setIsGameOver(true)
			alert('Win!')
		}
	}, [board, isGameOver])

	// timer

	useEffect(() => {
		if (isGameStarted && !isGameOver) {
			const int = setInterval(() => {
				setTimer(prevTime => prevTime + 1)
			}, 1000)
			return () => clearInterval(int)
		}
	}, [isGameStarted, isGameOver])

	// restart
	const restart = () => {
		setBoard(createBoard(10, 10, 10))
		setIsGameOver(false)
		setWin(false)
		setTimer(0)
		setIsGameStarted(false)
	}

	return (
		<AppWrapper>
			<ContentBox>
				<ContentLogo>Minesweeper</ContentLogo>
				<GameWindow>
					<GameTopBar>
						<GameTimer>Timer: {timer}</GameTimer>
					</GameTopBar>
					<GameGrid>
						{board.map((row, rowIndex) =>
							row.map((cell, colIndex) => (
								<Cell
									key={`${rowIndex}-${colIndex}`}
									onClick={() => handleCellClick(rowIndex, colIndex)}
									onContextMenu={event =>
										handleRightClick(event, rowIndex, colIndex)
									}
									className={cell.isRevealed ? 'opened' : ''}
								>
									{cell.isFlagged && '🚩'}
									{cell.isRevealed &&
										cell.neighborMines > 0 &&
										cell.neighborMines}
									{cell.isRevealed && cell.isMine && '💣'}
								</Cell>
							))
						)}
					</GameGrid>
				</GameWindow>
				<GameButton onClick={restart}>Restart :D</GameButton>
			</ContentBox>
		</AppWrapper>
	)
}

export default Game
