
interface MetricCardProps {
    icon: string;
    iconFill?: boolean;
    iconBgClass: string;
    iconTextClass: string;
    borderClass: string;
    badgeText: string;
    badgeClass: string;
    value: string;
    label: string;
}

const MetricCard = ({
    icon,
    iconFill = true,
    iconBgClass,
    iconTextClass,
    borderClass,
    badgeText,
    badgeClass,
    value,
    label,
}: MetricCardProps) => {
    return (
        <div
            className={`bg-white p-5 md:p-6 rounded-[20px] md:rounded-xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] md:shadow-sm md:border-l-4 ${borderClass} md:ring-1 md:ring-slate-100/10`}
        >
            <div className="flex justify-between items-start mb-4">
                <div
                    className={`w-8 h-8 md:w-10 md:h-10 rounded-lg ${iconBgClass} flex items-center justify-center ${iconTextClass}`}
                >
                    <span
                        className="material-symbols-outlined text-[18px] md:text-[24px]"
                        style={iconFill ? { fontVariationSettings: "'FILL' 1" } : undefined}
                    >
                        {icon}
                    </span>
                </div>
                <span className={`text-[10px] font-bold ${badgeClass} px-2 py-0.5 rounded-full`}>
                    {badgeText}
                </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-gray-900 mt-1">{value}</h3>
            <p className="text-slate-500 text-[10px] md:text-sm font-semibold">{label}</p>
        </div>
    );
};

export default MetricCard;
