import classNames from 'classnames/bind';
import { useState } from 'react';
import Checkbox from '../../atoms/checkbox/Checkbox';
import styles from './Filters.module.scss';
import Button from '../../atoms/button/Button';
import { FilterTypes } from '../list-component/ListComponents.types';
import { FiltersProps } from './Filter.types';

const makeClass = classNames.bind(styles);

function Filters({ applyFilters }: FiltersProps) {
  const [selectedFilters, setSelectedFilters] = useState<Array<FilterTypes>>(
    [],
  );
  const handleCheckboxChange = (filter: FilterTypes) => {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(selectedFilters.filter((f) => f !== filter));
    } else {
      setSelectedFilters([...selectedFilters, filter]);
    }
  };

  const filterArrays: Array<FilterTypes> = ['qr', 'card', 'cash'];

  const copies = {
    card: 'Cobros con tarjeta',
    qr: 'Cobros con QR',
    cash: 'Cobros en efectivo',
  };

  const clearFilters = () => {
    setSelectedFilters([]);
    applyFilters([]);
  };

  return (
    <div className={makeClass('filtersComponent')}>
      <form>
        {filterArrays.map((filter) => (
          <Checkbox
            key={filter}
            label={copies[filter]}
            isChecked={selectedFilters.includes(filter)}
            onChange={() => handleCheckboxChange(filter)}
          />
        ))}
      </form>
      <div className={makeClass('buttonsContainer')}>
        <Button onClick={() => applyFilters(selectedFilters)} variant="MPBlue">
          Aplicar
        </Button>
        <Button onClick={clearFilters} variant="lightblue">
          Limpiar
        </Button>
      </div>
    </div>
  );
}

export default Filters;
