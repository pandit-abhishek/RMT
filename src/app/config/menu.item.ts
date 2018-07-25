export class MenuItem {
    public menus = {
        'RM-ADMIN' :[
            {
                'name':'Home',
                'path':'dashboard',
                'icon': 'fa fa-home',
            },
            {
                'name':'Account',
                'path':'',
                'icon': 'fa fa-user',
            },
            {
                'name':'Users',
                'path':'',
                'icon': 'fa fa-users',
                'hidden' : false,
                'children' : [
                    {
                        'name' : 'Add',
                        'path' : 'user/add',
                    },
                    {
                        'name' : 'List',
                        'path' : 'user/list'
                    }
                ]
            },
            {
                'name':'Applications',
                'path':'',
                'icon': 'fa fa-cogs',
                'children' : [
                    {
                        'name' : 'Add',
                        'path' : 'application/add'
                    },
                    {
                        'name' : 'List',
                        'path' : 'application/list',
                    }
                ]
            },
            {
                'name':'Instances',
                'path':'',
                'icon': 'fa fa-server',
                'children' : [
                    {
                        'name' : 'Add',
                        'path' : 'instance/add'
                    },
                    {
                        'name' : 'List',
                        'path' : 'instance/list',
                    }
                ]
            },
            {
                'name':'SVN',
                'path':'',
                'icon': 'fa fa-key',
                'children' : [
                    {
                        'name' : 'Add',
                        'path' : 'svn/create'
                    },
                    {
                        'name' : 'List',
                        'path' : 'svn/list',
                    }
                ]
            },
            {
                'name':'Release',
                'path':'',
                'icon': 'fa fa-truck',
                'children' : [
                    {
                        'name' : 'Add',
                        'path' : 'release/create'
                    },
                    {
                        'name' : 'View',
                        'path' : 'release/list',
                    }
                ]
            }
        ],
        'RM-NORMAL' : [
            {
                'name':'Account',
                'path':'',
                'icon': 'fa fa-home',
            },
            {
                'name':'Users',
                'path':'',
                'icon': 'fa fa-home',
                'hidden' : false,
                'children' : [
                    {
                        'name' : 'Add',
                        'path' : 'user/add',
                    },
                    {
                        'name' : 'List',
                        'path' : 'user'
                    }
                ]
            },
            {
                'name':'Applications',
                'path':'',
                'icon': 'fa fa-home',
                'children' : [
                    {
                        'name' : 'List',
                        'path' : 'application',
                    },
                    {
                        'name' : 'Add',
                        'path' : 'application/add'
                    }
                ]
            },
            {
                'name':'Instances',
                'path':'',
                'icon': 'fa fa-home',
                'children' : [
                    {
                        'name' : 'List',
                        'path' : 'instances',
                    },
                    {
                        'name' : 'Add',
                        'path' : 'instances/add'
                    }
                ]
            },
            {
                'name':'SVN',
                'path':'',
                'icon': 'fa fa-home',
                'children' : [
                    {
                        'name' : 'List',
                        'path' : 'svn',
                    },
                    {
                        'name' : 'Create',
                        'path' : 'svn/create'
                    }
                ]
            },
            {
                'name':'Release',
                'path':'',
                'icon': 'fa fa-home',
                'children' : [
                    {
                        'name' : 'View',
                        'path' : 'release',
                    },
                    {
                        'name' : 'Create',
                        'path' : 'release/create'
                    }
                ]
            }
        ],
        'DEV-MANAGER' : [
            {
                'name':'Account',
                'path':'',
                'icon': 'fa fa-home',
                'children' :  {

                }
            },
            {
                'name':'Users',
                'path':'',
                'icon': 'fa fa-home',
                'hidden' : false,
                'children' : {
                    'Add' : 'user/add',
                    'List' : 'user'
                }
            },
            {
                'name':'Applications',
                'path':'',
                'icon': 'fa fa-home',
                'children' : {
                    'List' : 'application',
                    'Add'  : 'application/add',
                }
            },
            {
                'name':'Instances',
                'path':'',
                'icon': 'fa fa-home',
                'children': {
                    'List' : 'instances',
                    'Add' : 'instances/add'
                }
            },
            {
                'name':'SVN',
                'path':'',
                'icon': 'fa fa-home',
                'children': {
                    'List' : 'svn',
                    'Create' : 'svn/create'
                }
            },
            {
                'name':'Release',
                'path':'',
                'icon': 'fa fa-home',
                'children': {
                    'View' : 'release',
                    'Create' : 'release/create'
                }
            }
        ],
        'DEV-NORMAL' : [
            {
                'name':'Account',
                'path':'',
                'icon': 'fa fa-home',
                'children' :  {

                }
            },
            {
                'name':'Users',
                'path':'',
                'icon': 'fa fa-home',
                'hidden' : false,
                'children' : {
                    'Add' : 'user/add',
                    'List' : 'user'
                }
            },
            {
                'name':'Applications',
                'path':'',
                'icon': 'fa fa-home',
                'children' : {
                    'List' : 'application',
                    'Add'  : 'application/add',
                }
            },
            {
                'name':'Instances',
                'path':'',
                'icon': 'fa fa-home',
                'children': {
                    'List' : 'instances',
                    'Add' : 'instances/add'
                }
            },
            {
                'name':'SVN',
                'path':'',
                'icon': 'fa fa-home',
                'children': {
                    'List' : 'svn',
                    'Create' : 'svn/create'
                }
            },
            {
                'name':'Release',
                'path':'',
                'icon': 'fa fa-home',
                'children': {
                    'View' : 'release',
                    'Create' : 'release/create'
                }
            }
        ],
        'BUSINESS-ADMIN':[
            {
                'name':'Account',
                'path':'',
                'icon': 'fa fa-home',
                'children' :  {

                }
            },
            {
                'name':'Users',
                'path':'',
                'icon': 'fa fa-home',
                'hidden' : false,
                'children' : {
                    'Add' : 'user/add',
                    'List' : 'user'
                }
            },
            {
                'name':'Applications',
                'path':'',
                'icon': 'fa fa-home',
                'children' : {
                    'List' : 'application',
                    'Add'  : 'application/add',
                }
            },
            {
                'name':'Instances',
                'path':'',
                'icon': 'fa fa-home',
                'children': {
                    'List' : 'instances',
                    'Add' : 'instances/add'
                }
            },
            {
                'name':'SVN',
                'path':'',
                'icon': 'fa fa-home',
                'children': {
                    'List' : 'svn',
                    'Create' : 'svn/create'
                }
            },
            {
                'name':'Release',
                'path':'',
                'icon': 'fa fa-home',
                'children': {
                    'View' : 'release',
                    'Create' : 'release/create'
                }
            }
        ],
        'BUSINESS-NORMAL':[
            {
                'name':'Account',
                'path':'',
                'icon': 'fa fa-home',
                'children' :  {

                }
            },
            {
                'name':'Users',
                'path':'',
                'icon': 'fa fa-home',
                'hidden' : false,
                'children' : {
                    'Add' : 'user/add',
                    'List' : 'user'
                }
            },
            {
                'name':'Applications',
                'path':'',
                'icon': 'fa fa-home',
                'children' : {
                    'List' : 'application',
                    'Add'  : 'application/add',
                }
            },
            {
                'name':'Instances',
                'path':'',
                'icon': 'fa fa-home',
                'children': {
                    'List' : 'instances',
                    'Add' : 'instances/add'
                }
            },
            {
                'name':'SVN',
                'path':'',
                'icon': 'fa fa-home',
                'children': {
                    'List' : 'svn',
                    'Create' : 'svn/create'
                }
            },
            {
                'name':'Release',
                'path':'',
                'icon': 'fa fa-home',
                'children': {
                    'View' : 'release',
                    'Create' : 'release/create'
                }
            }
        ]
    }; 
}