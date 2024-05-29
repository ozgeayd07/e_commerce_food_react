import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_PAYMENTS } from '../GraphQL/queries';

const PaymentsPage = () => {
  const { loading, error, data } = useQuery(GET_PAYMENTS);

  if (loading) return <p>Yükleniyor...</p>;
  if (error) return <p>Hata :(</p>;

  return data.odemeler.map(({ id, kartSahibi, kartNumarasi, sonKullanma, cvv }) => (
    <div key={id}>
      <p>Kart Sahibi: {kartSahibi}</p>
      <p>Kart Numarası: {kartNumarasi}</p>
      <p>Son Kullanma Tarihi: {sonKullanma}</p>
      <p>CVV: {cvv}</p>
    </div>
  ));
};

export default PaymentsPage;
