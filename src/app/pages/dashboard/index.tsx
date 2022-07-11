import React, { useEffect } from 'react'
import HeroSec from 'app/components/section/HeroSec'
import TextImageSec from 'app/components/section/TextImageSec'
import ColorBoardSec from 'app/components/section/ColorBoardSec'
import HowToSec from 'app/components/section/HowToSec'
import PictureSec from 'app/components/section/PictureSec'
import QuestionAnswerSec from 'app/components/section/QuestionAnswerSec'
import useDashboard from 'app/hooks/useDashboard'
import data from 'assets/db/data.json'

const Dashboard: React.FC = () => {
  const {qaList, howToList, setQAList, setHowToList} = useDashboard()

  useEffect(() => {
    setQAList(data.qalist)
    setHowToList(data.howtolist)
  }, [])

  return (
    <div className="dashboard">
      <div className="dashboard__container">
        <HeroSec />
        <TextImageSec />
        <ColorBoardSec />
        {
          howToList.length > 0 &&
          <HowToSec
            list={howToList}
          />
        }
        {
          qaList.length > 0 &&
          <QuestionAnswerSec
            list={qaList}
          />
        }
        <PictureSec />
      </div>
    </div>
  )
}

export default Dashboard
