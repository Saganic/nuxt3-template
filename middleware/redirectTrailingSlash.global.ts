export default defineNuxtRouteMiddleware((to) => {
// https://github.com/nuxt/nuxt/issues/15462#issuecomment-1407374859
  if (to.path !== '/' && to.path.endsWith('/')) {
    const { path, query, hash } = to
    const nextPath = path.replace(/\/+$/, '') || '/'
    const nextRoute = { path: nextPath, query, hash }
    return navigateTo(nextRoute, { redirectCode: 301 })
  }
})
