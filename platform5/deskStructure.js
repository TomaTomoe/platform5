import S from "@sanity/desk-tool/structure-builder";

export default () => 
    S.list()
        .title('Content')
        .items(
            [
                S.listItem()
                    .title('Home Page')
                    .child(
                        S.document()
                            .schemaType('homePage')
                            .documentId('homePage')
                    ),
                S.listItem()
                .title('Header Settings')
                .child(
                    S.document()
                        .schemaType('headerSettings')
                        .documentId('headerSettings')
                ),
                S.listItem()
                .title('Footer Settings')
                .child(
                    S.document()
                        .schemaType('footerSettings')
                        .documentId('footerSettings')
                ),   
                S.divider(),
                ...S.documentTypeListItems().filter(item => !['homePage', 'headerSettings', 'footerSettings'].includes(item.getId()))
            ]
        )
