import {useEffect, useState} from "react";
import Wrapper from "./components/Wrapper";
import styled from "styled-components";

const App = () => {

    const image = ['😃', '🎶', '😉']

    const [cards, setCards] = useState([{
        id:Math.random(),
        img: '',
        visible: false
    }])

    useEffect( () => {
        let copyCards = [...cards]
        for ( let i = 1; i < image.length * 2; i++ ) {
            copyCards.push(
                {
                    id:Math.random(),
                    img: '',
                    visible: false
                }
            )
        }
        setCards(copyCards)
    },[] )

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
        let copyCards = [...cards]
        let change = copyCards.map(el => el.visible = false)
        setCards(change)
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
