import styled from "styled-components";
import './Card.style.css'

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
