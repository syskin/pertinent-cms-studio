import Editor from '@monaco-editor/react'

const StyleTag: React.FC = () => {
  const handleOnClickBreakPoint = (selectedScreenSize: string) => {
    return selectedScreenSize
  }
  const baseStyleButton = `bg-gray-200 rounded-md m-2 px-2 py-1 hover:bg-gray-300 transformation duration-300`
  const screenSizes = ['xs', 'sm', 'md', 'lg', 'xl']

  return (
    <>
      {screenSizes.map((screenSize) => {
        return (
          <button
            key={`btn_${screenSize}`}
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

const formatStyle = (stylesObject: any): string => {
  let styles = `\n`

  Object.keys(stylesObject).forEach((style) => {
    styles += `${style}: ${stylesObject[style]}; \n`
  })
  return styles
}

export default StyleTag
