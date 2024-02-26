import Style from "./styles.module.scss";
export const TransferSvg = ({ fill = "#819DF5" }) => {
  return (
    <svg
      className={Style["bar-icon"]}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.375 15.103C20.0239 13.5613 20.1733 11.855 19.8021 10.224C19.431 8.59303 18.558 7.11938 17.306 6.01024C16.0539 4.9011 14.4857 4.21225 12.8219 4.04055C11.158 3.86884 9.48222 4.22292 8.03004 5.05299L7.03804 3.31599C8.55567 2.4486 10.2742 1.99435 12.0222 1.99856C13.7703 2.00278 15.4866 2.4653 17 3.33999C21.49 5.93199 23.21 11.482 21.117 16.11L22.459 16.884L18.294 19.098L18.129 14.384L19.375 15.103ZM4.62504 8.89699C3.97618 10.4387 3.82682 12.145 4.19796 13.776C4.56909 15.4069 5.44205 16.8806 6.69411 17.9897C7.94617 19.0989 9.51436 19.7877 11.1782 19.9594C12.842 20.1311 14.5179 19.7771 15.97 18.947L16.962 20.684C15.4444 21.5514 13.7258 22.0056 11.9778 22.0014C10.2298 21.9972 8.51347 21.5347 7.00004 20.66C2.51004 18.068 0.790039 12.518 2.88304 7.88999L1.54004 7.11699L5.70504 4.90299L5.87004 9.61699L4.62404 8.89799L4.62504 8.89699ZM13.415 14.828L10.584 12L7.75604 14.828L6.34204 13.414L10.585 9.17199L13.414 12L16.243 9.17199L17.657 10.586L13.414 14.828H13.415Z"
        fill={fill}
      />
    </svg>
  );
};
