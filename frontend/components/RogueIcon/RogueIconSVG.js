import React from 'react';
import styled from 'styled-components';

const RogueStyles = styled.div`
  #test-outline-svg {
    .circle-outer {
      stroke-dasharray: 360;
      stroke-dashoffset: 0;
      animation: draw-fill-circle 3s linear forwards;
    }

    .path-skull {
      stroke-dasharray: 167;
      stroke-dashoffset: 0;
      animation: draw-fill-skull 3s ease-in-out forwards;
    }

    .path-segments {
      stroke-dasharray: 110;
      stroke-dashoffset: 0;
      animation: draw-fill-segments 3s ease-in-out forwards;
    }

    @keyframes draw-fill-circle {
      from {
        opacity: 0;
        stroke-dashoffset: 360;
      }
      15% {
        opacity: 1;
      }
      50% {
        stroke-dashoffset: 0;
      }
      to {
        fill: #121212;
      }
    }

    @keyframes draw-fill-skull {
      from {
        opacity: 0;
        stroke-dashoffset: 165;
      }
      15% {
        opacity: 1;
      }
      50% {
        stroke-dashoffset: 0;
      }
      to {
        fill: #ffffff;
      }
    }

    @keyframes draw-fill-segments {
      from {
        opacity: 0;
        stroke-dashoffset: 110;
      }
      15% {
        opacity: 1;
      }
      50% {
        stroke-dashoffset: 0;
      }
      to {
        fill: #e61f1e;
      }
    }
  }
`;

export default function RogueIconSVG() {
  return (
    <RogueStyles>
      <svg
        id="test-outline-svg"
        width="100%"
        height="100%"
        viewBox="0 0 105.833 105.833"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g style={{ display: 'inline' }}>
          <circle
            className="circle-outer"
            style={{
              display: 'inline',
              fill: 'none',
              fillOpacity: '1',
              stroke: '#121212',
              strokeWidth: '.52916667',
              strokeMiterLimit: '4',
              strokeDashArray: 'none',
              strokeOpacity: '1',
            }}
            cx="52.831"
            cy="52.917"
            r="52.388"
          />
          <g style={{ display: 'inline' }}>
            <path
              className="path-skull"
              style={{
                display: 'inline',
                fill: 'none',
                fillOpacity: '1',
                stroke: '#121212',
                strokeWidth: '.47129818',
                strokeOpacity: '1',
                strokeMiterLimit: '4',
                strokeDashArray: 'none',
              }}
              d="M52.233 26.933c-4.428.025-6.514.43-9.799 1.815-3.612 1.523-7.236 5.416-7.236 5.416 0 .424.875 4.728 1.83 9.153 1.276 5.92 1.665 8.17 1.47 8.52-.145.26-1.146 1.41-2.223 2.555l-1.96 2.081-1.47-.427c-1.858-.54-1.787-.55-1.787.238 0 1.914 4.384 12.52 6.03 14.59.25.316 2.205 1.304 4.384 2.218 3.698 1.55 3.955 1.706 4.324 2.605.216.525.613 1.461.882 2.08l.49 1.124 5.638-.006 5.637-.006.926-2.102.926-2.102 4.032-1.623 4.033-1.623.93-1.533c2.348-3.864 4.9-10.008 5.302-12.767l.183-1.257h-.784c-.432 0-1.145.126-1.585.28-.868.303-.96.227-4.307-3.52l-1.122-1.255 1.933-8.62 1.934-8.62-1.903-1.804c-2.336-2.214-5.201-3.758-8.719-4.7-2.268-.606-3.106-.69-7.07-.71a87.714 87.714 0 0 0-.919 0zM35.226 58.806c.254.007 3.856.697 8.002 1.534 5.711 1.152 7.559 1.618 7.617 1.924.043.221-.268 1.174-.691 2.117l-.77 1.714-2.878.983c-1.584.54-3.058.974-3.277.965-.218-.009-1.544-.6-2.947-1.314-2.915-1.482-3.842-2.428-4.85-4.947-.801-2-.87-2.994-.206-2.976zm35.799.034c.079 0 .127.006.141.02.241.242-1.004 3.63-1.889 5.14-.588 1.004-1.048 1.34-3.567 2.603-1.591.798-3.103 1.444-3.36 1.436-.257-.008-1.69-.455-3.186-.995l-2.719-.981-.821-1.768c-.452-.972-.76-1.923-.686-2.113.149-.38 14.48-3.33 16.087-3.341zm-18.13 7.36c.467-.01.936.167 1.432.52.794.565 3.454 4.446 3.454 5.039 0 .201-.32.7-.71 1.109-.706.736-.737.742-4.052.742-3.315 0-3.346-.006-4.052-.742-.39-.409-.71-.94-.71-1.182s.61-1.401 1.355-2.576c1.245-1.96 2.257-2.889 3.283-2.91z"
              transform="matrix(1.12279 0 0 1.12279 -6.583 -6.497)"
            />
            <path
              className="path-segments"
              style={{
                display: 'inline',
                fill: 'none',
                fillOpacity: '1',
                stroke: '#121212',
                strokeWidth: '.47129818',
                strokeOpacity: '1',
                strokeMiterLimit: '4',
                strokeDashArray: 'none',
              }}
              d="M46.705 94.839c-13.739-1.99-25.827-10.873-31.923-23.457-1.974-4.074-2.113-3.745 2.422-5.753 2.11-.935 4.02-1.704 4.244-1.708.261-.005.783.827 1.447 2.306 2.256 5.025 6.724 10.432 11.282 13.65 3.715 2.622 8.83 4.751 13.123 5.461l1.918.318v4.738c0 2.87-.086 3.88-.221 4.719a49.483 49.483 0 0 1-2.292-.274zm9.922-4.4v-4.746l1.918-.331c4.394-.758 9.88-3.063 13.534-5.686 4.56-3.272 8.698-8.305 10.873-13.222.36-.816.772-1.483.915-1.483.143 0 2.05.791 4.237 1.759 3.492 1.545 3.977 1.835 3.977 2.379 0 .85-2.267 5.137-4.282 8.098-2.044 3.002-6.95 7.99-10.006 10.173-5.553 3.966-12.951 6.852-19.523 7.614l-1.643.191zm33.05-30.922-3.857-1.73.014-4.28c.015-4.817-.386-7.417-1.73-11.231-1.429-4.05-3.398-7.487-6.146-10.726-.818-.964-1.488-1.925-1.488-2.135 0-.41 5.905-6.064 6.472-6.195.51-.119 3.129 2.898 5.203 5.992 3.082 4.598 4.91 8.863 6.2 14.47.624 2.711.743 3.884.83 8.192.122 6.03-.434 8.857-.68 9.518-.404-.118-2.695-.924-4.817-1.875zm-78.983-4.6c-.45-9.193 1.942-17.996 6.898-25.39 1.935-2.886 4.346-5.831 4.774-5.831.358 0 6.48 6.166 6.48 6.527 0 .144-.709 1.145-1.575 2.225-2.865 3.574-5.065 7.993-6.272 12.596-.553 2.11-.706 3.423-.816 7.004l-.135 4.408-4.002 1.746a73.53 73.53 0 0 1-4.434 1.744c-.44-1.549-.855-3.77-.918-5.03zM31.411 22.15c-1.702-1.724-3.095-3.308-3.095-3.522 0-.54 4.983-3.491 7.98-4.725 5.71-2.351 10.279-3.25 16.626-3.27 5.673-.019 10.54.842 15.386 2.72C72.153 14.843 77 17.556 77 18.218c0 .419-6.122 6.536-6.542 6.536-.174 0-1.382-.535-2.686-1.188-5.298-2.657-10.336-3.746-16.155-3.494-5.422.236-9.647 1.408-14.464 4.012-1.22.66-2.314 1.199-2.432 1.199-.118 0-1.608-1.41-3.31-3.133z"
              transform="matrix(1.12279 0 0 1.12279 -6.583 -6.497)"
            />
          </g>
        </g>
      </svg>
    </RogueStyles>
  );
}