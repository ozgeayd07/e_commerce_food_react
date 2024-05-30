import { gql } from '@apollo/client';

export const USER_ADD = gql`
mutation kullaniciEkle($email: String!, $hesapTipi: String!, $isim: String!, $sifre: String!, $soyisim: String!, $telefonNo: String!) {
  kullaniciEkle(email: $email, hesapTipi: $hesapTipi, isim: $isim, sifre: $sifre, soyisim: $soyisim, telefonNo: $telefonNo) {
    kullanici {
      email
      hesapTipi
      isim
      sifre
      soyisim
      telefonNo
    }
  }
}
`;

export const USER_UPDATE = gql`
mutation kullaniciGuncelle( $email: String!, $hesapTipi: String!, $id: ID, $isim: String!, $sifre: String!, $sifreDogrulama: String!, $soyisim: String!) {
  KullaniciGuncelle( email: $email, hesapTipi: $hesapTipi, id: $id, isim: $isim, sifre: $sifre, sifreDogrulama: $sifreDogrulama, soyisim: $soyisim) {
    id
    isim
    soyisim
    email
    sifre
    sifreDogrulama
    hesapTipi
    teslimatadresiSet {
      id
      il
      ilce
      mahalle
      cadde
      bina
      kapi
      
    }
  }
}
`;

export const USER_DELETE = gql`
mutation kullaniciSil($id: ID) {
  KullaniciSil(id: $id) {
    id
    isim
    soyisim
    email
    sifre
    sifreDogrulama
    hesapTipi
    teslimatadresiSet {
      id
      il
      ilce
      mahalle
      cadde
      bina
      kapi
      musteri
    }
  }
}
`;


export const LOGIN = gql`
mutation login($email: String!, $sifre: String!) {
  login(email: $email, sifre: $sifre) {
    kullanici{
      id
      isim
      soyisim
      email
      sifre
      hesapTipi
      teslimatadresiSet{
        id
        il
        ilce
        mahalle
        cadde
        bina
        kapi
        kullanici{
          id
          isim
          soyisim
          email
          sifre
          hesapTipi
        }
      }
    }
  }
}`;

export const RESET_PASSWORD = gql`
mutation ResetPassword($email: String!) {
  resetPassword(email: $email) {
    message
  }
}
`;



export const ADD_PRODUCT = gql`
mutation urunEkle($category: CategoryInput!, $detay: String!, $fiyat: Float!, $image: String, $name: String!, $restoran: RestoranInput!) {
  urunEkle(category: $category, detay: $detay, fiyat: $fiyat, image: $image, name: $name, restoran: $restoran) {
    id
    name
    image
    fiyat
    detay
    category
    restoran
    siparisdetaySet {
      id
      miktar
      fiyat
      toplamTutar
      siparis
      urun
    }
  }
}
`;


export const UPDATE_PRODUCT = gql`
mutation urunGuncelle($category: CategoryInput!, $detay: String!, $fiyat: Decimal!, $image: String, $name: String!, $restoran: RestoranInput!) {
  urunGuncelle(category: $category, detay: $detay, fiyat: $fiyat, image: $image, name: $name, restoran: $restoran) {
    id
    name
    image
    fiyat
    detay
    category
    restoran
    siparisdetaySet {
      id
      miktar
      fiyat
      toplamTutar
      siparis
      urun
    }
  }
}
`;


export const DELETE_PRODUCT = gql`
mutation urunSil($urunId: ID!) {
  urunSil(urunId: $urunId) {
    id
  }
}
`;


export const ADD_DELIVERY = gql`
mutation teslimatEkle($bina: String!, $cadde: String!, $il: String!, $ilce: String!, $kapi: String!, $kullanici: KullaniciInput!, $mahalle: String!) {
  teslimatEkle(bina: $bina, cadde: $cadde, il: $il, ilce: $ilce, kapi: $kapi, kullanici: $kullanici, mahalle: $mahalle) {
    id
    il
    ilce
    mahalle
    cadde
    bina
    kapi
    kullanici {
      id
      isim
      soyisim
      email
      sifre
      sifreDogrulama
      hesapTipi
      teslimatadresiSet {
        id
        il
        ilce
        mahalle
        cadde
        bina
        kapi
        musteri
      }
    }
  }
}
`;


export const UPDATE_DELIVERY = gql`
mutation teslimatGuncelle($bina: String!, $cadde: String!, $il: String!, $ilce: String!, $kapi: String!, $kullanici: KullaniciInput!, $mahalle: String!) {
  teslimatGuncelle(bina: $bina, cadde: $cadde, il: $il, ilce: $ilce, kapi: $kapi, kullanici: $kullanici, mahalle: $mahalle) {
    id
    il
    ilce
    mahalle
    cadde
    bina
    kapi
    kullanici {
      id
      isim
      soyisim
      email
      sifre
      sifreDogrulama
      hesapTipi
      teslimatadresiSet {
        id
        il
        ilce
        mahalle
        cadde
        bina
        kapi
        musteri
      }
    }
  }
}
`;


export const DELETE_DELIVERY = gql`
mutation teslimatSil($id: ID) {
  teslimatSil(id: $id) {
    id
  }
}
`;

export const ADD_ORDER_DETAIL = gql`
mutation siparisDetayEkle($fiyat: Float!, $miktar: Int!, $siparis: SiparisInput!, $toplamTutar: Float!, $urun: UrunInput!) {
  siparisDetayEkle(fiyat: $fiyat, miktar: $miktar, siparis: $siparis, toplamTutar: $toplamTutar, urun: $urun) {
    id
    miktar
    fiyat
    toplamTutar
    siparis {
      id
      siparisTarihi
      teslimTarihi
      tutar
      durum
      siparisDetaylari {
        urun
        id
        name
        image
        fiyat
        detay
        category
        restoran
        siparisdetaySet {
          id
          miktar
          fiyat
          toplamTutar
          siparis
          urun
        }
      }
    }
  }
}
`;

export const UPDATE_ORDER_DETAIL = gql`
mutation siparisDetayGuncelle($fiyat: Float!, $miktar: Int!, $siparis: SiparisInput!, $toplamTutar: Float!, $urun: UrunInput!) {
  siparisDetayGuncelle(fiyat: $fiyat, miktar: $miktar, siparis: $siparis, toplamTutar: $toplamTutar, urun: $urun) {
    id
    miktar
    fiyat
    toplamTutar
    siparis {
      id
      siparisTarihi
      teslimTarihi
      tutar
      durum
      siparisDetaylari {
        urun
        id
        name
        image
        fiyat
        detay
        category
        restoran
        siparisdetaySet {
          id
          miktar
          fiyat
          toplamTutar
          siparis
          urun
        }
      }
    }
  }
}
`;


export const DELETE_ORDER_DETAIL = gql`
mutation siparisDetaySil($id: ID) {
  siparisDetaySil(id: $id) {
    siparis{
      id
    }
  }
}
`;


export const ADD_ORDER = gql`
mutation siparisEkle($durum: String!, $siparisTarihi: DateTime!, $teslimTarihi: DateTime!, $tutar: Float!) {
  siparisEkle(durum: $durum, siparisTarihi: $siparisTarihi, teslimTarihi: $teslimTarihi, tutar: $tutar) {
    siparis{
        id
    siparisTarihi
    teslimTarihi
    tutar
    durum
    siparisDetaylari {
      id
      miktar
      toplamTutar
    }
  
    }
  }
}
`;


export const UPDATE_ORDER = gql`
mutation siparisGuncelle($durum: String!, $siparisTarihi: DateTime!, $teslimTarihi: DateTime!, $tutar: Float!) {
  siparisGuncelle(durum: $durum, siparisTarihi: $siparisTarihi, teslimTarihi: $teslimTarihi, tutar: $tutar) {
    siparis{    
    id
    siparisTarihi
    teslimTarihi
    tutar
    durum
    siparisDetaylari {
      id
      miktar
      toplamTutar
    }}

  }
}
`;

export const DELETE_ORDER = gql`
mutation siparisSil($id: ID) {
  siparisSil(id: $id) {
    siparis{id}
    
  }
}
`;


export const ADD_RESTAURANT = gql`
mutation restoranEkle($acilisSaati: Time!, $adres: String!, $category: String!, $email: String, $kapanisSaati: Time!, $minTutar: Decimal!, $name: String!, $puan: Decimal!, $resim: String!, $telefon: String!,$hesapTipi:String!) {
  restoranEkle(acilisSaati: $acilisSaati, adres: $adres, category: $category, email: $email, kapanisSaati: $kapanisSaati, minTutar: $minTutar, name: $name, puan: $puan, resim: $resim, telefon: $telefon,hesapTipi:$hesapTipi) {
    restoran{
      id
      name
      adres
      category
      acilisSaati
      kapanisSaati
      minTutar
      puan
      resim
    }
 
  }
}
`;

export const UPDATE_RESTAURANT = gql`
mutation restoranGuncelle($acilisSaati: Time!, $adres: String!, $category: String!, $email: String, $kapanisSaati: Time!, $minTutar: Decimal!, $name: String!, $puan: Decimal!, $resim: String!, $telefon: String!,$hesapTipi:String!) {
  restoranGuncelle(acilisSaati: $acilisSaati, adres: $adres, category: $category, email: $email, kapanisSaati: $kapanisSaati, minTutar: $minTutar, name: $name, puan: $puan, resim: $resim, telefon: $telefon,hesapTipi:$hesapTipi) {
    restoran{
      id
      name
      adres
      category
      acilisSaati
      kapanisSaati
      minTutar
      puan
      resim
    }
 
  }
}
`;


export const DELETE_RESTAURANT = gql`
mutation restoranSil($id: ID) {
  restoranSil(id: $id) {
    restoran{id}
    
  }
}
`;


export const ADD_PAYMENT = gql`
mutation odemeEkle($cvv: String!, $kartNumarasi: String!, $kartSahibi: String!, $sonKullanma: String!) {
  odemeEkle(cvv: $cvv, kartNumarasi: $kartNumarasi, kartSahibi: $kartSahibi, sonKullanma: $sonKullanma) {
    OdemeBilgileri{
    id
    kartSahibi
    kartNumarasi
    sonKullanma
    cvv
    }
  }
}
`;


export const UPDATE_PAYMENT = gql`
mutation odemeGuncelle($cvv: String!, $kartNumarasi: String!, $kartSahibi: String!, $sonKullanma: String!) {
  odemeGuncelle(cvv: $cvv, kartNumarasi: $kartNumarasi, kartSahibi: $kartSahibi, sonKullanma: $sonKullanma) {
    odeme{ 
    id
    kartSahibi
    kartNumarasi
    sonKullanma
    cvv}
  
  }
}
`;


export const DELETE_PAYMENT = gql`
mutation odemeSil($id: ID) {
  odemeSil(id: $id) {
    odeme{id}
  }
}
`;


export const ADD_CATEGORY = gql`
mutation kategoriEkle($name: String!) {
  kategoriEkle(name: $name) {
    kategori{
    id
    name
    }
  
  }}
`;


export const UPDATE_CATEGORY = gql`
mutation kategoriGuncelle($name: String!) {
  kategoriGuncelle(name: $name) {
    kategori{
    id
    name
    } 
  }
}
`;


export const DELETE_CATEGORY = gql`
mutation kategoriSil($id: ID) {
  kategoriSil(id: $id) {
    kategori{
    id
    }
  }
}
`;
