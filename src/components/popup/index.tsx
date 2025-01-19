import React, { useEffect, useState } from "react";

interface PopupProps {
  message: string;
  duration?: number;
}

const Popup: React.FC<PopupProps> = ({ message, duration = 3000 }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), duration);

    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) return null;

  return (
    <div className="w-[120px] h-[50px] flex justify-center items-center fixed top-5 right-[47%] bg-[#60d046] color-white p-[10px] rounded z-50">
      {message}
    </div>
  );
};

export default Popup;
