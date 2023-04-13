import url from './url';

const { root, login, notFound, app } = url;

type MenuItemType = {
  path: string; // 路径
  title: string; // 菜单名称
  icon?: string; // 菜单未选中icon
  iconSelected?: string; // 菜单已选中icon
  children?: MenuItemType[]; // 菜单子级，一样的结构
};

type MenuListType = {
  [key: string]: MenuItemType;
};

const menuList: MenuListType = {
  root: {
    path: root,
    title: '/',
  },
  login: {
    path: login.path,
    title: login.title,
  },
  notFound: {
    path: notFound.path,
    title: notFound.title,
  },
  app: {
    path: app.path,
    title: app.title,
  },
};

export default menuList;
