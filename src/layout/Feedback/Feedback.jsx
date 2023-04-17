import { useState } from "react";
import { nanoid } from "nanoid";
import {
  FeedbackButton,
  FeedbackButtonImg,
  FeedbackButtonWrapper,
  FeedbackContainer,
  FeedbackDecor,
  FeedbackElem,
  FeedbackImg,
  FeedbackList,
  FeedbackName,
  FeedbackRating,
  FeedbackStar,
  FeedbackText,
  FeedbackTitle,
} from "./Feedback.styled";
import feedbackImg from "../../img/mobile/feedback.png";
import { arrowLeft, arrowRight } from "../../img";

export default function Feedback() {
  const [cardSlide, setCardSlide] = useState(0);

  const handleSlide = (direction) => {
    switch (direction) {
      case "left":
        if (cardSlide > 0) {
          setCardSlide((state) => state - 1);
        }
        break;
      case "right":
        if (cardSlide < feedbackList.length - 1) {
          setCardSlide((state) => state + 1);
        }
        break;
      default:
        return;
    }
  };

  const feedbackList = [
    {
      rating: 5,
      text: "“Orci vel eget in eu. Integer amet porttitor hendrerit etiam arcu, aliquet duis pretium consequat. Semper sed viverra enim ut nunc.”",
      img: feedbackImg,
      name: "Customer's name 1",
    },
    {
      rating: 3,
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum!",
      img: feedbackImg,
      name: "Customer's name 2",
    },
    {
      rating: 4,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      img: feedbackImg,
      name: "Customer's name 3",
    },
    {
      rating: 2,
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
      img: feedbackImg,
      name: "Customer's name 4",
    },
  ];
  return (
    <FeedbackContainer>
      <FeedbackTitle>Что о нас говорят клиенты</FeedbackTitle>
      <FeedbackList
        cardSlide={`calc(-${cardSlide * 100}% - ${cardSlide * 43}px)`}
      >
        {feedbackList.map((feedback) => (
          <FeedbackElem key={nanoid()}>
            <FeedbackDecor>„</FeedbackDecor>
            <FeedbackRating>
              {[...Array(5)].map((_, index) => {
                return (
                  <FeedbackStar
                    key={nanoid()}
                    className={index + 1 < feedback.rating && "on"}
                  >
                    &#9733;
                  </FeedbackStar>
                );
              })}
            </FeedbackRating>
            <FeedbackText>{feedback.text}</FeedbackText>
            <FeedbackImg src={feedback.img} />
            <FeedbackName>{feedback.name}</FeedbackName>
          </FeedbackElem>
        ))}
      </FeedbackList>
      <FeedbackButtonWrapper>
        <FeedbackButton onClick={() => handleSlide("left")} type="button">
          <FeedbackButtonImg src={arrowLeft} alt="arrow" />
        </FeedbackButton>
        <FeedbackButton onClick={() => handleSlide("right")} type="button">
          <FeedbackButtonImg src={arrowRight} alt="arrow" />
        </FeedbackButton>
      </FeedbackButtonWrapper>
    </FeedbackContainer>
  );
}
