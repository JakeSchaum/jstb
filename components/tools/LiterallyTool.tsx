'use client'

import { LiteralConversionOptions } from '@/lib/tools/literally/LiteralConversionOptions'
import { convertToLiterals } from '@/lib/tools/literally/convert-to-literals'

import { useState } from 'react'
interface LiterallyToolProps {
  preferences: LiteralConversionOptions
}

export default function LiterallyTool({ preferences }: LiterallyToolProps) {
  //Todo - auto detect conversion type?
  const [stringInput, setStringInput] = useState<string>('Row1\nRow2\nRow3\nRow4\nRow5')
  const [firstClick, setFirstClick] = useState<boolean>(false)

  return (
    <div>
      <textarea className="resize-x-y"
        value={stringInput}
        onChange={(e) => setStringInput(e.target.value)
        }
        onFocus={() => {
            if (!firstClick) {
            setStringInput("")
            setFirstClick(true)
            }
            
        }
    }
      />
      <div></div>
      {JSON.stringify(preferences)}
      <p>Your string input: {stringInput} </p>
      <p>Your string output: </p>
      <pre>{convertToLiterals(stringInput, preferences)}</pre>
    </div>
  )
}
