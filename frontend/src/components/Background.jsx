const BackgroundShapes = () => {
  return (
    <div className="fixed w-full h-full top-0 left-0 z-0 pointer-events-none overflow-hidden">
      {/* 💫 Top Right Glow */}
      <div className="absolute top-[-10rem] right-[-10rem] w-[25rem] h-[25rem] bg-violet-800 opacity-30 rounded-full blur-[160px]" />

      {/* 💫 Bottom Left Glow */}
      <div className="absolute bottom-[-12rem] left-[-12rem] w-[30rem] h-[30rem] bg-violet-700 opacity-40 rounded-full blur-[180px]" />

      {/* 💫 Center Fade Ring */}
      <div className="absolute top-1/2 left-1/2 w-[40rem] h-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-violet-800 blur-[60px] opacity-90" />

      {/* 💫 Subtle Center Blur */}
      <div className="absolute top-1/2 left-1/2 w-[25rem] h-[25rem] -translate-x-1/2 -translate-y-1/2 bg-violet-900 opacity-20 rounded-full blur-[140px]" />
    </div>
  );
};

export default BackgroundShapes;
