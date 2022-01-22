import {useEffect, useState} from "react";
import Wrapper from "./components/Wrapper";
import styled from "styled-components";

const App = () => {

    const image = ['😃', '🎶', '😉', '👏', '🎂', '🐱']

    const initialCards = [
        {
            id: 1,
            img: '',
            visible: false
        },
        {
            id: 2,
            img: '',
            visible: false
        },
        {
            id: 3,
            img: '',
            visible: false
        },
        {
            id: 4,
            img: '',
            visible: false
        },
        {
            id: 5,
            img: '',
            visible: false
        },
        {
            id: 6,
            img: '',
            visible: false
        },
        {
            id: 7,
            img: '',
            visible: false
        },
        {
            id: 8,
            img: '',
            visible: false
        },
        {
            id: 9,
            img: '',
            visible: false
        },
        {
            id: 10,
            img: '',
            visible: false
        },
        {
            id: 11,
            img: '',
            visible: false
        },
        {
            id: 12,
            img: '',
            visible: false
        },
    ]

    const [cards, setCards] = useState(initialCards)

    const addImage = () => {

        const newArr = [...cards]

        for (let i = 0; i < image.length; i++) {
            for (let k = 0; k < 2; k++) {
                let randomIndex;
                do {
                    randomIndex = Math.floor(Math.random() * 12)
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
                newHistory.push(el.img)
                return {...el, visible: true}

                }

            else return el
        })
        setHistory(newHistory)
        setCards(newArr)
    }


    const checkPairs = () => {

        if ( history[history.length - 1] !== history[history.length - 2]) {
            const newArray = cards.map(el => el.img === history[history.length - 1]
                || el.img === history[history.length - 2] ? {...el, visible: false} : el )
            setCards(newArray)
        }

    }

    useEffect( () => {
        if (!(history.length % 2))
            setTimeout( () => checkPairs() , 1000 )
    },[history])


    const [openResult, setOpenResult] = useState(false)

    const checkResult = () => {

        if (cards.filter(el => !el.visible).length === 0) {
            setOpenResult(true)
            setTimeout( () => clearCardHistory() , 2000 )
        }

    }

    useEffect( () => {
        checkResult()
    },[cards])

    const clearCardHistory = () => {

        setCards(initialCards)
        setHistory([])
        setOpenResult(false)

    }

    return (

        <Container>

            <h1> Memory Game </h1>

            <button onClick={addImage} disabled={cards[0].img !== ''}> Start</button>

            { openResult &&
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
