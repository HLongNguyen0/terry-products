import { nanoid } from "nanoid";
import {
  FeedbackContainer,
  FeedbackElem,
  FeedbackImg,
  FeedbackList,
  FeedbackName,
  FeedbackRating,
  FeedbackStar,
  FeedbackText,
  FeedbackTitle,
} from "./Feedback.styled";

export default function Feedback() {
  const feedbackList = [
    {
      rating: 5,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, nam.",
      img: "",
      name: "Customer's name 1",
    },
    {
      rating: 3,
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum!",
      img: "",
      name: "Customer's name 2",
    },
    {
      rating: 4,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      img: "",
      name: "Customer's name 3",
    },
    {
      rating: 2,
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
      img: "",
      name: "Customer's name 4",
    },
  ];
  return (
    <FeedbackContainer>
      <FeedbackTitle>Что о нас говорят клиенты</FeedbackTitle>
      <FeedbackList>
        {feedbackList.map((feedback) => (
          <FeedbackElem key={nanoid()}>
            <FeedbackRating>
              {[...Array(5)].map((star, index) => {
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
    </FeedbackContainer>
  );
}
