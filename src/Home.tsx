import { EntryType } from './types/EntryType';
import Entry from './components/Entry';



function Home() {
  const entries: Array<EntryType> = [
    {
      id: 1,
      title: "Yakın Gelecekte Teknolojik Gelişmeler Neler Getirecek?",
      content: "Teknolojinin ilerleyen yıllarda hayatımıza nasıl etki edeceği hakkında tahminler...",
      author: "TeknolojiTutkunu97",
      recentCount: 150,
    },
    {
      id: 2,
      title: "Sinema Dünyasında Yeni Çıkan Filmler Hakkında İlk İzlenimler",
      content: "En son çıkan filmler hakkında ilk izlenimler ve film eleştirileri...",
      author: "FilmMeraklısı2023",
      recentCount: 50
    },
    {
      id: 3,
      title: "Günlük Hayatta Motivasyonu Yüksek Tutmanın Yolları",
      content: "Günlük rutinlerde motivasyonu nasıl koruyabiliriz? İşte pratik ipuçları...",
      author: "MotivasyonGurusu",
      recentCount: 50
    },
    {
      id: 4,
      title: "Sinema Dünyasında Yeni Çıkan Filmler Hakkında İlk İzlenimler",
      content: "En son çıkan filmler hakkında ilk izlenimler ve film eleştirileri...",
      author: "FilmMeraklısı2023",
      recentCount: 45
    },
    {
      id: 5,
      title: "Sinema Dünyasında Yeni Çıkan Filmler Hakkında İlk İzlenimler",
      content: "En son çıkan filmler hakkında ilk izlenimler ve film eleştirileri...",
      author: "FilmMeraklısı2023",
      recentCount: 30,
    },
    {
      id: 6,
      title: "Sinema Dünyasında Yeni Çıkan Filmler Hakkında İlk İzlenimler",
      content: "En son çıkan filmler hakkında ilk izlenimler ve film eleştirileri...",
      author: "FilmMeraklısı2023",
      recentCount: 25,
    },
    {
      id: 7,
      title: "Sinema Dünyasında Yeni Çıkan Filmler Hakkında İlk İzlenimler",
      content: "En son çıkan filmler hakkında ilk izlenimler ve film eleştirileri...",
      author: "FilmMeraklısı2023",
      recentCount: 15,
    },
  ];
  return (
    <>
      <div className="flex flex-col items-end">
        {entries.map((entry : EntryType, index) => (
          <Entry key={index} entry={entry}
          />
        ))}
      </div>
    </>
  )
}

export default Home
