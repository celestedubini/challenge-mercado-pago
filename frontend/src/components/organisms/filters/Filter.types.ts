import { FilterTypes } from '../list-component/ListComponents.types';

export type FiltersProps = {
  applyFilters: (filters: Array<FilterTypes>) => void;
};
