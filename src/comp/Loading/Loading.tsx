import {
  ImageStyled,
  LoadingContainer,
  LogoImageContainer,
  TeacherIconStyled,
} from "./LoadingStyle";
const Loading = () => {
  return (
    <>
      <LoadingContainer>
        <div>
          <ImageStyled />
          <LogoImageContainer />
        </div>
        <TeacherIconStyled />
      </LoadingContainer>
    </>
  );
};

export default Loading;
