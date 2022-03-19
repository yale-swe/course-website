type TextRoute = {
    route: string;
    label: string;
};

const TEXT_ROUTES: TextRoute[] = [
    { route: '/about', label: 'about us' },
    { route: '/staff', label: 'staff' },
    { route: '/projects', label: 'projects' },
    { route: '/docs', label: 'docs' },
    { route: '/contact', label: 'contact' }
];

export default TEXT_ROUTES;
