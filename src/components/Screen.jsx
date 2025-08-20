export default function Screen({ children, padding=true }) {
  return (
    <div className={padding ? "p-6 sm:p-8 bg-gray-50 min-h-[640px]" : "bg-gray-50 min-h-[640px]"}>
      {children}
    </div>
  )
}
