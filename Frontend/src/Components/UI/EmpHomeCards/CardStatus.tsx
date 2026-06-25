

export default function CardStatus({icon,title,info}) {
  return (
    <>

      <div className="w-[220px] h-[160px] bg-white border border-gray-200 rounded-2xl p-5 flex flex-col justify-between shadow-sm">
        {/* Icon */}
        <div className="text-[#1e56a0]">
          <i className={`${icon}`}></i>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-1">
          <span className="text-[#4a5568] text-sm font-semibold tracking-wide">{title}</span>
          <span className="text-[#1a202c] text-3xl font-extrabold tracking-tight">{info}</span>
          <span className="text-[#a0aec0] text-xs font-medium">Days remaining</span>
        </div>
      </div>
    </>
  )
}
