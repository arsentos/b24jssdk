import { defineConfig, type DefaultTheme } from 'vitepress'
import { configParams } from './params'

export const en = defineConfig({
	lang: 'en-US',
	description: 'Bitrix24 REST API JS SDK',
	
	themeConfig: {
		nav: nav(),
		
		sidebar: {
			'/guide/': { base: '/guide/', items: sidebarGuide() },
			'/reference/': { base: '/reference/', items: sidebarReference() }
		},
		
		editLink: {
			pattern: 'https://github.com/bitrix24/b24jssdk/edit/main/docs/:path',
			text: 'Edit this page on GitHub'
		},
		
		footer: {
			message: 'Released under the MIT License.',
			copyright: 'Copyright © 2024-present Bitrix24'
		},
	}
})


function nav(): DefaultTheme.NavItem[] {
	return [
		{text: 'Quickstart', link: '/guide/getting-started'},
		{text: 'Reference', link: '/reference/core-abstract-b24'},
		{
			text: configParams.version,
			items: [
				{
					text: 'Changelog',
					link: `${configParams.github}/blob/main/CHANGELOG.md`
				},
				... configParams.relative
			]
		}
	]
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
	return [
		{
			text: 'Guide',
			collapsed: false,
			items: [
				{ text: 'Getting Started', link: 'getting-started' },
				{ text: 'Vue', link: 'vue' }
			]
		},
	]
}

function sidebarReference(): DefaultTheme.SidebarItem[] {
	return [
		{
			text: 'Core',
			collapsed: false,
			items: [
				{ text: 'AbstractB24', link: 'core-abstract-b24' },
				{ text: 'Http', link: 'core-http' },
				{ text: 'Restriction Manager', link: 'core-restriction-manager' },
				{ text: 'Unique ID Generator', link: 'core-request-id-generator' },
				{ text: 'Result', link: 'core-result' },
				{ text: 'AjaxResult', link: 'core-ajax-result' },
				{ text: 'Language List', link: 'core-lang-list' },
				{ text: 'Logger', link: 'logger-browser' },
			]
		},
		{
			text: 'Hook',
			collapsed: false,
			items: [
				{ text: '(*) Hook', link: 'hook-index' },
			]
		},
		{
			text: 'Frame',
			collapsed: false,
			items: [
				{ text: '(~) Frame', link: 'frame-index' },
			]
		},
		{
			text: 'Push and Pull',
			collapsed: false,
			items: [
				{ text: 'pull client', link: 'pull-client' },
			]
		},
		{
			text: 'Tools',
			collapsed: false,
			items: [
				{ text: 'Type', link: 'tools-type' },
				{ text: 'Text', link: 'tools-text' },
				{ text: 'Browser', link: 'tools-browser' },
				{ text: 'useFormatter', link: 'tools-use-formatters' },
				{ text: 'DateTime', link: 'tools-date-time' },
			]
		},
		{
			text: 'Helper Methods',
			collapsed: false,
			items: [
				{ text: 'useB24Helper', link: 'helper-use-b24-helper' },
				{ text: 'B24HelperManager', link: 'helper-helper-manager' },
				{ text: 'AbstractHelper', link: 'helper-abstract-helper' },
				{ text: 'AppManager', link: 'helper-app-manager' },
				{ text: 'LicenseManager', link: 'helper-license-manager' },
				{ text: 'PaymentManager', link: 'helper-payment-manager' },
				{ text: 'ProfileManager', link: 'helper-profile-manager' },
				{ text: 'CurrencyManager', link: 'helper-currency-manager' },
				{ text: 'OptionsManager', link: 'helper-options-manager' },
			]
		},
		{
			text: 'Data Types',
			collapsed: false,
			items: [
				{ text: 'TypeB24', link: 'types-type-b24' },
				{ text: 'TypeHttp', link: 'types-type-http' },
				{ text: 'TypeRestrictionManagerParams', link: 'types-type-restriction-manager-params' },
				{ text: 'IRequestIdGenerator', link: 'types-interface-irequest-id-generator' },
				{ text: 'IResult', link: 'types-type-iresult' },
				{ text: 'Common', link: 'types-common' },
				{ text: 'CRM Entity Type', link: 'types-crm-entity' },
			]
		}
	]
}