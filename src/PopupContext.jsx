
import React, { createContext, useState, useContext } from 'react';

const PopupContext = createContext();

export function PopupProvider({ children }) {
  const [imageSrc, setImageSrc] = useState(null);

  const openPopup = (src) => setImageSrc(src);
  const closePopup = () => setImageSrc(null);

  return (
    <PopupContext.Provider value={{ imageSrc, openPopup, closePopup }}>
      {children}
      {imageSrc && (
        <div style={overlayStyles} onClick={closePopup}>
          <img src={imageSrc} alt="Popup" style={popupImageStyles} />
        </div>
      )}
    </PopupContext.Provider>
  );
}

export function usePopup() {
  return useContext(PopupContext);
}

const overlayStyles = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
};

const popupImageStyles = {
  maxHeight: '90%',
  maxWidth: '90%',
  boxShadow: '0 0 5px white',
};
