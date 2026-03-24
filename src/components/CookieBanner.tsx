'use client';

import { useState } from 'react';

const CookieIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M28.7657 0C29.7326 0 30.5179 0.782998 30.5179 1.74714C30.5179 2.71128 29.7326 3.49427 28.7657 3.49427C27.7988 3.49427 27.0136 2.71128 27.0136 1.74714C27.0165 0.782998 27.7988 0 28.7657 0ZM29.2345 15.2159C30.7464 17.4655 32.6597 18.155 35.1443 16.6329C35.2263 17.4801 35.2468 18.3449 35.2029 19.2214C34.7136 28.9096 26.4423 36.3685 16.7265 35.8806C7.01362 35.3898 -0.466605 27.142 0.0227002 17.4568C0.509076 7.76863 9.06753 0.227887 18.7804 0.7158C17.919 3.4037 18.6485 5.79068 20.8402 6.60289C18.8536 12.9662 23.2896 17.1295 29.2345 15.2159ZM8.79797 13.9625C10.2542 13.9625 11.432 15.1399 11.432 16.589C11.432 18.0382 10.2512 19.2156 8.79797 19.2156C7.34177 19.2156 6.16392 18.0382 6.16392 16.589C6.16392 15.1399 7.3447 13.9625 8.79797 13.9625ZM17.0957 17.3107C17.9336 17.3107 18.6134 17.9885 18.6134 18.8241C18.6134 19.6597 17.9336 20.3375 17.0957 20.3375C16.2577 20.3375 15.5779 19.6597 15.5779 18.8241C15.575 17.9885 16.2547 17.3107 17.0957 17.3107ZM10.5091 23.5455C11.5316 23.5455 12.3608 24.3723 12.3608 25.3919C12.3608 26.4116 11.5316 27.2384 10.5091 27.2384C9.48651 27.2384 8.65733 26.4116 8.65733 25.3919C8.65733 24.3694 9.48651 23.5455 10.5091 23.5455ZM14.4997 9.41643C15.3025 9.41643 15.95 10.065 15.95 10.8626C15.95 11.6632 15.2996 12.3088 14.4997 12.3088C13.6969 12.3088 13.0494 11.6602 13.0494 10.8626C13.0494 10.065 13.6998 9.41643 14.4997 9.41643ZM22.3813 24.1911C23.7262 24.1911 24.8132 25.278 24.8132 26.6161C24.8132 27.9571 23.7233 29.041 22.3813 29.041C21.0365 29.041 19.9494 27.9542 19.9494 26.6161C19.9494 25.278 21.0394 24.1911 22.3813 24.1911ZM27.5029 6.74898C28.4053 6.74898 29.1378 7.47938 29.1378 8.37925C29.1378 9.27911 28.4053 10.0095 27.5029 10.0095C26.6005 10.0095 25.868 9.27911 25.868 8.37925C25.868 7.47938 26.6005 6.74898 27.5029 6.74898Z" fill="white"/>
  </svg>
);

export const CookieBanner = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const handleAccept = () => setVisible(false);
  const handleDecline = () => setVisible(false);

  return (
    <div className="fixed bottom-8 left-0 right-0 z-50 xl:bottom-6">
      <div className="max-w-screen-xl mx-auto px-5 xl:px-[275px]">
      {/* Mobile */}
      <div className="xl:hidden bg-cookie-bg text-white rounded-2xl p-5 flex flex-col gap-4">
        <p className="text-sm leading-5">
          Мы используем cookie-файлы для улучшения вашей работы с сайтом.
        </p>
        <div className="flex gap-3">
          <button
            onClick={handleDecline}
            className="flex-1 bg-[#EEF5E6] text-cookie-bg font-semibold rounded-2xl py-3 px-5 text-sm cursor-pointer"
          >
            Отказаться
          </button>
          <button
            onClick={handleAccept}
            className="flex-1 bg-primary text-white font-semibold rounded-2xl py-3 px-5 text-sm cursor-pointer"
          >
            Принять
          </button>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden xl:flex bg-cookie-bg text-white rounded-2xl px-6 py-4 items-center gap-6">
        <div className="shrink-0">
          <CookieIcon />
        </div>
        <p className="flex-1 text-sm leading-5">
          Мы используем cookie-файлы для улучшения вашей работы с сайтом.
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={handleDecline}
            className="w-[153px] bg-[#EEF5E6] text-cookie-bg font-semibold rounded-2xl px-5 py-3 text-sm cursor-pointer"
          >
            Отказаться
          </button>
          <button
            onClick={handleAccept}
            className="w-[153px] bg-primary text-white font-semibold rounded-2xl px-5 py-3 text-sm cursor-pointer"
          >
            Принять
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};
