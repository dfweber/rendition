declare module 'ajv-keywords' {
	import ajv = require('ajv');
	function decorate(ajv: ajv.Ajv, words?: string[]): void;

	export = decorate;
}
