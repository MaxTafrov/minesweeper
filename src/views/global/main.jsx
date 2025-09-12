import React from 'react'
import css from '../../styles/styles.css'
import { GlobalStyles } from '../../styles/styles.css'
import Game from '../../components/game'

const { AppWrapper, CenteredBox } = css

const Main = props => {
	const rows = 10
	const cols = 10
	const mines = 10

	function createBoard(rows, cols, mines) {
		let board = Array(rows)
			.fill(null)
			.map(() =>
				Array(cols).fill({
					isMine: false,
					isRevealed: false,
					isFlagged: false,
					neighborMines: 0,
				})
			)

		// Бомбежка минами

		let placedMines = 0
		while (placedMines < mines) {
			const row = Math.floor(Math.random() * rows)
			const col = Math.floor(Math.random() * cols)
			if (!board[row][col].isMine) {
				board[row][col] = { ...board[row][col], isMine: true }
				placedMines++
			}
		}

		// Соседи минные

		for (let r = 0; r < rows; r++) {
			for (let c = 0; c < cols; c++) {
				if (!board[r][c].isMine) {
					let mineCount = 0
					for (let i = -1; i <= 1; i++) {
						for (let j = -1; j <= 1; j++) {
							const newRow = r + i
							const newCol = c + j
							if (
								newRow >= 0 &&
								newRow < rows &&
								newCol >= 0 &&
								newCol < cols &&
								board[newRow][newCol].isMine
							) {
								mineCount++
							}
						}
					}
					board[r][c] = { ...board[r][c], neighborMines: mineCount }
				}
			}
		}

		return board
	}

	return (
		<>
			<GlobalStyles />
			<AppWrapper>
				<CenteredBox>
					<Game createBoard={createBoard} />
				</CenteredBox>
			</AppWrapper>
		</>
	)
}

export default Main
