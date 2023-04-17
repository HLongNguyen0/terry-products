import styled from "styled-components";
import { Section } from "../../components/Section.styled";
import { palette } from "../../utils/palette";

export const FeedbackContainer = styled(Section)`
  padding-top: 104px;
  overflow: hidden;
`;

export const FeedbackTitle = styled.h2`
  margin-bottom: 44px;
  font-weight: 800;
  font-size: 26px;
  line-height: 30px;
  text-align: center;
  letter-spacing: 0.2px;
  text-transform: uppercase;
  color: ${palette.orange};
`;

export const FeedbackList = styled.ul`
  display: flex;
  transform: translate(${(props) => props.cardSlide}, 0);
  margin-bottom: 8px;
`;

export const FeedbackElem = styled.li`
  position: relative;
  background-color: ${palette.lightGray};
  border: 2px solid ${palette.orange};
  /* margin-bottom: 16px; */
  padding: 44px 30px 40px;
  &:not(:last-child) {
    margin-right: 40px;
  }
`;

export const FeedbackDecor = styled.div`
  position: absolute;
  top: -100px;
  left: 50%;
  transform: translate(-50%, 0);
  font-family: "Georgia";
  font-weight: 400;
  font-size: 111.25px;
  line-height: 126px;
  text-transform: uppercase;
  color: ${palette.orange};
`;

export const FeedbackRating = styled.div`
  width: fit-content;
  margin: 0 auto 20px;
  color: white;
  .on {
    color: ${palette.darkYellow};
  }
`;

export const FeedbackStar = styled.span`
  font-size: 20px;
  &:not(:last-child) {
    margin-right: 4px;
  }
`;

export const FeedbackText = styled.p`
  width: 300px;
  margin-bottom: 20px;
  font-family: "Inter";
  font-weight: 400;
  font-size: 10px;
  line-height: 13px;
  text-align: center;
  letter-spacing: 0.16px;
  color: ${palette.black};
`;

export const FeedbackImg = styled.img`
  background-color: black;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  margin: 0 auto 6px;
`;

export const FeedbackName = styled.span`
  display: block;
  font-family: "Inter";
  font-weight: 500;
  font-size: 9px;
  line-height: 11px;
  text-align: center;
  letter-spacing: 0.13px;
  text-transform: capitalize;
  color: ${palette.gray};
`;

export const FeedbackButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100px;
  margin: 0 auto;
`;

export const FeedbackButton = styled.button``;

export const FeedbackButtonImg = styled.img`
  background-color: white;
  width: 40px;
`;
