
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/launchpad',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/launchpad', component: () => import('pages/Launchpad.vue') }
    ]
  },
  {
    path: '/about',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/about', component: () => import('pages/About.vue') }
    ]
  },
  {
    path: '/artists',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/artists', component: () => import('pages/Artists.vue') }
    ]
  },
  {
    path: '/discover',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/discover', component: () => import('pages/Discover.vue') }
    ]
  },
  {
    path: '/dashboard',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/dashboard/:address', component: () => import('pages/Dashboard.vue') }
    ]
  },
  {
    path: '/requestNFTs',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/requestNFTs', component: () => import('pages/RequestsNFTs.vue') }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
