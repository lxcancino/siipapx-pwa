import { FuseNavigation, FuseNavigationItem } from '@fuse/types';

const polizasIngreso: FuseNavigationItem[] = [
    {
        id: 'ingreso',
        title: 'Ingreso',
        type: 'collapsable',
        icon: 'call_received',
        children: []
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
    }
];
