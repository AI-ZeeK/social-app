import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { navData } from 'src/data/dummy.data';

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

export class ToggleNav {
  static readonly type = '[Nav] toggle nav';
}
export class CloseNav {
  static readonly type = '[Nav] close nav';
}
export class SetNavState {
  static readonly type = '[NAV] Open Nav';
  constructor(public payload: any) {}
}
export class SetSubNavState {
  static readonly type = '[SUBNAV] Open Nav';
  constructor(public payload: any) {}
}
export class SetLargeNavState {
  static readonly type = '[NAV] Open L Nav';
  constructor(public payload: any) {}
}

interface AppInitial {
  navData: NavType[];
  openNav: boolean;
}

@State<AppInitial>({
  name: 'users',
  defaults: {
    navData: [...navData],
    openNav: false,
  },
})
@Injectable()
export class AppState {
  constructor() {}

  @Selector()
  static getNavData(state: AppInitial): NavType[] {
    return state.navData;
  }
  @Selector()
  static getNavState(state: AppInitial): boolean {
    return state.openNav;
  }

  @Action(ToggleNav)
  closeNav(ctx: StateContext<AppInitial>) {
    let state = ctx.getState();
    ctx.patchState({
      openNav: !state.openNav,
    });
  }
  @Action(CloseNav)
  toggleNav(ctx: StateContext<AppInitial>) {
    let state = ctx.getState();
    ctx.patchState({
      openNav: false,
    });
  }
  @Action(SetNavState)
  setNavState(ctx: StateContext<AppInitial>, { payload }: any) {
    let state = ctx.getState();
    ctx.patchState({
      navData: state.navData.map((nav) => {
        return payload.id === nav.id
          ? {
              ...nav,
              state: !nav.state,
            }
          : {
              ...nav,
              state: false,
              subnav: nav.subnav.map((sub: any) => {
                return { ...sub, state: false };
              }),
            };
      }),
    });
  }
  @Action(SetSubNavState)
  SetSubNavState(ctx: StateContext<AppInitial>, { payload }: any) {
    let state = ctx.getState();

    ctx.patchState({
      navData: state.navData.map((nav) => {
        return payload.navdata.id === nav.id
          ? {
              ...nav,
              subnav: nav.subnav.map((sub: any) => {
                return payload.subNav.id === sub.id
                  ? { ...sub, state: !sub.state }
                  : { ...sub, state: false };
              }),
            }
          : { ...nav };
      }),
    });
  }
  @Action(SetLargeNavState)
  setLargeNavState(ctx: StateContext<AppInitial>, { payload }: any) {
    const state = ctx.getState();
    ctx.patchState({
      navData: state.navData.map((nav) => {
        return payload.id === nav.id
          ? {
              ...nav,
              state: true,
            }
          : { ...nav, state: false };
      }),
    });
  }
}
