const ErrorScreen = () => {
  return (
    <div className="text-2xl text-center p-20 w-auto">
      <div className="flex flex-col gap-5 items-center justify-center bg-white-300 p-20 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-60 border border-gray-100">
        <span className="flex gap-2 items-center text-primary">
          Weather information not available or something went wrong.
        </span>
        <span className="flex gap-2 items-center text-primary">
          Please enter your location
        </span>
      </div>
    </div>
  );
};

export default ErrorScreen;
