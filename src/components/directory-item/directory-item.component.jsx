import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
  H2,
  P,
} from "./directory-item.styles";

export default function DirectoryItem({ category }) {
  const { imageUrl, title } = category;
  return (
    <DirectoryItemContainer>
      <BackgroundImage style={{ backgroundImage: `url(${imageUrl})` }} />
      <Body>
        <H2>{title}</H2>
        <P>Shop Now</P>
      </Body>
    </DirectoryItemContainer>
  );
}
