import { useTranslation } from "react-i18next";
import Pattern from "../../Assets/images/patternpad.svg";
import * as G from "../../styles/styles";
import * as S from "./styles";



export default function Funfacts() {
  const { t } = useTranslation();
  return (
    <S.Wrapper background={Pattern}>
      <S.Container>
        <G.Title>
          {t("Funfacts")}
        </G.Title>
        <S.Blocks>
          <h3><div>1</div>{t("Funfact 1")}</h3>
          <p>{t("Funfact 1.1")}</p>
        </S.Blocks>
        <S.Blocks>

          <h3><div>2</div>{t("Funfact 2")}</h3>
          <p>{t("Funfact 2.1")}</p>
        </S.Blocks>
        <S.Blocks>

          <h3><div>3</div>{t("Funfact 3")}</h3>
          <p>{t("Funfact 3.1")}</p>
        </S.Blocks>
        <S.Blocks>

          <h3><div>4</div>{t("Funfact 4")}</h3>
          <p>{t("Funfact 4.1")}</p>
        </S.Blocks>
        <S.Blocks>

          <h3><div>5</div>{t("Funfact 5")}</h3>
          <p>{t("Funfact 5.1")}</p>
        </S.Blocks>


      </S.Container>
    </S.Wrapper>
  )
}