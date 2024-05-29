import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ORDERS } from './queries';

const OrdersPage = () => {
  const { loading, error, data } = useQuery(GET_ORDERS);

  if (loading) return <p>Yükleniyor...</p>;
  if (error) return <p>Hata :(</p>;

  return data.siparisler.map(({ id, sipId, musId, siparisTarihi, teslimTarihi, tutar, durum, siparisDetaylari }) => (
    <div key={id}>
      <h2>Sipariş ID: {sipId}</h2>
      <p>Müşteri ID: {musId}</p>
      <p>Sipariş Tarihi: {siparisTarihi}</p>
      <p>Teslim Tarihi: {teslimTarihi}</p>
      <p>Tutar: {tutar}</p>
      <p>Durum: {durum}</p>
      <h3>Sipariş Detayları:</h3>
      {siparisDetaylari.map((detay) => (
        <div key={detay.id}>
          <p>Miktar: {detay.miktar}</p>
          <p>Fiyat: {detay.fiyat}</p>
          <p>Toplam Tutar: {detay.toplamTutar}</p>
          <p>Sipariş: {detay.siparis}</p>
          <p>Ürün: {detay.urun}</p>
        </div>
      ))}
    </div>
  ));
};

export default OrdersPage;
