import React from 'react';
import Image from 'next/image';
import preloaderImage from '../../assets/images/options/i.webp';
import styles from '../../../styles/Loader.module.scss';

const Loader = () => {
  return (
    <div className={styles.Loader}>
      <Image
        src={preloaderImage}
        alt="preloader"
        layout="fill"
        priority={true}
      />
    </div>
  );
};

export default Loader;
