import { EntryType } from "../types/EntryType"
import { Link } from "react-router-dom"

interface EntryListProps {
    entries: Array<EntryType>
}

const EntryList = ({ entries }: EntryListProps): JSX.Element => {
    return (
        <nav className='w-full'>
            <ul>
                {entries.map((entry, index) => (
                    <Link className="hover:decoration-none text-gray-200 hover:text-gray-200" to={"topic/" + entry.id}>
                        <li className="p-4 cursor-pointer hover:bg-gray-50 hover:dark:bg-gray-900 text-black dark:text-white" key={index}>
                            <div className="flex gap-5 text-start" style={{ fontSize: '14px' }}>
                                <span className='text-md'>{entry.title.toLocaleLowerCase()}</span>
                                <small>{entry.recentCount}</small>
                            </div>
                        </li>
                    </Link>
                ))}
            </ul>
        </nav>
    )
}

export default EntryList