import React from 'react';

const Countup = () => {
  return (
    <div className="flex font-display tracking-[-0.04em] pb-4 md:pb-6 text-[min(max(15vw,100px),216px)] leading-[0.9]">
      <span>$</span>
      <span>
        <div
          style={{ gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' }}
          className="grid justify-items-center overflow-hidden pr-[0.05em] font-sans-ss01 tracking-tighter"
        >
          <div className="relative">
            <span className="invisible">1</span>
            <span className="absolute left-0 top-0 flex flex-col transition-transform delay-300 duration-[2000ms] ease-[cubic-bezier(.42,.08,.04,1)] -translate-y-full">
              <span>0</span>
              <span className="absolute bottom-0 translate-y-full">1</span>
            </span>
          </div>
          <div className="relative">
            <span className="invisible">2</span>
            <span className="absolute left-0 top-0 flex flex-col transition-transform delay-300 duration-[2000ms] ease-[cubic-bezier(.42,.08,.04,1)] -translate-y-full">
              <span>0</span>
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
              <span>6</span>
              <span>7</span>
              <span>8</span>
              <span>9</span>
              <span>0</span>
              <span className="absolute bottom-0 translate-y-full">2</span>
            </span>
          </div>
          <div className="relative"></div>
        </div>
      </span>
    </div>
  );
};

export default Countup;
