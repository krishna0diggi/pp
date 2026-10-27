import portraitMain from '../assets/PXL_20260909_033302538.PORTRAIT.jpg';
import portraitAlt from '../assets/PXL_20260909_033419885.PORTRAIT.jpg';
import photoAtrium from '../assets/PXL_20260909_032318869.jpg';
import photoNight from '../assets/IMG_20260317_212237.jpg';
import docOriginal from '../assets/IMG_20260509_230710.jpg';

export const biodataImages = {
  portraitMain,
  portraitAlt,
  photoAtrium,
  photoNight,
  docOriginal,
};

export interface Biodata {
  invocation: {
    symbol: string;
    mantra: string;
    subMantra: string;
  };
  personal: {
    fullName: string;
    caste: string;
    dateOfBirth: string; // '21 August 2001'
    calculatedAge: number;
    placeOfBirth: string; // 'Petarbar, Bokaro Steel City'
    rashi: string; // 'Mithun (Gemini)'
    gotra: string; // 'Kashyap'
    height: string; // "5 feet 6 inches (167 cm)"
    heightMetric: string; // "167 cm"
    complexion: string; // "Fair"
    maritalStatus: string;
    religion: string;
    motherTongue?: string;
  };
  professional: {
    occupation: string; // "Software Engineer"
    organization: string; // "Diggibyte Technologies"
    annualIncome: string; // "7-10 LPA"
    domain: string;
    summary: string;
  };
  family: {
    fatherName: string; // "Sunil Kumar Saw"
    fatherOccupation: string; // "Business Man"
    motherName: string; // "Anita Devi"
    motherOccupation: string; // "House Wife"
    brothers: string; // "2 (Younger)"
    sisters: string; // "No"
    nativePlace: string;
    valuesNote: string;
  };
  contact: {
    phone: string; // "+91 8340482698"
    rawPhone: string; // "918340482698"
    location: string;
    authorizedDisplay: boolean;
  };
  gallery: {
    id: string;
    src: string;
    title: string;
    caption: string;
    tag: string;
    isPrimary?: boolean;
  }[];
  partnerPreferences?: {
    overview: string;
    points: { title: string; description: string }[];
  };
  closingMessage: string;
}

export const biodataData: Biodata = {
  invocation: {
    symbol: 'ॐ',
    mantra: '|| श्री गणेशाय नमः ||',
    subMantra: 'Shree Ganeshay Namah',
  },
  personal: {
    fullName: 'Krishna Kumar Saw',
    caste: 'Teli',
    dateOfBirth: '21 August 2001',
    calculatedAge: 25,
    placeOfBirth: 'Petarbar, Bokaro Steel City',
    rashi: 'Mithun (Gemini)',
    gotra: 'Kashyap',
    height: "5' 6\" (167 cm)",
    heightMetric: '167 cm',
    complexion: 'Fair',
    maritalStatus: 'Never Married',
    religion: 'Hindu',
  },
  professional: {
    occupation: 'Software Engineer',
    organization: 'Diggibyte Technologies',
    annualIncome: '7 LPA',
    domain: 'Software Engineering & Modern Cloud Technologies',
    summary:
      'Working as a dedicated Software Engineer at Diggibyte Technologies, specializing in modern web architectures and robust software solutions. Passionate about continuous learning, engineering craft, and maintaining high standards in both professional endeavours and personal conduct.',
  },
  family: {
    fatherName: 'Sunil Kumar Saw',
    fatherOccupation: 'Business Man',
    motherName: 'Anita Devi',
    motherOccupation: 'House Wife (Homemaker)',
    brothers: '2 Younger Brothers',
    sisters: 'None',
    nativePlace: 'Petarbar, Bokaro Steel City',
    valuesNote:
      'Rooted in traditional Hindu family values with strong mutual respect, close-knit bonds, and progressive encouragement for education and career growth.',
  },
  contact: {
    phone: '+91 8340482698',
    rawPhone: '918340482698',
    location: 'Bokaro Steel City / Current Professional Hub',
    authorizedDisplay: true,
  },
  gallery: [
    {
      id: 'portrait',
      src: portraitMain,
      title: 'Formal & Editorial Portrait',
      caption: 'Professional studio portrait with natural smile and dignified composure.',
      tag: 'Primary Portrait',
      isPrimary: true,
    },
    {
      id: 'portrait-alt',
      src: portraitAlt,
      title: 'Warm Candid Perspective',
      caption: 'Natural candid portrait highlighting approachable composure and positivity.',
      tag: 'Candid Portrait',
    },
    {
      id: 'night-outdoor',
      src: photoNight,
      title: 'City Reflections & Evening Glimpse',
      caption: 'Standing by the waterfront and modern architectural skyline at dusk.',
      tag: 'Outdoor / Lifestyle',
    },
    {
      id: 'atrium-casual',
      src: photoAtrium,
      title: 'Modern Work Environment',
      caption: 'At the contemporary multi-level atrium gallery, enjoying a thoughtful moment.',
      tag: 'Professional Environment',
    },
    {
      id: 'original-doc',
      src: docOriginal,
      title: 'Original Sacred Biodata Document',
      caption: 'The verified traditional family document with auspicious Mangal Kalash and Ganesha invocation.',
      tag: 'Official Document',
    },
  ],
  partnerPreferences: {
    overview:
      'Seeking a well-educated, respectful, and family-oriented companion with good cultural values, who values mutual understanding, companionship, and walking together through life’s journey.',
    points: [
      {
        title: 'Education & Career',
        description: 'A graduate or working professional with an open mind and ambition for self-growth.',
      },
      {
        title: 'Values & Heritage',
        description: 'Rooted in traditional Indian family values with a progressive and modern outlook.',
      },
      {
        title: 'Mutual Respect & Nature',
        description: 'A kind, understanding personality who appreciates open communication and warm family bonds.',
      },
    ],
  },
  closingMessage:
    'Every meaningful journey begins with understanding, shared values, and a willingness to build something beautiful together with family blessings.',
};
