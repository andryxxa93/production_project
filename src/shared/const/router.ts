export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLE = 'article',
    ARTICLE_DETAILS = 'article_details',
    NOT_FOUND = 'not-found',
    ARTICLE_CREATE = 'article_create',
    ARTICLE_EDIT = 'article_edit',
    ADMIN_PANEL = 'admin_panel',
    FORBIDDEN = 'forbidden',
}

export const getRouteMain = () => '/';
export const getRouteAbout = () => '/about';
export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteArticles = () => '/article';
export const getRouteArticleDetails = (id: string) => `/article/${id}`;
export const getRouteArticleEdit = (id: string) => `/article/${id}/edit`;
export const getRouteArticleCreate = () => '/article/new';
export const getRouteForbidden = () => '/forbidden';
export const getRouteAdminPanel = () => '/admin-panel';
