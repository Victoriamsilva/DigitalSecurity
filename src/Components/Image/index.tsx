import * as S from "./style";

interface ImageProps {
  image: string;
}

export default function Image({ image }: ImageProps) {
  return (
    <S.ImageWrapper>
      <S.Image src={image} />
    </S.ImageWrapper>
  );
}