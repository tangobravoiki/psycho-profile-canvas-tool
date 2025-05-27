
import React from 'react';
import { Header } from '@/components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Users, FileText, Eye, Clock, AlertTriangle } from 'lucide-react';

const VakaOrnekleri = () => {
  const cases = [
    {
      id: 1,
      title: "Seri Suç Vakası - Davranışsal Analiz",
      category: "Seri Suçlar",
      difficulty: "İleri",
      duration: "120 dakika",
      description: "Benzer modus operandi gösteren bir dizi suçun analizi ve fail profili oluşturma",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      solved: true
    },
    {
      id: 2,
      title: "Aile İçi Şiddet Değerlendirmesi",
      category: "Aile Hukuku",
      difficulty: "Orta",
      duration: "90 dakika",
      description: "Aile içi şiddet vakasında psikolojik değerlendirme ve risk analizi",
      image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c",
      solved: false
    },
    {
      id: 3,
      title: "Çocuk İstismarı Tanıklık Değerlendirmesi",
      category: "Çocuk Koruma",
      difficulty: "İleri",
      duration: "150 dakika",
      description: "Çocuk tanık ifadelerinin güvenilirliği ve psikolojik durum değerlendirmesi",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      solved: true
    }
  ];

  const realCases = [
    {
      title: "Ted Bundy Vaka Analizi",
      year: "1970-1980",
      type: "Seri Katil",
      description: "Klasik manipülatif psikopat profili ve davranış kalıpları",
      lessons: ["Charm ve manipülasyon", "Av seçimi kriterleri", "Coğrafi profilleme"]
    },
    {
      title: "Unabomber Vakası",
      year: "1978-1995", 
      type: "Terörist",
      description: "Linguistic profiling ve davranışsal analiz teknikleri",
      lessons: ["Dil analizi", "Sosyal izolasyon", "İdeolojik motivasyon"]
    },
    {
      title: "BTK Katili",
      year: "1974-1991",
      type: "Seri Katil",
      description: "Uzun süreli gizlilik ve çifte yaşam analizi",
      lessons: ["Uyum sağlama yetenekleri", "Kontrol ihtiyacı", "İletişim kalıpları"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Vaka Örnekleri</h1>
          <p className="text-lg text-slate-600 max-w-3xl">
            Gerçek ve simüle edilmiş adli psikoloji vakaları üzerinden pratik deneyim kazanın. 
            İnteraktif vaka analizleri ve çözüm yöntemleri.
          </p>
        </div>

        <Tabs defaultValue="interactive" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="interactive">İnteraktif Vakalar</TabsTrigger>
            <TabsTrigger value="historical">Tarihi Vakalar</TabsTrigger>
            <TabsTrigger value="studies">Vaka Çalışmaları</TabsTrigger>
          </TabsList>

          <TabsContent value="interactive" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {cases.map((case_item) => (
                <Card key={case_item.id} className="hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img 
                      src={case_item.image} 
                      alt={case_item.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Badge className={`absolute top-2 right-2 ${case_item.solved ? 'bg-green-600' : 'bg-orange-600'}`}>
                      {case_item.solved ? 'Çözüldü' : 'Aktif'}
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{case_item.title}</CardTitle>
                    <p className="text-sm text-slate-600">{case_item.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Badge variant="outline">{case_item.category}</Badge>
                        <Badge variant={case_item.difficulty === 'İleri' ? 'destructive' : case_item.difficulty === 'Orta' ? 'default' : 'secondary'}>
                          {case_item.difficulty}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-slate-500">
                        <Clock className="h-4 w-4" />
                        <span>{case_item.duration}</span>
                      </div>
                      <Button className="w-full">
                        <Eye className="h-4 w-4 mr-2" />
                        Vakayı İncele
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="historical" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {realCases.map((case_item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Users className="h-5 w-5 text-red-600" />
                      <span>{case_item.title}</span>
                    </CardTitle>
                    <div className="flex items-center space-x-4 text-sm text-slate-500">
                      <span>{case_item.year}</span>
                      <Badge variant="outline">{case_item.type}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">{case_item.description}</p>
                    <div>
                      <h4 className="font-semibold mb-2">Öğrenilen Konular:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-slate-600">
                        {case_item.lessons.map((lesson, idx) => (
                          <li key={idx}>{lesson}</li>
                        ))}
                      </ul>
                    </div>
                    <Button className="w-full mt-4" variant="outline">
                      Detaylı Analiz
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="studies" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="h-5 w-5 text-blue-600" />
                    <span>Vaka Raporu Yazma Rehberi</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Adli psikoloji raporlarının nasıl yazılacağına dair kapsamlı rehber
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600 mb-4">
                    <li>• Rapor formatı ve yapısı</li>
                    <li>• Objektif gözlem teknikleri</li>
                    <li>• Sonuç ve önerilerin sunumu</li>
                  </ul>
                  <Button variant="outline" className="w-full">İncele</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <AlertTriangle className="h-5 w-5 text-orange-600" />
                    <span>Etik Kurallar ve Sınırlar</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Adli psikolojide etik dilemmalar ve çözüm yaklaşımları
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600 mb-4">
                    <li>• Gizlilik vs. kamu güvenliği</li>
                    <li>• Çifte rol problemleri</li>
                    <li>• Objektiflik ve tarafsızlık</li>
                  </ul>
                  <Button variant="outline" className="w-full">İncele</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default VakaOrnekleri;
