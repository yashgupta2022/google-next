export default function loading() {
  return (
    <div className="mx-2 pt-10 max-w-6xl lg:pl-52  flex space-x-4 flex-col sm:flex-row pb-42 ">
    <div className="animate-pulse">
      <div className="h-48 w-48 bg-gray-200 rounded-md mb-4"></div>
      <div className="h-2 w-48 bg-gray-200 rounded-md mb-2.5"></div>
      <div className="h-2 w-44 bg-gray-200 rounded-md mb-2.5"></div>
    </div>
    <div className="hidden sm:inline-flex sm:space-x-4">
    <div className=" animate-pulse ">
      <div className="h-48 w-48 bg-gray-200 rounded-md mb-4"></div>
      <div className="h-2 w-48 bg-gray-200 rounded-md mb-2.5"></div>
      <div className="h-2 w-44 bg-gray-200 rounded-md mb-2.5"></div>
    </div>
    <div className="animate-pulse">
      <div className="h-48 w-48 bg-gray-200 rounded-md mb-4"></div>
      <div className="h-2 w-48 bg-gray-200 rounded-md mb-2.5"></div>
      <div className="h-2 w-44 bg-gray-200 rounded-md mb-2.5"></div>
    </div>
    </div>
    
    
    </div>
  )
}
