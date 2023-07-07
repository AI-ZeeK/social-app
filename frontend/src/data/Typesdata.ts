export interface SubNavType {
  id: string;
  head: string;
  state?: boolean;
  sublinks?: any;
  img?: string;
  desc?: string;
  link?: string;
  chefimg?: string;
  chefname?: string;
  postdate?: string;
}
export interface NavType {
  id: string;
  head: string;
  state: boolean;
  subnav: SubNavType[];
}
export interface ProfOptionsNav {
  id: string;
  icon: string;
  head: string;
  state: boolean;
}
