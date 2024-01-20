import SearchHeader from '@/components/SearchHeader'
import SearchHeaderOptions from '@/components/SearchHeaderOptions'
import './../globals.css'

export default function SearchLayout({ children }) {
  return (
    <div>
      <SearchHeader />
      <SearchHeaderOptions/>
        {children}
    </div>
        
  )
}
