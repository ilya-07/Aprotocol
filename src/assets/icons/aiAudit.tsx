import React from "react";
import { NavigationType } from "../types";

interface IProps {
  clicked: NavigationType;
}

const AiAuditSVG: React.FC<IProps> = ({ clicked }) => {
  return (
    <svg
      width="16"
      height="14"
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.0532 1.05322H2C1.44772 1.05322 1 1.50094 1 2.05322V8.50024C1 9.05253 1.44772 9.50024 2 9.50024H11.5532L14.3704 12.3174C14.6224 12.5694 15.0532 12.3909 15.0532 12.0346V9.50025L15.0532 2.05322C15.0532 1.50094 14.6055 1.05322 14.0532 1.05322ZM5 7C5.59735 7 6.13353 6.73812 6.5 6.32291C6.86647 6.73812 7.40265 7 8 7C8.59735 7 9.13353 6.73812 9.5 6.32291C9.86647 6.73812 10.4027 7 11 7C12.1046 7 13 6.10457 13 5C13 3.89543 12.1046 3 11 3C10.4027 3 9.86647 3.26188 9.5 3.67709C9.13353 3.26188 8.59735 3 8 3C7.40265 3 6.86647 3.26188 6.5 3.67709C6.13353 3.26188 5.59735 3 5 3C3.89543 3 3 3.89543 3 5C3 6.10457 3.89543 7 5 7Z"
        fill={clicked === NavigationType.AiAudit ? "#0050ff" : "white"}
      />
      <path
        d="M11.5532 9.50024L12.0836 8.96991L11.8639 8.75024H11.5532V9.50024ZM14.3704 12.3174L14.9007 11.7871L14.9007 11.7871L14.3704 12.3174ZM15.0532 12.0346H14.3032V12.0346L15.0532 12.0346ZM15.0532 9.50025H15.8032H15.0532ZM15.0532 2.05322H14.3032V2.05322L15.0532 2.05322ZM6.5 6.32291L7.0623 5.82661L6.5 5.18952L5.9377 5.82661L6.5 6.32291ZM9.5 6.32291L10.0623 5.82661L9.5 5.18952L8.9377 5.82661L9.5 6.32291ZM9.5 3.67709L8.9377 4.17339L9.5 4.81048L10.0623 4.17339L9.5 3.67709ZM6.5 3.67709L5.9377 4.17339L6.5 4.81048L7.0623 4.17339L6.5 3.67709ZM11.5532 8.75024C11.139 8.75024 10.8032 9.08603 10.8032 9.50024C10.8032 9.91446 11.139 10.2502 11.5532 10.2502V8.75024ZM15.0532 10.2502C15.4674 10.2502 15.8032 9.91446 15.8032 9.50025C15.8032 9.08603 15.4674 8.75025 15.0532 8.75025V10.2502ZM2 1.80322H14.0532V0.303223H2V1.80322ZM1.75 2.05322C1.75 1.91515 1.86193 1.80322 2 1.80322V0.303223C1.0335 0.303223 0.25 1.08673 0.25 2.05322H1.75ZM1.75 8.50024V2.05322H0.25V8.50024H1.75ZM2 8.75024C1.86193 8.75024 1.75 8.63832 1.75 8.50024H0.25C0.25 9.46674 1.0335 10.2502 2 10.2502V8.75024ZM11.5532 8.75024H2V10.2502H11.5532V8.75024ZM14.9007 11.7871L12.0836 8.96991L11.0229 10.0306L13.84 12.8477L14.9007 11.7871ZM14.3032 12.0346C14.3032 11.7227 14.6802 11.5666 14.9007 11.7871L13.84 12.8477C14.5645 13.5722 15.8032 13.0591 15.8032 12.0346L14.3032 12.0346ZM14.3032 9.50025V12.0346H15.8032V9.50025H14.3032ZM14.3032 2.05322L14.3032 9.50025H15.8032L15.8032 2.05322L14.3032 2.05322ZM14.0532 1.80322C14.1913 1.80322 14.3032 1.91515 14.3032 2.05322H15.8032C15.8032 1.08672 15.0197 0.303223 14.0532 0.303223V1.80322ZM5.9377 5.82661C5.70755 6.08736 5.37324 6.25 5 6.25V7.75C5.82146 7.75 6.5595 7.38888 7.0623 6.81921L5.9377 5.82661ZM8 6.25C7.62676 6.25 7.29245 6.08736 7.0623 5.82661L5.9377 6.81921C6.4405 7.38888 7.17854 7.75 8 7.75V6.25ZM8.9377 5.82661C8.70755 6.08736 8.37324 6.25 8 6.25V7.75C8.82146 7.75 9.5595 7.38888 10.0623 6.81921L8.9377 5.82661ZM11 6.25C10.6268 6.25 10.2924 6.08736 10.0623 5.82661L8.9377 6.81921C9.4405 7.38888 10.1785 7.75 11 7.75V6.25ZM12.25 5C12.25 5.69036 11.6904 6.25 11 6.25V7.75C12.5188 7.75 13.75 6.51878 13.75 5H12.25ZM11 3.75C11.6904 3.75 12.25 4.30964 12.25 5H13.75C13.75 3.48122 12.5188 2.25 11 2.25V3.75ZM10.0623 4.17339C10.2924 3.91264 10.6268 3.75 11 3.75V2.25C10.1785 2.25 9.4405 2.61112 8.9377 3.18079L10.0623 4.17339ZM8 3.75C8.37324 3.75 8.70755 3.91264 8.9377 4.17339L10.0623 3.18079C9.5595 2.61112 8.82146 2.25 8 2.25V3.75ZM7.0623 4.17339C7.29245 3.91264 7.62676 3.75 8 3.75V2.25C7.17854 2.25 6.4405 2.61112 5.9377 3.18079L7.0623 4.17339ZM5 3.75C5.37324 3.75 5.70755 3.91264 5.9377 4.17339L7.0623 3.18079C6.5595 2.61112 5.82146 2.25 5 2.25V3.75ZM3.75 5C3.75 4.30964 4.30964 3.75 5 3.75V2.25C3.48122 2.25 2.25 3.48122 2.25 5H3.75ZM5 6.25C4.30964 6.25 3.75 5.69036 3.75 5H2.25C2.25 6.51878 3.48122 7.75 5 7.75V6.25ZM11.5532 10.2502L15.0532 10.2502V8.75025L11.5532 8.75024V10.2502Z"
        fill={clicked === NavigationType.AiAudit ? "#0050ff" : "white"}
      />
    </svg>
  );
};

export default AiAuditSVG;
