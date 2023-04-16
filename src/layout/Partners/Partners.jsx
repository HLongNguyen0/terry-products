import {
  PartnersContainer,
  PartnersElem,
  PartnersImg,
  PartnersList,
  PartnersTitle,
} from "./Partners.styled";
import {
  desktopPartners1,
  desktopPartners2,
  desktopPartners3,
  desktopPartners4,
  desktopPartners5,
  desktopPartners6,
  desktopPartners7,
  desktopPartners8,
  desktopPartners9,
  desktopPartners10,
  desktopPartners11,
  desktopPartners12,
  mobilePartners1,
  mobilePartners2,
  mobilePartners3,
  mobilePartners4,
  mobilePartners5,
  mobilePartners6,
  mobilePartners7,
  mobilePartners8,
  mobilePartners9,
  mobilePartners10,
  mobilePartners11,
  mobilePartners12,
} from "../../img";
import { nanoid } from "nanoid";

export default function Partners() {
  const partnersList = [
    { desktopImg: desktopPartners1, mobileImg: mobilePartners1 },
    { desktopImg: desktopPartners2, mobileImg: mobilePartners2 },
    { desktopImg: desktopPartners3, mobileImg: mobilePartners3 },
    { desktopImg: desktopPartners4, mobileImg: mobilePartners4 },
    { desktopImg: desktopPartners5, mobileImg: mobilePartners5 },
    { desktopImg: desktopPartners6, mobileImg: mobilePartners6 },
    { desktopImg: desktopPartners7, mobileImg: mobilePartners7 },
    { desktopImg: desktopPartners8, mobileImg: mobilePartners8 },
    { desktopImg: desktopPartners9, mobileImg: mobilePartners9 },
    { desktopImg: desktopPartners10, mobileImg: mobilePartners10 },
    { desktopImg: desktopPartners11, mobileImg: mobilePartners11 },
    { desktopImg: desktopPartners12, mobileImg: mobilePartners12 },
  ];
  return (
    <PartnersContainer>
      <PartnersTitle>нам доверяют</PartnersTitle>
      <PartnersList>
        {partnersList.map((partner) => (
          <PartnersElem key={nanoid()}>
            <PartnersImg>
              <source
                srcSet={partner.desktopImg}
                media="(min-width: 1200px)"
                type="image/jpg"
              />
              <source
                srcSet={partner.mobileImg}
                media="(min-width: 428px)"
                type="image/jpg"
              />
              <img srcSet={partner.desktopImg} alt="partner" />
            </PartnersImg>
          </PartnersElem>
        ))}
      </PartnersList>
    </PartnersContainer>
  );
}
