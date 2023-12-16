import React, { useState } from 'react';

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

function Header() {

  return (
    <>
    <h2>Музичук Віталій Андрійович</h2>
    <p>Дата й місце народження: 2 квітня 2004 року, м.Луцьк</p>
    <p>Освіта: Луцька гімназія №21 ім. Михайла Кравчука</p>
    <ChangableColorElement text={'НТУУ КПІ ім. Ігоря Сікорського'} />
    <ChangableColorElement text={'Хобі'} />
    </>
  );
}

function ChangableColorElement(props) {
  const [textColor, setTextColor] = useState('black');
  const [backColor, setBackColor] = useState('white');

  function changeColor() {
    setTextColor(getRandomColor());
    setBackColor(getRandomColor());
  };
  return (
    <p style={{ backgroundColor: backColor, color: textColor}} onClick= {changeColor}>{props.text}</p>
  );
}

export default Header;
