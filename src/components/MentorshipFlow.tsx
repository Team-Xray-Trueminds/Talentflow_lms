interface FlowItem {
    count: string;
    title: string;
    percent: string;
    colorClass: string;
    barClass: string;
}

const flowData: FlowItem[] = [
    { count: '124', title: 'ONBOARDING', percent: '26', colorClass: 'text-primary-container border-primary-fixed-dim', barClass: 'bg-primary-container' },
    { count: '88', title: 'ALLOCATED', percent: '18', colorClass: 'text-primary-container border-primary-fixed-dim', barClass: 'bg-primary-container' },
    { count: '212', title: 'IN-TRAINING', percent: '45', colorClass: 'text-primary border-primary', barClass: 'bg-primary' },
    { count: '45', title: 'CERTIFIED', percent: '11', colorClass: 'text-tertiary border-tertiary', barClass: 'bg-tertiary' },
];

const MentorshipFlow = () => {
    return (
        <div className="bg-surface-container-low rounded-[20px] md:rounded-xl p-6 md:p-8 flex flex-col h-full">
            <h3 className="text-lg md:text-[22px] font-extrabold text-on-surface font-manrope leading-tight mb-2">
                Current Mentorship<br />Flow
            </h3>
            <p className="text-xs md:text-sm text-on-surface-variant font-medium mb-10 leading-relaxed md:max-w-50">
                Pipeline distribution of active participants.
            </p>

            <div className="space-y-6 mt-auto">
                {flowData.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-5">
                        <div className={`w-11.5 h-11.5 shrink-0 rounded-full border-2 flex items-center justify-center font-bold text-sm bg-white shadow-sm ${item.colorClass}`}>
                            {item.count}
                        </div>
                        <div className="flex-1 pt-0.5">
                            <div className="flex justify-between items-end mb-2">
                                <span className="text-[10px] font-extrabold uppercase tracking-widest text-on-surface-variant">{item.title}</span>
                                <span className="text-[10px] font-semibold text-outline">{item.percent}%</span>
                            </div>
                            <div className="w-full bg-surface-container-highest rounded-full h-1.5 overflow-hidden">
                                <div className={`h-full rounded-full ${item.barClass}`} style={{ width: `${item.percent}%` }}></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MentorshipFlow;
