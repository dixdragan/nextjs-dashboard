export default function DXLogo() {
  return (
    <div className={`flex flex-row items-center leading-none text-white`}>
      {/* 
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <div className="w-[44px] ">
      */}
      <div className="w-[44px] pt-[3px] px-[3px]">
        <Logo />
      </div>

      <p className="text-[44px]">Dash</p>
    </div>
  );
}

const Logo = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <g fill="none" stroke="#fff" strokeWidth="64" strokeLinecap="square">
        <line x1="64" y1="64" x2="448" y2="448" />
        <line x1="64" y1="448" x2="448" y2="64" />
      </g>

      <polygon fill="#fff" points="84,256 18,192 18,320" />
    </svg>
  );
};

const LogoWithGlow = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g
        fill="none"
        stroke="#fff"
        stroke-width="64"
        stroke-linecap="square"
        filter="url(#glow)"
      >
        <line x1="64" y1="64" x2="448" y2="448" />
        <line x1="64" y1="448" x2="448" y2="64" />
      </g>

      <polygon fill="#fff" points="84,256 18,192 18,320" filter="url(#glow)" />
    </svg>
  );
};
