// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Dashboards',
      icon: 'bx:home-circle',
      children: [
        {
          title: 'Analytics',
          path: '/dashboards/analytics'
        },
        {
          title: 'CRM',
          path: '/dashboards/crm'
        },
        {
          title: 'eCommerce',
          path: '/dashboards/ecommerce'
        }
      ]
    },

    {
      title: 'Customer Management',
      icon: 'bx:user',
      children: [
        {
          title: 'List',
          path: '/apps/customer/list'
        },
        {
          title: 'View',
          children: [
            {
              title: 'Account',
              path: '/apps/customer/view/account'
            },
            {
              title: 'Security',
              path: '/apps/customer/view/security'
            },
            {
              title: 'Billing & Plans',
              path: '/apps/customer/view/billing-plan'
            },
            {
              title: 'Notifications',
              path: '/apps/customer/view/notification'
            },
            {
              title: 'Connection',
              path: '/apps/customer/view/connection'
            }
          ]
        }
      ]
    }
  ]
}

export default navigation
