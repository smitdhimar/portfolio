"use client"
const Toast = ({message}) => {
  return (
    <div className="fixed bottom-4 right-4 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 animate-fade-in">
      {message}
    </div>
  );
};

export default Toast;
