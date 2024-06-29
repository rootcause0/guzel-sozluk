import { IconArrowUp } from '@tabler/icons-react';
import { IconArrowDown } from '@tabler/icons-react';
import { EntryType } from '../types/EntryType';

const Entry = ({ title, content, author }: EntryType): JSX.Element => {
    return (
        <>
            <div className="flex mb-20 mt-20 w-full">
                <div className="flex flex-col gap-2 text-start w-full px-3">
                    <h1 className="text-xl font-bold text-wrap">{title}</h1>
                    <p>{content}</p>
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
                                <div className="text-green-500 font-bold hover:cursor-pointer">{author}</div>
                                <div className="text-gray-500 text-sm">00.00.0000 00:00</div>
                            </div>
                            <div className="w-10 h-28 rounded-full flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="3  4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-user-circle">
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
        </>
    )
}

export default Entry;