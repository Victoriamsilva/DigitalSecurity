import * as S from "./styles";
import Card from "../../Components/Card";
import jeniffer from "../../Assets/images/jenifer.jpeg";
import leandro from "../../Assets/images/leandro.jpeg";
import saulo from "../../Assets/images/saulo.jpeg";
import ary from "../../Assets/images/ary.jpeg";
import victoria from "../../Assets/images/victoria.jpeg";

import { useTranslation } from "react-i18next";

export function AboutUs() {
  const { t } = useTranslation();
  return (
    <S.CardsWrapper>
      <S.CardsSlider>
        <S.Card>
          <S.CardImage src={jeniffer} />
          <S.CardTitle>Jennifer Ribeiro</S.CardTitle>
          <S.CardDescription>{t("jenifer")}</S.CardDescription>
        </S.Card>

        <S.Card>
          <S.CardImage src={victoria} />
          <S.CardTitle>Victoria Marques</S.CardTitle>
          <S.CardDescription>{t("victoria")}</S.CardDescription>
        </S.Card>
        <S.Card>
          <S.CardImage src={saulo} />
          <S.CardTitle>Saulo Gontijo</S.CardTitle>
          <S.CardDescription>{t("saulo")}</S.CardDescription>
        </S.Card>

        <S.Card>
          <S.CardImage src={ary} />
          <S.CardTitle>Ary</S.CardTitle>
          <S.CardDescription>{t("ary")}</S.CardDescription>
        </S.Card>

        <S.Card>
          <S.CardImage src={leandro} />
          <S.CardTitle>Leandro Michalak</S.CardTitle>
          <S.CardDescription>{t("leandro")}</S.CardDescription>
        </S.Card>
        <S.Card>
          <S.CardImage src={jeniffer} />
          <S.CardTitle>Jennifer Ribeiro</S.CardTitle>
          <S.CardDescription>{t("jenifer")}</S.CardDescription>
        </S.Card>

        <S.Card>
          <S.CardImage src={victoria} />
          <S.CardTitle>Victoria Marques</S.CardTitle>
          <S.CardDescription>{t("victoria")}</S.CardDescription>
        </S.Card>
        <S.Card>
          <S.CardImage src={saulo} />
          <S.CardTitle>Saulo Gontijo</S.CardTitle>
          <S.CardDescription>{t("saulo")}</S.CardDescription>
        </S.Card>

        <S.Card>
          <S.CardImage src={ary} />
          <S.CardTitle>Ary</S.CardTitle>
          <S.CardDescription>{t("ary")}</S.CardDescription>
        </S.Card>

        <S.Card>
          <S.CardImage src={leandro} />
          <S.CardTitle>Leandro Michalak</S.CardTitle>
          <S.CardDescription>{t("leandro")}</S.CardDescription>
        </S.Card>
      </S.CardsSlider>
    </S.CardsWrapper>
  )
}