import React from 'react';

import AppLogo from '../images/AppLogo.jpg';
import TMDBLogo from '../images/tmdb_logo.svg';

import { Wrapper, Content, AppLogoImg, TMDBLogoImg } from './Header.styles';

const Header = () => (
    <Wrapper>
        <Content>
            <AppLogoImg src={ AppLogo } alt="Logo" />
            <TMDBLogoImg src={ TMDBLogo } alt="Movies Logo" />
        </Content>
    </Wrapper>
);

export default Header;