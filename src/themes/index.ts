export interface DefaultThemeProps {
	bgColor: string;
	primaryColor: string;
	primaryDarkColor: string;
	secondaryColor: string;
	secondaryDarkColor: string;
	primaryTextColor: string;
	secondaryTextColor: string;
	colors: {
		gray: {
			"50": string;
			"100": string;
			"200": string;
			"300": string;
			"400": string;
			"500": string;
			"600": string;
			"700": string;
			"800": string;
			"900": string;
		}
	};
}

export const DefaultTheme: DefaultThemeProps = {
	bgColor: '#181B23',
	primaryColor: '#D53F8C',
	primaryDarkColor: '#702459',
	secondaryColor: '#805AD5',
	secondaryDarkColor: '#322659',
	primaryTextColor: '#fff',
	secondaryTextColor: '',
	colors: {
		gray: {
			"900": "#181B23",
			"800": "#1F2029",
			"700": "#353646",
			"600": "#4B4D63",
			"500": "#616480",
			"400": "#797D9A",
			"300": "#9699B0",
			"200": "#B3B5C6",
			"100": "#D1D2DC",
			"50": "#EEEEF2"
		}
	}
}