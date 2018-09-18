import React from 'react';
import styles from '../../styles/modal.css';

const Pizza = () => {
  return (
    <svg
      width="96"
      height="96"
      viewBox="0 0 96 96"
      className={styles.pizzaSVG}
      stroke="black"
    >
      <title>Pizza</title>
      <g fill="none" fill-rule="evenodd">
        <g stroke="#000" stroke-width="1.7" stroke-linejoin="round">
          <path d="M18 52.553s2.463-10.68 13.168-21.385C41.874 20.463 52.553 18 52.553 18M43.905 45.227a5.657 5.657 0 1 1-8 8.001 5.657 5.657 0 0 1 8-8zM66.982 53.338a5.833 5.833 0 0 1-8.25 0 5.833 5.833 0 0 1 0-8.25 5.803 5.803 0 0 1 3.523-1.679" />
          <path d="M60.92 70.932a6.079 6.079 0 0 0-3.015-8.051c-3.024-1.377-6.763.058-8.092 3.102-.396.91-.453 1.626-.497 2.791v6.668a2.558 2.558 0 0 1-5.115 0v-6.266a9.21 9.21 0 0 0-5.425-8.396l-14.997-7.227s2.123-9.201 11.348-18.426C44.35 25.901 53.554 23.78 53.554 23.78L78 78 49.84 65.83" />
        </g>
      </g>
    </svg>
  );
};

export default Pizza;
