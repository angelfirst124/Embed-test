export interface IArrowButton {
    title: string
}

export interface ICard {
    color: string
    title: string
    content: string
}

export interface IQuestionAnswersProps {
    list :IQuestionAnswer[]
}

export interface IQuestionAnswer {
    question: string,
    answer: string
}

export interface ISideBar {
    isOpen: boolean
    handleClick: () => any
}

export interface IHowToListProps {
    list: IHowToList[]
}

export interface IHowToList {
    imageName: string
    title: string
    list: string[]
}