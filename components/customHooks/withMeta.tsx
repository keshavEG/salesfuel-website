import Head from "next/head";
import { ComponentType, ReactElement } from "react";

// Higher-Order Component (HOC) that includes the Head component
export const withMeta = <P extends object>(
  Component: ComponentType<P>,
  title: string,
  description: string
): ComponentType<P> => {
  return (props: P): ReactElement => (
    <div>
      <head>
        <title>{title}</title>
        <meta name="description" content={description} />
        {/* Add other meta tags or custom stylesheets/scripts */}
      </head>
      <Component {...props} />
    </div>
  );
};
