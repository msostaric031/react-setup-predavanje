/** @jsxImportSource @emotion/react */

import React, { useState } from 'react';
import styles from './Topping.styles';

interface Props {
  name: string;
  toppingImg: string;
}

export const Topping: React.FC<Props> = ({ name, toppingImg }) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const clickHandler = () => {
    setIsActive(!isActive);
  };

  return (
    <a
      css={isActive ? styles.topping__card2 : styles.topping__card}
      onClick={clickHandler}
    >
      <a
        css={isActive ? styles.topping__img2 : styles.topping__img}
        onClick={clickHandler}
      >
        <img src={toppingImg} alt="Topping" />
      </a>
      <p css={styles.topping__txt}>{name}</p>
    </a>
  );
};
