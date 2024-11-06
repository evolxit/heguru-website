import { useCookies } from 'react-cookie';

const Logout = () => {
  const [, , removeCookie] = useCookies(['token', 'userid']);
  const handleLogout = () => {
    removeCookie('token');
    removeCookie('userid');
    window.location.href = '/login';
  };

  return (
    <div>
      <span
        onClick={handleLogout}
        className="cursor-pointer px-2 py-1 font-bold text-gray-500 hover:bg-primary-500 hover:text-white border-gray-300 border rounded inline-block"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-logout inline mr-1"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
          <path d="M9 12h12l-3 -3" />
          <path d="M18 15l3 -3" />
        </svg>
        Logout
      </span>
    </div>
  );
};

export default Logout;
