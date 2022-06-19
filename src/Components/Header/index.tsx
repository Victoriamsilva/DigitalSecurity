import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Arrow from '../../Assets/images/arrow.svg';
import World from '../../Assets/images/world.svg';
import Brazil from '../../Assets/images/brasil.svg';
import USA from '../../Assets/images/usa.svg';

import Logo from '../../Assets/images/logo.svg';
import * as S from "./styles";
import i18next from 'i18next';

export default function Header() {
  const { t } = useTranslation();
  const [openedDropdown, setOpenedDropdown] = useState<string>('');
  const dropdownRef: any = useRef();
  const changeLanguageRef: any = useRef();

  const navigate = useNavigate();

  useEffect(() => {
    const checkIfClickedOutside = (event: MouseEvent) => {
      if (openedDropdown) {
        if (openedDropdown === 'cyberSecurityDropdown'
          && dropdownRef.current
          && !dropdownRef.current.contains(event.target)
        ) {
          setOpenedDropdown('');
        }
        if (openedDropdown === 'languageDropdown'
          && changeLanguageRef.current
          && !changeLanguageRef.current.contains(event.target)
        ) {
          setOpenedDropdown('');
        }
      }
    };

    document.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [openedDropdown]);

  const openDropdown = (dropdown: string) => {
    if (openedDropdown === dropdown) {
      setOpenedDropdown('');
    } else {
      setOpenedDropdown(dropdown);
    }
  };


  return (
    <S.Header>
      <S.Logo onClick={() => navigate('/')}>
        <img src={Logo} alt="" />
        {t("Digital Security")}
      </S.Logo>
      <S.Nav>
        <ul>
          <li
            ref={dropdownRef}
            className="dropdown"
            onClick={() => openDropdown('cyberSecurityDropdown')}
          >
            {t("Cyber Security")}
            <img
              className={`arrow ${openedDropdown === 'cyberSecurityDropdown' ? 'up' : ''
                }`}
              src={Arrow}
              alt=""
            />
            <div
              className={`dropdown-content ${openedDropdown === 'cyberSecurityDropdown' ? 'show' : ''
                }`}
            >
              <span className="dropdown-item" onClick={() => navigate('/protect-yourself')}>
                {t("How Protect Yourself")}
              </span>
              <span className="dropdown-item" onClick={() => navigate('/protect-your-business')}>
                {t("How Protect Your Business")}
              </span>
              <span className="dropdown-item" onClick={() => navigate('/fun-facts')}>
                {t("Fun facts about digital security")}
              </span>
              <span className="dropdown-item" onClick={() => window.open(`${t("quiz")}`, '_blank')}>
                {t("quiz title")}
              </span>
            </div>
          </li>
          <li onClick={() => navigate('/cyber-attacks')}>{t("Cyber Attacks")}</li>
          <li onClick={() => navigate('/about-us')}>{t("about us")}</li>
          <li
            ref={changeLanguageRef}
            className="dropdown"
            onClick={() => openDropdown('languageDropdown')}
          >
            <img src={World} alt="Change language" />
            <img
              className={`arrow ${openedDropdown === 'languageDropdown' ? 'up' : ''
                }`}
              src={Arrow}
              alt=""
            />
            <div
              className={`dropdown-content ${openedDropdown === 'languageDropdown' ? 'show' : ''
                }`}
            >
              <span className="dropdown-item" onClick={() => i18next.changeLanguage('en-US')}>
                <img src={USA} alt="Change language to English" />
              </span>
              <span className="dropdown-item" onClick={() => i18next.changeLanguage('pt-BR')}>
                <img src={Brazil} alt="Change language to Portuguese" />
              </span>
            </div>
          </li>
        </ul>
      </S.Nav>

    </S.Header>
  );
}

