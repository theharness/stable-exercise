import gql from 'graphql-tag';

const query = gql`query listMail {
    listMail {
        id
        businessRecipient
        forward {
            status
        }
        from
        imageUrl
        individualRecipient
        scan {
            status
        }
        shred {
            status
        }
        timestamp
    }
}`

export default query