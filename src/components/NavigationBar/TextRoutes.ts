type TextRoute = {
    route: string;
    label: string;
};

const TEXT_ROUTES: TextRoute[] = [
    { route: '/about', label: 'about' },
    { route: '/staff', label: 'staff' },
    { route: '/projects', label: 'projects' },
    { route: '/docs', label: 'docs' },
    { route: '/community', label: 'community' }
];

export default TEXT_ROUTES;
