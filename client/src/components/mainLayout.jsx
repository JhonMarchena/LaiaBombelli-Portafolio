import children from 'react'

function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen w-full">
      {children}
    </div>
  )
}

export default MainLayout
