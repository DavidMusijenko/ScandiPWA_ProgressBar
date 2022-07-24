# Custom Progress Bar for ScandiPWA Magento theme

![grab-landing-page](https://github.com/DavidMusijenko/ScandiPWA_ProgressBar2/blob/main/demo.gif)

# Installation

Before you start, please ensure that you have Linux OS, node 14, npm 6, and yarn.
If you don’t have yarn, you can install it with the following command:

npm -g install yarn
First please follow these steps in order to install and set up your ScandiPWA project.

## Install a project
yarn create scandipwa-app <FOLDER>
## Enter to the project directory
cd "<FOLDER>"
## Downgrade ScandiPWA
yarn add @scandipwa/scandipwa@4.5.1
Then open composer.json file and replace the list of dependencies in the require section with the following values:

"magento/framework": "*",
"scandipwa/service-worker": "1.0.1",
"scandipwa/installer": "4.0",
"scandipwa/menu-organizer": "2.1.1",
"scandipwa/persisted-query": "3.0.1",
"scandipwa/slider-graphql": "2.1.0",
"scandipwa/cms-graphql": "1.4.2",
"scandipwa/catalog-graphql": "3.1.24",
"scandipwa/route717": "2",
"scandipwa/performance": "1.4.6",
"scandipwa/customer-graph-ql": "3.1.2",
"scandipwa/quote-graphql": "2.19.8",
"scandipwa/wishlist-graphql": "2.0.7",
"scandipwa/urlrewrite-graphql": "1.3.7",
"scandipwa/store-graphql": "1.2.3",
"scandipwa/customization": "1.5.3",
"scandipwa/cache": "1.1.3",
"scandipwa/locale": "2",
"scandipwa/contact-graphql": "1.0.0",
"scandipwa/klarna-graphql": "1.1.2",
"scandipwa/compare-graphql": "1.0.8",
"scandipwa/customer-downloadable-graphql": "1.0.2",
"scandipwa/directory-graphql": "1.0.1",
"scandipwa/catalog-customer-graphql": "1.0.0"

    
Next open package.json, find the proxy field, and replace it with the following value:

https://demo100-ors-1588667385-swpwa451-zco.scandipwa.cloud/

Now you can start the project:

yarn start
