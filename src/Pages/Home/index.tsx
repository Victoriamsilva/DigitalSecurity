import Banner from "../../Components/Banner";
import Image from "../../Components/Image";
import Image1 from "../../Assets/images/laptop-icon.svg";
import Image2 from "../../Assets/images/icon-security.svg";
import Image3 from "../../Assets/images/globo-icon.svg";
import Image4 from "../../Assets/images/digital-security-icon.svg";
import Image5 from "../../Assets/images/information-security-icon.svg";
import Image6 from "../../Assets/images/cyber-security-icon.svg";
import Section from "../../Components/Section";
import Video from "../../Components/Video";
import * as S from "./style";
import ColumnLayout from "../../Components/ColumnLayout";
import Card from "../../Components/Card";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Banner />
      <Section color="DARK">
        <ColumnLayout>
          <h2>{t('What is Digital Security?')}</h2>
          <Video />
        </ColumnLayout>

        <ColumnLayout>
          <Image image={Image1} />
          <p>
            {t('Digital security 1')}
          </p>
        </ColumnLayout>

        <ColumnLayout reverse={true}>
          <Image image={Image2} />
          <p>
            {t('Digital security 2')}
          </p>
        </ColumnLayout>

        <ColumnLayout>
          <Image image={Image3} />
          <p>
            {t('Digital security 3')}
          </p>
        </ColumnLayout>
      </Section>

      <Section color="LIGHT">
        <h2>{t("Differences")}</h2>

        <S.CardsWrapper>
          <Card
            title={t('Information Security')}
            description={t("differences description 2")}
            image={Image5} />
          <Card
            title={t('Cyber Security')}
            description={t("differences description 3")}
            image={Image6} />
          <Card
            title={t("Digital Security")}
            description={t("differences description 1")}
            image={Image4} />
        </S.CardsWrapper>

      </Section>
    </>
  );
}