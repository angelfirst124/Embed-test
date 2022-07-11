import { createSlice } from '@reduxjs/toolkit'
import { AppDispatch } from 'app/store'
import { IQuestionAnswer, IHowToList } from 'app/@core/interface'

export interface IInitialState {
  qaList: IQuestionAnswer[],
  howToList: IHowToList[],
}

const initialState: IInitialState = {
  qaList: [{
    question: '',
    answer: '',
  }],
  howToList: []
}

const slice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setQAList(state, action) {
      state.qaList = action.payload.qaList
    },
    setHowToList(state, action) {
      state.howToList = action.payload.howToList
    }
  },
})

// Reducer
export default slice.reducer

export function setQAList(qaList: IQuestionAnswer[]) {
  return async (dispatch: AppDispatch) => {
    dispatch(
      slice.actions.setQAList({
        qaList,
      })
    )
    return true
  }
}

export function setHowToList(howToList: IHowToList[]) {
  return async (dispatch: AppDispatch) => {
    dispatch(
      slice.actions.setHowToList({
        howToList,
      })
    )
    return true
  }
}
