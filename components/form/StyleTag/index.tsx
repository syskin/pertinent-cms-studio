import Editor from '@monaco-editor/react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'

const StyleTag: React.FC = () => {
  const { activeTag } = useSelector((state: RootState) => state.tags)
  const [activeStyleConfig] = useState(activeTag?.style?.xs)

  interface ScreenSize {
    size: 'xs' | 'sm'
  }

  const handleOnClickBreakPoint = (selectedScreenSize: ScreenSize) => {
    console.log(activeStyleConfig)
    console.log(activeTag?.style?.[selectedScreenSize.size])
    // setActiveStyleConfig()
  }

  const baseStyleButton = `bg-gray-200 rounded-md m-2 px-2 py-1 hover:bg-gray-300 transformation duration-300`
  const screenSizes: ScreenSize[] = [{ size: 'xs' }, { size: 'sm' }]

  return (
    <>
      {screenSizes.map((screenSize: ScreenSize) => {
        return (
          <button
            key={`btn_${screenSize.size}`}
            className={baseStyleButton}
            onClick={() => handleOnClickBreakPoint(screenSize)}
          >
            {screenSize}
          </button>
        )
      })}

      <Editor
        height="70vh"
        defaultLanguage="css"
        value={`div {${formatStyle({ 'text-align': 'center', color: '#eeeeee' })}}`}
        options={{
          lineNumbers: false,
          contextmenu: false,
          minimap: {
            enabled: false,
          },
        }}
      />
      <button className="btn btn-success">Save</button>
    </>
  )
}

const formatStyle = (stylesObject: { [key: string]: string }): string => {
  let styles = `\n`

  Object.keys(stylesObject).forEach((style) => {
    styles += `${style}: ${stylesObject[style]}; \n`
  })
  return styles
}

export default StyleTag
