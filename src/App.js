import { useState } from "react";

export default function App() {
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');

    // show form in the messages box

    return (
        <div className="!fixed !bottom-5 !right-5 !z-[9999]">
            {isOpen ?
                <div className="shadow-lg !bg-white rounded-lg overflow-hidden">
                    <div className="flex flex-row justify-between p-4 bg-blue-500 hover:bg-blue-600 text-white font-bold select-none cursor-pointer"
                    onClick={() => setIsOpen(false)}>
                        <h2>Webchat</h2>
                        <button type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-col gap-2 !w-[350px] !h-[400px] p-4 overflow-y-hidden">
                        <div className="mb-2">
                            <div className="bg-gray-200 p-2 rounded-lg">
                                <p>Hello! How can I help you today?</p>
                            </div>
                        </div>
                        <div className="mb-2 text-right">
                            <div className="bg-blue-500 text-white p-2 rounded-lg inline-block">
                                <p>I need some assistance with my order.</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 border-t border-gray-200 flex">
                        <input type="text" className="flex-1 p-2 border border-gray-300 rounded-lg" placeholder="Type a message..."
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <button type="button" className="ml-2 bg-blue-500 text-white p-2 rounded-lg font-bold">
                            Send
                        </button>
                    </div>
                </div>
            :
                <button type="button" className="bg-blue-500 text-white rounded-full p-4 shadow-lg font-bold flex flex-row gap-2 hover:bg-blue-600"
                    onClick={() => setIsOpen(true)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                    </svg>
                    <span>Text Us!</span>
                </button>
            }
        </div>
    );
}