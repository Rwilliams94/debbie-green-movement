
import React, { createContext, useState, useContext, useMemo, useEffect, useRef } from 'react';

const PopupContext = createContext();

export function PopupProvider({ children }) {
  const [imageSrc, setImageSrc] = useState(null);
  const closeButtonRef = useRef(null);

  const openPopup = (src) => setImageSrc(src);
  const closePopup = () => setImageSrc(null);

  useEffect(() => {
    if (imageSrc) {
      closeButtonRef.current?.focus();
      const handleKeyDown = (e) => { if (e.key === 'Escape') closePopup(); };
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [imageSrc]);

  const contextValue = useMemo(() => ({
    imageSrc,
    openPopup,
    closePopup
  }), [imageSrc]);

  return (
    <PopupContext.Provider value={contextValue}>
      {children}
      {imageSrc && (
        <div
          style={overlayStyles}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          onClick={closePopup}
        >
          <button
            ref={closeButtonRef}
            onClick={closePopup}
            aria-label="Close image"
            style={closeButtonStyles}
          >
            ×
          </button>
          <img src={imageSrc} alt="Enlarged view" style={popupImageStyles} onClick={(e) => e.stopPropagation()} />
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

const closeButtonStyles = {
  position: 'absolute',
  top: '16px',
  right: '16px',
  background: 'none',
  border: 'none',
  color: 'white',
  fontSize: '2.5rem',
  cursor: 'pointer',
  lineHeight: 1,
};

const popupImageStyles = {
  maxHeight: '90%',
  maxWidth: '90%',
  boxShadow: '0 0 5px white',
};
