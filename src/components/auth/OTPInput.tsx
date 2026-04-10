import { useEffect, useRef, useState } from 'react'

interface OTPInputProps {
  length?: number
  onComplete: (code: string) => void
  resetTrigger?: number
}

export default function OTPInput({ length = 6, onComplete, resetTrigger = 0 }: OTPInputProps) {
  const [code, setCode] = useState<string[]>(Array(length).fill(''))
  const inputs = useRef<(HTMLInputElement | null)[]>([])

  useEffect(() => {
    setCode(Array(length).fill(''))
    inputs.current[0]?.focus()
  }, [length, resetTrigger])

  const handleChange = (value: string, index: number) => {
    if (isNaN(Number(value))) return

    const newCode = [...code]
    newCode[index] = value.substring(value.length - 1)
    setCode(newCode)

    if (value && index < length - 1) {
      inputs.current[index + 1]?.focus()
    }

    if (newCode.every((digit) => digit !== '')) {
      onComplete(newCode.join(''))
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputs.current[index - 1]?.focus()
    }
  }

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault()
    const data = e.clipboardData.getData('text').slice(0, length)
    if (!/^\d+$/.test(data)) return

    const newCode = [...code]
    data.split('').forEach((char, index) => {
      newCode[index] = char
    })
    setCode(newCode)
    
    // Focus last input or next empty
    const nextIndex = data.length < length ? data.length : length - 1
    inputs.current[nextIndex]?.focus()

    if (newCode.every((digit) => digit !== '')) {
      onComplete(newCode.join(''))
    }
  }

  return (
    <div className="flex gap-2 md:gap-4 justify-center">
      {code.map((digit, index) => (
        <input
          key={index}
          ref={(el) => {
            inputs.current[index] = el
          }}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={digit}
          onChange={(e) => handleChange(e.target.value, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={handlePaste}
          className="w-12 h-14 md:w-16 md:h-20 text-center text-2xl font-bold bg-[#E0E3E5] border-none rounded-xl focus:ring-2 focus:ring-[#2559BD] transition-all text-[#191C1E]"
        />
      ))}
    </div>
  )
}
