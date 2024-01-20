import Link from "next/link";
import Parser from "html-react-parser";
import Image from "next/image";
import PaginationButtons from "./PaginationButtons";
export default async function ImageSearchResults({result}) {
        await new Promise(r => setTimeout(r, 2000));
        // console.log(result)
      return (
        <div className="sm:pb-24 pb-40 mt-4 ">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-4">
                {result.items.map((resultitem)=>(
                   <div key={resultitem.link} className="mb-2">
                    <div className="group">
                        <Link  href={resultitem.image.contextLink}>
                            <img src={resultitem.link} alt={resultitem.title} className="h-60 group-hover:shadow-xl w-full object-contain transition-shadow duration-200"/>
                        </Link>
                        <Link  href={resultitem.image.contextLink}>
                        <h2 className="group-hover:underline text-xl truncate">{resultitem.title}</h2> 
                        </Link>
                            
                        <Link  href={resultitem.image.contextLink}>
                            <p className="group-hover:underline text-gray-600 ">{resultitem.displayLink}</p>
                        </Link>

                    </div>
                   </div> 
                ))}
            </div>
            <div className="ml-16">
                <PaginationButtons />
            </div>
        </div>
      )
}
    
