
import React from 'react';
import { Header } from '@/components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Shield, Brain, Search, Target, BookOpen, BarChart3 } from 'lucide-react';

const Metodoloji = () => {
  const methodologies = [
    {
      title: "Davranışsal Analiz",
      icon: <Brain className="h-6 w-6" />,
      description: "Suç mahalli davranışlarının sistematik incelenmesi",
      steps: [
        "Suç mahalli incelemesi",
        "Modus operandi analizi", 
        "Davranış kalıplarının tespiti",
        "Psikolojik profil oluşturma"
      ],
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625"
    },
    {
      title: "Coğrafi Profilleme",
      icon: <Target className="h-6 w-6" />,
      description: "Suç lokasyonlarının coğrafi analizi ve fail yaşam alanı tahmini",
      steps: [
        "Suç noktalarının haritalanması",
        "Uzaklık analizi",
        "Merkezi nokta hesaplama",
        "Olasılık haritası oluşturma"
      ],
      image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b"
    },
    {
      title: "Psikolojik Değerlendirme",
      icon: <Search className="h-6 w-6" />,
      description: "Standardize testler ve görüşmeler ile kapsamlı değerlendirme",
      steps: [
        "Yapılandırılmış görüşme",
        "Psikolojik test uygulaması",
        "Risk değerlendirmesi",
        "Rapor hazırlama"
      ],
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be"
    }
  ];

  const tools = [
    {
      name: "FBI Suçlu Profilleme Sistemi",
      category: "Davranışsal Analiz",
      description: "ViCAP ve diğer FBI araçları kullanılarak sistematik profilleme"
    },
    {
      name: "Rossmo's Formula",
      category: "Coğrafi Profilleme", 
      description: "Matematiksel modelleme ile fail yaşam alanı tahmini"
    },
    {
      name: "PCL-R (Hare Psikopati Ölçeği)",
      category: "Psikolojik Test",
      description: "Psikopati seviyesinin objektif ölçümü"
    },
    {
      name: "MMPI-2 (Minnesota Çok Fazlı Kişilik Envanteri)",
      category: "Psikolojik Test",
      description: "Kapsamlı kişilik ve psikopatoloji değerlendirmesi"
    }
  ];

  const principles = [
    {
      title: "Bilimsel Temelli Yaklaşım",
      description: "Tüm değerlendirmeler ampirik araştırmalara dayalı olmalıdır",
      icon: <BarChart3 className="h-5 w-5" />
    },
    {
      title: "Objektiflik ve Tarafsızlık",
      description: "Kişisel önyargılardan arındırılmış objektif analiz",
      icon: <Shield className="h-5 w-5" />
    },
    {
      title: "Çok Disiplinli Yaklaşım",
      description: "Psikoloji, kriminoloji ve forensik bilimlerinin entegrasyonu",
      icon: <BookOpen className="h-5 w-5" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Metodoloji</h1>
          <p className="text-lg text-slate-600 max-w-3xl">
            Adli psikolojide kullanılan bilimsel yöntemler, araçlar ve metodolojiler. 
            Kanıta dayalı yaklaşımlar ve standart protokoller.
          </p>
        </div>

        <Tabs defaultValue="methods" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="methods">Yöntemler</TabsTrigger>
            <TabsTrigger value="tools">Araçlar</TabsTrigger>
            <TabsTrigger value="principles">İlkeler</TabsTrigger>
            <TabsTrigger value="standards">Standartlar</TabsTrigger>
          </TabsList>

          <TabsContent value="methods" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {methodologies.map((method, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img 
                      src={method.image} 
                      alt={method.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      {method.icon}
                      <span>{method.title}</span>
                    </CardTitle>
                    <p className="text-sm text-slate-600">{method.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <h4 className="font-semibold">Temel Adımlar:</h4>
                      <ol className="list-decimal list-inside space-y-1 text-sm text-slate-600">
                        {method.steps.map((step, idx) => (
                          <li key={idx}>{step}</li>
                        ))}
                      </ol>
                      <Button className="w-full mt-4">Detaylı Bilgi</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tools" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tools.map((tool, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{tool.name}</CardTitle>
                    <Badge variant="outline">{tool.category}</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">{tool.description}</p>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">Örnekler</Button>
                      <Button variant="outline" size="sm">Kullanım Rehberi</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="principles" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {principles.map((principle, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      {principle.icon}
                      <span className="text-lg">{principle.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">{principle.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-800">Etik Kurallar ve Standartlar</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-blue-700">
                  <div>
                    <h4 className="font-semibold mb-2">Temel Etik İlkeler:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Zarar vermeme (Do no harm)</li>
                      <li>• Gizlilik ve mahremiyet</li>
                      <li>• Bilgilendirilmiş onam</li>
                      <li>• Adalet ve eşitlik</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Mesleki Standartlar:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• APA Etik Kuralları</li>
                      <li>• Türk Psikologlar Derneği</li>
                      <li>• Uluslararası standartlar</li>
                      <li>• Sürekli eğitim gereklilikleri</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="standards" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Rapor Yazma Standartları</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold">Rapor Bölümleri:</h4>
                      <ul className="list-disc list-inside text-sm text-slate-600 mt-2">
                        <li>Özet ve öneriler</li>
                        <li>Referans sebebi</li>
                        <li>Değerlendirme süreci</li>
                        <li>Bulgular ve sonuçlar</li>
                      </ul>
                    </div>
                    <Button variant="outline" className="w-full">Şablon İndir</Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Değerlendirme Protokolleri</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold">Standart Prosedürler:</h4>
                      <ul className="list-disc list-inside text-sm text-slate-600 mt-2">
                        <li>Görüşme protokolleri</li>
                        <li>Test uygulama rehberi</li>
                        <li>Risk değerlendirme araçları</li>
                        <li>Kalite kontrol süreçleri</li>
                      </ul>
                    </div>
                    <Button variant="outline" className="w-full">Rehber İndir</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Metodoloji;
