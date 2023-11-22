import React from 'react';
import PaymentItem from './payment-item/PaymentItem';
import { PaymentsProps } from './Payment.types';
import Text from '../../atoms/text/Text';
import Blank from '../../layout/BlankPage/Blank';

function Payments({ data }: PaymentsProps) {
  return (
    <div>
      {data.length > 0 &&
        data.map(({ amount, description, id, title, type }) => (
          <PaymentItem
            id={id}
            amount={amount}
            description={description}
            key={id}
            title={title}
            type={type}
          />
        ))}
      {data.length === 0 && (
        <Blank>
          <Text tag="h1">
            No tenés operaciones que coincidan con esos filtros
          </Text>
          <Text tag="p">
            Probá cambiar los filtros para encontrar otras operaciones.
          </Text>
        </Blank>
      )}
    </div>
  );
}

export default Payments;
