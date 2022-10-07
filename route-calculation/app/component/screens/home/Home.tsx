import Layout from '../../layout/Layout';
import Map from './Map';
import styles from '../../../../styles/Home.module.scss';
import FromInput from './FromInput';

const Home = () => {
  return (
    <Layout title="Route calculation">
      <Map />
      <div className={styles.wrapperForm}>
        <FromInput />
      </div>
    </Layout>
  );
};

export default Home;
