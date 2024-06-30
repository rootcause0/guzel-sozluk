import Navbar from "../components/Navbar";
import EntryList from "../components/EntryList";
import { EntryType } from "../types/EntryType";
import { Outlet } from "react-router-dom";

import '../App.css'
export default function Root() {
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
            <Navbar></Navbar>
            <div className="flex flex-row justify-center w-full gap-10" style={{ paddingTop: '20px' }}>
                <div className="hidden md:flex overflow-y-auto overflow-x-hidden h-screen sticky" style={{ width: '245px', top: '0px' }}>
                    <EntryList entries={entries}></EntryList>
                </div>
                <Outlet />
            </div>
        </>

    );
}