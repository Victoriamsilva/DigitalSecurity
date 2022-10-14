import React from "react";
import * as S from "./styles";

interface SectionProps {
  children: React.ReactNode,
  color?: 'DARK' | 'LIGHT'
}

export default function Section({ children, color }: SectionProps) {
  function getVarColor() {
    if (color === 'LIGHT') {
      return "--main-green";
    }
    if (color === 'DARK') {
      return "--main-background";
    }
    return "--main-green";
  }

  return (
    <S.Section color={getVarColor()}>{children}</S.Section>
  );
}