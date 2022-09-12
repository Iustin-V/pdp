import styled from "styled-components";
import bookshelf from "./images/bookshelf.png";

export const StyledWrapper = styled.div`
  overflow-x: hidden;
  font-family: "Lucida Grande", Tahoma, Verdana, Arial, sans-serif;

  background-color: #fafafa;
`;
export const StyledPageWrapper = styled.div`
  height: calc(100vh - 80px);
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;
export const MainContentWrapper = styled.div<{
  padding?: string;
  flexDirection: string;
}>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  font-size: 30px;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  padding: ${(props) => props.padding};
`;
export const StyledToTopButton = styled.button<{ bottom: string }>`
  height: 50px;
  width: 50px;
  background-color: #002366;
  position: fixed;
  right: 40px;
  //bottom: 40px;
  font-size: 3rem;
  z-index: 1;
  cursor: pointer;
  color: green;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 22%;
  overflow: hidden;
  transition: bottom 200ms ease-in-out;
  bottom: ${(props) => props.bottom};
`;
export const StyledImageNew = styled.img`
  filter: invert(100%);
  height: 30px;
`;
export const MainPagePhoto = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${bookshelf});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
export const MainPageText = styled.p`
  color: whitesmoke;
  width: 50%;
  text-shadow: 1px 1px black;
  font-size: 25px;
  border: solid orange;
  border-width: 0 0 0 6px;
  padding-left: 50px;
  @media (max-width: 1200px) {
    padding: 50px 0 0 0;
    width: 100%;
    border-width: 6px 0 0 0;
  }
`;
export const MainTitle = styled.p`
  font-size: 45px;
  width: 50%;
  color: orange;
  text-shadow: 2px 2px black;
  font-weight: 700;
  padding-right: 50px;
  @media (max-width: 1200px) {
    width: 100%;
    padding: 0;
    text-align: center;
  }
`;
export const IconWrapper = styled.div<{ top: string }>`
  width: 80vw;
  height: 300px;
  background-color: wheat;
  position: absolute;
  top: ${(props) => props.top};
  border-radius: 50px;
  border: 10px solid orange;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const PageContainer = styled.div`
  max-width: 1440px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  @media (max-width: 1200px) {
    max-width: 800px;
    flex-direction: column;
  }
`;
export const SectionContainer = styled.div`
  max-width: 1440px;
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
