import React, { useState, useRef, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import { useSearchParams } from 'react-router-dom';

interface Message {
  sender: string;
  content: string;
  time: string;
  isMe: boolean;
}

interface Contact {
  id: string;
  name: string;
  lastMessage: string;
  time: string;
  unread: boolean;
  img: string;
  thumbnailUrl?: string;
  role: string;
}

const MessagesPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const studentNameParam = searchParams.get('student');

  const contacts: Contact[] = [
    { id: '1', name: 'Alexandru Chen', lastMessage: 'The section on asymmetrical balance...', time: '12m', unread: true, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCk5utjN07mkZOhvtLZIyLzTlvKn2L4iPZCxU2HE03HITuSyf687NvYeKy1N3BB3ni_PXK6x68sbgc75rNQ2L2yaSJm-G8klfuPjgpLJwHX36NoMakdz6P_Z2afHIAebaZV13Q7a3n9L2hbMhTqfjyw74ubS7f51FH_QDX66YnHaXq9NSQwc_7KrIjpQkDJ-Yp3aaAhNu-vnGsNf7SIO4uN_S4bTdHe0MSfe9aqNGnaSUESsnPKSC5Ebl9BWs9kMIL9tpe4Ug-K6OI', role: 'Student' },
    { id: '2', name: 'Elena Rodriguez', lastMessage: 'Can we review the grid systems?', time: '45m', unread: false, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB06ZF4rJWSKN23zp2wWsqwcW2AAK2QkSoDP8VJd3XcOmygrHupDSMRzlmq1pV7oIZmyGUWmoHieax_B0EhzWAKlA3mVAirTYUI7btKWWdLkEFw7NS5SmkEjHY-urpnaWWOzby9uwXtVCfd0xjLeIluwlQol8d9sOChqyuzLcu8hwIJZKuYVi7WMjsB_7DuwjZ7MBOWgf9H2W7DOYgCqdKZeTdDRVZqyp5Ox8q3TvJ3ndRGc5lXidkY5yfCJZDARcfbOl7kxPydQ1M', role: 'Student' },
    { id: '3', name: 'Jordan Smyth', lastMessage: 'Thank you for the feedback!', time: '2h', unread: false, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVxrI9I5n58GFjq4GFTGavFlXmZe1bnwXPHtwHXeUg1aK1lVc7QKPvWr4O3EaYIjo56Qyp-AehpphzpbwI3peCA6mH3SMiUQnPK5y_zNT1ZmR_FblJnP7oSIdV4oTn4k_dpA6R5o9EVH256JTlGMsvpDvLW7E2Kt-iJ4839-mW_cxwIDVedGKFpDZyRrVl92Y3swdRuk9oj5AeAYnCk74RmRPjXJAt7mbdlVteunFv_yurekYAEQqpvZMJ4eMQZz3sBVC1ru3TwM0', role: 'Student' },
    { id: '4', name: 'Maya Ishikawa', lastMessage: 'Final portfolio submitted.', time: '5h', unread: false, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOob43RVwc0CW12KB2DOBUtlHf-ew8BT46J0LkWSlklYMWRvTXlfGxTj8f_hGk8DCjxYTFV0FYgMSdkIchWPU2n2hN7odES9Y79DF2NjAD-N8AdXIh5Jqwuyr3gqbeQ6gQO9lHGathfnZ8t7xnUX7qARnkKnypxwL4TgPHwGE30jrZpU1GLNKHnIrF5FFm7Q1ZpHlQVl4KPpTMjINcfIXSwtWpEM4tMy34N59zfkcEZQrDOxVXaSd1q8rnaMb9573149iRc69wJQw', role: 'Student' }
  ];

  // Initialize active contact from query param if exists, otherwise default to first
  const initialContact = studentNameParam 
    ? (contacts.find(c => c.name.toLowerCase().includes(studentNameParam.toLowerCase())) || contacts[0])
    : contacts[0];

  const [activeContactId, setActiveContactId] = useState<string>(initialContact.id);
  const [chatHistory, setChatHistory] = useState<Record<string, Message[]>>({
    '1': [
      { sender: 'Alexandru Chen', content: 'Hi Instructor Julian, I just submitted my final portfolio!', time: '11:20 AM', isMe: false },
      { sender: 'You', content: 'Great job, Alex! I will take a look at it during my studio hours today.', time: '11:25 AM', isMe: true }
    ],
    '2': [
      { sender: 'Elena Rodriguez', content: 'The section on asymmetrical balance really clicked for me after our last session. Thank you!', time: '11:26 AM', isMe: false }
    ],
    '3': [
      { sender: 'Jordan Smyth', content: 'Hey, quick question about the grid system assignments.', time: '10:00 AM', isMe: false }
    ],
    '4': [
       { sender: 'Maya Ishikawa', content: 'I have finalized the urban scale analysis. Ready for review.', time: 'Yesterday', isMe: false }
    ]
  });

  const [inputText, setInputText] = useState('');
  const activeContact = contacts.find(c => c.id === activeContactId) || contacts[0];
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory, activeContactId]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const newMessage: Message = {
      sender: 'You',
      content: inputText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isMe: true
    };

    setChatHistory(prev => ({
      ...prev,
      [activeContactId]: [...(prev[activeContactId] || []), newMessage]
    }));

    setInputText('');
  };

  return (
    <div className="flex bg-[#F7F9FB] min-h-screen font-body text-[#191C1E]">
      <Sidebar />
      <main className="grow flex h-screen overflow-hidden">
        {/* Left: Contact List */}
        <div className="w-96 border-r border-[#C3C6D5]/20 bg-white flex flex-col shrink-0">
          <div className="p-8 pb-4">
            <h1 className="text-3xl font-black font-headline tracking-tighter mb-6">Messages</h1>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#74777F]">search</span>
              <input 
                type="text" 
                placeholder="Search conversations..." 
                className="w-full pl-12 pr-4 py-3 bg-[#F2F4F6] rounded-2xl text-sm font-medium border-none focus:ring-2 focus:ring-[#00327D]/10 outline-hidden"
              />
            </div>
          </div>
          
          <div className="grow overflow-y-auto p-4 space-y-2">
            {contacts.map((contact) => (
              <div 
                key={contact.id} 
                onClick={() => setActiveContactId(contact.id)}
                className={`p-4 rounded-3xl flex items-center gap-4 cursor-pointer transition-all duration-300 ${activeContactId === contact.id ? 'bg-[#D3E4FE] text-[#00327D]' : 'hover:bg-[#F2F4F6]'}`}
              >
                <div className="relative shrink-0">
                   <img src={(contact.thumbnailUrl || contact.img)} className="w-12 h-12 rounded-2xl object-cover" alt="" />
                   {contact.unread && activeContactId !== contact.id && (
                     <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#BA1A1A] rounded-full border-2 border-white"></div>
                   )}
                </div>
                <div className="grow min-w-0">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-black text-sm truncate">{contact.name}</span>
                    <span className="text-[10px] font-bold opacity-60 shrink-0">{contact.time}</span>
                  </div>
                  <p className="text-xs font-medium truncate opacity-70">
                    {chatHistory[contact.id]?.[chatHistory[contact.id].length - 1]?.content || contact.lastMessage}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Chat Window */}
        <div className="grow flex flex-col relative bg-[#F7F9FB]">
          {/* Top Bar */}
          <div className="p-6 bg-white border-b border-[#C3C6D5]/20 flex justify-between items-center relative z-10 shadow-sm">
             <div className="flex items-center gap-4">
                <img src={(activeContact.thumbnailUrl || activeContact.img)} className="w-10 h-10 rounded-xl object-cover shadow-sm transition-all" alt="" />
                <div>
                   <h2 className="font-black text-sm">{activeContact.name}</h2>
                   <p className="text-[10px] font-black uppercase tracking-[0.1em] text-[#005049]">Online • {activeContact.role}</p>
                </div>
             </div>
             <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-[#F2F4F6] rounded-xl transition-all">
                   <span className="material-symbols-outlined text-[#434653]">call</span>
                </button>
                <button className="p-2 hover:bg-[#F2F4F6] rounded-xl transition-all">
                   <span className="material-symbols-outlined text-[#434653]">videocam</span>
                </button>
                <button className="p-2 hover:bg-[#F2F4F6] rounded-xl transition-all">
                   <span className="material-symbols-outlined text-[#434653]">more_vert</span>
                </button>
             </div>
          </div>

          {/* Messages Feed */}
          <div className="grow overflow-y-auto p-8 space-y-6">
             {(chatHistory[activeContactId] || []).map((msg, i) => (
               <div key={i} className={`flex ${msg.isMe ? 'justify-end' : 'justify-start'} animate-fade-in-up`} style={{ animationDelay: `${i * 0.05}s` }}>
                  <div className={`max-w-md rounded-3xl p-5 ${msg.isMe ? 'bg-[#00327D] text-white rounded-tr-sm shadow-lg shadow-[#00327D]/20' : 'bg-white text-[#191C1E] border border-[#C3C6D5]/10 rounded-tl-sm shadow-sm'}`}>
                     <p className="text-sm font-medium leading-relaxed">{msg.content}</p>
                     <p className={`text-[10px] font-bold mt-2 opacity-50 ${msg.isMe ? 'text-right' : 'text-left'}`}>{msg.time}</p>
                  </div>
               </div>
             ))}
             <div ref={messagesEndRef} />
          </div>

          {/* Bottom Bar: Input */}
          <div className="p-8 pt-4">
             <form onSubmit={handleSendMessage} className="bg-white border border-[#C3C6D5]/20 rounded-3xl p-2 flex items-center gap-2 shadow-sm focus-within:ring-2 focus-within:ring-[#00327D]/10 transition-all">
                <button type="button" className="p-3 hover:bg-[#F2F4F6] rounded-2xl transition-all text-[#434653]">
                   <span className="material-symbols-outlined">add</span>
                </button>
                <input 
                  type="text" 
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder={`Draft your structural feedback for ${activeContact.name}...`} 
                  className="grow px-2 py-3 text-sm font-medium border-none outline-hidden"
                />
                <button 
                  type="submit"
                  disabled={!inputText.trim()}
                  className={`p-4 rounded-2xl transition-all flex items-center justify-center ${inputText.trim() ? 'bg-[#00327D] text-white hover:bg-[#00419E] shadow-lg shadow-[#00327D]/20' : 'bg-[#F2F4F6] text-[#C3C6D5]'}`}
                >
                   <span className="material-symbols-outlined">send</span>
                </button>
             </form>
             <p className="text-center text-[8px] font-black uppercase tracking-widest text-[#74777F] mt-4 tracking-normal">Encrypted Student-Instructor Communication Channel • TalentFlow Secure</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MessagesPage;
