import { FC, useRef, useState, useEffect, ChangeEvent } from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import { FiSearch } from 'react-icons/fi';
import styles from '../../../styles/InputPlaces.module.scss';
import { Coords } from 'google-map-react';

interface IInputPlaces {
  cbSuccess: (address: string, location: Coords) => void;
  type: 'from' | 'to';
}

const InputPlaces: FC<IInputPlaces> = ({ cbSuccess, type }) => {
  const [address, setAddress] = useState('');
  const [value, setValue] = useState('');
  //   const inputRef = useRef<HTMLInputElement>(null);

  //   const setFocus = () => inputRef?.current?.focus();

  const isFrom = type === 'from';

  //   useEffect(() => {
  //     if (isFrom) setFocus;
  //   }, [isFrom]);

  //   const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
  //     setValue(e.target.value);
  //   };

  const handleSelect = (address: string) => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(location => {
        cbSuccess(address, location);
        setAddress(address);
      })
      .catch(err => console.error('Error', err));
  };

  return (
    <PlacesAutocomplete
      value={address}
      // onChange={handleChange}
      onSelect={handleSelect}
      onChange={setAddress}
      onError={err => console.log('Error', err)}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div className={isFrom ? styles.wrapp : styles.marginBottom}>
          <div
            className={styles.subWrapp}
            style={
              suggestions.length
                ? {
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                  }
                : {}
            }
          >
            <FiSearch
              color={isFrom ? '#f6fa02' : '#686961'}
              size={29}
              className={styles.icon}
            />
            <input
              className={styles.input}
              {...getInputProps({
                // ref: inputRef,
                placeholder: isFrom ? 'Where from?' : 'Where to?',
              })}
            />
            {!isFrom && <div className={styles.placeholder}>-min.</div>}
          </div>

          <div
            style={suggestions.length || loading ? { height: 192 } : {}}
            className={styles.wrapper}
          >
            {loading && <div>Loading...</div>}
            {suggestions.map((suggestions, idx) => (
              <div {...getSuggestionItemProps(suggestions, {})}>
                <span>{suggestions.description}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  );
};

export default InputPlaces;
