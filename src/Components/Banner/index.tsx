import Button from "../Button";
import * as S from "./styles";
import BannerSVG from '../../Assets/images/banner.svg';
import BinarySVG from '../../Assets/images/binary.svg';
import PatternSVG from '../../Assets/images/pattern.svg';
import { useTranslation } from "react-i18next";

export default function Banner() {
  const { t } = useTranslation();
  function scrollTo() {
    document.getElementsByTagName("section")[0]?.scrollIntoView()
  }
  return (
    <S.Banner>
      <S.BannerContent>
        <S.BannerTitle>{t("Digital")}</S.BannerTitle>
        <S.BannerTitle>{t("Security")}</S.BannerTitle>
        <p>
          {t("Banner description")}
        </p>
        <Button text={t("read")} onClick={scrollTo} />
      </S.BannerContent>
      <S.BannerImg src={BannerSVG} />
      <S.BinaryImg src={BinarySVG} />
      <S.PatternImg src={PatternSVG} />
    </S.Banner>
  );
}