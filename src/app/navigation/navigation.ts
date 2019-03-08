import { FuseNavigation, FuseNavigationItem } from '@fuse/types';

const polizasIngreso: FuseNavigationItem[] = [
  {
    id: 'ingreso',
    title: 'Ingreso',
    type: 'collapsable',
    icon: 'call_received',
    children: [
      {
        id: 'cobranzaCredito',
        title: 'Cobranza CRE',
        type: 'item',
        icon: 'receipt',
        url: 'polizas/cobranza/cre'
      }
    ]
  }
];

const polizasEgresos: FuseNavigationItem[] = [
  {
    id: 'egreso',
    title: 'Egreso',
    type: 'collapsable',
    icon: 'call_made',
    children: []
  }
];

const polizasDiario: FuseNavigationItem[] = [
  {
    id: 'ingreso',
    title: 'Ingreso',
    type: 'collapsable',
    icon: 'view_stream',
    children: []
  }
];

const polizasNavigation: FuseNavigationItem[] = [
  {
    id: 'polizas',
    title: 'Polizas',
    icon: 'receipt',
    type: 'collapsable',
    children: [...polizasIngreso, ...polizasEgresos, ...polizasDiario]
  }
];

export const navigation: FuseNavigation[] = [
  {
    id: 'contabilidad',
    title: 'Contabilidad',
    type: 'group',
    icon: 'apps',
    children: [
      {
        id: 'catalogos',
        title: 'Catalogos',
        type: 'collapsable',
        icon: 'web',
        children: [
          {
            id: 'cuentas',
            title: 'Cuentas contables',
            type: 'item',
            url: '/cuentas',
            icon: 'storage',
            exactMatch: true
          }
        ]
      },
      ...polizasNavigation
    ]
  },
  {
    id: 'sat',
    title: 'SAT',
    type: 'group'
  },
  {
    id: 'activo-fijo',
    title: 'Activo Fijo',
    type: 'group',
    icon: 'apps',
    children: []
  },
  {
    id: 'analytics',
    title: 'Analytics',
    type: 'group',
    children: [
      {
        id: 'dashboards',
        title: 'Tableros',
        type: 'collapsable',
        icon: 'dashboard',
        children: []
      },
      {
        id: 'reportes',
        title: 'Reportes',
        type: 'collapsable',
        icon: 'dashboard',
        children: []
      }
    ]
  }
];
