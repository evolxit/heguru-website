// import { useRecoilValue } from 'recoil';
// import { tokenState } from '~/utils/atoms';

const Dashboard = () => {
  // const token = useRecoilValue(tokenState);

  return (
    <div className="p-10">
      <div className="xl:w-9/12 md:w-full mx-auto grid xl:grid-cols-3 md:grid-cols-3 gap-2 gap-y-10 place-items-center">
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
  );
};

export default Dashboard;
