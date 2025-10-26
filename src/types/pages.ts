import type { ReactNode } from 'react';

// Type definition for a page component in the app
export interface PageProps {
    children?: ReactNode; 
}


//  Type for Dashboard Page Component if it doesn't take any props
export type DashboardPage = React.FC<PageProps>; // React Functional Componenet with props of type PageProps. Extends to React.FunctionComponent
export type LoginPage = React.FC<PageProps>;
export type SignupPage = React.FC<PageProps>;
export type ProfilePage = React.FC<PageProps>;
export type NotFoundPage = React.FC<PageProps>;


/**
 * Using React.FC is optional, but it provides type checking and autocomplete for static properties like propTypes, contextTypes, and defaultProps.
 * It also implicitly defines the return type of the component as ReactElement, which can be helpful for ensuring that the component returns valid JSX.
 * However, some developers prefer not to use React.FC due to certain limitations, such as the implicit children prop and potential issues with generics.
 * 
 * Using React.FC
 * type Props = { title: string }

const Header: React.FC<Props> = ({ title }) => {
  return <h1>{title}</h1>
}

Without React.FC
type Props = { title: string }

const Header = ({ title }: Props): JSX.Element => {
  return <h1>{title}</h1>
}
 */