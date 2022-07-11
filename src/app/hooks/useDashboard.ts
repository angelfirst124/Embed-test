import { useSelector, useDispatch } from 'react-redux'
import { IRootState } from 'app/store'
import { setHowToList, setQAList } from 'app/store/slices/dashboard'
import { IQuestionAnswer, IHowToList } from 'app/@core/interface'

const useDashboard = () => {
  const dispatch = useDispatch()

  const { qaList, howToList } = useSelector((state: IRootState) => state.dashboard)

  return {
    qaList,
    howToList,
    setQAList: (params: IQuestionAnswer[]) => dispatch(setQAList(params)),
    setHowToList: (params: IHowToList[]) => dispatch(setHowToList(params)),
  }
}

export default useDashboard
