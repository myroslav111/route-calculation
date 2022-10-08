import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import styles from '../../../../styles/Options.module.scss';
import { optionsList } from './data';
import Image from 'next/image';

const Options = () => {
  const { selectedOption, travelTime } = useTypedSelector(
    state => state.routeCalculation
  );
  const { setSelectedOptions } = useActions();

  return (
    <div className={styles.wrapper}>
      <div className={styles.subWrapper}>
        {optionsList.map(option => (
          <button
            className={styles.option}
            key={option._id}
            onClick={() => travelTime && setSelectedOptions(option._id)}
          >
            <div
              className={styles.insideOption}
              style={option._id === selectedOption ? { opacity: 1 } : {}}
            >
              <Image
                src={option.img}
                alt={option.title}
                width={50}
                height={50}
              />
              <div className={styles.title}>{option.title}</div>
              <div className={styles.currency}>&#x20AC;</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Options;
