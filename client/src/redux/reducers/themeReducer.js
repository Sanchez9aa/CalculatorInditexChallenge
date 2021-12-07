const initialState = {
  theme: 1
}

export const themeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
		case "1":
			return { ...state, theme: 2 }
		case "2":
			return { ...state, theme: 3 }
		case "3":
			return { ...state, theme: 1 }
		default:
			return state
		}
}

export default themeReducer