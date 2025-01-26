import { Sidebar } from "@/components/sidebar"
import { MainContent } from "@/components/main-content"

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <Sidebar />
      <MainContent />
    </div>
  )
}

