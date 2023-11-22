import React, { useMemo, useState } from 'react';
import classNames from 'classnames/bind';
import Text from '../../atoms/text/Text';
import { useListInfo } from '../../../hooks/useListInfo';
import Payments from '../payments/Payments';
import styles from './ListComponent.module.scss';
import Button from '../../atoms/button/Button';
import ChevronDown from '../../../static/icons/chevron-down.svg?react';
import Filters from '../filters/Filters';
import { FilterTypes } from './ListComponents.types';
import Blank from '../../layout/BlankPage/Blank';

const makeClass = classNames.bind(styles);

function ListComponent() {
  const { loading, data, error } = useListInfo();
  const [filtersArray, setFilters] = useState<Array<FilterTypes>>([]);
  const [isFiltersOpen, setFiltersOpen] = useState<boolean>(false);
  const filteredData = useMemo(() => {
    return data.filter(({ type }) => !filtersArray.includes(type));
  }, [data, filtersArray]);

  const sum = useMemo(() => {
    const number = filteredData.reduce(
      (acc, { amount }) => acc + parseFloat(amount.replace(',', '.')),
      0,
    );

    return new Intl.NumberFormat('de-DE', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(number);
  }, [filteredData]);

  if (loading)
    return (
      <Blank>
        <Text tag="p">Cargando</Text>
      </Blank>
    );
  if (error)
    return (
      <Blank>
        <Text tag="p">Ocurrió un error</Text>
      </Blank>
    );
  return (
    <div className={makeClass('listComponent')}>
      <div className={makeClass('sumFiltersContainer')}>
        <Text tag="p" className={makeClass('sum')}>
          ${sum}
        </Text>
        <Button
          className={makeClass('filtersButton')}
          onClick={() => setFiltersOpen(!isFiltersOpen)}
          variant="MPBlue"
        >
          Filtros{filtersArray.length > 0 ? ` (${filtersArray.length})` : ''}
          <ChevronDown />
        </Button>
      </div>
      <Payments data={filteredData} />
      {isFiltersOpen && <Filters applyFilters={setFilters} />}
    </div>
  );
}

export default ListComponent;
