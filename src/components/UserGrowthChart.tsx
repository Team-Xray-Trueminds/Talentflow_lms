
interface BarData {
    outerHeight: string;
    innerHeight: string;
}

const barData: BarData[] = [
    { outerHeight: '40%', innerHeight: '60%' },
    { outerHeight: '55%', innerHeight: '70%' },
    { outerHeight: '45%', innerHeight: '50%' },
    { outerHeight: '70%', innerHeight: '85%' },
    { outerHeight: '60%', innerHeight: '65%' },
    { outerHeight: '85%', innerHeight: '90%' },
    { outerHeight: '65%', innerHeight: '75%' },
    { outerHeight: '40%', innerHeight: '45%' },
    { outerHeight: '95%', innerHeight: '80%' },
    { outerHeight: '75%', innerHeight: '60%' },
];

const weekLabels: string[] = ['WEEK 1', 'WEEK 2', 'WEEK 3', 'WEEK 4'];

const UserGrowthChart = () => {
    return (
        <div className="lg:col-span-2 bg-white rounded-[20px] md:rounded-xl p-6 md:p-8 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] md:shadow-sm">
            <div className="flex justify-between items-center mb-6 md:mb-8">
                <div>
                    <h4 className="text-lg md:text-xl font-bold text-blue-900 font-manrope">
                        User Growth Vector
                    </h4>
                    <p className="text-[10px] md:text-sm text-slate-500">
                        Engagement trends over the last 30 days
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <span className="bg-surface-container-highest px-2 py-1 rounded text-[10px] font-bold text-slate-600">
                        7D
                    </span>
                    <span className="bg-blue-900 px-2 py-1 rounded text-[10px] font-bold text-white">
                        30D
                    </span>
                </div>
            </div>

            {/* Chart Bars */}
            <div className="h-64 flex items-end gap-3 px-2">
                {barData.map((bar, index) => (
                    <div
                        key={index}
                        className="flex-1 bg-blue-100 rounded-t-sm relative group"
                        style={{ height: bar.outerHeight }}
                    >
                        <div
                            className="absolute bottom-0 w-full bg-primary rounded-t-sm opacity-80"
                            style={{ height: bar.innerHeight }}
                        />
                    </div>
                ))}
            </div>

            {/* Week Labels */}
            <div className="flex justify-between mt-4 px-2">
                {weekLabels.map((label) => (
                    <span
                        key={label}
                        className="text-[8px] md:text-[10px] font-bold text-slate-600 tracking-wider"
                    >
                        {label}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default UserGrowthChart;
