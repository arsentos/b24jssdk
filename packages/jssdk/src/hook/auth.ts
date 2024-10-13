import type { AuthActions, AuthData, B24HookParams } from "../types/auth";

/**
 * Authorization Manager
 */
export class AuthHookManager
	implements AuthActions
{
	#b24HookParams: B24HookParams;
	
	constructor(
		b24HookParams: B24HookParams
	)
	{
		this.#b24HookParams = Object.freeze(
			Object.assign(
				{},
				b24HookParams
			)
		);
	}
	
	/**
	 * @see Http.#prepareParams
	 */
	getAuthData(): false|AuthData
	{
		return {
			access_token: this.#b24HookParams.secret,
			refresh_token: 'hook',
			expires_in: 0,
			domain: this.#b24HookParams.b24Url.replaceAll('https://', '').replaceAll('http://', ''),
			member_id: ''
		};
	}
	
	refreshAuth(): Promise<AuthData>
	{
		return Promise.resolve(this.getAuthData() as AuthData);
	}
	
	/**
	 * Get the account address BX24 ( https://name.bitrix24.com )
	 */
	getTargetOrigin(): string
	{
		return `${this.#b24HookParams.b24Url}`;
	}
	
	/**
	 * Get the account address BX24 with Path ( https://name.bitrix24.com/rest/1/xxxxx )
	 */
	getTargetOriginWithPath(): string
	{
		return `${this.#b24HookParams.b24Url}/rest/${this.#b24HookParams.userId}/${this.#b24HookParams.secret}`;
	}
}