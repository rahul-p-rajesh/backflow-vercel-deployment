// ** Type import
import { HorizontalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): HorizontalNavItemsType => {
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

    // {
    //   sectionTitle: 'Apps & Pages'
    // },
    // {
    //   title: 'Email',
    //   icon: 'bx:envelope',
    //   path: '/apps/email'
    // },
    // {
    //   title: 'Chat',
    //   icon: 'bx:message',
    //   path: '/apps/chat'
    // },
    // {
    //   title: 'Calendar',
    //   icon: 'bx:calendar',
    //   path: '/apps/calendar'
    // },
    // {
    //   title: 'Invoice',
    //   icon: 'bx:food-menu',
    //   children: [
    //     {
    //       title: 'List',
    //       path: '/apps/invoice/list'
    //     },
    //     {
    //       title: 'Preview',
    //       path: '/apps/invoice/preview'
    //     },
    //     {
    //       title: 'Edit',
    //       path: '/apps/invoice/edit'
    //     },
    //     {
    //       title: 'Add',
    //       path: '/apps/invoice/add'
    //     }
    //   ]
    // },
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
