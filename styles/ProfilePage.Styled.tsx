import styled from 'styled-components'

type StyledProps = {
  isEditing?: boolean
}

const StyledProfilePage = styled.div<StyledProps>`
  .banner-image {
    height: 250px;
    width: 100%;
    position: relative;

    &::after {
      position: absolute;
      content: '';
      bottom: 0;
      left: 0;
      right: 0;
      height: 200px;
      background: linear-gradient(transparent, #0e0e0e);
    }

    @media (max-width: 600px) {
      height: 125px;

      &::after {
        height: 60px;
      }
    }

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }

    button {
      font-weight: 500;
      user-select: none;
      height: 36px;
      width: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      transition: 0.2s;
      border-radius: 6px;
      /* background-color: rgb(255, 255, 255, 0.1); */
      background-color: #202020;
      color: rgb(255, 255, 255, 0.7);
      position: absolute;
      bottom: 10px;
      right: 10px;
      z-index: 9;

      svg {
        height: 18px;
      }

      &:hover {
        cursor: pointer;
        background-color: #252525;
      }
    }
  }

  .profile-details {
    max-width: 650px;
    margin: 0 auto;
    width: 100%;
    position: relative;
    z-index: 2;
    margin-top: -100px;
    padding: 20px;

    .profile-heading {
      padding-bottom: 30px;
      margin-bottom: 10px;

      .profile-avatar {
        background-color: #0e0e0e;
        width: 125px;
        height: 125px;
        border-radius: 50%;
        position: relative;
        box-shadow: 0 0 0 5px #0e0e0e;
        display: flex;
        align-items: center;
        justify-content: center;

        @media (max-width: 600px) {
          height: 75px;
          width: 75px;
        }

        &:hover {
          ${({ isEditing }) =>
            isEditing &&
            `
              outline: 1px solid #1c1c1c;
              outline-offset: 5px;
          `}
        }

        .emoji {
          padding: 20% !important;
        }

        .profile-avatar-editing-icon {
          background-color: #363636;
          border-radius: 50rem;
          padding: 0.5rem;
          border: 1px solid rgba(255, 255, 255, 0.15);
          position: absolute;
          top: -0.5rem;
          right: 0;
          height: 42px;
          width: 42px;
          display: flex;
          align-items: center;
          justify-content: center;

          svg {
            height: 20px;
            color: var(--color2);
            position: relative;
            top: -1px;
          }
        }
      }

      .profile-name {
        margin-top: 20px;
        font-size: 28px;
        font-weight: 600;

        input {
          font-size: 28px;
          font-weight: 600;
          color: white;
          border-radius: 2px;
          width: 100%;
          background: rgb(255, 255, 255, 0.05);
          box-shadow: 0 0 0 2px rgb(255, 255, 255, 0.05);
        }

        .name-container {
          display: flex;
          align-items: center;

          .name-wrapper {
            display: grid;

            .name {
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
        }
      }

      .profile-bio {
        display: block;
        margin-top: 6px;
        color: rgb(255, 255, 255, 0.5);

        textarea {
          color: rgb(255, 255, 255, 0.5);
          font-weight: 500;
          width: 100%;
          min-height: 50px;
          max-height: 300px;
          border-radius: 2px;
          background: rgb(255, 255, 255, 0.05);
          box-shadow: 0 0 0 2px rgb(255, 255, 255, 0.05);
          resize: vertical;
        }
      }

      .profile-actions {
        margin-top: 30px;
        display: flex;

        button {
          padding: 1px 14px 0 14px;
          font-weight: 500;
          user-select: none;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          transition: 0.2s;
          border-radius: 6px;
          min-width: 75px;
          background-color: rgb(255, 255, 255, 0.1);
          color: rgb(255, 255, 255, 0.7);

          span {
            position: relative;
            top: 1px;
          }

          svg {
            height: 20px;
            position: relative;
            top: -1px;
            margin-right: 8px;
          }

          &:hover {
            cursor: pointer;
            background-color: rgb(255, 255, 255, 0.15);
          }

          &:not(:last-child) {
            margin-right: 10px;
          }

          &.logout-btn {
            color: #fee2e2;
            background-color: #7f1d1d;

            &:hover {
              background-color: #991b1b;
            }
          }
        }
      }
    }
  }

  .no-games-message {
    color: var(--color3);
  }

  @media (max-width: 600px) {
    .profile-details {
      margin-top: -45px;

      .profile-heading {
        border: 0;
        margin-bottom: 0;

        .profile-avatar {
          .profile-avatar-editing-icon {
            top: -6px;
            right: -6px;
            height: 36px;
            width: 36px;

            svg {
              height: 16px;
            }
          }
        }
      }
    }
  }
`

export default StyledProfilePage
