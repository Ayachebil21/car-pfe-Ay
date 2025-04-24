export interface PlatePart {
  name: string;
  length: number;
  placeholder: string;
  keyboardType?: "default" | "numeric";
}

export interface RegistrationFormat {
  country: string;
  pattern: string;
  parts: PlatePart[];
}

const registrationFormats: RegistrationFormat[] = [
  {
    "country": "Tunisie",
    "pattern": "{{part1}} {{country}} {{part2}}",
    "parts": [
      {
        "name": "part1",
        "length": 3,
        "placeholder": "000"
      },
      {
        "name": "part2",
        "length": 5,
        "placeholder": "00000"
      }
    ]
  },
  {
    "country": "France",
    "pattern": "{{part1}}-{{part2}}-{{part3}}",
    "parts": [
      {
        "name": "part1",
        "length": 2,
        "placeholder": "AB",
        "keyboardType": "default"
      },
      {
        "name": "part2",
        "length": 3,
        "placeholder": "123"
      },
      {
        "name": "part3",
        "length": 2,
        "placeholder": "CD",
        "keyboardType": "default"
      }
    ]
  },
  {
    "country": "Allemagne",
    "pattern": "{{part1}}-{{part2}} {{part3}}",
    "parts": [
      {
        "name": "part1",
        "length": 1,
        "placeholder": "B",
        "keyboardType": "default"
      },
      {
        "name": "part2",
        "length": 2,
        "placeholder": "AB",
        "keyboardType": "default"
      },
      {
        "name": "part3",
        "length": 4,
        "placeholder": "1234"
      }
    ]
  },
  {
    "country": "Italie",
    "pattern": "{{part1}} {{part2}} {{part3}}",
    "parts": [
      {
        "name": "part1",
        "length": 2,
        "placeholder": "AA",
        "keyboardType": "default"
      },
      {
        "name": "part2",
        "length": 3,
        "placeholder": "123"
      },
      {
        "name": "part3",
        "length": 2,
        "placeholder": "BB",
        "keyboardType": "default"
      }
    ]
  },
  {
    "country": "Espagne",
    "pattern": "{{part1}}-{{part2}}",
    "parts": [
      {
        "name": "part1",
        "length": 4,
        "placeholder": "1234"
      },
      {
        "name": "part2",
        "length": 3,
        "placeholder": "ABC",
        "keyboardType": "default"
      }
    ]
  },
  {
    "country": "Maroc",
    "pattern": "{{part1}}-{{part2}}",
    "parts": [
      {
        "name": "part1",
        "length": 3,
        "placeholder": "1AB",
        "keyboardType": "default"
      },
      {
        "name": "part2",
        "length": 3,
        "placeholder": "112"
      }
    ]
  },
  {
    "country": "Alg\u00e9rie",
    "pattern": "{{part1}}-{{part2}}",
    "parts": [
      {
        "name": "part1",
        "length": 3,
        "placeholder": "2AB",
        "keyboardType": "default"
      },
      {
        "name": "part2",
        "length": 3,
        "placeholder": "212"
      }
    ]
  },
  {
    "country": "Libye",
    "pattern": "{{part1}}-{{part2}}",
    "parts": [
      {
        "name": "part1",
        "length": 3,
        "placeholder": "3AB",
        "keyboardType": "default"
      },
      {
        "name": "part2",
        "length": 3,
        "placeholder": "312"
      }
    ]
  },
  {
    "country": "\u00c9gypte",
    "pattern": "{{part1}}-{{part2}}",
    "parts": [
      {
        "name": "part1",
        "length": 3,
        "placeholder": "4AB",
        "keyboardType": "default"
      },
      {
        "name": "part2",
        "length": 3,
        "placeholder": "412"
      }
    ]
  },
  {
    "country": "Mauritanie",
    "pattern": "{{part1}}-{{part2}}",
    "parts": [
      {
        "name": "part1",
        "length": 3,
        "placeholder": "5AB",
        "keyboardType": "default"
      },
      {
        "name": "part2",
        "length": 3,
        "placeholder": "512"
      }
    ]
  },
  {
    "country": "S\u00e9n\u00e9gal",
    "pattern": "{{part1}}-{{part2}}",
    "parts": [
      {
        "name": "part1",
        "length": 3,
        "placeholder": "6AB",
        "keyboardType": "default"
      },
      {
        "name": "part2",
        "length": 3,
        "placeholder": "612"
      }
    ]
  },
  {
    "country": "C\u00f4te d'Ivoire",
    "pattern": "{{part1}}-{{part2}}",
    "parts": [
      {
        "name": "part1",
        "length": 3,
        "placeholder": "7AB",
        "keyboardType": "default"
      },
      {
        "name": "part2",
        "length": 3,
        "placeholder": "712"
      }
    ]
  },
  {
    "country": "Cameroun",
    "pattern": "{{part1}}-{{part2}}",
    "parts": [
      {
        "name": "part1",
        "length": 3,
        "placeholder": "8AB",
        "keyboardType": "default"
      },
      {
        "name": "part2",
        "length": 3,
        "placeholder": "812"
      }
    ]
  },
  {
    "country": "Nigeria",
    "pattern": "{{part1}}-{{part2}}",
    "parts": [
      {
        "name": "part1",
        "length": 3,
        "placeholder": "9AB",
        "keyboardType": "default"
      },
      {
        "name": "part2",
        "length": 3,
        "placeholder": "912"
      }
    ]
  },
  {
    "country": "Afrique du Sud",
    "pattern": "{{part1}}-{{part2}}",
    "parts": [
      {
        "name": "part1",
        "length": 3,
        "placeholder": "10AB",
        "keyboardType": "default"
      },
      {
        "name": "part2",
        "length": 3,
        "placeholder": "1012"
      }
    ]
  },
  {
    "country": "Kenya",
    "pattern": "{{part1}}-{{part2}}",
    "parts": [
      {
        "name": "part1",
        "length": 3,
        "placeholder": "11AB",
        "keyboardType": "default"
      },
      {
        "name": "part2",
        "length": 3,
        "placeholder": "1112"
      }
    ]
  },
  {
    "country": "Ghana",
    "pattern": "{{part1}}-{{part2}}",
    "parts": [
      {
        "name": "part1",
        "length": 3,
        "placeholder": "12AB",
        "keyboardType": "default"
      },
      {
        "name": "part2",
        "length": 3,
        "placeholder": "1212"
      }
    ]
  },
  {
    "country": "Ethiopie",
    "pattern": "{{part1}}-{{part2}}",
    "parts": [
      {
        "name": "part1",
        "length": 3,
        "placeholder": "13AB",
        "keyboardType": "default"
      },
      {
        "name": "part2",
        "length": 3,
        "placeholder": "1312"
      }
    ]
  },
  {
    "country": "Tanzanie",
    "pattern": "{{part1}}-{{part2}}",
    "parts": [
      {
        "name": "part1",
        "length": 3,
        "placeholder": "14AB",
        "keyboardType": "default"
      },
      {
        "name": "part2",
        "length": 3,
        "placeholder": "1412"
      }
    ]
  },
  {
    "country": "Ouganda",
    "pattern": "{{part1}}-{{part2}}",
    "parts": [
      {
        "name": "part1",
        "length": 3,
        "placeholder": "15AB",
        "keyboardType": "default"
      },
      {
        "name": "part2",
        "length": 3,
        "placeholder": "1512"
      }
    ]
  },
  {
    "country": "Rwanda",
    "pattern": "{{part1}}-{{part2}}",
    "parts": [
      {
        "name": "part1",
        "length": 3,
        "placeholder": "16AB",
        "keyboardType": "default"
      },
      {
        "name": "part2",
        "length": 3,
        "placeholder": "1612"
      }
    ]
  },
  {
    "country": "Burkina Faso",
    "pattern": "{{part1}}-{{part2}}",
    "parts": [
      {
        "name": "part1",
        "length": 3,
        "placeholder": "17AB",
        "keyboardType": "default"
      },
      {
        "name": "part2",
        "length": 3,
        "placeholder": "1712"
      }
    ]
  },
  {
    "country": "Mali",
    "pattern": "{{part1}}-{{part2}}",
    "parts": [
      {
        "name": "part1",
        "length": 3,
        "placeholder": "18AB",
        "keyboardType": "default"
      },
      {
        "name": "part2",
        "length": 3,
        "placeholder": "1812"
      }
    ]
  },
  {
    "country": "Niger",
    "pattern": "{{part1}}-{{part2}}",
    "parts": [
      {
        "name": "part1",
        "length": 3,
        "placeholder": "19AB",
        "keyboardType": "default"
      },
      {
        "name": "part2",
        "length": 3,
        "placeholder": "1912"
      }
    ]
  },
  {
    "country": "Tchad",
    "pattern": "{{part1}}-{{part2}}",
    "parts": [
      {
        "name": "part1",
        "length": 3,
        "placeholder": "20AB",
        "keyboardType": "default"
      },
      {
        "name": "part2",
        "length": 3,
        "placeholder": "2012"
      }
    ]
  },
  {
    "country": "Soudan",
    "pattern": "{{part1}}-{{part2}}",
    "parts": [
      {
        "name": "part1",
        "length": 3,
        "placeholder": "21AB",
        "keyboardType": "default"
      },
      {
        "name": "part2",
        "length": 3,
        "placeholder": "2112"
      }
    ]
  },
  {
    "country": "Djibouti",
    "pattern": "{{part1}}-{{part2}}",
    "parts": [
      {
        "name": "part1",
        "length": 3,
        "placeholder": "22AB",
        "keyboardType": "default"
      },
      {
        "name": "part2",
        "length": 3,
        "placeholder": "2212"
      }
    ]
  },
  {
    "country": "Comores",
    "pattern": "{{part1}}-{{part2}}",
    "parts": [
      {
        "name": "part1",
        "length": 3,
        "placeholder": "23AB",
        "keyboardType": "default"
      },
      {
        "name": "part2",
        "length": 3,
        "placeholder": "2312"
      }
    ]
  },
  {
    "country": "Arabie Saoudite",
    "pattern": "{{part1}}-{{part2}}",
    "parts": [
      {
        "name": "part1",
        "length": 3,
        "placeholder": "24AB",
        "keyboardType": "default"
      },
      {
        "name": "part2",
        "length": 3,
        "placeholder": "2412"
      }
    ]
  },
  {
    "country": "\u00c9mirats",
    "pattern": "{{part1}}-{{part2}}",
    "parts": [
      {
        "name": "part1",
        "length": 3,
        "placeholder": "25AB",
        "keyboardType": "default"
      },
      {
        "name": "part2",
        "length": 3,
        "placeholder": "2512"
      }
    ]
  },
  {
    "country": "Qatar",
    "pattern": "{{part1}}-{{part2}}",
    "parts": [
      {
        "name": "part1",
        "length": 3,
        "placeholder": "26AB",
        "keyboardType": "default"
      },
      {
        "name": "part2",
        "length": 3,
        "placeholder": "2612"
      }
    ]
  },
  {
    "country": "Bahre\u00efn",
    "pattern": "{{part1}}-{{part2}}",
    "parts": [
      {
        "name": "part1",
        "length": 3,
        "placeholder": "27AB",
        "keyboardType": "default"
      },
      {
        "name": "part2",
        "length": 3,
        "placeholder": "2712"
      }
    ]
  },
  {
    "country": "Kowe\u00eft",
    "pattern": "{{part1}}-{{part2}}",
    "parts": [
      {
        "name": "part1",
        "length": 3,
        "placeholder": "28AB",
        "keyboardType": "default"
      },
      {
        "name": "part2",
        "length": 3,
        "placeholder": "2812"
      }
    ]
  },
  {
    "country": "Jordanie",
    "pattern": "{{part1}}-{{part2}}",
    "parts": [
      {
        "name": "part1",
        "length": 3,
        "placeholder": "29AB",
        "keyboardType": "default"
      },
      {
        "name": "part2",
        "length": 3,
        "placeholder": "2912"
      }
    ]
  },
  {
    "country": "Liban",
    "pattern": "{{part1}}-{{part2}}",
    "parts": [
      {
        "name": "part1",
        "length": 3,
        "placeholder": "30AB",
        "keyboardType": "default"
      },
      {
        "name": "part2",
        "length": 3,
        "placeholder": "3012"
      }
    ]
  },
  {
    "country": "Syrie",
    "pattern": "{{part1}}-{{part2}}",
    "parts": [
      {
        "name": "part1",
        "length": 3,
        "placeholder": "31AB",
        "keyboardType": "default"
      },
      {
        "name": "part2",
        "length": 3,
        "placeholder": "3112"
      }
    ]
  },
  {
    "country": "Irak",
    "pattern": "{{part1}}-{{part2}}",
    "parts": [
      {
        "name": "part1",
        "length": 3,
        "placeholder": "32AB",
        "keyboardType": "default"
      },
      {
        "name": "part2",
        "length": 3,
        "placeholder": "3212"
      }
    ]
  },
  {
    "country": "Iran",
    "pattern": "{{part1}}-{{part2}}",
    "parts": [
      {
        "name": "part1",
        "length": 3,
        "placeholder": "33AB",
        "keyboardType": "default"
      },
      {
        "name": "part2",
        "length": 3,
        "placeholder": "3312"
      }
    ]
  },
  {
    "country": "Pakistan",
    "pattern": "{{part1}}-{{part2}}",
    "parts": [
      {
        "name": "part1",
        "length": 3,
        "placeholder": "34AB",
        "keyboardType": "default"
      },
      {
        "name": "part2",
        "length": 3,
        "placeholder": "3412"
      }
    ]
  },
  {
    "country": "Inde",
    "pattern": "{{part1}}-{{part2}}",
    "parts": [
      {
        "name": "part1",
        "length": 3,
        "placeholder": "35AB",
        "keyboardType": "default"
      },
      {
        "name": "part2",
        "length": 3,
        "placeholder": "3512"
      }
    ]
  },
  {
    "country": "Bangladesh",
    "pattern": "{{part1}}-{{part2}}",
    "parts": [
      {
        "name": "part1",
        "length": 3,
        "placeholder": "36AB",
        "keyboardType": "default"
      },
      {
        "name": "part2",
        "length": 3,
        "placeholder": "3612"
      }
    ]
  },
  {
    "country": "Chine",
    "pattern": "{{part1}}-{{part2}}",
    "parts": [
      {
        "name": "part1",
        "length": 3,
        "placeholder": "37AB",
        "keyboardType": "default"
      },
      {
        "name": "part2",
        "length": 3,
        "placeholder": "3712"
      }
    ]
  },
  {
    "country": "Japon",
    "pattern": "{{part1}}-{{part2}}",
    "parts": [
      {
        "name": "part1",
        "length": 3,
        "placeholder": "38AB",
        "keyboardType": "default"
      },
      {
        "name": "part2",
        "length": 3,
        "placeholder": "3812"
      }
    ]
  },
  {
    "country": "Cor\u00e9e du Sud",
    "pattern": "{{part1}}-{{part2}}",
    "parts": [
      {
        "name": "part1",
        "length": 3,
        "placeholder": "39AB",
        "keyboardType": "default"
      },
      {
        "name": "part2",
        "length": 3,
        "placeholder": "3912"
      }
    ]
  },
  {
    "country": "Indon\u00e9sie",
    "pattern": "{{part1}}-{{part2}}",
    "parts": [
      {
        "name": "part1",
        "length": 3,
        "placeholder": "40AB",
        "keyboardType": "default"
      },
      {
        "name": "part2",
        "length": 3,
        "placeholder": "4012"
      }
    ]
  },
  {
    "country": "Malaisie",
    "pattern": "{{part1}}-{{part2}}",
    "parts": [
      {
        "name": "part1",
        "length": 3,
        "placeholder": "41AB",
        "keyboardType": "default"
      },
      {
        "name": "part2",
        "length": 3,
        "placeholder": "4112"
      }
    ]
  },
  {
    "country": "Turquie",
    "pattern": "{{part1}}-{{part2}}",
    "parts": [
      {
        "name": "part1",
        "length": 3,
        "placeholder": "42AB",
        "keyboardType": "default"
      },
      {
        "name": "part2",
        "length": 3,
        "placeholder": "4212"
      }
    ]
  },
  {
    "country": "Gr\u00e8ce",
    "pattern": "{{part1}}-{{part2}}",
    "parts": [
      {
        "name": "part1",
        "length": 3,
        "placeholder": "43AB",
        "keyboardType": "default"
      },
      {
        "name": "part2",
        "length": 3,
        "placeholder": "4312"
      }
    ]
  },
  {
    "country": "Portugal",
    "pattern": "{{part1}}-{{part2}}",
    "parts": [
      {
        "name": "part1",
        "length": 3,
        "placeholder": "44AB",
        "keyboardType": "default"
      },
      {
        "name": "part2",
        "length": 3,
        "placeholder": "4412"
      }
    ]
  },
  {
    "country": "Belgique",
    "pattern": "{{part1}}-{{part2}}",
    "parts": [
      {
        "name": "part1",
        "length": 3,
        "placeholder": "45AB",
        "keyboardType": "default"
      },
      {
        "name": "part2",
        "length": 3,
        "placeholder": "4512"
      }
    ]
  },
  {
    "country": "Pays-Bas",
    "pattern": "{{part1}}-{{part2}}",
    "parts": [
      {
        "name": "part1",
        "length": 3,
        "placeholder": "46AB",
        "keyboardType": "default"
      },
      {
        "name": "part2",
        "length": 3,
        "placeholder": "4612"
      }
    ]
  },
  {
    "country": "Suisse",
    "pattern": "{{part1}}-{{part2}}",
    "parts": [
      {
        "name": "part1",
        "length": 3,
        "placeholder": "47AB",
        "keyboardType": "default"
      },
      {
        "name": "part2",
        "length": 3,
        "placeholder": "4712"
      }
    ]
  },
  {
    country: "Autre",
    pattern: "{{part1}}",
    parts: [
      { name: "part2", length: 20, placeholder: "Entrez votre numéro", keyboardType: "default" },
    ],
  }
  ,
  {
    country: "ن.ت",
    pattern: "{{part1}} ن.ت {{part2}}",
    parts: [
      { name: "part1", length: 30, placeholder: "000" },
      { name: "part2", length: 4, placeholder: "0000" }
    ]
  }
  
  
];

export default registrationFormats;