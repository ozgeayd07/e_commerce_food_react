import { gql } from '@apollo/client';

export const GET_CATEGORIES = gql`
query kategoriler {
  kategoriler {
    id
    name
    urunSet{
      id
      name
      image
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
           siparisdetaySet{
            id
            miktar
            toplamTutar
            siparis{
              id
              siparisTarihi
              teslimTarihi
              tutar
              durum
              siparisDetaylari{
                id
                miktar
                toplamTutar
                
              }
            }
          }
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
export const GET_ORDER_DETAİL=gql`
query siparisDetay{
  siparisDetay{
    id
    miktar
    toplamTutar
    siparis{
      id
      siparisTarihi
      teslimTarihi
      tutar
      durum
    }
  }
}

`;
export const GET_ORDER=gql`
query siparisler {
  siparisler {
    siparisDetaylari {
      miktar
      toplamTutar
      urun {
        name
        fiyat
        image
      }
    }
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


