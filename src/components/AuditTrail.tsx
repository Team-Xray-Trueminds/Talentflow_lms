
interface AuditEvent {
    icon: string;
    iconFill?: boolean;
    iconBgClass: string;
    iconTextClass: string;
    title: string;
    description: string;
    time: string;
    badge: string;
    /** Use the compact mobile-friendly layout */
    compact?: boolean;
}

const auditEvents: AuditEvent[] = [
    {
        icon: 'verified',
        iconFill: true,
        iconBgClass: 'bg-tertiary-fixed',
        iconTextClass: 'text-tertiary',
        title: 'New Mentor Verified',
        description:
            "Dr. Helena Thorne (ID: 9842) successfully passed credentials review for 'Architectural Ethics'.",
        time: '2 mins ago',
        badge: 'SUCCESS',
    },
    {
        icon: 'system_update_alt',
        iconFill: false,
        iconBgClass: 'bg-primary-fixed',
        iconTextClass: 'text-primary',
        title: 'System Patch',
        description:
            'Kernel update v2.4.1 deployed to edge nodes. 100% propagation achieved.',
        time: '14 mins ago',
        badge: 'INFRASTRUCTURE',
    },
    {
        icon: 'security',
        iconFill: false,
        iconBgClass: 'bg-secondary-fixed',
        iconTextClass: 'text-secondary',
        title: 'Permission Escalation',
        description:
            "User 'm_garcia' elevated to Course Moderator for 'Global Infrastructure Design'.",
        time: '1 hour ago',
        badge: 'AUTH',
    },
    {
        icon: 'block',
        iconFill: true,
        iconBgClass: 'bg-[#fae8e6]',
        iconTextClass: 'text-[#b5342a]',
        title: 'User Suspended',
        description: 'Flagged account #9928 for TOS violation.',
        time: '5 hours ago',
        badge: '',
        compact: true,
    },
];

const AuditTrail = () => {
    return (
        <section className="bg-white rounded-[20px] md:rounded-xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] md:shadow-sm overflow-hidden p-6 md:p-8">
            <div className="flex justify-between items-center mb-6">
                <h4 className="text-lg md:text-xl font-bold text-blue-900 font-manrope">Audit Trail</h4>
                <span className="material-symbols-outlined text-slate-300">arrow_drop_down</span>
            </div>
            <div className="divide-y divide-slate-100">
                {auditEvents.map((event, index) =>
                    event.compact ? (
                        <CompactEventRow key={index} event={event} />
                    ) : (
                        <StandardEventRow key={index} event={event} />
                    )
                )}
            </div>
            <div className="pt-2">
                <button className="w-full py-3 bg-slate-200/60 text-blue-900 text-[10px] md:text-xs font-bold rounded-xl hover:bg-slate-300 transition-colors flex items-center justify-center gap-2">
                    View Full Logs
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </button>
            </div>
        </section>
    );
};

interface EventRowProps {
    event: AuditEvent;
}

const StandardEventRow = ({ event }: EventRowProps) => {
    return (
        <div className="flex items-center gap-6 p-6 hover:bg-slate-50/50 transition-colors">
            <div
                className={`w-10 h-10 rounded-full ${event.iconBgClass} flex items-center justify-center shrink-0`}
            >
                <span
                    className={`material-symbols-outlined ${event.iconTextClass}`}
                    style={event.iconFill ? { fontVariationSettings: "'FILL' 1" } : undefined}
                >
                    {event.icon}
                </span>
            </div>
            <div className="flex-1">
                <p className="text-sm font-bold text-blue-900">{event.title}</p>
                <p className="text-sm text-slate-500">{event.description}</p>
            </div>
            <div className="text-right">
                <p className="text-xs font-bold text-slate-600">{event.time}</p>
                {event.badge && (
                    <p className="text-[10px] uppercase text-slate-400 font-medium tracking-widest">
                        {event.badge}
                    </p>
                )}
            </div>
        </div>
    );
};

const CompactEventRow = ({ event }: EventRowProps) => {
    return (
        <div className="flex gap-4 p-4 md:p-6 hover:bg-slate-50/50 transition-colors border-none">
            <div
                className={`w-8 h-8 md:w-10 md:h-10 rounded-full ${event.iconBgClass} flex items-center justify-center shrink-0 ${event.iconTextClass}`}
            >
                <span
                    className="material-symbols-outlined text-[16px] md:text-[20px]"
                    style={event.iconFill ? { fontVariationSettings: "'FILL' 1" } : undefined}
                >
                    {event.icon}
                </span>
            </div>
            <div className="flex-1">
                <p className="text-[12px] md:text-sm font-bold text-gray-900">{event.title}</p>
                <p className="text-[10px] md:text-sm text-slate-500 mt-0.5">{event.description}</p>
                <p className="text-[10px] md:text-xs text-slate-400 mt-1">{event.time}</p>
            </div>
        </div>
    );
};

export default AuditTrail;
