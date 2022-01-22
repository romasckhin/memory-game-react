import React from 'react';
import styled from "styled-components";
import Card from "./Card";

const Wrapper = ({cards,openCard}) => {

    return (

        <Nwrapper>

            {cards.map(el =>
                <Card
                    key={el.id}
                    cards={el}
                    openCard={openCard}
                />)}

        </Nwrapper>
    );
};

export default Wrapper;

const Nwrapper = styled.div`

  width: 400px;
  height: 300px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`