import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_DELIVERIES } from './queries';

function DeliveriesPage() {
  const { loading, error, data } = useQuery(GET_DELIVERIES);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      <h2>Teslimatlar</h2>
      {data.teslimatlar.map((delivery) => (
        <div key={delivery.id}>
          <h3>Teslimat ID: {delivery.id}</h3>
          <p>İl: {delivery.il}</p>
          <p>İlçe: {delivery.ilce}</p>
          <p>Mahalle: {delivery.mahalle}</p>
          <p>Cadde: {delivery.cadde}</p>
          <p>Bina: {delivery.bina}</p>
          <p>Kapı: {delivery.kapi}</p>
          <h4>Kullanıcı Bilgileri</h4>
          <p>Ad: {delivery.kullanici.isim}</p>
          <p>Soyad: {delivery.kullanici.soyisim}</p>
          <p>Email: {delivery.kullanici.email}</p>
        </div>
      ))}
    </div>
  );
}

export default DeliveriesPage;
