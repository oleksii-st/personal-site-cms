/* tslint:disable */

/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    media: Media;
    pages: Page;
    'reusable-content': ReusableContent;
    users: User;
    redirects: Redirect;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  globals: {
    header: Header;
    footer: Footer;
    notFound: NotFound;
    settings: Settings;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: string;
  alt: string;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface Page {
  id: string;
  title: string;
  publishedAt?: string | null;
  layout: (
    | Hero
    | Features
    | Optimization
    | Socials
    | Contact
    | Experience
    | Richtext
    | ReusableContentBlock
  )[];
  disableIndex?: boolean | null;
  slug?: string | null;
  meta?: {
    title?: string | null;
    description?: string | null;
    image?: string | Media | null;
  };
  parent?: (string | null) | Page;
  breadcrumbs?:
    | {
        doc?: (string | null) | Page;
        url?: string | null;
        label?: string | null;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "Hero".
 */
export interface Hero {
  image: string | Media;
  heading: string;
  subheading?: string | null;
  hideBlock?: boolean | null;
  paddingTop?: number | null;
  paddingBottom?: number | null;
  breakpoints?:
    | {
        breakpoint?: number | null;
        paddingTop?: number | null;
        paddingBottom?: number | null;
        id?: string | null;
      }[]
    | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'hero';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "Features".
 */
export interface Features {
  heading?: string | null;
  features?:
    | {
        icon: string | Media;
        id?: string | null;
      }[]
    | null;
  hideBlock?: boolean | null;
  paddingTop?: number | null;
  paddingBottom?: number | null;
  breakpoints?:
    | {
        breakpoint?: number | null;
        paddingTop?: number | null;
        paddingBottom?: number | null;
        id?: string | null;
      }[]
    | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'features';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "Optimization".
 */
export interface Optimization {
  heading?: string | null;
  subheading?: string | null;
  link?: Link;
  image: string | Media;
  imageDesktop: string | Media;
  description?: string | null;
  hideBlock?: boolean | null;
  paddingTop?: number | null;
  paddingBottom?: number | null;
  breakpoints?:
    | {
        breakpoint?: number | null;
        paddingTop?: number | null;
        paddingBottom?: number | null;
        id?: string | null;
      }[]
    | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'optimization';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "Link".
 */
export interface Link {
  type?: ('reference' | 'custom') | null;
  newTab?: boolean | null;
  disableIndex?: boolean | null;
  reference?: {
    relationTo: 'pages';
    value: string | Page;
  } | null;
  url?: string | null;
  label?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "Socials".
 */
export interface Socials {
  heading?: string | null;
  socials?:
    | {
        link?: Link;
        icon: string | Media;
        id?: string | null;
      }[]
    | null;
  hideBlock?: boolean | null;
  paddingTop?: number | null;
  paddingBottom?: number | null;
  breakpoints?:
    | {
        breakpoint?: number | null;
        paddingTop?: number | null;
        paddingBottom?: number | null;
        id?: string | null;
      }[]
    | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'socials';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "Contact".
 */
export interface Contact {
  heading?: string | null;
  nameLabel: string;
  emailLabel: string;
  topicLabel: string;
  messageLabel: string;
  hideBlock?: boolean | null;
  paddingTop?: number | null;
  paddingBottom?: number | null;
  breakpoints?:
    | {
        breakpoint?: number | null;
        paddingTop?: number | null;
        paddingBottom?: number | null;
        id?: string | null;
      }[]
    | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'contact';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "Experience".
 */
export interface Experience {
  heading?: string | null;
  jobs?:
    | {
        link?: Link;
        icon: string | Media;
        id?: string | null;
      }[]
    | null;
  hideBlock?: boolean | null;
  paddingTop?: number | null;
  paddingBottom?: number | null;
  breakpoints?:
    | {
        breakpoint?: number | null;
        paddingTop?: number | null;
        paddingBottom?: number | null;
        id?: string | null;
      }[]
    | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'experience';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "Richtext".
 */
export interface Richtext {
  content: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  };
  hideBlock?: boolean | null;
  paddingTop?: number | null;
  paddingBottom?: number | null;
  breakpoints?:
    | {
        breakpoint?: number | null;
        paddingTop?: number | null;
        paddingBottom?: number | null;
        id?: string | null;
      }[]
    | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'richText';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ReusableContentBlock".
 */
export interface ReusableContentBlock {
  reusableContent?: (string | null) | ReusableContent;
  id?: string | null;
  blockName?: string | null;
  blockType: 'reusableContentBlock';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "reusable-content".
 */
export interface ReusableContent {
  id: string;
  title: string;
  layout: (Hero | Features | Optimization | Socials | Contact | Experience | Richtext)[];
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  name?: string | null;
  roles?: ('admin' | 'user')[] | null;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "redirects".
 */
export interface Redirect {
  id: string;
  from: string;
  to?: {
    type?: ('reference' | 'custom') | null;
    reference?: {
      relationTo: 'pages';
      value: string | Page;
    } | null;
    url?: string | null;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "header".
 */
export interface Header {
  id: string;
  logo: string;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "footer".
 */
export interface Footer {
  id: string;
  columns?:
    | {
        navItems?:
          | {
              link?: Link;
              id?: string | null;
            }[]
          | null;
        id?: string | null;
      }[]
    | null;
  copyright?: string | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "notFound".
 */
export interface NotFound {
  id: string;
  heading?: string | null;
  description?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "settings".
 */
export interface Settings {
  id: string;
  container: number;
  horizontalPaddings: number;
  horizontalPaddingsDesktop: number;
  backgroundColor: string;
  textColor: string;
  headingsColor: string;
  updatedAt?: string | null;
  createdAt?: string | null;
}
