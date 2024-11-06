import { useState } from 'react';
import { useCookies } from 'react-cookie';
import ApiService from '~/services/ApiService';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    class: '',
    birthYear: '',
    childName: '',
    phone: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [, setCookie] = useCookies(['token', 'userid']);

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage('Passwords do not match!');
    } else {
      const response = await ApiService.register(formData);
      const token = response.token;
      const user = response.user;

      setCookie('token', token);
      setCookie('userid', user.id);
      setErrorMessage('');

      window.location.href = '/authenticated';
    }
  };

  return (
    <div className="w-full dark:bg-gray-950 xl:w-9/12 xl:mx-auto">
      <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 pb-6">
        <h1 className="text-2xl font-bold mb-4 dark:text-gray-200">
          Course that you are taking (Please do not choose wrongly)
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="sm:flex">
            <div className="flex items-center mr-10">
              <input
                type="radio"
                id="infant"
                name="class"
                value="infant"
                onChange={handleChange}
                checked={formData.class == 'infant'}
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 focus:outline-none"
              />
              <label htmlFor="infant" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                Infant & Toddler Class
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="preschool"
                name="class"
                value="preschool"
                onChange={handleChange}
                checked={formData.class == 'preschool'}
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 focus:outline-none"
              />
              <label htmlFor="preschool" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                Preschool Classes
              </label>
            </div>
          </div>
          <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
              <div className="my-4">
                <label htmlFor="birthYear" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your child year of birth
                </label>
                <input
                  type="number"
                  id="birthYear"
                  name="birthYear"
                  value={formData.birthYear}
                  onChange={handleChange}
                  className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Year of birth"
                  required
                />
              </div>
              <div className="my-4">
                <label htmlFor="childName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your child full name
                </label>
                <input
                  type="text"
                  id="childName"
                  name="childName"
                  value={formData.childName}
                  onChange={handleChange}
                  className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Child full name"
                  required
                />
              </div>
            </div>
            <div className="">
              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
                <div className="my-4">
                  <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Enter username"
                    required
                  />
                </div>
                <div className="my-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
                <div className="my-4">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Enter your password"
                    required
                  />
                  {errorMessage && <p className="text-sm italic text-red-600">{errorMessage}</p>}
                </div>
                <div className="my-4">
                  <label
                    htmlFor="confirmpassword"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmpassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Confirm your password"
                    required
                  />
                  {errorMessage && <p className="text-sm italic text-red-600">{errorMessage}</p>}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
                <div className="my-4">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Telephone
                  </label>
                  <input
                    type="text"
                    id="phone"
                    className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Phone number"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between my-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="agree"
                checked={isChecked}
                onChange={handleCheckboxChange}
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 focus:outline-none"
              />
              <label htmlFor="agree" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                I agree the{' '}
                <a href="/terms" className="text-blue-600 underline hover:text-blue-800">
                  Terms of Use
                </a>
              </label>
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <button
              type="submit"
              disabled={!isChecked}
              className={`${!isChecked ? 'cursor-not-allowed bg-gray-300' : 'bg-primary-600 hover:bg-primary-700 focus:ring-primary-500'} py-2 px-4 border border-transparent rounded shadow-sm text-sm font-medium text-white   focus:outline-none focus:ring-2 focus:ring-offset-2 `}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
