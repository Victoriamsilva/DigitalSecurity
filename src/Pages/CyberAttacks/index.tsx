import { useTranslation } from "react-i18next";
import Pattern from "../../Assets/images/patternpad.svg";
import * as G from "../../styles/styles";
import * as S from "./styles";



export default function CyberAttacks() {
  const { t } = useTranslation();
  return (
    <S.Wrapper background={Pattern}>
      <S.Container>
        <G.Title>
          {t("Cyber attacks title")}
        </G.Title>
        <G.DivTitle>
          <p>{t("Description cyber attacks")}</p>
          {/* <h2>{t("Attack types")}</h2> */}
          <p>{t("Description attack types")}</p>
        </G.DivTitle>
        <S.Blocks>
          <h3>{t("Malware")}</h3>
          <p>{t("Description malware")}</p>
        </S.Blocks>
        <S.Blocks>
          <h3>{t("Adware")}</h3>
          <p>{t("Description Adware")}</p>
        </S.Blocks>
        <S.Blocks>
          <h3>{t("Ransomware")}</h3>
          <p>{t("Description ransomware")}</p>
        </S.Blocks>
        <S.Blocks>
          <h3>{t("Spyware")}</h3>
          <p>{t("Description spyware")}</p>
        </S.Blocks>
        <S.Blocks>
          <h3>{t("Trojans")}</h3>
          <p>{t("Description trojans")}</p>
        </S.Blocks>
        <S.Blocks>
          <h3>{t("Virus")}</h3>
          <p>{t("Description virus")}</p>
        </S.Blocks>
        <S.Blocks>
          <h3>{t("Phishing")}</h3>
          <p>{t("Description phishing")}</p>
        </S.Blocks>
        <S.Blocks>
          <h3>{t("Spoofing")}</h3>
          <p>{t("Description spoofing")}</p>
        </S.Blocks>
        <S.Blocks>
          <h3>{t("man-in-the-middle")}</h3>
          <p>{t("Description man-in-the-middle")}</p>
        </S.Blocks>
        <S.Blocks>
          <h3>{t("URL manipulation")}</h3>
          <p>{t("Description URL manipulation")}</p>
        </S.Blocks>
        <S.Blocks>
          <h3>{t("DoS attack")}</h3>
          <p>{t("Description dos attack")}</p>
        </S.Blocks>











      </S.Container>
    </S.Wrapper>
  )
}