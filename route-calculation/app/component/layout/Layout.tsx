import { FC } from 'react';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import FavIcon from '../../assets/images/options/icons8-great-britain-48.png';
import Script from 'next/script';
import styles from '../../../styles/Layout.module.scss';
import Loader from '../ui/Loader';

interface ILayout {
  title: string;
  children: JSX.Element[] | JSX.Element;
}

const Layout: FC<ILayout> = ({ children, title }) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div>
      <Head>
        <title>{title} Route calculation </title>
        <meta name="description" content="route calculation" />
        <link rel="shortcut icon" href={FavIcon.src} type="image/png" />
      </Head>

      {/* <Script
        strategy="beforeInteractive"
        src={`https://maps.gooleapis.com/maps/api/js?key=AIzaSyADvTDrOIC3ZkHqjuMMs84jKt93KDoFitQ&libraries=places`}
      /> */}
      <Script
        strategy="beforeInteractive"
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyADvTDrOIC3ZkHqjuMMs84jKt93KDoFitQ&libraries=places"
      ></Script>

      <div className={styles.wrapper}>{isLoading ? <Loader /> : children}</div>
    </div>
  );
};

export default Layout;
