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

  return (
    <div>
      <div className="flex flex-row">
        {tabs.map((tab, index) => {
          return (
            <div key={`tab_item_${index}`}>
              <button onClick={() => setActiveItem(index)}>{tab.tabName}</button>
            </div>
          )
        })}
      </div>
      {tabs.map((tab, index) => {
        return <div key={`tab_content_${index}`}>{activeItem === index ? tab.child : null}</div>
      })}
    </div>
  )
}

export default Tabs
