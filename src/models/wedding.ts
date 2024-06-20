export interface Wedding {
  id: number
  date: string
  location: Location
  groom: Person & { parents: Person[] }
  bride: Person & { parents: Person[] }
  message: {
    intro: string
    invitation: string
  }
  galleryImages: string[]
  attendCount: number
}

export interface Location {
  lat: number //위도
  lng: Number //경도
  name: string
  address: string
  link: string
  waytocome: {
    metro: string[]
    bus: string[]
  }
}

export interface Person {
  name: string
  account: Account
  phoneNumber: string
}

//계좌정보
export interface Account {
  bankName: string
  accountNumber: string
}
