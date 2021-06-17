import { DefaultThemeProps } from './themes';

declare module 'styled-components' {
	export interface DefaultTheme extends DefaultThemeProps { }
}
