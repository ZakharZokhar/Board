import {PlusIconStyle, CloseIconStyle, DiamondIconStyle} from './iconsStyles';

/*  eslint-disable */
export const PlusIcon = () => (
    <PlusIconStyle width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* eslint-disable-next-line max-len */}
        <path fillRule="evenodd" clipRule="evenodd"
              d="M6 0C6.55228 0 7 0.447715 7 1V5H11C11.5523 5 12 5.44772 12 6C12 6.55228 11.5523 7 11 7H7V11C7 11.5523 6.55228 12 6 12C5.44772 12 5 11.5523 5 11V7H1C0.447715 7 0 6.55228 0 6C0 5.44772 0.447715 5 1 5H5V1C5 0.447715 5.44772 0 6 0Z"
              fill="#BFBFBF"/>
    </PlusIconStyle>
)

export const CloseIcon = () => (
    <CloseIconStyle width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* eslint-disable-next-line max-len */}
        <path d="M1 1L5.0002 5.0004M5.0002 5.0004L9 1M5.0002 5.0004L1 9M5.0002 5.0004L9 9" stroke="#BFBFBF"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </CloseIconStyle>
)

export const DiamondIcon = () => (
    <DiamondIconStyle width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* eslint-disable-next-line max-len */}
        <path
            d="M10 17L1 6M10 17L19 6M10 17L7 6M10 17L13 6M1 6L4 1M1 6H7M4 1L7 6M4 1H10M16 1L19 6M16 1H10M16 1L13 6M19 6H13M7 6L10 1M7 6H13M10 1L13 6"
            stroke="#BFBFBF" strokeWidth="2" strokeLinejoin="round"/>
    </DiamondIconStyle>
)

export const ViewGridIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 3C1 1.89543 1.89543 1 3 1H6C7.10457 1 8 1.89543 8 3V6C8 7.10457 7.10457 8 6 8H3C1.89543 8 1 7.10457 1 6V3Z" stroke="#BFBFBF" stroke-width="2" stroke-linejoin="round"/>
        <path d="M1 14C1 12.8954 1.89543 12 3 12H6C7.10457 12 8 12.8954 8 14V17C8 18.1046 7.10457 19 6 19H3C1.89543 19 1 18.1046 1 17V14Z" stroke="#BFBFBF" stroke-width="2" stroke-linejoin="round"/>
        <path d="M12 3C12 1.89543 12.8954 1 14 1H17C18.1046 1 19 1.89543 19 3L19 6C19 7.10457 18.1046 8 17 8H14C12.8954 8 12 7.10457 12 6L12 3Z" stroke="#BFBFBF" stroke-width="2" stroke-linejoin="round"/>
        <path d="M12 14C12 12.8954 12.8955 12 14 12H17C18.1046 12 19 12.8954 19 14L19 17C19 18.1046 18.1046 19 17 19H14C12.8954 19 12 18.1046 12 17L12 14Z" stroke="#BFBFBF" stroke-width="2" stroke-linejoin="round"/>
    </svg>
)

export const GearIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
              d="M9.03086 0C8.11312 0 7.31316 0.624595 7.09057 1.51493L6.74958 2.87892C6.61243 3.4275 6.04807 3.75334 5.5044 3.59782L4.15265 3.21113C3.27031 2.95873 2.32941 3.33922 1.87054 4.13401L0.870544 5.86606C0.411676 6.66084 0.552608 7.66593 1.21237 8.30386L2.22309 9.28114C2.62961 9.6742 2.62961 10.3259 2.22309 10.7189L1.21238 11.6962C0.552622 12.3341 0.41169 13.3392 0.870557 14.134L1.87056 15.8661C2.32943 16.6608 3.27032 17.0413 4.15267 16.7889L5.50442 16.4022C6.04808 16.2467 6.61245 16.5726 6.74959 17.1211L7.09057 18.4851C7.31316 19.3754 8.11312 20 9.03086 20H11.0309C11.9486 20 12.7486 19.3754 12.9711 18.4851L13.3121 17.1212C13.4493 16.5726 14.0136 16.2468 14.5573 16.4023L15.9089 16.7889C16.7913 17.0413 17.7322 16.6608 18.1911 15.8661L19.1911 14.134C19.6499 13.3392 19.509 12.3341 18.8492 11.6962L17.8385 10.7189C17.432 10.3259 17.432 9.6742 17.8385 9.28114L18.8492 8.30386C19.509 7.66593 19.6499 6.66084 19.1911 5.86606L18.1911 4.13401C17.7322 3.33922 16.7913 2.95873 15.909 3.21114L14.5573 3.59779C14.0136 3.75331 13.4493 3.42747 13.3121 2.87889L12.9711 1.51493C12.7486 0.624594 11.9486 0 11.0309 0H9.03086ZM9.03086 2H11.0309L11.3718 3.36396C11.7833 5.00972 13.4764 5.98722 15.1074 5.52066L16.459 5.13401L17.459 6.86606L16.4483 7.84334C15.2287 9.02253 15.2287 10.9775 16.4483 12.1567L17.459 13.134L16.459 14.8661L15.1074 14.4794C13.4764 14.0128 11.7833 14.9903 11.3718 16.6361L11.0309 18H9.03086L8.68988 16.6361C8.27844 14.9903 6.58535 14.0128 4.95436 14.4794L3.60261 14.8661L2.60261 13.134L3.61332 12.1567C4.83286 10.9775 4.83286 9.02253 3.61332 7.84334L2.60259 6.86606L3.60259 5.13401L4.95435 5.52069C6.58533 5.98725 8.27842 5.00975 8.68986 3.36399L9.03086 2ZM8.00012 10C8.00012 8.89543 8.89555 8 10.0001 8C11.1047 8 12.0001 8.89543 12.0001 10C12.0001 11.1046 11.1047 12 10.0001 12C8.89555 12 8.00012 11.1046 8.00012 10ZM10.0001 6C7.79098 6 6.00012 7.79086 6.00012 10C6.00012 12.2091 7.79098 14 10.0001 14C12.2093 14 14.0001 12.2091 14.0001 10C14.0001 7.79086 12.2093 6 10.0001 6Z"
              fill="#BFBFBF"/>
    </svg>

)
export const UserCircleIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="8" r="3" stroke="#BFBFBF" stroke-width="2"/>
        <path d="M16 17C16 13.6863 13.3137 11 10 11C6.68629 11 4 13.6863 4 17" stroke="#BFBFBF" stroke-width="2"/>
        <circle cx="10" cy="10" r="9" stroke="#BFBFBF" stroke-width="2"/>
    </svg>
)
export const ChartBarIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9 2H11V14H9V2ZM7 2C7 0.895431 7.89543 0 9 0H11C12.1046 0 13 0.895431 13 2V14C13 15.1046 12.1046 16 11 16H9C7.89543 16 7 15.1046 7 14V2ZM4 6H2L2 14H4V6ZM2 4C0.895431 4 0 4.89543 0 6V14C0 15.1046 0.89543 16 2 16H4C5.10457 16 6 15.1046 6 14V6C6 4.89543 5.10457 4 4 4H2ZM16 10H18V14H16V10ZM14 10C14 8.89543 14.8954 8 16 8H18C19.1046 8 20 8.89543 20 10V14C20 15.1046 19.1046 16 18 16H16C14.8954 16 14 15.1046 14 14V10ZM1 18C0.447715 18 0 18.4477 0 19C0 19.5523 0.447715 20 1 20H19C19.5523 20 20 19.5523 20 19C20 18.4477 19.5523 18 19 18H1Z" fill="#BFBFBF"/>
    </svg>
)

export const ViewBoardsIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M1 3C1 1.89543 1.89543 1 3 1H6C7.10457 1 8 1.89543 8 3V6C8 7.10457 7.10457 8 6 8H3C1.89543 8 1 7.10457 1 6V3Z"
            stroke="#BFBFBF" stroke-width="2" stroke-linejoin="round"/>
        <path
            d="M1 14C1 12.8954 1.89543 12 3 12H6C7.10457 12 8 12.8954 8 14V17C8 18.1046 7.10457 19 6 19H3C1.89543 19 1 18.1046 1 17V14Z"
            stroke="#BFBFBF" stroke-width="2" stroke-linejoin="round"/>
        <path
            d="M12 3C12 1.89543 12.8954 1 14 1H17C18.1046 1 19 1.89543 19 3L19 6C19 7.10457 18.1046 8 17 8H14C12.8954 8 12 7.10457 12 6L12 3Z"
            stroke="#BFBFBF" stroke-width="2" stroke-linejoin="round"/>
        <path
            d="M12 14C12 12.8954 12.8955 12 14 12H17C18.1046 12 19 12.8954 19 14L19 17C19 18.1046 18.1046 19 17 19H14C12.8954 19 12 18.1046 12 17L12 14Z"
            stroke="#BFBFBF" stroke-width="2" stroke-linejoin="round"/>
    </svg>
)

