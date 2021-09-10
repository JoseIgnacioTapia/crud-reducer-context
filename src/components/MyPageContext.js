import FooterContext from './FooterContext';
import HeaderContext from './HeaderContext';
import MainContext from './MainContext';
import ThemeProvider from '../context/ThemeContext';
import LanguageProvider from '../context/LangaugeContext';
import AuthProvider from '../context/AuthContext';

const MyPageContext = () => {
  return (
    <div className="my-page">
      <AuthProvider>
        <ThemeProvider>
          <LanguageProvider>
            <HeaderContext />
            <MainContext />
            <FooterContext />
          </LanguageProvider>
        </ThemeProvider>
      </AuthProvider>
    </div>
  );
};

export default MyPageContext;
