import { languages } from '@primocms/builder'

/** @type {import('@sveltejs/kit').ParamMatcher} */
export function match(param) {
    return languages.some((lang) => lang.key === param)
}