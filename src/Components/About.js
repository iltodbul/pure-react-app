import React from 'react';
import { Typography } from 'antd';

const { Text, Link } = Typography;

function About() {
  return (
    <Text>
      Лотарията е форма на игра, при която печалбите се обявяват и разпределят
      публично чрез жребий по предварително обявена схема, а получаването им
      зависи от познаването на определена цифра, комбинация от цифри, знак,
      фигура и други или от изтеглянето на печеливш предварително закупен фиш,
      талон или билет.
      <br />
      <Link
        href="https://bg.wikipedia.org/wiki/%D0%9B%D0%BE%D1%82%D0%B0%D1%80%D0%B8%D1%8F"
        target="_blank"
      >
        Ако искате да разберете повече за лотарията{' '}
      </Link>
    </Text>
  );
}

export default About;
