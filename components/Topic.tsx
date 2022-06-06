import { CodeIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { topicParam } from "../utils/types/types";

const Topic = ({topicName}:topicParam) => {
    return (
        <Link href="/">
            <a className="my-2 flex items-center space-x-1 text-indigo-500 ">
                <CodeIcon  className="h-8 w-8 flex-shrink-0 mr-3"/>
                <span className="font-bold text-3xl font-sans tracking-tight whitespace-nowrap uppercase">{topicName}</span>
            </a>      
        </Link>
    )
}

export default Topic;