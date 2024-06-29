import { EntryType } from "../types/EntryType"

interface EntryListProps {
    entries: Array<EntryType>
}

const EntryList = ({ entries }: EntryListProps): JSX.Element => {
    return (
        <nav className='w-full'>
            <ul>
                {entries.map((entry, index) => (
                    <li className="p-4 cursor-pointer hover:bg-gray-50" key={index}>
                        <div className="flex gap-5 text-start" style={{fontSize : '14px'}}>
                            <span className='text-md'>{entry.title.toLocaleLowerCase()}</span>
                            <small>{entry.recentCount}</small>
                        </div>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default EntryList