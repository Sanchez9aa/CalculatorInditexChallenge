import calcReducer from './calcReducer'

const initialState = {
  sign: "",
  num: 0,
  res: 0,
  on: 0,
  value: []
}

const initialArrayState = {
  sign: "",
  num: 0,
  res: 0,
  on: 1,
  value: []
}

describe("toDos calcReducer", () => {
  test('should return the initial state', () => {
    expect(calcReducer(undefined, {})).toEqual(
      {
        sign: "",
        num: 0,
        res: 0,
        on: 0,
        value: []
      }
    )
  })

  test('Click a number on normal mode', () => {
    const action = {
      type: "NUM_CLICK",
      payload: 7
    }
    const resultState = calcReducer(initialState, action)
    expect(resultState).toEqual(
      {
        sign: "",
        num: 7,
        res: 0,
        on: 0,
        value: []
      }
    )
  })

  test('Click a number on array mode', () => {
    const action = {
      type: "NUM_CLICK",
      payload: 7
    }
    const resultState = calcReducer(initialArrayState, action)
    expect(resultState).toEqual(
      {
        sign: "",
        num: 0,
        res: 0,
        on: 1,
        value: [7]
      }
    )
  })

  test('Click decimal and number', () => {
    const action = {
      type: "DECIMAL_CLICK"
    }
    const resultState = calcReducer(initialState, action, {type: "NUM_CLIM", payload: 5})
    expect(resultState).toEqual(
      {
        sign: "",
        num: NaN,
        res: 0,
        on: 0,
        value: []
      }
    )
  })

  test('Click Reset on normal calculator', () => {
    const action = {
      type: "RESET_CLICK"
    }
    const initial = {
        sign: "+",
        num: 7,
        res: 8,
        on: 0,
        value: []
    }
    const resultState = calcReducer(initial, action)
    expect(resultState).toEqual(
      {
        sign: "",
        num: 0,
        res: 0,
        on: 0,
        value: []
      }
    )
  })

  test('Click Reset on array calculator', () => {
    const action = {
      type: "RESET_CLICK"
    }
    const initial = {
        sign: "+",
        num: "",
        res: "",
        on: 1,
        value: [7, 8]
    }
    const resultState = calcReducer(initial, action)
    expect(resultState).toEqual(
      {
        sign: "",
        num: 0,
        res: 0,
        on: 0,
        value: []
      }
    )
  })
  
  test('Click + Sign', () => {
    const action = {
      type: "SIGN_CLICK",
      payload: "+"
    }
    const resultState = calcReducer(initialState, action)
    expect(resultState).toEqual(
      {
        sign: "+",
        num: 0,
        res: 0,
        on: 0,
        value: []
      }
    )
  })

  test('Click - Sign', () => {
    const action = {
      type: "SIGN_CLICK",
      payload: "-"
    }
    const resultState = calcReducer(initialState, action)
    expect(resultState).toEqual(
      {
        sign: "-",
        num: 0,
        res: 0,
        on: 0,
        value: []
      }
    )
  })

  test('Click / Sign', () => {
    const action = {
      type: "SIGN_CLICK",
      payload: "/"
    }
    const resultState = calcReducer(initialState, action)
    expect(resultState).toEqual(
      {
        sign: "/",
        num: 0,
        res: 0,
        on: 0,
        value: []
      }
    )
  })

  test('Click * Sign', () => {
    const action = {
      type: "SIGN_CLICK",
      payload: "*"
    }
    const resultState = calcReducer(initialState, action)
    expect(resultState).toEqual(
      {
        sign: "*",
        num: 0,
        res: 0,
        on: 0,
        value: []
      }
    )
  })

  test('Operation +', () => {
    const action = {
      type: "EQUAL_CLICK"
    }
    const opState = {
      sign: "+",
      num: 5,
      res: 2,
      on: 0,
      value: []
    }
    const resultState = calcReducer(opState, action)
    expect(resultState).toEqual({
      sign: "",
      num: 0,
      res: 7,
      on: 0,
      value: []
    })
  })

  test('Operation -', () => {
    const action = {
      type: "EQUAL_CLICK"
    }
    const opState = {
      sign: "-",
      num: 5,
      res: 2,
      on: 0,
      value: []
    }
    const resultState = calcReducer(opState, action)
    expect(resultState).toEqual({
      sign: "",
      num: 0,
      res: -3,
      on: 0,
      value: []
    })
  })

  test('Operation /', () => {
    const action = {
      type: "EQUAL_CLICK"
    }
    const opState = {
      sign: "/",
      num: 5,
      res: 2,
      on: 0,
      value: []
    }
    const resultState = calcReducer(opState, action)
    expect(resultState).toEqual({
      sign: "",
      num: 0,
      res: 0.4,
      on: 0,
      value: []
    })
  })

  test('Operation / by 0', () => {
    const action = {
      type: "EQUAL_CLICK"
    }
    const opState = {
      sign: "/",
      num: 0,
      res: 5,
      on: 0,
      value: []
    }
    const resultState = calcReducer(opState, action)
    expect(resultState).toEqual({
      sign: "",
      num: 0,
      res: "Can not divide with 0",
      on: 0,
      value: []
    })
  })

  test('Operation *', () => {
    const action = {
      type: "EQUAL_CLICK"
    }
    const opState = {
      sign: "*",
      num: 5,
      res: 2,
      on: 0,
      value: []
    }
    const resultState = calcReducer(opState, action)
    expect(resultState).toEqual({
      sign: "",
      num: 0,
      res: 10,
      on: 0,
      value: []
    })
  })

  test('Array action', () => {
    const action = {
      type: "ARRAY_CLICK"
    }
    const arrayState = {
      sign: "",
      num: 0,
      res: 0,
      on: 1,
      value: [7,8]
    }
    const resultState = calcReducer(arrayState, action)
    expect(resultState).toEqual({
      sign: "",
      num: 0,
      res: 0,
      on: 1,
      value: [8,7]
    })
  })
})

