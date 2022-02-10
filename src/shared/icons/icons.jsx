import { PlusIconStyle, CloseIconStyle, DiamondIconStyle } from './iconsStyles';

function PlusIcon() {
  return (
    <PlusIconStyle width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* eslint-disable-next-line max-len */}
      <path fillRule="evenodd" clipRule="evenodd" d="M6 0C6.55228 0 7 0.447715 7 1V5H11C11.5523 5 12 5.44772 12 6C12 6.55228 11.5523 7 11 7H7V11C7 11.5523 6.55228 12 6 12C5.44772 12 5 11.5523 5 11V7H1C0.447715 7 0 6.55228 0 6C0 5.44772 0.447715 5 1 5H5V1C5 0.447715 5.44772 0 6 0Z" fill="#BFBFBF" />
    </PlusIconStyle>
  );
}

function CloseIcon() {
  return (
    <CloseIconStyle width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* eslint-disable-next-line max-len */}
      <path d="M1 1L5.0002 5.0004M5.0002 5.0004L9 1M5.0002 5.0004L1 9M5.0002 5.0004L9 9" stroke="#BFBFBF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </CloseIconStyle>
  );
}

function DiamondIcon() {
  return (
    <DiamondIconStyle width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* eslint-disable-next-line max-len */}
      <path d="M10 17L1 6M10 17L19 6M10 17L7 6M10 17L13 6M1 6L4 1M1 6H7M4 1L7 6M4 1H10M16 1L19 6M16 1H10M16 1L13 6M19 6H13M7 6L10 1M7 6H13M10 1L13 6" stroke="#BFBFBF" strokeWidth="2" strokeLinejoin="round" />
    </DiamondIconStyle>
  );
}

export { PlusIcon, CloseIcon, DiamondIcon };
