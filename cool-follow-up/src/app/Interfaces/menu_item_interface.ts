export interface MenuItem {
  type: 'link' | 'submenu' | 'divider' | 'title';
  title?: string;
  route?: string;
  children?: MenuItem[];
  isOpen?: boolean;
  icon?: string
}
