import React from "react";
import * as S from "./styles";

export default function ColumnLayout({ children, reverse = false }: { children: React.ReactNode[], reverse?: boolean }) {
  return (
    <S.ColumnsWrapper reverse={reverse}>
      <S.LeftColumn>
        {children[0]}
      </S.LeftColumn>
      <S.RightColumn>
        {children[1]}
      </S.RightColumn>
    </S.ColumnsWrapper>
  );
}