import React from 'react';
import './Popup.scss';
const Popup = ({ visible, children, closePopup }) => {
  const arrStyles = [
    ' fixed left-0 right-0 top-0 bottom-0 bg-opacity-50 flex justify-center bg-black items-center invisible opacity-0 ease-out duration-500',
  ];
  if (visible) {
    arrStyles.push('popup-active');
  }
  return (
    <>
      <div onClick={() => closePopup(false)} className={arrStyles.join(' ')}>
        <div onClick={e => e.stopPropagation()} className=" bg-slate-800 p-4">{children}</div>
      </div>
    </>
  );
};

export default Popup;
