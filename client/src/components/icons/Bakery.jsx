import React from 'react';
import styles from '../../styles/modal.css';

const Bakery = () => {
  return (
    <svg
      width="96"
      height="96"
      viewBox="0 0 96 96"
      stroke="black"
      className={styles.bakerySVG}
    >
      <title>Bakery</title>
      <g fill="none" fill-rule="evenodd">
        <g stroke="#000" stroke-width="2">
          <path d="M40.13 42.273l1.685-1.683a3.796 3.796 0 0 0 0-5.365l-3.85-3.85a6.037 6.037 0 0 1 0-8.538l1.131-1.13M45.555 43.308l1.131-1.131a6.038 6.038 0 0 0 0-8.54l-3.849-3.847a3.795 3.795 0 0 1 0-5.364l1.684-1.684M51.684 43.308l1.132-1.131a6.04 6.04 0 0 0 0-8.54l-3.85-3.847a3.795 3.795 0 0 1 0-5.364l1.684-1.684M75.864 66.883v-1.825c0-6.426-7.611-11.713-14.129-13.604M76.912 69.883H18.254M33.432 60.182c0-2.517-2.575-6.814-4.558-6.814l-.455.228c-4.011 1.96-9.1 5.606-9.1 11.413v1.874M32.77 51.75c2.439-.912 6.359-1.778 8.615-2.051 1.894-.23 4.729 6.791 4.729 8.705M83.333 74.717H13M46.216 49.312c2.849-.365 8.249.16 10.642.82 1.563.432 2.621 5.504 2.553 7.384" />
        </g>
      </g>
    </svg>
  );
};

export default Bakery;
