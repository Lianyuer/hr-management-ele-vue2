import Layout from '@/layout'

export default {
  path: '/attendance',
  component: Layout,
  redirect: '/attendance',
  children: [{
    path: '/attendance',
    name: 'approval',
    component: () => import('@/views/attendance/index'),
    meta: { title: '考勤', icon: 'excel' }
  }]
}