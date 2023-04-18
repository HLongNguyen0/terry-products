import styled from "styled-components";
import { Section } from "../../components/Container.styled";
import { palette } from "../../utils/palette";
import { size } from "../../utils/break-points";

export const FeedbackContainer = styled(Section)`
  padding-top: 100px;
  overflow: hidden;
  @media (min-width: ${size.desktop}) {
    padding-top: 120px;
  }
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
  @media (min-width: ${size.desktop}) {
    margin-bottom: 80px;
    font-size: 45px;
    line-height: 61px;
    letter-spacing: 0.2px;
  }
`;

export const FeedbackList = styled.ul`
  display: flex;
  transform: translateX(${(props) => props.cardSlide});
  margin-bottom: 8px;
  @media (min-width: ${size.desktop}) {
    margin-bottom: 20px;
  }
`;

export const FeedbackElem = styled.li`
  position: relative;
  background-color: ${palette.lightGray};
  border: 2px solid ${palette.orange};
  padding: 44px 30px 40px;
  &:not(:last-child) {
    margin-right: 40px;
  }
  @media (min-width: ${size.desktop}) {
    width: 560px;
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
  @media (min-width: ${size.desktop}) {
    top: -155px;
    font-size: 171px;
    line-height: 195px;
    letter-spacing: 0.76px;
  }
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
  @media (min-width: ${size.desktop}) {
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.25px;
  }
`;

export const FeedbackImg = styled.img`
  background-color: black;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  margin: 0 auto 6px;
  @media (min-width: ${size.desktop}) {
    width: 40px;
    height: 40px;
  }
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
  @media (min-width: ${size.desktop}) {
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.2px;
  }
`;

export const FeedbackButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100px;
  margin: 0 auto;
  @media (min-width: ${size.desktop}) {
    width: 160px;
  }
`;

export const FeedbackButton = styled.button`
  @media (min-width: ${size.desktop}) {
    cursor: pointer;
  }
`;

export const FeedbackButtonImg = styled.img`
  background-color: white;
  width: 40px;
  @media (min-width: ${size.desktop}) {
    width: 72px;
  }
`;
