export const NavbarItems = [
    {
        id: 0,
        label: 'Home',
        route: '',
    },
    {
        id: 1,
        label: 'About',
        route: 'about',
    },
    {
        id: 2,
        label: 'Music',
        route: 'music',
    }
]

export const createNavbarRoute = (routeId) => {
    
    let navbarRoute = ""
        
        for (const i of NavbarItems) {
            if (i['id'] === routeId) {
               navbarRoute += String(i['route'])
            }
        }

    return(
        navbarRoute
    )
}