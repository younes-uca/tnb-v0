/* eslint-disable @next/next/no-img-element */

import React, {useContext} from 'react';
import AppMenuitem from '/layout/AppMenuitem';
import {LayoutContext} from '/layout/context/layoutcontext';
import {MenuProvider} from '/layout/context/menucontext';
import {AppMenuItem} from '/types/types';

const AppMenu = () => {
    const {layoutConfig} = useContext(LayoutContext);

    const model: AppMenuItem[] = [
        {
            label: 'Home',
            items: [{label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/dashboard'}]
        },


        {
            label: 'Pages',
            icon: 'pi pi-fw pi-briefcase',
            to: '/pages',
            items: [

                {
                    label: 'Auth',
                    icon: 'pi pi-fw pi-user',
                    items: [
                        {
                            label: 'Error',
                            icon: 'pi pi-fw pi-times-circle',
                            to: '/auth/error'
                        },
                        {
                            label: 'Access Denied',
                            icon: 'pi pi-fw pi-lock',
                            to: '/auth/access'
                        }
                    ]
                },
                                {
                    label: 'Taxe Tnb',
                    icon: 'pi pi-fw pi-pencil',
                    items: [
                      {
                      label: 'Liste tax tnb',
                     to: '/module/admin/view/tnb/tax-tnb-admin/list-admin/tax-tnb-list-admin.component'
                      },
                    ]
                    },
                {
                    label: 'Gestion collaborateur',
                    icon: 'pi pi-fw pi-pencil',
                    items: [
                      {
                      label: 'Liste redevable',
                     to: '/module/admin/view/collaborateur/redevable-admin/list-admin/redevable-list-admin.component'
                      },
                      {
                      label: 'Liste terrain',
                     to: '/module/admin/view/collaborateur/terrain-admin/list-admin/terrain-list-admin.component'
                      },
                    ]
                    },
                {
                    label: 'Configuration',
                    icon: 'pi pi-fw pi-pencil',
                    items: [
                      {
                      label: 'Liste taux tax tnb',
                     to: '/module/admin/view/commun/taux-tax-tnb-admin/list-admin/taux-tax-tnb-list-admin.component'
                      },
                      {
                      label: 'Liste categorie terrain',
                     to: '/module/admin/view/commun/categorie-terrain-admin/list-admin/categorie-terrain-list-admin.component'
                      },
                    ]
                    },

                {
                    label: 'Timeline',
                    icon: 'pi pi-fw pi-calendar',
                    to: '/pages/timeline'
                },
                {
                    label: 'Not Found',
                    icon: 'pi pi-fw pi-exclamation-circle',
                    to: '/pages/notfound'
                },
                {
                    label: 'Empty',
                    icon: 'pi pi-fw pi-circle-off',
                    to: '/pages/empty'
                }
            ]
        },

    ];

    return (
        <MenuProvider>
            <ul className="layout-menu">
                {model.map((item, i) => {
                    return !item?.seperator ? <AppMenuitem item={item} root={true} index={i} key={item.label}/> :
                        <li className="menu-separator"></li>;
                })}


            </ul>
        </MenuProvider>
    );
};


export default AppMenu;
