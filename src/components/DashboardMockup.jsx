import React from 'react';
import dashboardScreenshot from '../assets/Screenshot 2026-04-03 105707.png';

const DashboardMockup = () => {
  return (
    <div className="w-full max-w-6xl mx-auto mt-24 mb-10 relative z-20 px-6">
      <div className="absolute inset-x-10 top-10 h-4/5 rounded-full bg-blue-600/15 blur-[120px] -z-10 pointer-events-none" />

      <div className="overflow-hidden rounded-[2rem] border border-blue-900/40 bg-[#0b0e14] shadow-[0_24px_70px_rgba(0,0,0,0.55)]">
        <img
          src={dashboardScreenshot}
          alt="Nurox dashboard preview"
          className="block w-full h-auto"
        />
      </div>
    </div>
  );
};

export default DashboardMockup;
