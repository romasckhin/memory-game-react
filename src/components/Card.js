import React from 'react';
import styled from 'styled-components'

const Card = ({cards,openCard}) => {

    return (

        <Ncard onClick={() => openCard(cards.id)}>

            { cards.visible ?  cards.img : ''}

        </Ncard>
    );
};

export default Card;

const Ncard = styled.button`

  border: solid 1px #87a692;
  font-size: 20px;
  cursor: pointer;
  background: #d0e6e7;
`