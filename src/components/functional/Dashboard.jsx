import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

const Dashboard = () => {
  const [cookies] = useCookies(['token', 'userid']);
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ['Infant & Toddler Class', 'Preschool 1 Class'];

  useEffect(() => {
    if (!cookies.token) {
      window.location.href = '/login';
    }
  });

  // Password
  // const [pwd, setPwd] = useState('');
  // const [isVisible, setIsVisible] = useState(false);
  // const handlePassword = () => {
  //   if (pwd == '123') {
  //     setIsVisible(true);
  //   } else {
  //     setIsVisible(false);
  //   }
  // };

  return (
    <>
      {cookies.token && (
        <div className="px-10 xl:w-9/12 mx-auto xl:px-0 lg:w-full">
          <div class="mb-10 mt-20">
            <h3 class="text-center font-bold text-3xl text-primary-500 mb-3 pt-10">Heguru Member</h3>
            <p class="text-center text-gray-400 text-sm">Welcome from member dashboard!</p>
          </div>

          <div className="w-full">
            <div className="flex">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  className={`flex-1 py-2 text-lg text-center bg-gray-200 border-2 border-b-0 rounded-t-lg ${index > 0 ? 'ml-2' : ''} ${
                    activeTab === index
                      ? 'bg-white border-blue-500 text-blue-500 font-bold  z-10 -mb-[2px]'
                      : 'text-gray-400 hover:text-blue-500'
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="p-4 border-2 border-blue-500 rounded-b-md">
              {activeTab === 0 && (
                <div className="">
                  {/* <div className="mb-5">Infant & Toddler Class</div> */}
                  <div className="mb-5 font-bold text-lg text-primary-500">VOD Term 1 (01-13)</div>
                  <div className="mb-10  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 gap-y-10 place-items-center">
                    <div className="w-full">
                      <iframe
                        className="w-full rounded"
                        height="315"
                        src="https://www.youtube-nocookie.com/embed/21hmP6q10wQ"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                      <h1 className="text-center font-semibold mt-1">Official Introduction</h1>
                    </div>
                    <div className="w-full">
                      <iframe
                        className="w-full rounded"
                        height="315"
                        src="https://www.youtube-nocookie.com/embed/uAVztJem0pc"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                      <h1 className="text-center font-semibold mt-1">VOD 1</h1>
                    </div>
                    <div className="w-full">
                      <iframe
                        className="w-full rounded"
                        height="315"
                        src="https://www.youtube-nocookie.com/embed/mQtOYzi-eEU"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                      <h1 className="text-center font-semibold mt-1">VOD 2</h1>
                    </div>
                    <div className="w-full">
                      <iframe
                        className="w-full rounded"
                        height="315"
                        src="https://www.youtube-nocookie.com/embed/21hmP6q10wQ"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                      <h1 className="text-center font-semibold mt-1">VOD 3</h1>
                    </div>
                    <div className="w-full">
                      <iframe
                        className="w-full rounded"
                        height="315"
                        src="https://www.youtube-nocookie.com/embed/uAVztJem0pc"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                      <h1 className="text-center font-semibold mt-1">VOD 4</h1>
                    </div>
                    <div className="w-full">
                      <iframe
                        className="w-full rounded"
                        height="315"
                        src="https://www.youtube-nocookie.com/embed/mQtOYzi-eEU"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                      <h1 className="text-center font-semibold mt-1">VOD 5</h1>
                    </div>
                  </div>
                  <div className="mb-5 font-bold text-lg text-primary-500">VOD Term 2 (14-22)</div>
                  <div className="mb-10  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 gap-y-10 place-items-center">
                    <div className="w-full">
                      <iframe
                        className="w-full rounded"
                        height="315"
                        src="https://www.youtube-nocookie.com/embed/21hmP6q10wQ"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                      <h1 className="text-center font-semibold mt-1">VOD 14</h1>
                    </div>
                    <div className="w-full">
                      <iframe
                        className="w-full rounded"
                        height="315"
                        src="https://www.youtube-nocookie.com/embed/uAVztJem0pc"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                      <h1 className="text-center font-semibold mt-1">VOD 15</h1>
                    </div>
                    <div className="w-full">
                      <iframe
                        className="w-full rounded"
                        height="315"
                        src="https://www.youtube-nocookie.com/embed/mQtOYzi-eEU"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                      <h1 className="text-center font-semibold mt-1">VOD 16</h1>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === 1 && (
                <div>
                  <div className="mb-5 font-bold text-lg text-primary-500">VOD Term 1 (01-10)</div>
                  <div className="mb-10  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 gap-y-10 place-items-center">
                    <div className="w-full">
                      <iframe
                        className="w-full rounded"
                        height="315"
                        src="https://www.youtube-nocookie.com/embed/21hmP6q10wQ"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                      <h1 className="text-center font-semibold mt-1">Official Introduction</h1>
                    </div>
                    <div className="w-full">
                      <iframe
                        className="w-full rounded"
                        height="315"
                        src="https://www.youtube-nocookie.com/embed/uAVztJem0pc"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                      <h1 className="text-center font-semibold mt-1">VOD 1</h1>
                    </div>
                    <div className="w-full">
                      <iframe
                        className="w-full rounded"
                        height="315"
                        src="https://www.youtube-nocookie.com/embed/mQtOYzi-eEU"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                      <h1 className="text-center font-semibold mt-1">VOD 2</h1>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
