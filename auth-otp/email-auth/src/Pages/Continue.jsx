import circularLogo from '../assets/logobr.png';
export const Continue = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-500 via-blue-500 to-purple-500">
      <div className="text-center p-8 bg-white bg-opacity-90 rounded-lg shadow-xl w-full max-w-2xl h-auto">
        <img
          src={circularLogo} // Path to your logo
          alt="Logo"
          className="mx-auto w-40 h-40 mb-6"
        />
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">
          You have successfully completed email authentication Project!
        </h1>
        <p className="text-gray-600 text-lg">
          Feel free to explore further or head back to the dashboard.
        </p>
      </div>
    </div>
  );
};

export default Continue;
