import React from "react";
import * as S from "./styles";

export default function ColumnLayout({ children }: { children: React.ReactNode[] }) {
  return (
    <S.ColumnsWrapper>
      <S.LeftColumn>
        {children[0]}
      </S.LeftColumn>
      <S.RightColumn>
        {children[1]}
      </S.RightColumn>
    </S.ColumnsWrapper>
  );
}