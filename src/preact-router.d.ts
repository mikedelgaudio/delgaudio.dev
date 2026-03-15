import * as preact from 'preact';

declare module 'preact-router' {
  export function Link(
    props: preact.JSX.AnchorHTMLAttributes<HTMLAnchorElement>,
  ): preact.VNode;
}

declare module 'preact-router/match' {
  export interface LinkProps
    extends preact.JSX.AnchorHTMLAttributes<HTMLAnchorElement> {
    activeClassName?: string;
    children?: preact.ComponentChildren;
  }

  export function Link(props: LinkProps): preact.VNode;
}
