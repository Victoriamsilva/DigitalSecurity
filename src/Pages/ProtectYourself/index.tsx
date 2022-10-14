import cloudIcon from "../../Assets/images/cloud.svg";
import password from "../../Assets/images/password.svg";
import email from "../../Assets/images/email.svg";
import web from "../../Assets/images/web.svg";
import twofactor from "../../Assets/images/two-factor.svg";
import attacktools from "../../Assets/images/attacktools.svg";
import Pattern from "../../Assets/images/patternpad.svg";
import { useTranslation } from "react-i18next";
import * as S from "./styles";
import * as G from "../../styles/styles";

export default function ProtectYourself() {
  const { t } = useTranslation();

  return (
    <>
      <G.Title>{t("How Protect Yourself")}</G.Title>
      <G.DivTitle>
        <h2>{t("Security at home")}</h2>
        <p>{t("Description security at home")}</p>
      </G.DivTitle>
      <S.Wrapper background={Pattern}>
        <S.TipsWrapper>
          <div className="tip">
            <S.TipIcon>
              <img src={cloudIcon} />
            </S.TipIcon>
            <h2>{t("Sharing by cloud systems")}</h2>
            <p>
              {t("Description cloud systems")}
            </p>
          </div>
          <div className="tip">
            <S.TipIcon>
              <img src={password} />
            </S.TipIcon>
            <h2>{t("Strong passwords and correct storage")}</h2>
            <p>
              {t("Description strong passwords")}
            </p>
          </div>
          <div className="tip">
            <S.TipIcon>
              <img src={email} />
            </S.TipIcon>
            <h2>{t("Ignore suspicious emails")}</h2>
            <p>
              {t("description suspicious emails")}
            </p>
          </div>
          <div className="tip">
            <S.TipIcon>
              <img src={attacktools} />
            </S.TipIcon>
            <h2> {t("Use counter attack tools")}</h2>
            <p>
              {t("Description attack tools")}
            </p>
          </div>
          <div className="tip">
            <S.TipIcon>
              <img src={web} />
            </S.TipIcon>
            <h2>{t("Beware of malicious websites")}</h2>
            <p>{t("Description Beware")}</p>
          </div>
          <div className="tip">
            <S.TipIcon>
              <img src={twofactor} />
            </S.TipIcon>
            <h2>{t("Use two-factor authentication")}</h2>
            <p>{t("Description two-factor")}</p>
          </div>
        </S.TipsWrapper>
      </S.Wrapper>
    </>
  )
}