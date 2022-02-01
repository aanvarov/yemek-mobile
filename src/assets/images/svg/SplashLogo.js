import React from 'react';
import { SvgCss } from 'react-native-svg';

export default props => {
  return (
    <SvgCss
      xml={`
      <svg width="${props.width}" height="${props.height}" viewBox="0 0 42 68" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.7919 60.3C5.63459 56.8858 1.22567 51.4064 0.184363 43.5156C-1.02019 34.3771 3.80269 26.2717 11.0009 22.475C17.869 18.852 24.7372 19.1318 31.6042 22.7875C30.6084 24.1098 29.6732 25.3447 28.745 26.5854C26.849 29.1204 24.9144 31.6286 23.4359 34.4447C23.2015 34.8913 22.9986 35.3542 22.7957 35.816C21.9724 37.6899 22.194 39.4973 23.2061 41.2243C23.437 41.6172 23.4184 41.8854 23.1968 42.2691C19.8245 48.1018 16.4686 53.945 13.1091 59.7846C13.024 59.9316 12.9307 60.075 12.7919 60.3ZM13.8123 52.2122C11.0125 49.3623 9.77298 45.9142 9.9339 41.974C10.0937 38.0712 11.5431 34.6768 14.288 31.8957C17.0738 29.0738 20.453 27.6838 24.462 27.9963C19.6508 26.4373 12.4724 28.2132 9.08267 34.6674C5.813 40.8954 7.90027 48.6521 13.8123 52.2122Z" fill="white"/>
        <path d="M37.6876 28.282C39.1254 30.2037 40.1434 32.1743 40.8547 34.3083C43.9938 43.7255 40.1224 53.9298 31.4701 59.0745C27.439 61.4719 23.1642 63.3738 18.9138 65.3293C17.2569 66.0919 15.601 66.8592 13.944 67.6241C13.7388 67.7186 13.5324 67.8119 13.1978 67.9646C14.0327 66.4242 14.7999 64.9993 15.5754 63.5779C18.8369 57.5947 22.0996 51.6128 25.3622 45.6308C25.4182 45.5282 25.4823 45.4303 25.5278 45.323C26.0351 44.1336 26.6251 43.3033 28.2191 43.301C30.1105 43.2987 31.5086 42.1326 32.4963 40.4814C33.8909 38.1505 34.8494 35.6317 35.8277 33.1189C36.4376 31.5505 37.0358 29.9775 37.6876 28.282Z" fill="white"/>
        <path d="M19.4186 18.8391C17.1506 18.5581 15.1507 17.8981 13.2605 16.9197C9.87426 15.1671 7.07452 12.7592 5.20181 9.39388C3.67425 6.64778 3.16934 3.75476 4.22114 0.703142C4.2946 0.488585 4.38905 0.281024 4.50216 0C5.85831 1.48208 7.40219 2.61667 9.04402 3.62182C11.1138 4.88818 13.2326 6.07757 15.258 7.4104C16.9873 8.54732 18.5382 9.91629 19.4291 11.8613C20.3328 13.8343 20.6674 15.8936 20.299 18.0485C20.2908 18.0975 20.2558 18.1418 20.1649 18.3318C19.7917 16.0836 18.9218 14.1923 17.5785 12.526C16.2655 10.897 14.738 9.51516 12.8967 8.48901C15.4539 10.9599 17.8467 13.5323 18.965 17.0118C19.1469 17.5762 19.253 18.1639 19.4186 18.8391Z" fill="white"/>
        <path d="M33.9807 4.39136C34.713 6.15213 34.7666 7.84177 34.2302 9.54307C33.3475 12.3381 31.469 14.3659 29.1065 15.9833C27.3726 17.1704 25.4649 17.9691 23.3788 18.3061C23.2691 18.3236 23.156 18.3213 22.9776 18.3329C24.0143 15.8888 26.0234 14.3694 27.8448 12.6821C25.5255 13.9217 23.5397 15.5064 22.3456 18.13C22.0576 16.8695 22.1416 15.8072 22.3654 14.7426C22.7549 12.8967 23.8044 11.4811 25.3016 10.4083C26.4665 9.57339 27.6886 8.80961 28.9223 8.07965C30.6959 7.02902 32.4788 6.0017 33.9807 4.39136Z" fill="white"/>
        <path d="M26.9642 34.8411C26.6458 34.6814 26.3905 34.5531 25.9858 34.3502C28.0696 30.6362 30.1324 26.9608 32.2372 23.2107C32.7374 23.564 33.1933 23.8485 33.5945 24.196C33.6854 24.2742 33.6574 24.617 33.5653 24.7604C32.1334 26.9759 30.6816 29.1787 29.2345 31.3837C28.4894 32.5183 27.7454 33.6517 26.9642 34.8411Z" fill="white"/>
        <path d="M34.2638 24.6975C34.7909 25.1686 35.2783 25.6035 35.8124 26.0805C33.647 29.4936 31.5002 32.8787 29.3185 36.3198C28.9885 36.1099 28.7063 35.9303 28.4253 35.753C30.3773 32.0578 32.3036 28.4091 34.2638 24.6975Z" fill="white"/>
        <path d="M31.7279 37.8205C31.3583 37.5675 31.0283 37.3424 30.7041 37.1209C32.5127 33.562 34.3003 30.044 36.1368 26.4303C36.538 26.8944 36.9146 27.3002 37.2469 27.7386C37.3181 27.8331 37.2843 28.0733 37.2143 28.1981C35.5118 31.2427 33.7977 34.2815 32.0824 37.3191C31.9903 37.4823 31.8655 37.6269 31.7279 37.8205Z" fill="white"/>
      </svg>
      `}
      // width={props.width}
      // height={props.height}
      style={props.style}
      {...props}
    />
  );
};