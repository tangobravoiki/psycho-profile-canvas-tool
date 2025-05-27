
export const termExplanations = {
  // Big Five Personality Traits
  'deneyime açıklık': 'Yeni deneyimlere, fikirlere ve değişimlere karşı olan tutumu ifade eder. Yüksek puan alan kişiler yaratıcı, meraklı ve sanatsal eğilimlere sahiptir.',
  'sorumluluk': 'Organizasyon, disiplin ve hedefe odaklanma düzeyini gösterir. Yüksek puan alan kişiler düzenli, güvenilir ve özdenetim sahibidir.',
  'dışa dönüklük': 'Sosyal etkileşim arayışı ve enerji kaynağını ifade eder. Yüksek puan alan kişiler sosyal, konuşkan ve iyimserdir.',
  'uyumluluk': 'Başkalarıyla işbirliği yapma ve empati kurma eğilimini gösterir. Yüksek puan alan kişiler güvenilir, yardımsever ve uyumludur.',
  'duygusal denge': 'Stres altında sakin kalma ve duygusal istikrarı ifade eder. Düşük puan alan kişiler kaygı, öfke ve depresyon eğilimi gösterebilir.',
  
  // Modus Operandi Terms
  'modus operandi': 'Suçlunun karakteristik olarak kullandığı suç işleme yöntemi ve davranış kalıpları. Her suçlunun kendine özgü bir imzası vardır.',
  'suç öncesi hazırlık': 'Suçlunun eylemi gerçekleştirmeden önce yaptığı planlama, araştırma ve hazırlık süreçleri.',
  'suç anındaki davranış': 'Suç işlenirken sergilenen spesifik davranışlar, yöntemler ve tercihler.',
  'suç sonrası eylemler': 'Suç sonrasında kanıtları gizleme, kaçış yolları ve davranış değişiklikleri.',
  
  // Psychological Terms
  'psikolojik belirteçler': 'Kişinin ruh halini, motivasyonunu ve davranış eğilimlerini gösteren psikolojik işaretler.',
  'risk faktörleri': 'Suç davranışına yönelme olasılığını artıran kişisel, sosyal ve çevresel faktörler.',
  'motivasyon analizi': 'Suçlunun davranışının altında yatan ihtiyaçlar, istekler ve psikolojik güdülerin incelenmesi.',
  'demografik tahminler': 'Suçlunun yaş, eğitim, sosyal durum gibi demografik özelliklerine dair bilimsel tahminler.',
  
  // Crime Analysis Terms
  'antisosyal kişilik': 'Başkalarının haklarını sürekli ihlal eden, kurallara uymayan ve empati eksikliği gösteren kişilik bozukluğu.',
  'empati eksikliği': 'Başkalarının duygularını anlama ve hissetme yetisinin düşük olması.',
  'impulsi kontrol': 'Ani dürtüleri kontrol etme yetisinin zayıflığı, düşünmeden hareket etme eğilimi.',
  'sosyal izolasyon': 'Toplumdan, aileden ve sosyal çevreden uzaklaşma durumu.',
  'öfke kontrolü': 'Öfke duygusunu yönetme ve uygun şekilde ifade etme becerisinin eksikliği.'
};

export const getTermExplanation = (term: string): string | undefined => {
  const normalizedTerm = term.toLowerCase().trim();
  return termExplanations[normalizedTerm];
};
