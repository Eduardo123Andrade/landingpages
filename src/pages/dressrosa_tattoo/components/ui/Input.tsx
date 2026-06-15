import { CSSProperties } from 'react'

interface InputProps {
  label?: string
  type?: string
  placeholder?: string
  required?: boolean
  theme: any
  style?: CSSProperties
}

export default function Input({ label, type = 'text', placeholder, required, theme, style }: InputProps) {
  return (
    <div>
      {label && (
        <label style={{ display: 'block', fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', color: theme.accent, marginBottom: '10px' }}>
          {label}
          {required && ' *'}
        </label>
      )}
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        style={{
          width: '100%',
          background: 'transparent',
          border: 'none',
          borderBottom: `1px solid rgba(201,169,110,0.15)`,
          padding: '12px 0',
          color: theme.text,
          fontSize: '17px',
          outline: 'none',
          transition: 'border-color 0.3s',
          ...style,
        }}
        onFocus={(e) => (e.currentTarget.style.borderBottomColor = theme.accent)}
        onBlur={(e) => (e.currentTarget.style.borderBottomColor = 'rgba(201,169,110,0.15)')}
      />
    </div>
  )
}
