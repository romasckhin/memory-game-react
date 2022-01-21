import {useState} from "react";

const App = () => {

    const image = ['😃', '🎶', '😉', '👏', '🎂', '🐱']
    const [cards, setCards] = useState(
        [
            {
                id: 1,
                img: '',
                visible: true
            },
            {
                id: 2,
                img: '',
                visible: true
            },
            {
                id: 3,
                img: '',
                visible: true
            },
            {
                id: 4,
                img: '',
                visible: true
            },
            {
                id: 5,
                img: '',
                visible: true
            },
            {
                id: 6,
                img: '',
                visible: true
            },
            {
                id: 7,
                img: '',
                visible: true
            },
            {
                id: 8,
                img: '',
                visible: true
            },
            {
                id: 9,
                img: '',
                visible: true
            },
            {
                id: 10,
                img: '',
                visible: true
            },
            {
                id: 11,
                img: '',
                visible: true
            },
            {
                id: 12,
                img: '',
                visible: true
            },
        ]
    )



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


    return (

        <div>

            <h1> Memory Game </h1>

            <button onClick={addImage}> Start</button>

            {cards.map(el => <> {el.img} </>)}

        </div>
    );
};

export default App;
