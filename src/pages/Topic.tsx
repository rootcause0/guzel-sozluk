import { IconArrowUp } from '@tabler/icons-react';
import { IconArrowDown } from '@tabler/icons-react';
import { TopicEntryType } from '../types/TopicEntryType';

import { useParams } from 'react-router-dom';


const entries: Array<TopicEntryType> = [
    {
        id: 1,
        content: "Teknolojinin ilerleyen yıllarda hayatımıza nasıl etki edeceği hakkında tahminler...",
        author: "TeknolojiTutkunu97",
    },
    {
        id: 2,
        content: "En son çıkan filmler hakkında ilk izlenimler ve film eleştirileri...",
        author: "FilmMeraklısı2023",
    },
    {
        id: 3,
        content: "Günlük rutinlerde motivasyonu nasıl koruyabiliriz? İşte pratik ipuçları...",
        author: "MotivasyonGurusu",
    }
];

const Topic = (): JSX.Element => {
    const { topicId } = useParams()
    console.log(topicId)

    return (
        <>
            <div className="flex flex-col gap-2 m-2.5">
                <a className='no-underline text-gray-200 hover:cursor-pointer text-start hover:text-gray-200 hover:underline'>
                    <span className="text-xl font-bold text-start dark:text-gray-300 text-black decoration-black px-3" style={{ fontFamily: 'system-ui' }}>kaç gündür alkol tüketmiyorsun</span>
                </a>
                <div className="flex justify-end items-center mb-10">
                    <div className="dark:bg-gray-800 border rounded border-gray-500 ">
                        <select className="min-w-12 w-8 h-8 p-0.5 hover:cursor-pointer mr-1 focus:outline-none">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <span className="m-1">
                        /
                    </span>
                    <button className="m-1 rounded w-8 inline-block border-gray-500 hover:cursor-pointer text-center p-1">
                        12
                    </button>
                    <button className="m-1 rounded w-6 inline-block border-gray-500 hover:cursor-pointer text-center p-1">
                        &#xbb;
                    </button>
                </div>
                {entries.map((entry: TopicEntryType, index) => (
                    <div key={index} className="w-full">
                        <div className="flex flex-col gap-2 text-start w-full px-3">
                            <p>{entry.content.toLocaleLowerCase()}</p>
                            <div className="author-container flex flex-row justify-between">
                                <div className="flex flex-row gap-2">
                                    <span className="border-gray-200">
                                        <IconArrowUp></IconArrowUp>
                                    </span>
                                    <span className="border-gray-200">
                                        <IconArrowDown></IconArrowDown>
                                    </span>
                                </div>
                                <div className="flex items-center">
                                    <div className="ml-4">
                                        <div className="text-green-500 font-bold hover:cursor-pointer">{entry.author.toLocaleLowerCase()}</div>
                                        <div className="text-gray-500 text-sm">00.00.0000 00:00</div>
                                    </div>
                                    <div className="w-10 h-28 rounded-full flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="3  4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-user-circle">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                                            <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                            <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
                }
            </div>

        </>
    )
}

export default Topic;