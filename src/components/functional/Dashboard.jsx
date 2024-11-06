import { useState } from 'react';
import { useCookies } from 'react-cookie';

const Dashboard = () => {
  const [cookies] = useCookies(['token', 'userid']);
  const [pwd, setPwd] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const handlePassword = () => {
    if (pwd == '123') {
      console.log('password correct');
      setIsVisible(true);
    } else {
      console.log('incorrect');
      setIsVisible(false);
    }
  };

  return (
    <>
      {cookies.token && (
        <div className="px-10 lg:w-9/12 mx-auto lg:px-0 md:w-full">
          <div class="mb-10 mt-20">
            <h3 class="text-center font-bold text-3xl text-primary-500 mb-3 pt-10">Heguru Member</h3>
            <p class="text-center text-gray-400 text-sm">Welcome from member dashboard!</p>
          </div>
          <h3 className="mb-3 font-bold text-xl">Featured Videos</h3>
          <div className="mb-10  grid xl:grid-cols-3 md:grid-cols-3 gap-2 gap-y-10 place-items-center">
            <iframe
              className="w-full"
              height="315"
              src="https://www.youtube-nocookie.com/embed/21hmP6q10wQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <iframe
              className="w-full"
              height="315"
              src="https://www.youtube-nocookie.com/embed/uAVztJem0pc"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <iframe
              className="w-full"
              height="315"
              src="https://www.youtube-nocookie.com/embed/mQtOYzi-eEU"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

          <h3 className="mb-2 font-bold text-xl">Resources</h3>
          {isVisible == true ? (
            <div className="resourceBox">
              <div className="mb-10 grid xl:grid-cols-3 md:grid-cols-3 gap-2 gap-y-10 place-items-center">
                <iframe
                  className="w-full"
                  height="315"
                  src="https://www.youtube-nocookie.com/embed/21hmP6q10wQ"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
                <iframe
                  className="w-full"
                  height="315"
                  src="https://www.youtube-nocookie.com/embed/uAVztJem0pc"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
                <iframe
                  className="w-full"
                  height="315"
                  src="https://www.youtube-nocookie.com/embed/mQtOYzi-eEU"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
                <iframe
                  className="w-full"
                  height="315"
                  src="https://www.youtube-nocookie.com/embed/21hmP6q10wQ"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
                <iframe
                  className="w-full"
                  height="315"
                  src="https://www.youtube-nocookie.com/embed/uAVztJem0pc"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
                <iframe
                  className="w-full"
                  height="315"
                  src="https://www.youtube-nocookie.com/embed/mQtOYzi-eEU"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ) : (
            <div className="passwordBox">
              <div className="border border-gray-200 rounded p-5 mt-5">
                <h3 className="text-gray-500 text-sm mb-3">Add Password to view resource videos.</h3>
                <input
                  type="password"
                  value={pwd}
                  onChange={(e) => setPwd(e.target.value)}
                  className="border border-gray-200 p-2 rounded"
                  placeholder="Enter your password"
                />

                <div className="pt-5 px-0">
                  <span
                    onClick={handlePassword}
                    className="inline-block px-5 py-2 bg-primary-500 rounded text-white text-sm font-semibold hover:bg-primary-700 cursor-pointer"
                  >
                    View Resource
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Dashboard;
