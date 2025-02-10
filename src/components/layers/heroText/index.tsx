const heroText = () => {
  return (
    <div className="absolute left-[10em] flex justify-center items-center w-1/4 z-40">
      <span className="text-white text-[12rem]">{"["}</span>
      <div className="flex flex-col justify-center items-center w-[220px]">
        <p className="text-white text-3xl">Hi, I&apos;m Aric</p>
        <p className="text-white text-2xl">Software Engineer</p>
      </div>
      <span className="text-white text-[12rem]">{"]"}</span>
    </div>
  );
};

export default heroText;
