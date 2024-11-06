import { useState } from 'react';
import { useCookies } from 'react-cookie';
import ApiService from '~/services/ApiService';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [, setCookie] = useCookies(['token', 'userid']);

  const handleLogin = async (event) => {
    event.preventDefault();

    const response = await ApiService.login(formData);
    const token = response.token;
    const user = response.user;

    setCookie('token', token);
    setCookie('userid', user.id);

    window.location.href = '/authenticated';
  };

  return (
    <div className="">
      <form onSubmit={handleLogin}>
        <div className="flex max-w-96 flex-col space-y-5 rounded-lg border py-10 px-5 shadow-xl mx-auto">
          <div className="mx-auto mb-2 space-y-3">
            <h1 className=" text-3xl font-bold text-primary-600 text-center">Login</h1>
            <p className="text-gray-500">Login to access your account</p>
          </div>
          <div>
            <div className="relative mt-2 w-full">
              <input
                type="email"
                id="email"
                className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-secondary-600 focus:outline-none focus:ring-0"
                placeholder=""
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, ['email']: e.target.value })}
                required
              />
              <label
                htmlFor="email"
                className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-secondary-600"
              >
                Enter Your Email{' '}
              </label>
            </div>
          </div>
          <div>
            <div className="relative mt-2 w-full">
              <input
                type="password"
                id="password"
                className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-secondary-600 focus:outline-none focus:ring-0"
                placeholder=" "
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, ['password']: e.target.value })}
                required
              />
              <label
                htmlFor="password"
                className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-secondary-600"
              >
                Enter Your Password
              </label>
            </div>
          </div>
          {/* <label>
            <input type="checkbox" /> <span>Remember me</span>
          </label> */}
          <button className="rounded-lg bg-primary-500 hover:bg-primary-700 py-3 font-bold text-white">Login</button>
          <span>
            Don't have an account?{' '}
            <a href="/register" className="font-bold hover:underline">
              &nbsp;Register
            </a>
          </span>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
