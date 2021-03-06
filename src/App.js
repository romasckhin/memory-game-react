import {useEffect, useState} from "react";
import Wrapper from "./components/Wrapper";
import styled from "styled-components";

const App = () => {

    const image = ['๐', '๐', '๐ฅ', '๐งถ', '๐จ','๐']

    const initialCard = [{
        id: Math.random(),
        img: '',
        visible: false
    }]

    const [cards, setCards] = useState(initialCard)


    const create = () => {
        let copyCards = [...cards]
        for (let i = 1; i < image.length * 2; i++) {
            copyCards.push(
                {
                    id: Math.random(),
                    img: '',
                    visible: false
                }
            )
        }
        setCards(copyCards)
    }

    console.log(cards)

    const addImage = () => {

        const newArr = [...cards]

        for (let i = 0; i < image.length; i++) {
            for (let k = 0; k < 2; k++) {
                let randomIndex;
                do {
                    randomIndex = Math.floor(Math.random() * image.length * 2)
                } while (
                    newArr[randomIndex].img !== ''
                    )
                newArr[randomIndex].img = image[i]
            }
        }
        setCards(newArr)
    }


    const [history, setHistory] = useState([])

    const openCard = (id) => {
        const newHistory = [...history]

        const newArr = cards.map(el => {

            if (el.id === id) {
                newHistory.unshift(el.img)
                return {...el, visible: true}

            } else return el
        })
        setHistory(newHistory)
        setCards(newArr)
    }


    const checkPairs = () => {

        if (history.length % 2 === 0) {

            if (history[0] !== history[1]) {
                const newArray = cards.map(el => el.img === history[0] || el.img === history[1] ? {
                    ...el,
                    visible: false
                } : el)
                setCards(newArray)
            }
        }

    }

    useEffect(() => {
        setTimeout(() => checkPairs(), 1000)
    }, [history])


    const [openResult, setOpenResult] = useState(false)

    const checkResult = () => {

        if (cards.filter(el => !el.visible).length === 0) {
            setOpenResult(true)
            setTimeout(() => clearCardHistory(), 3000)


        }

    }


    useEffect(() => {
        checkResult()
    }, [cards])



    const clearCardHistory = () => {
        let copyCards = [...cards]
        let change = copyCards.map(el => el.visible = false)

        setCards(change)
        setCards(initialCard)
        setHistory([])
        setOpenResult(false)

    }


    return (

        <Container>

            <h1> Memory Game </h1>

            <button onClick={create} >Add Card</button>
            <button onClick={addImage} disabled={history.length !== 0}> Start Game</button>
            {
                openResult
                &&
                <h3> Congratulation! You won! in {history.length / 2} steps. </h3>

            }

            <Wrapper
                openCard={openCard}
                cards={cards}
            />

            {Math.floor(history.length / 2)}

        </Container>
    );
};

export default App;

const Container = styled.div`

  max-width: 590px;
  margin: 0 auto;

`
