import Editor from '@monaco-editor/react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store'
import { updateTag, updateTagPersistless } from '../../../store/actions/tags'
import { ScreenSize, screenSizes } from '../../../types/breakpoints'
import { camelToKebabCase, kebabToCamelCase } from '../../../utils'

const StyleTag: React.FC = () => {
  const dispatch = useDispatch()
  const { activeTag } = useSelector((state: RootState) => state.tags)
  const [activeStyleConfig, setActiveStyleConfig] = useState(activeTag?.style?.xs)

  const [activeBreakpoint, setActiveBreakpoint] = useState(screenSizes[0])

  if (!activeTag) return <div>Null</div>

  const handleOnClickBreakPoint = (selectedScreenSize: ScreenSize): void => {
    setActiveBreakpoint(selectedScreenSize)
    setActiveStyleConfig(activeTag?.style?.[selectedScreenSize.size])
  }

  const handleOnChangeStyle = (value: string | undefined): void => {
    let properties
    const propertiesObject: { [key: string]: string } = {}
    if (value) {
      properties = value.match(/{([^}]*)}/)
      if (properties && properties[1]) {
        properties = properties[1]
          .replace(/\n/g, '')
          .split(';')
          .filter((element) => element.length > 0)
      }
    }

    if (properties && properties.length > 0) {
      properties.map((property) => {
        const keyValue = property.split(':')
        if (keyValue && keyValue.length > 0 && keyValue[0] && keyValue[1])
          propertiesObject[kebabToCamelCase(keyValue[0].trim())] = keyValue[1].trim()
      })
    }

    const style = {
      ...activeTag.style,
      ...{
        [activeBreakpoint.size]: propertiesObject,
      },
    }
    dispatch(updateTagPersistless(activeTag.id, { ...activeTag, style }))
  }

  const handleSave = (): void => {
    console.log(activeTag)
    dispatch(updateTag(activeTag.id, activeTag))
  }

  const baseStyleButton = `bg-gray-200 rounded-md m-2 px-2 py-1 hover:bg-gray-300 transformation duration-300`

  return (
    <>
      {screenSizes.map((screenSize: ScreenSize) => {
        return (
          <button
            key={`btn_${screenSize.size}`}
            className={`${baseStyleButton}`}
            onClick={() => handleOnClickBreakPoint(screenSize)}
          >
            {screenSize.size}
          </button>
        )
      })}

      <Editor
        height="70vh"
        defaultLanguage="css"
        value={`${activeTag?.type?.toLowerCase()} {${formatStyle(activeStyleConfig)}}`}
        onChange={handleOnChangeStyle}
        options={{
          lineNumbers: false,
          contextmenu: false,
          minimap: {
            enabled: false,
          },
        }}
      />
      <button className="btn btn-success" onClick={handleSave}>
        Save
      </button>
    </>
  )
}

const formatStyle = (stylesObject: { [key: string]: string } | undefined): string => {
  let styles = `\n`

  if (stylesObject)
    Object.keys(stylesObject).forEach((style) => {
      styles += `${camelToKebabCase(style)}: ${stylesObject[style]}; \n`
    })
  else styles += `\n`

  return styles
}

export default StyleTag
