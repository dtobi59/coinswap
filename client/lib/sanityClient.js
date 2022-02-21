
import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'u1k27vqx',
  dataset: 'production',
  apiVersion: 'v1',
  token:
    'skzbLV9ownuQwfcsUjRa04KOnuhtvNFqfyyqe68Aj1iwSlOWtTSZMHazsTEnWa7ypOs9LcDCuXAIy6EnjCdlKNIlTewZSBanpC4Z7fPkHvlGoHz7aBepd7aarQ2mA3t7xqZ1MBOQyX5Y7zCAGbkWYa0zeLdoWVtA5c3AvxnBcnm0OnFUqajX',
  useCdn: false,
})