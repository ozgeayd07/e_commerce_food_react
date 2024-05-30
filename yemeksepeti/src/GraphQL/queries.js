import { gql } from '@apollo/client';

export const GET_CATEGORIES = gql`
query kategoriler {
  kategoriler {
    id
    name
    urunSet{
      id
      name
      resim
      fiyat
      detay
      category{
        id
        name 
      }
     
    }
  }
}`;

export const GET_USERS = gql`
query kullanicilar {
  kullanicilar {
    id
    isim
    soyisim
    email
    sifre
    hesapTipi
  }
}
`;
export const GET_PRODUCTS_BY_RESTAURANT =gql`
query urunler{
  urunler{
    id
    name
    image
    fiyat
    detay
    category{
      id
      name
    }
    restoran{
      name
      adres
      telefon
      acilisSaati
      kapanisSaati
      puan
      resim
      minTutar
      category
    }
  }
}`;
export const GET_RESTAURANTS = gql`
query restoranlar {
  restoranlar {
    id
    name
    adres
    telefon
    acilisSaati
    kapanisSaati
    email
    puan
    resim
    minTutar
    category
    urunSet {
      id
      name
      image
      fiyat
      detay
      category{
        id
        name
        urunSet{
            id
           name
           image
           fiyat

            }
          }
        }
      }
    
    }

`;

export const GET_DELİVERİES = gql`
query teslimatlar
{
  teslimatlar
  {
    id
    il
    ilce
    mahalle
    cadde
    bina
    kapi
    
}}

`;

export const GET_ORDER=gql`
query siparisler {
  siparisler {
    id
    toplamTutar
  }
}
`;

export const GET_PAYMENTS=gql`
query odemeler{
  odemeler{
    id
    kartSahibi
    kartNumarasi
    sonKullanma
    cvv
  }
}

`;


