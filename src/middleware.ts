import { defineMiddleware } from 'astro:middleware'

export const onRequest = defineMiddleware(async (context, next) => {
  const { url, request, redirect } = context

  // Solo aplicar en la raíz
  if (url.pathname === '/') {
    const acceptLanguage = request.headers.get('accept-language')

    if (acceptLanguage) {
      // Extraer los idiomas preferidos del header
      const languages = acceptLanguage
        .split(',')
        .map((lang) => lang.split(';')[0].trim().toLowerCase())

      // Buscar si algún idioma es español
      const hasSpanish = languages.some(
        (lang) =>
          lang.startsWith('es') ||
          lang === 'es-es' ||
          lang === 'es-mx' ||
          lang === 'es-ar' ||
          lang === 'es-co' ||
          lang === 'es-cl' ||
          lang === 'es-pe' ||
          lang === 'es-ve',
      )

      if (hasSpanish) {
        return redirect('/es/', 302)
      }
    }
  }

  return next()
})
