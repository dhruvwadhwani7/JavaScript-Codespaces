const obj1 = {
  "results": [
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Brett",
        "last": "Clark"
      },
      "location": {
        "street": {
          "number": 1427,
          "name": "Elgin St"
        },
        "city": "Wichita",
        "state": "West Virginia",
        "country": "United States",
        "postcode": 49431,
        "coordinates": {
          "latitude": "85.8694",
          "longitude": "-40.1464"
        },
        "timezone": {
          "offset": "-12:00",
          "description": "Eniwetok, Kwajalein"
        }
      },
      "email": "brett.clark@example.com",
      "login": {
        "uuid": "12024ff7-de9b-4c6c-a716-7c5b94a679dd",
        "username": "beautifulkoala548",
        "password": "japan",
        "salt": "35JSUyWQ",
        "md5": "d4a3ceab27ba35f14722e589c9bb40f3",
        "sha1": "c12d8f4cc1bb7c645cb7f9bdb16c0f03efb7c6dc",
        "sha256": "56ff25af7e11e70503446bfa5b82f870f16d2293d5318b49b281e907eb2211e6"
      },
      "dob": {
        "date": "1990-04-20T02:58:25.103Z",
        "age": 35
      },
      "registered": {
        "date": "2009-06-03T08:53:12.151Z",
        "age": 16
      },
      "phone": "(636) 545-8827",
      "cell": "(282) 248-0986",
      "id": {
        "name": "SSN",
        "value": "831-75-3895"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/74.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/74.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/74.jpg"
      },
      "nat": "US"
    }
  ],
  "info": {
    "seed": "b2f3ae351d841acd",
    "results": 1,
    "page": 1,
    "version": "1.4"
  }
}

console.log(obj1.results[0].gender)
console.log(obj1.results[0].name.last)