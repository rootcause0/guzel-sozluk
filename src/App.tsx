import { useState } from 'react'
import { EntryType } from './types/EntryType';
import Entry from './components/Entry';
import EntryList from './components/EntryList';

import './App.css'

function App() {
  const entries: Array<EntryType> = [
    {
      title: "Yakın Gelecekte Teknolojik Gelişmeler Neler Getirecek?",
      content: "Teknolojinin ilerleyen yıllarda hayatımıza nasıl etki edeceği hakkında tahminler...",
      author: "TeknolojiTutkunu97",
      recentCount : 150,
    },
    {
      title: "Sinema Dünyasında Yeni Çıkan Filmler Hakkında İlk İzlenimler",
      content: "En son çıkan filmler hakkında ilk izlenimler ve film eleştirileri...",
      author: "FilmMeraklısı2023",
      recentCount : 50
    },
    {
      title: "Günlük Hayatta Motivasyonu Yüksek Tutmanın Yolları",
      content: "Günlük rutinlerde motivasyonu nasıl koruyabiliriz? İşte pratik ipuçları...",
      author: "MotivasyonGurusu",
      recentCount : 50
    },
    {
      title: "Sinema Dünyasında Yeni Çıkan Filmler Hakkında İlk İzlenimler",
      content: "En son çıkan filmler hakkında ilk izlenimler ve film eleştirileri...",
      author: "FilmMeraklısı2023",
      recentCount : 45
    },
    {
      title: "Sinema Dünyasında Yeni Çıkan Filmler Hakkında İlk İzlenimler",
      content: "En son çıkan filmler hakkında ilk izlenimler ve film eleştirileri...",
      author: "FilmMeraklısı2023",
      recentCount : 30,
    },
    {
      title: "Sinema Dünyasında Yeni Çıkan Filmler Hakkında İlk İzlenimler",
      content: "En son çıkan filmler hakkında ilk izlenimler ve film eleştirileri...",
      author: "FilmMeraklısı2023",
      recentCount : 25,
    },
    {
      title: "Sinema Dünyasında Yeni Çıkan Filmler Hakkında İlk İzlenimler",
      content: "En son çıkan filmler hakkında ilk izlenimler ve film eleştirileri...",
      author: "FilmMeraklısı2023",
      recentCount : 15,
    },
  ];
  return (
    <>
      <div className="flex flex-row justify-center w-full gap-10">
        <div className="overflow-y-auto overflow-x-hidden h-screen sticky" style={{ width: '245px', top : '0px' }}>
          <EntryList entries={entries}></EntryList>
        </div>
        <div className="flex flex-col items-end">
          <Entry title='harika bir baslangic yaptilar dendi' content='ve evet siz de oradaydınız' author='rootcause0'></Entry>
          {entries.map((item, index) => (
            <Entry key={index}
              title={item.title.toLocaleLowerCase()}
              content={item.content.toLocaleLowerCase()}
              author={item.author.toLocaleLowerCase()} />
          ))}
        </div>

      </div>
    </>
  )
}

export default App
