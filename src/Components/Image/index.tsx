import * as S from "./style";

export default function Image({ image }: any) {
  return (
    <S.ImageWrapper>
      <S.Image src={image} />
    </S.ImageWrapper>
  );
}