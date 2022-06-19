import * as S from "../ProtectYourself/styles";
import * as G from "../../styles/styles";
import Pattern from "../../Assets/images/patternpad.svg";
import team from "../../Assets/images/team.svg";
import test from "../../Assets/images/test.svg";
import plan from "../../Assets/images/plan.svg";
import iconPolicy from "../../Assets/images/policy.svg";
import { useTranslation } from "react-i18next";


export default function ProtectYourBusiness() {
  const { t } = useTranslation();

  return (
    <>
      <G.Title>{t("How Protect Your Business")}</G.Title>
      <G.DivTitle>
        <h2>{t("Safety at work")}</h2>
        <p>{t("Description safety at work")}</p>
      </G.DivTitle>

      <S.Wrapper background={Pattern}>




        <S.TipsWrapper>

          <div className="tip">
            <S.TipIcon>
              <img src={iconPolicy} />
            </S.TipIcon>
            <h2>{t("Create a digital security policy")}</h2>
            <p>
              {t("Description security policy")}
            </p>
          </div>
          <div className="tip">
            <S.TipIcon>
              <img src={team} />

            </S.TipIcon>
            <h2>{t("Qualified team")}</h2>
            <p>
              {t("Description qualified team")}
            </p>
          </div>
          <div className="tip">
            <S.TipIcon>
              <img src={test} />

            </S.TipIcon>
            <h2>{t("test often")}</h2>
            <p>
              {t("Description teste often")}
            </p>
          </div>
          <div className="tip">
            <S.TipIcon>
              <img src={plan} />

            </S.TipIcon>
            <h2> {t("Create a disaster recovery plan")}</h2>
            <p>
              {t("Description disaster recovery")}
            </p>

          </div>


        </S.TipsWrapper>
      </S.Wrapper>
    </>

  )
}