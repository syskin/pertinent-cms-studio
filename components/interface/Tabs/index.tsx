import { useState } from 'react'

interface Tab {
  tabName: string
  child: JSX.Element
}
interface TabsProps {
  tabs: Tab[]
  defaultActiveIndex: number
}

const Tabs: React.FC<TabsProps> = ({ tabs, defaultActiveIndex }) => {
  const [activeItem, setActiveItem] = useState(defaultActiveIndex)

  const baseButtonClass = `mx-2 rounded-md hover:bg-gray-300 hover:text-gray-500 px-2 py-1 transform duration-300`

  return (
    <div>
      <div className="flex flex-row items-center h-12">
        {tabs.map((tab, index) => {
          return (
            <button
              className={
                activeItem === index
                  ? `${baseButtonClass} text-gray-800 underline`
                  : `${baseButtonClass} text-gray-300`
              }
              key={`tab_item_${index}`}
              onClick={() => setActiveItem(index)}
            >
              {tab.tabName}
            </button>
          )
        })}
      </div>
      {tabs.map((tab, index) => {
        return (
          <div className="px-3 h-full" key={`tab_content_${index}`}>
            {activeItem === index ? tab.child : null}
          </div>
        )
      })}
    </div>
  )
}

export default Tabs
