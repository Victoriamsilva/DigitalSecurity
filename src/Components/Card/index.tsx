import React from "react";
import * as S from "./styles";

interface CardProps {
  title: string,
  description?: string,
  image: any
}

export default function Card({ title, description, image }: CardProps) {
  return (
    <S.Card>
      <S.CardImage src={image} />
      <S.CardTitle>{title}</S.CardTitle>
      <S.CardDescription>{description}</S.CardDescription>
    </S.Card>
  );
}