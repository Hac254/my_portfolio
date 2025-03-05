import { Sidebar } from "@/components/sidebar"
import { MainContent } from "@/components/main-content"
import { PersonStructuredData } from "@/components/structured-data"


export default function Home() {
  return (
    <>
      <PersonStructuredData />
      <div className="flex flex-col lg:flex-row gap-6">
        <Sidebar />
        <MainContent />
      </div>
    </>
  )
}


