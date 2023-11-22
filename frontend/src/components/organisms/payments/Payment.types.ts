import { Data } from '../../../hooks/useDetailInfo';

export type PaymentItemProps = {
  id: string;
  title: string;
  type: 'card' | 'qr' | 'cash';
  description: string;
  amount: string;
};

export type PaymentsProps = {
  data: Array<Data>;
};
