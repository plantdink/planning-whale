import styled from 'styled-components';

export const TypingWrapper = styled.div`
  .landing-content {
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .typing-wrapper {
    animation: fadeout 2s 5s 1;
    animation-fill-mode: forwards;
  }

  @keyframes fadeout {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  .typing-demo {
    background-color: rgba(255, 255, 255, 0.5);
    width: 50ch;
    animation: typing 4.5s steps(50), blink 0.6s step-end infinite alternate;
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid;
    font-family: monospace;
    font-size: 4em;
  }

  @keyframes typing {
    from {
      width: 0;
    }
  }

  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }

  .img-wrapper {
    height: 60vh;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: fadein 2.5s 1;
    animation-fill-mode: backwards;
  }

  .img-coloured {
    height: 60vh;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: fadeinColoured 3s 1;
    animation-fill-mode: backwards;
    animation-delay: 5s;
  }

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeinColoured {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
