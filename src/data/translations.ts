export type Language = 'hi' | 'en';

export interface TranslationDictionary {
  invocation: string;
  profileSubtitle: string;
  personalDetails: string;
  familyDetails: string;
  contactDetails: string;
  contactAction: string;
  galleryTitle: string;
  printBiodata: string;
  viewOriginalDoc: string;
  downloadPdf: string;
  close: string;
  viewMorePhotos: string;
  photoCount: string;

  // Personal Fields
  name: string;
  caste: string;
  casteValue: string;
  dateOfBirth: string;
  dateOfBirthValue: string;
  birthplace: string;
  birthplaceValue: string;
  rashi: string;
  rashiValue: string;
  gotra: string;
  gotraValue: string;
  height: string;
  heightValue: string;
  complexion: string;
  complexionValue: string;
  occupation: string;
  occupationValue: string;
  organization: string;
  organizationValue: string;
  annualIncome: string;
  annualIncomeValue: string;
  maritalStatus: string;
  maritalStatusValue: string;
  religion: string;
  religionValue: string;

  // Family Fields
  fatherName: string;
  fatherNameValue: string;
  fatherOccupation: string;
  fatherOccupationValue: string;
  motherName: string;
  motherNameValue: string;
  motherOccupation: string;
  motherOccupationValue: string;
  brothers: string;
  brothersValue: string;
  sisters: string;
  sistersValue: string;
  nativePlace: string;
  nativePlaceValue: string;

  // Contact
  callFamily: string;
  whatsappChat: string;
  copyPhone: string;
  copied: string;
  privacyMask: string;
  showNumber: string;
  contactNote: string;
  whatsappPrefillText: string;

  // Footer
  footerBlessing: string;
  copyright: string;
  backToTop: string;
}

export const translations: Record<Language, TranslationDictionary> = {
  hi: {
    invocation: '॥ श्री गणेशाय नमः ॥',
    profileSubtitle: 'विवाह हेतु परिचय',
    personalDetails: 'व्यक्तिगत विवरण',
    familyDetails: 'पारिवारिक विवरण',
    contactDetails: 'संपर्क सूत्र',
    contactAction: 'संपर्क करें',
    galleryTitle: 'तस्वीरें एवं मूल दस्तावेज',
    printBiodata: 'बायोडाटा प्रिंट करें',
    viewOriginalDoc: 'मूल दस्तावेज देखें',
    downloadPdf: 'PDF डाउनलोड करें',
    close: 'बंद करें',
    viewMorePhotos: 'तस्वीरें देखें',
    photoCount: 'तस्वीरें',

    // Personal Fields
    name: 'नाम',
    caste: 'जाति / समुदाय',
    casteValue: 'तेली (Teli)',
    dateOfBirth: 'जन्म तिथि',
    dateOfBirthValue: '21 अगस्त 2001',
    birthplace: 'जन्म स्थान',
    birthplaceValue: 'पेटरवार, बोकारो स्टील सिटी',
    rashi: 'राशि',
    rashiValue: 'मिथुन (Gemini)',
    gotra: 'गोत्र',
    gotraValue: 'कश्यप (Kashyap)',
    height: 'लंबाई',
    heightValue: "5' 6\" (167 सेमी)",
    complexion: 'रंग',
    complexionValue: 'गोरा (Fair)',
    occupation: 'पेशा',
    occupationValue: 'Software Engineer',
    organization: 'कंपनी',
    organizationValue: 'Diggibyte Technologies',
    annualIncome: 'वार्षिक आय',
    annualIncomeValue: '7 LPA',
    maritalStatus: 'वैवाहिक स्थिति',
    maritalStatusValue: 'अविवाहित (Never Married)',
    religion: 'धर्म',
    religionValue: 'सनातन हिंदू (Hindu)',

    // Family Fields
    fatherName: 'पिता का नाम',
    fatherNameValue: 'सुनील कुमार साव',
    fatherOccupation: 'पिता का व्यवसाय',
    fatherOccupationValue: 'व्यवसायी (Businessman)',
    motherName: 'माता का नाम',
    motherNameValue: 'अनिता देवी',
    motherOccupation: 'माता का व्यवसाय',
    motherOccupationValue: 'गृहिणी (Homemaker)',
    brothers: 'भाई',
    brothersValue: '2 छोटे भाई',
    sisters: 'बहनें',
    sistersValue: 'कोई नहीं',
    nativePlace: 'मूल निवास',
    nativePlaceValue: 'पेटरवार, बोकारो स्टील सिटी (झारखंड)',

    // Contact
    callFamily: 'फोन करें',
    whatsappChat: 'WhatsApp संदेश',
    copyPhone: 'नंबर कॉपी करें',
    copied: 'कॉपी हो गया!',
    privacyMask: 'नंबर छिपाएं',
    showNumber: 'नंबर दिखाएं',
    contactNote: 'विवाह संबंधी बातचीत एवं अग्रेतर विचार-विमर्श हेतु परिवार से संपर्क करें।',
    whatsappPrefillText: 'नमस्ते, हमने कृष्णा कुमार साव (Software Engineer) का विवाह बायोडाटा देखा। हम इस संबंध में आपके परिवार से बातचीत करना चाहते हैं।',

    // Footer
    footerBlessing: '॥ प्रभु कृपा एवं परिजनों के आशीर्वाद से शुभ शुरुआत ॥',
    copyright: 'कृष्णा कुमार साव • विवाह बायोडाटा',
    backToTop: 'ऊपर जाएं',
  },
  en: {
    invocation: '|| Shree Ganeshay Namah ||',
    profileSubtitle: 'Matrimonial Profile',
    personalDetails: 'Personal Details',
    familyDetails: 'Family Details',
    contactDetails: 'Contact Details',
    contactAction: 'Contact Family',
    galleryTitle: 'Photographs & Documents',
    printBiodata: 'Print Biodata',
    viewOriginalDoc: 'View Original Document',
    downloadPdf: 'Download PDF',
    close: 'Close',
    viewMorePhotos: 'View Photos',
    photoCount: 'Photos',

    // Personal Fields
    name: 'Name',
    caste: 'Caste / Community',
    casteValue: 'Teli',
    dateOfBirth: 'Date of Birth',
    dateOfBirthValue: '21 August 2001',
    birthplace: 'Place of Birth',
    birthplaceValue: 'Petarbar, Bokaro Steel City',
    rashi: 'Rashi (Zodiac)',
    rashiValue: 'Mithun (Gemini)',
    gotra: 'Gotra',
    gotraValue: 'Kashyap',
    height: 'Height',
    heightValue: "5' 6\" (167 cm)",
    complexion: 'Complexion',
    complexionValue: 'Fair',
    occupation: 'Occupation',
    occupationValue: 'Software Engineer',
    organization: 'Organization',
    organizationValue: 'Diggibyte Technologies',
    annualIncome: 'Annual Income',
    annualIncomeValue: '7 LPA',
    maritalStatus: 'Marital Status',
    maritalStatusValue: 'Never Married',
    religion: 'Religion',
    religionValue: 'Hindu',

    // Family Fields
    fatherName: "Father's Name",
    fatherNameValue: 'Sunil Kumar Saw',
    fatherOccupation: "Father's Occupation",
    fatherOccupationValue: 'Businessman',
    motherName: "Mother's Name",
    motherNameValue: 'Anita Devi',
    motherOccupation: "Mother's Occupation",
    motherOccupationValue: 'Homemaker',
    brothers: 'Brothers',
    brothersValue: '2 Younger Brothers',
    sisters: 'Sisters',
    sistersValue: 'None',
    nativePlace: 'Native Place',
    nativePlaceValue: 'Petarbar, Bokaro Steel City (Jharkhand)',

    // Contact
    callFamily: 'Call Family',
    whatsappChat: 'WhatsApp Chat',
    copyPhone: 'Copy Number',
    copied: 'Number Copied!',
    privacyMask: 'Mask Phone',
    showNumber: 'Show Phone',
    contactNote: 'For matrimonial discussions and further alliance steps, prospective families are welcome to connect:',
    whatsappPrefillText: 'Namaste, we reviewed the matrimonial biodata of Krishna Kumar Saw (Software Engineer). We would appreciate connecting with your family.',

    // Footer
    footerBlessing: 'May this alliance begin with auspicious blessings and shared values.',
    copyright: 'Krishna Kumar Saw • Matrimonial Biodata',
    backToTop: 'Back to Top',
  },
};
