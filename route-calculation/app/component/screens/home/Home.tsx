import Layout from '../../layout/Layout';
import Map from './Map';
import styles from '../../../../styles/Home.module.scss';
import FromInput from './FromInput';
import ToInput from './ToInput';
import Options from './Options';
import OrderButton from './OrderButton';

const Home = () => {
  return (
    <Layout title="Route calculation">
      <Map />
      <div className={styles.wrapperForm}>
        <FromInput />
        <ToInput />
        <Options />
        <OrderButton />
      </div>
    </Layout>
  );
};

export default Home;
