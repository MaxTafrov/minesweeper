import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }
`

const css = {
	AppWrapper: styled.div`
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		background-color: #493628;
		justify-content: center;
		align-items: center;
		padding: 20px;
	`,
	CenteredBox: styled.div`
		display: flex;
		background-color: #493628;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
		width: 675px;

		@media (max-width: 768px) {
			width: 100%;
			min-height: auto;
			padding: 10px;
		}
	`,
	ContentBox: styled.div`
		display: flex;
		align-items: center;
		flex-direction: column;
		background-color: #ab886d;
		height: 675px;
		width: 675px;
		border-radius: 45px;
		padding: 10px;
		box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);

		@media (max-width: 768px) {
			height: auto;
			width: 100%;
			border-radius: 20px;
		}
	`,
	ContentLogo: styled.span`
		font-size: 52px;
		font-weight: bold;
		color: #1b110a;
		margin-top: 10px;

		@media (max-width: 768px) {
			font-size: 36px;
		}
	`,
	GameWindow: styled.div`
		display: flex;
		flex-direction: column;
		background-color: #493628;
		height: 500px;
		width: 500px;
		border-radius: 25px;
		padding: 10px;
		box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
		margin-top: 20px;

		@media (max-width: 768px) {
			height: 300px;
			width: 300px;
			padding: 5px;
			border-radius: 15px;
		}
	`,
	GameGrid: styled.div`
		display: grid;
		grid-template-columns: repeat(10, 1fr);
		grid-template-rows: repeat(10, 1fr);
		gap: 2px;
		width: 100%;
		height: 100%;
	`,
	Cell: styled.div`
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
		background-color: #795d48;
		border-radius: 5px;
		font-size: 1.2em;
		font-weight: bold;
		cursor: pointer;
		color: #1b110a;
		user-select: none;
		transition: background-color 0.3s ease;

		&:hover {
			filter: brightness(1.1);
		}

		&.opened {
			background-color: #cbb49e;
			box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
		}
	`,
	GameHeader: styled.div`
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		padding: 0 20px;
		margin-bottom: 10px;
		color: #ffffff;
	`,
	HeaderItem: styled.div`
		font-size: 1.5em;
		font-weight: bold;
		color: #ffffff;
	`,
	GameButton: styled.button`
		color: #ffffff;
		background-color: #493628;
		border: none;
		box-shadow: 0 4px 4px rgb(0, 0, 0, 0.2);
		cursor: pointer;
		font-size: 36px;
		border-radius: 15px;
		margin-top: 15px;

		&:hover {
			color: lightcoral;
			transition: color 0.3s ease;
		}
	`,
	GameTopBar: styled.div`
		background-color: #493628;
		display: flex;
		align-items: center;
		justify-content: center;
	`,
	GameTimer: styled.span`
		color: white;
		font-weight: bold;
		font-size: 24px;
		margin-right: 15px;
		margin-bottom: 5px;
	`,
}

export default css
