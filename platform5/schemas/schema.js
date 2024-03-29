// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './components/blockContent'
import menuItem from './components/menuItem'
import socialItem from './components/socialItem'
import activityItem from './components/activityItem'
import faqItem from './components/faqItem'
import contactItem from './components/contactItem'
import aboutUs from './components/aboutUs'

import footerSettings from './footerSettings'
import headerSettings from './headerSettings'
import financialReport from './financialReport'
import homePage from './homePage'
import member from './member'
import project from './project'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    footerSettings,
    headerSettings,
    financialReport,
    homePage,
    member,
    project,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    menuItem,
    socialItem,
    faqItem,
    aboutUs,
    activityItem,
    contactItem,
  ]),
})
