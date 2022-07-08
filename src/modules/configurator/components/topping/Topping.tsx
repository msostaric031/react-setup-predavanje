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

    const toppingData = {
      name: name,
    };
    console.log(toppingData);
  };

  return (
    <button
      css={
        isActive
          ? [styles.topping__card, styles.topping__selected]
          : styles.topping__card
      }
      onClick={clickHandler}
    >
      <button
        css={
          isActive
            ? [styles.topping__img, styles.topping__img__selected]
            : styles.topping__img
        }
        onClick={clickHandler}
      >
        <img src={toppingImg} alt="Topping" />
      </button>
      <p css={styles.topping__txt}>{name}</p>
    </button>
  );
};
