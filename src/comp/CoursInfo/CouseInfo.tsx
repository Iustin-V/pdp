import styled from "styled-components";

export const StyledPageCourseInfo = styled.div`
  margin-top: 80px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

export const SectionContainer = styled.div`
  width: calc(100% - 80px);
  max-width: 1440px;
  padding: 40px;
  margin: 0 auto;
  position: relative;
`

export const Course = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  max-width: 100%;
  margin: 20px;
  overflow: hidden;
  width: 700px;

  h6{
    opacity: 0.6;
    margin: 0;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  
  h2{
    letter-spacing: 1px;
    margin: 10px 0;
  }
`

export const CoursePreview = styled.div`
  background-color: #2A265F;
  color: #fff;
  padding: 30px;
  max-width: 250px;
  
  a{
    color: #fff;
    display: inline-block;
    font-size: 12px;
    opacity: 0.6;
    margin-top: 30px;
    text-decoration: none;
  }
`

export const CourseInformation =styled.div`
  padding: 30px;
  position: relative;
  width: 100%;
`
export const ProgressContainer =styled.div`
  position: absolute;
  top: 30px;
  right: 30px;
  text-align: right;
  width: 150px;
`

export const Progress = styled.div`
  background-color: #ddd;
  border-radius: 3px;
  height: 5px;
  width: 100%;
`



export const CourseInfo = () => {

    return (<>
            <StyledPageCourseInfo>
                <SectionContainer>

                        <div className="course">
                            <div className="course-preview">
                                <h6>Course</h6>
                                <h2>JavaScript Fundamentals</h2>
                                <a href="#">View all chapters <i className="fas fa-chevron-right"></i></a>
                            </div>
                            <div className="course-info">
                                <div className="progress-container">
                                    <div className="progress"></div>
                                    <span className="progress-text">
					6/9 Challenges
				</span>
                                </div>
                                <h6>Chapter 4</h6>
                                <h2>Callbacks & Closures</h2>
                                <button className="btn">Continue</button>
                            </div>
                        </div>



                </SectionContainer>
            </StyledPageCourseInfo>
        </>

    );
};
