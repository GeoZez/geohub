import styled, { keyframes } from 'styled-components'

const check = keyframes`
  100% {
    stroke-dashoffset: 0;
  }
`

const StyledDailyChallengePage = styled.div`
  .daily-challenge-wrapper {
    display: grid;
    grid-template-columns: 1fr 300px;
    gap: 1rem;

    @media (max-width: 1450px) {
      grid-template-columns: 1fr;
    }
  }

  .previous-winners-container {
    background-color: var(--background2);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 6px;
    padding: 1rem;
  }

  .leaderboards-wrapper {
    display: grid;
    gap: 1rem;
  }

  .completed-wrapper {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    gap: 6px;

    .completed-text {
      font-weight: 400;
      font-size: 14px;
    }

    .completed-check {
      height: 32px;
      width: 32px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--indigo-800);
      border: 1px solid rgba(255, 255, 255, 0.12);

      svg {
        height: 20px;
        color: #fff;

        path {
          stroke-width: 2.2px;
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: 30s linear 0s 1 normal forwards running ${check};
        }
      }
    }
  }

  .name-wrapper {
    display: flex;
    align-items: center;

    .name {
      font-size: 22px;
      font-weight: 600;
    }
  }

  .map-creator {
    font-size: 14px;
    color: var(--color3);
    position: relative;
    top: 1px;
  }

  .map-creator-link {
    color: var(--color3);

    &:hover {
      text-decoration: underline;
      color: var(--color2);
    }
  }

  .map-details {
    margin-left: 16px;
    margin-top: 2px;
    display: grid;
    gap: 8px;
  }

  .description {
    color: var(--color3);
    font-weight: 400;
  }

  .otherMapsWrapper {
    margin-top: 3rem;

    @media (max-width: 600px) {
      padding: 1rem;
    }
  }

  .otherMapsTitle {
    font-size: 20px;
  }

  .mapAvatar {
    @media (max-width: 600px) {
      display: none;
    }
  }

  .otherMaps {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.2rem;
    margin-top: 1rem;

    @media (max-width: 1350px) {
      grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 850px) {
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }
  }

  .mapDetailsSection {
    background-color: var(--background2);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 6px;
    margin-bottom: 1rem;

    @media (max-width: 1200px) {
      flex-direction: column;
    }

    @media (max-width: 600px) {
      border-radius: 0;
      border: none;
      background-color: transparent;
    }
  }

  .mapDescriptionWrapper {
    width: 100%;

    @media (max-width: 1550px) {
      flex-shrink: 1.25;
      padding: 1rem 1.5rem;
    }

    @media (max-width: 1200px) {
      padding: 1.5rem;
    }
  }

  .statsWrapper {
    display: contents;
  }

  .descriptionColumnWrapper {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    width: 100%;
  }

  .descriptionColumn {
    display: flex;
    align-items: center;
  }

  .skeletonCards {
    margin-top: 3rem;
  }
`

export default StyledDailyChallengePage
