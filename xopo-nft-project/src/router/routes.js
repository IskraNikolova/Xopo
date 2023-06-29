
const routes = [
  {
    path: '/',
    component: () => import('layouts/WelcomeLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/XOPO-Token',
    component: () => import('layouts/HomeLayout.vue'),
    children: [
      { path: '/XOPO', component: () => import('pages/XOPO.vue') }
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
  {
    path: '/1',
    component: () => import('layouts/RoadmapLayout.vue'),
    children: [
      { path: '/1', component: () => import('pages/roadmap/Welcome.vue') }
    ]
  },
  {
    path: '/2',
    component: () => import('layouts/RoadmapLayout.vue'),
    children: [
      { path: '/2', component: () => import('pages/roadmap/Beta.vue') }
    ]
  },
  {
    path: '/3',
    component: () => import('layouts/RoadmapLayout.vue'),
    children: [
      { path: '/3', component: () => import('pages/roadmap/Marketplace.vue') }
    ]
  },
  {
    path: '/4',
    component: () => import('layouts/RoadmapLayout.vue'),
    children: [
      { path: '/4', component: () => import('pages/roadmap/TokensAndDAO.vue') }
    ]
  },
  {
    path: '/5',
    component: () => import('layouts/RoadmapLayout.vue'),
    children: [
      { path: '/5', component: () => import('pages/roadmap/Staking.vue') }
    ]
  },
  {
    path: '/6',
    component: () => import('layouts/RoadmapLayout.vue'),
    children: [
      { path: '/6', component: () => import('pages/roadmap/Airdrop.vue') }
    ]
  },
  {
    path: '/7',
    component: () => import('layouts/RoadmapLayout.vue'),
    children: [
      { path: '/7', component: () => import('pages/roadmap/ArtistPortal.vue') }
    ]
  },
  {
    path: '/8',
    component: () => import('layouts/RoadmapLayout.vue'),
    children: [
      { path: '/8', component: () => import('pages/roadmap/VotingAndRaffle.vue') }
    ]
  },
  {
    path: '/9',
    component: () => import('layouts/RoadmapLayout.vue'),
    children: [
      { path: '/9', component: () => import('pages/roadmap/Integration.vue') }
    ]
  },
  {
    path: '/10',
    component: () => import('layouts/RoadmapLayout.vue'),
    children: [
      { path: '/10', component: () => import('pages/roadmap/Sponsorship.vue') }
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
