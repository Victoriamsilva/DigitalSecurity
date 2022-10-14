import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Arrow from '../../Assets/images/arrow.svg';
import World from '../../Assets/images/world.svg';
import Brazil from '../../Assets/images/brasil.svg';
import USA from '../../Assets/images/usa.svg';
import Close from '../../Assets/images/close.svg';
import Logo from '../../Assets/images/logo.svg';
import i18next from 'i18next';
import * as S from "./styles";

export default function Header() {
  const [openedDropdown, setOpenedDropdown] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef: any = useRef();
  const changeLanguageRef: any = useRef();
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    const checkIfClickedOutside = (event: MouseEvent) => {
      if (openedDropdown) {
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

  const changePage = (path: string) => {
    navigate(path);
    setIsOpen(false);
  }

  const changeLanguage = (language: string) => {
    i18next.changeLanguage(language);
    setIsOpen(false);
  }

  const openQuiz = () => {
    window.open(`${t("quiz")}`, '_blank');
    setIsOpen(false);
  }


  return (
    <S.Header>
      <S.Logo onClick={() => navigate('/')}>
        <img src={Logo} alt="" />
        {t("Digital Security")}
      </S.Logo>
      <S.OpenMenuIcon onClick={() => setIsOpen(true)}>
        <span></span>
        <span></span>
        <span></span>
      </S.OpenMenuIcon>
      <S.Nav isOpen={isOpen}>
        <S.CloseMenuIcon onClick={() => setIsOpen(false)}>
          <img src={Close} alt="Close" />
        </S.CloseMenuIcon>
        <ul>
          <li
            ref={dropdownRef}
            className="dropdown"
            onClick={() => openDropdown('cyberSecurityDropdown')}
          >
            <div className="dropdown-title">
              {t("Cyber Security")}
              <img
                className={`arrow ${openedDropdown === 'cyberSecurityDropdown' ? 'up' : ''
                  }`}
                src={Arrow}
                alt=""
              />
            </div>
            <div
              className={`dropdown-content ${openedDropdown === 'cyberSecurityDropdown' ? 'show' : ''
                }`}
            >
              <span className="dropdown-item" onClick={() => changePage('/protect-yourself')}>
                {t("How Protect Yourself")}
              </span>
              <span className="dropdown-item" onClick={() => changePage('/protect-your-business')}>
                {t("How Protect Your Business")}
              </span>
              <span className="dropdown-item" onClick={() => changePage('/fun-facts')}>
                {t("Fun facts about digital security")}
              </span>
              <span className="dropdown-item" onClick={openQuiz}>
                {t("quiz title")}
              </span>
            </div>
          </li>
          <li onClick={() => changePage('/cyber-attacks')}>{t("Cyber Attacks")}</li>
          <li
            ref={changeLanguageRef}
            className="dropdown"
            onClick={() => openDropdown('languageDropdown')}
          >
            <div className="dropdown-title">
              <img src={World} alt="Change language" />
              <img
                className={`arrow ${openedDropdown === 'languageDropdown' ? 'up' : ''
                  }`}
                src={Arrow}
                alt=""
              />
            </div>
            <div
              className={`dropdown-content ${openedDropdown === 'languageDropdown' ? 'show' : ''
                }`}
            >
              <span className="dropdown-item" onClick={() => changeLanguage('en-US')}>
                <img src={USA} alt="Change language to English" />
              </span>
              <span className="dropdown-item" onClick={() => changeLanguage('pt-BR')}>
                <img src={Brazil} alt="Change language to Portuguese" />
              </span>
            </div>
          </li>
        </ul>
      </S.Nav>
    </S.Header>
  );
}

