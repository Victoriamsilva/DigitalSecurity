import * as S from "./styles";

export default function Button({ text, onClick }: { text: string, onClick: any }) {
  return <S.Button onClick={onClick}>{text}</ S.Button>;
}